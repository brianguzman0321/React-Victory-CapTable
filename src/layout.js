import React from 'react';
import { connect } from 'react-redux';
// import { useLocation } from 'react-router-dom';
//styled components
import { Root, Page } from 'components/StyledComponents';
//custom components
import AppHeader from 'components/Header';

const Layout = ({ children, isLoading }) => {
  return (
    <Root>
      <AppHeader />
      <Page isLoading={isLoading}>{children}</Page>
    </Root>
  );
};

const mapStateToProps = state => {
  const { common } = state;
  return { isLoading: common.loadingStatus };
};

export default connect(mapStateToProps, null)(Layout);
