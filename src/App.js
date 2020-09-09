import React, { Fragment } from 'react';
import {
  Route,
  BrowserRouter as Router,
  Switch,
} from 'react-router-dom';
import { connect } from 'react-redux';
import NotFound from './partial/notfound';
import Navigate from './partial/navbar';
import Authors from './components/authors/authors';
import AddAuthor from './components/authors/addAuthor';
import AddBook from './components/books/addBook';
import UpdateBook from './components/books/updateBook';
import UpdateAuthor from './components/authors/updateAuthor';
import Books from './components/books/books';
import Home from './components/home';
import PropTypes from 'prop-types';
// import NavLink from 'react-bootstrap/NavLink';


class App extends React.Component {
  render()
  { return (
    <div>
        <Router>
        <Navigate />
        <div>
            {console.log('token', localStorage.getItem('token'))}
            {this.props.token ? (
            <Fragment>
                <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/books" component={Books} />
                <Route exact path="/authors" component={Authors} />
                <Route exact path="/books/add" component={AddBook} />
                <Route exact path="/books/add" component={AddBook} />
                <Route exact path="/books/update/:id" component={UpdateBook} />
                <Route exact path="/authors/add" component={AddAuthor} />
                <Route exact path="/authors/update/:id" component={UpdateAuthor} />
                <Route component={NotFound} />
                </Switch>
            </Fragment>
            ) : (
            <Fragment>
                <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/books" component={Books} />
                <Route exact path="/authors" component={Authors} />
                <Route component={NotFound} />
                </Switch>
            </Fragment>
            )}
        </div>
        </Router>
        </div>
);
  }
}
App.propTypes = {
  token: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
    token: state.auth.token,
  });

export default connect(
  mapStateToProps,
  null,
)(App);
