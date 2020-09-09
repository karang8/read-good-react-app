/* vim: set expandtab sw=4 ts=4 sts=4: */
/**
 * @fileoverview    functions used on the database structure page
 * @name            Database Structure
 *
 * @requires    jQuery
 * @requires    jQueryUI
 * @required    js/functions.js
 */

/**
 * AJAX scripts for db_structure.php
 *
 * Actions ajaxified here:
 * Drop Database
 * Truncate Table
 * Drop Table
 *
 */

/**
 * Unbind all event handlers before tearing down a page
 */
AJAX.registerTeardown('db_structure.js', () => {
  $(document).off('click', 'a.truncate_table_anchor.ajax');
  $(document).off('click', 'a.drop_table_anchor.ajax');
  $(document).off('click', '#real_end_input');
  $(document).off('click', 'a.favorite_table_anchor.ajax');
  $(document).off('click', '#printView');
  $('a.real_row_count').off('click');
  $('a.row_count_sum').off('click');
  $('select[name=submit_mult]').off('change');
});

/**
 * Adjust number of rows and total size in the summary
 * when truncating, creating, dropping or inserting into a table
 */
function PMA_adjustTotals() {
  const byteUnits = [
    PMA_messages.strB,
    PMA_messages.strKiB,
    PMA_messages.strMiB,
    PMA_messages.strGiB,
    PMA_messages.strTiB,
    PMA_messages.strPiB,
    PMA_messages.strEiB,
  ];
    /**
     * @var $allTr jQuery object that references all the rows in the list of tables
     */
  const $allTr = $('#tablesForm').find('table.data tbody:first tr');
  // New summary values for the table
  const tableSum = $allTr.size();
  let rowsSum = 0;
  let sizeSum = 0;
  let overheadSum = 0;
  let rowSumApproximated = false;

  $allTr.each(function () {
    const $this = $(this);
    let i;
    let tmpVal;
    // Get the number of rows for this SQL table
    let strRows = $this.find('.tbl_rows').text();
    // If the value is approximated
    if (strRows.indexOf('~') === 0) {
      rowSumApproximated = true;
      // The approximated value contains a preceding ~ (Eg 100 --> ~100)
      strRows = strRows.substring(1, strRows.length);
    }
    strRows = strRows.replace(/[,.]/g, '');
    const intRow = parseInt(strRows, 10);
    if (!isNaN(intRow)) {
      rowsSum += intRow;
    }
    // Extract the size and overhead
    let valSize = 0;
    let valOverhead = 0;
    const strSize = $.trim($this.find('.tbl_size span:not(.unit)').text());
    const strSizeUnit = $.trim($this.find('.tbl_size span.unit').text());
    const strOverhead = $.trim($this.find('.tbl_overhead span:not(.unit)').text());
    const strOverheadUnit = $.trim($this.find('.tbl_overhead span.unit').text());
    // Given a value and a unit, such as 100 and KiB, for the table size
    // and overhead calculate their numeric values in bytes, such as 102400
    for (i = 0; i < byteUnits.length; i++) {
      if (strSizeUnit === byteUnits[i]) {
        tmpVal = parseFloat(strSize);
        valSize = tmpVal * Math.pow(1024, i);
        break;
      }
    }
    for (i = 0; i < byteUnits.length; i++) {
      if (strOverheadUnit === byteUnits[i]) {
        tmpVal = parseFloat(strOverhead);
        valOverhead = tmpVal * Math.pow(1024, i);
        break;
      }
    }
    sizeSum += valSize;
    overheadSum += valOverhead;
  });
  // Add some commas for readability:
  // 1000000 becomes 1,000,000
  let strRowSum = `${rowsSum}`;
  const regex = /(\d+)(\d{3})/;
  while (regex.test(strRowSum)) {
    strRowSum = strRowSum.replace(regex, '$1' + ',' + '$2');
  }
  // If approximated total value add ~ in front
  if (rowSumApproximated) {
    strRowSum = `~${strRowSum}`;
  }
  // Calculate the magnitude for the size and overhead values
  let size_magnitude = 0;
  let overhead_magnitude = 0;
  while (sizeSum >= 1024) {
    sizeSum /= 1024;
    size_magnitude++;
  }
  while (overheadSum >= 1024) {
    overheadSum /= 1024;
    overhead_magnitude++;
  }

  sizeSum = Math.round(sizeSum * 10) / 10;
  overheadSum = Math.round(overheadSum * 10) / 10;

  // Update summary with new data
  const $summary = $('#tbl_summary_row');
  $summary.find('.tbl_num').text(PMA_sprintf(PMA_messages.strNTables, tableSum));
  if (rowSumApproximated) {
    $summary.find('.row_count_sum').text(strRowSum);
  } else {
    $summary.find('.tbl_rows').text(strRowSum);
  }
  $summary.find('.tbl_size').text(`${sizeSum} ${byteUnits[size_magnitude]}`);
  $summary.find('.tbl_overhead').text(`${overheadSum} ${byteUnits[overhead_magnitude]}`);
}

