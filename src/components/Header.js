import React from 'react';
import { withRouter } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import CustomButton from 'components/Button';

const styles = theme => ({
  appBar: {
    height: 90,
    backgroundColor: '#fff !important',
    padding: 10,
    transition: '0.2s !important',
  },
  headBtn: {
    marginRight: 10,
  },
});

const AppHeader = ({ classes, history }) => {
  return (
    <div>
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <CustomButton className={classes.headBtn} onClick={() => history.push('/')}>
            Home Page
          </CustomButton>
          <CustomButton className={classes.headBtn} onClick={() => history.push('/dashboard')}>
            Dashboard
          </CustomButton>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default withRouter(withStyles(styles)(AppHeader));
