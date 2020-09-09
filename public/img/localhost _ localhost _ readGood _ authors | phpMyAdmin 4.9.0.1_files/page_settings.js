/* vim: set expandtab sw=4 ts=4 sts=4: */
/**
 * @fileoverview    function used for page-related settings
 * @name            Page-related settings
 *
 * @requires    jQuery
 * @requires    jQueryUI
 * @required    js/functions.js
 */

function showSettings(selector) {
  const buttons = {};
  buttons[PMA_messages.strApply] = function () {
    $('.config-form').submit();
  };

  buttons[PMA_messages.strCancel] = function () {
    $(this).dialog('close');
  };

  // Keeping a clone to restore in case the user cancels the operation
  const $clone = $(`${selector} .page_settings`).clone(true);
  $(selector)
    .dialog({
      title: PMA_messages.strPageSettings,
      width: 700,
      minHeight: 250,
      modal: true,
      open() {
        $(this).dialog('option', 'maxHeight', $(window).height() - $(this).offset().top);
      },
      close() {
        $(`${selector} .page_settings`).replaceWith($clone);
      },
      buttons,
    });
}

function showPageSettings() {
  showSettings('#page_settings_modal');
}

function showNaviSettings() {
  showSettings('#pma_navigation_settings');
}

AJAX.registerTeardown('page_settings.js', () => {
  $('#page_settings_icon').css('display', 'none');
  $('#page_settings_icon').off('click');
  $('#pma_navigation_settings_icon').off('click');
});

AJAX.registerOnload('page_settings.js', () => {
  if ($('#page_settings_modal').length) {
    $('#page_settings_icon').css('display', 'inline');
    $('#page_settings_icon').on('click', showPageSettings);
  }
  $('#pma_navigation_settings_icon').on('click', showNaviSettings);
});