/**
 * Gets the real row count for a table or DB.
 * @param object $target Target for appending the real count value.
 */
function PMA_fetchRealRowCount($target) {
  const $throbber = $('#pma_navigation').find('.throbber')
    .first()
    .clone()
    .css({ visibility: 'visible', display: 'inline-block' })
    .click(false);
  $target.html($throbber);
  $.ajax({
    type: 'GET',
    url: $target.attr('href'),
    cache: false,
    dataType: 'json',
    success(response) {
      if (response.success) {
        // If to update all row counts for a DB.
        if (response.real_row_count_all) {
          $.each(JSON.parse(response.real_row_count_all),
            (index, table) => {
              // Update each table row count.
              $(`table.data td[data-table*="${table.table}"]`)
                .text(table.row_count);
            });
        }
        // If to update a particular table's row count.
        if (response.real_row_count) {
          // Append the parent cell with real row count.
          $target.parent().text(response.real_row_count);
        }
        // Adjust the 'Sum' displayed at the bottom.
        PMA_adjustTotals();
      } else {
        PMA_ajaxShowMessage(PMA_messages.strErrorRealRowCount);
      }
    },
    error() {
      PMA_ajaxShowMessage(PMA_messages.strErrorRealRowCount);
    },
  });
}

AJAX.registerOnload('db_structure.js', () => {
/**
 * function to open the confirmation dialog for making table consistent with central list
 *
 * @param string   msg     message text to be displayed to user
 * @param function success function to be called on success
 *
 */
  const jqConfirm = function (msg, success) {
    const dialogObj = $(`<div class='hide'>${msg}</div>`);
    $('body').append(dialogObj);
    const buttonOptions = {};
    buttonOptions[PMA_messages.strContinue] = function () {
      success();
      $(this).dialog('close');
    };
    buttonOptions[PMA_messages.strCancel] = function () {
      $(this).dialog('close');
      $('#tablesForm')[0].reset();
    };
    $(dialogObj).dialog({
      resizable: false,
      modal: true,
      title: PMA_messages.confirmTitle,
      buttons: buttonOptions,
    });
  };

  /**
 *  Event handler on select of "Make consistent with central list"
 */
  $('select[name=submit_mult]').change(function (event) {
    if ($(this).val() === 'make_consistent_with_central_list') {
      event.preventDefault();
      event.stopPropagation();
      jqConfirm(
        PMA_messages.makeConsistentMessage, () => {
          $('#tablesForm').submit();
        },
      );
      return false;
    } if ($(this).val() === 'copy_tbl' || $(this).val() === 'add_prefix_tbl' || $(this).val() === 'replace_prefix_tbl' || $(this).val() === 'copy_tbl_change_prefix') {
      event.preventDefault();
      event.stopPropagation();
      if ($('input[name="selected_tbl[]"]:checked').length === 0) {
        return false;
      }
      const formData = $('#tablesForm').serialize();
      let modalTitle = '';
      if ($(this).val() === 'copy_tbl') {
        modalTitle = PMA_messages.strCopyTablesTo;
      } else if ($(this).val() === 'add_prefix_tbl') {
        modalTitle = PMA_messages.strAddPrefix;
      } else if ($(this).val() === 'replace_prefix_tbl') {
        modalTitle = PMA_messages.strReplacePrefix;
      } else if ($(this).val() === 'copy_tbl_change_prefix') {
        modalTitle = PMA_messages.strCopyPrefix;
      }
      $.ajax({
        type: 'POST',
        url: 'db_structure.php',
        dataType: 'html',
        data: formData,

      }).done((data) => {
        const dialogObj = $(`<div class='hide'>${data}</div>`);
        $('body').append(dialogObj);
        const buttonOptions = {};
        buttonOptions[PMA_messages.strContinue] = function () {
          $('#ajax_form').submit();
          $(this).dialog('close');
        };
        buttonOptions[PMA_messages.strCancel] = function () {
          $(this).dialog('close');
          $('#tablesForm')[0].reset();
        };
        $(dialogObj).dialog({
          minWidth: 500,
          resizable: false,
          modal: true,
          title: modalTitle,
          buttons: buttonOptions,
        });
      });
    } else {
      $('#tablesForm').submit();
    }
  });

  /**
     * Ajax Event handler for 'Truncate Table'
     */
  $(document).on('click', 'a.truncate_table_anchor.ajax', function (event) {
    event.preventDefault();

    /**
         * @var $this_anchor Object  referring to the anchor clicked
         */
    const $this_anchor = $(this);

    // extract current table name and build the question string
    /**
         * @var curr_table_name String containing the name of the table to be truncated
         */
    const curr_table_name = $this_anchor.parents('tr').children('th').children('a').text();
    /**
         * @var question    String containing the question to be asked for confirmation
         */
    const question = `${PMA_messages.strTruncateTableStrongWarning} ${
      PMA_sprintf(PMA_messages.strDoYouReally, `TRUNCATE \`${escapeHtml(curr_table_name)}\``)
    }${getForeignKeyCheckboxLoader()}`;

    $this_anchor.PMA_confirm(question, $this_anchor.attr('href'), function (url) {
      PMA_ajaxShowMessage(PMA_messages.strProcessingRequest);

      const params = getJSConfirmCommonParam(this, $this_anchor.getPostData());

      $.post(url, params, (data) => {
        if (typeof data !== 'undefined' && data.success === true) {
          PMA_ajaxShowMessage(data.message);
          // Adjust table statistics
          const $tr = $this_anchor.closest('tr');
          $tr.find('.tbl_rows').text('0');
          $tr.find('.tbl_size, .tbl_overhead').text('-');
          // Fetch inner span of this anchor
          // and replace the icon with its disabled version
          const span = $this_anchor.html().replace(/b_empty/, 'bd_empty');
          // To disable further attempts to truncate the table,
          // replace the a element with its inner span (modified)
          $this_anchor
            .replaceWith(span)
            .removeClass('truncate_table_anchor');
          PMA_adjustTotals();
        } else {
          PMA_ajaxShowMessage(`${PMA_messages.strErrorProcessingRequest} : ${data.error}`, false);
        }
      }); // end $.post()
    }, loadForeignKeyCheckbox); // end $.PMA_confirm()
  }); // end of Truncate Table Ajax action

  /**
     * Ajax Event handler for 'Drop Table' or 'Drop View'
     */
  $(document).on('click', 'a.drop_table_anchor.ajax', function (event) {
    event.preventDefault();

    const $this_anchor = $(this);

    // extract current table name and build the question string
    /**
         * @var $curr_row    Object containing reference to the current row
         */
    const $curr_row = $this_anchor.parents('tr');
    /**
         * @var curr_table_name String containing the name of the table to be truncated
         */
    const curr_table_name = $curr_row.children('th').children('a').text();
    /**
         * @var is_view Boolean telling if we have a view
         */
    const is_view = $curr_row.hasClass('is_view') || $this_anchor.hasClass('view');
    /**
         * @var question    String containing the question to be asked for confirmation
         */
    let question;
    if (!is_view) {
      question = `${PMA_messages.strDropTableStrongWarning} ${
        PMA_sprintf(PMA_messages.strDoYouReally, `DROP TABLE \`${escapeHtml(curr_table_name)}\``)}`;
    } else {
      question = PMA_sprintf(PMA_messages.strDoYouReally, `DROP VIEW \`${escapeHtml(curr_table_name)}\``);
    }
    question += getForeignKeyCheckboxLoader();

    $this_anchor.PMA_confirm(question, $this_anchor.attr('href'), function (url) {
      const $msg = PMA_ajaxShowMessage(PMA_messages.strProcessingRequest);

      const params = getJSConfirmCommonParam(this, $this_anchor.getPostData());

      $.post(url, params, (data) => {
        if (typeof data !== 'undefined' && data.success === true) {
          PMA_ajaxShowMessage(data.message);
          $curr_row.hide('medium').remove();
          PMA_adjustTotals();
          PMA_reloadNavigation();
          PMA_ajaxRemoveMessage($msg);
        } else {
          PMA_ajaxShowMessage(`${PMA_messages.strErrorProcessingRequest} : ${data.error}`, false);
        }
      }); // end $.post()
    }, loadForeignKeyCheckbox); // end $.PMA_confirm()
  }); // end of Drop Table Ajax action

  /**
     * Attach Event Handler for 'Print' link
     */
  $(document).on('click', '#printView', (event) => {
    event.preventDefault();

    // Take to preview mode
    printPreview();
  }); // end of Print View action

  // Calculate Real End for InnoDB
  /**
     * Ajax Event handler for calculating the real end for a InnoDB table
     *
     */
  $(document).on('click', '#real_end_input', function (event) {
    event.preventDefault();

    /**
         * @var question    String containing the question to be asked for confirmation
         */
    const question = PMA_messages.strOperationTakesLongTime;

    $(this).PMA_confirm(question, '', () => true);
    return false;
  }); // end Calculate Real End for InnoDB

  // Add tooltip to favorite icons.
  $('.favorite_table_anchor').each(function () {
    PMA_tooltip(
      $(this),
      'a',
      $(this).attr('title'),
    );
  });

  // Get real row count via Ajax.
  $('a.real_row_count').on('click', function (event) {
    event.preventDefault();
    PMA_fetchRealRowCount($(this));
  });
  // Get all real row count.
  $('a.row_count_sum').on('click', function (event) {
    event.preventDefault();
    PMA_fetchRealRowCount($(this));
  });
}); // end $()
