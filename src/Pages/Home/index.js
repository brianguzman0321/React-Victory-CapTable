import React from 'react';
import PropTypes from 'prop-types';
import CreateCompany from 'components/SubmitForm';
//mui components
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';

const muiStyles = theme => ({
  text: {
    marginTop: 30,
  },
  descContainer: {
    padding: '100px 0',
  },
  link: {
    cursor: 'pointer',
  },
});

const HomePage = ({ classes, history }) => {
  return (
    <Grid container alignItems="center">
      <Grid
        item
        xs={6}
        container
        alignItems="center"
        justify="center"
        className={classes.descContainer}
      >
        <Typography variant="h4" className={classes.text}>
          Get Cap Table
        </Typography>
        <Typography align="center" className={classes.text}>
          Welcome to GetCapTable, where you can simply enter your shareholder info and access a
          beautifully rendered Capitalization Table report and charts.
        </Typography>
      </Grid>
      <Grid item xs={6}>
        <CreateCompany submitType="create" />
      </Grid>
      <Grid item xs={12} align="center">
        <Link className={classes.link} onClick={() => history.push('/dashboard')}>
          Go to Dashboard
        </Link>
      </Grid>
    </Grid>
  );
};

HomePage.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(muiStyles)(HomePage);
