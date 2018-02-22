import { connect } from 'react-redux';
import * as actions from '../actions/books';
import * as uiActions from '../actions/ui';
import Header from '../components/Header';

const mapStateToProps = state => ({
  error: state.ui.error,
  activeUser: state.ui.activeUser,
  location: state.router.location.pathname,
});

const mapDispatchToProps = dispatch => ({
  getActiveUser: () => dispatch(uiActions.getActiveUser()),
  setError: bool => dispatch(uiActions.setError(bool)),
  setSearchTerm: term => dispatch(actions.setSearchTerm(term)),
  getSearchedBooks: (searchTerm, maxResults, bookIndex) => dispatch(actions.getSearchedBooks(searchTerm, maxResults, bookIndex)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
