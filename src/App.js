import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { createBrowserHistory } from 'history';
import { BrowserRouter as Router } from 'react-router-dom';
//routes
import Routes from './routes';
//page layout
import Layout from './layout';
//import redux action
import { getOwnerListDetails } from 'redux/actions/getOwnersAction';

const history = createBrowserHistory();

const App = ({ getOwnerListDetails }) => {
  useEffect(() => {
    getOwnerListDetails();
  }, []);
  return (
    <Router history={history}>
      <Layout>
        <Routes />
      </Layout>
    </Router>
  );
};

export default connect(null, { getOwnerListDetails })(App);
