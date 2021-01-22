import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import sumBy from 'lodash/sumBy';
//import mui components
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

//utils
import { a11yProps } from 'utils';
//custom components
import TabPanel from 'components/TabPanel';
//dashboard components
import OwnerTable from './components/OwnerTable';
import OwnerGraphs from './components/OwnerGraphs';

const muiStyles = theme => ({
  link: {
    cursor: 'pointer',
  },
});

const Dashboard = ({ ownerLists, history, classes }) => {
  const [value, setValue] = useState(0); //page Index

  const handleTabChange = (event, newValue) => {
    setValue(newValue);
  };

  const totalValue = sumBy(ownerLists, object => {
    // return object.perShareVal * object.shareAmount;
    return object.shareAmount;
  });

  const ownerDetailedLists = ownerLists.map(e => {
    return {
      ...e,
      ownerValue: e.perShareVal * e.shareAmount,
      // ownerPercent: (e.perShareVal * e.shareAmount) / totalValue,
      ownerPercent: e.shareAmount / totalValue,
    };
  });

  return (
    <Grid container alignItems="center" spacing="2">
      <Grid item xs={12}>
        <AppBar position="static" color="default">
          <Tabs
            value={value}
            indicatorColor="primary"
            textColor="primary"
            onChange={handleTabChange}
            aria-label="get cap table tabs"
            variant="scrollable"
            scrollButtons="on"
          >
            <Tab label="Table" {...a11yProps(0)} />
            <Tab label="Chart" {...a11yProps(1)} />
          </Tabs>
        </AppBar>
        <TabPanel value={value} index={0}>
          <OwnerTable ownerDetailedLists={ownerDetailedLists} />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <OwnerGraphs ownerLists={ownerLists} totalValue={totalValue} />
        </TabPanel>
      </Grid>

      <Grid item xs={12} align="center">
        <Link className={classes.link} onClick={() => history.push('/')}>
          Back to Homepage
        </Link>
      </Grid>
    </Grid>
  );
};

Dashboard.propTypes = {
  ownerLists: PropTypes.array.isRequired,
  classes: PropTypes.object.isRequired,
};

const mapStateToProps = state => {
  const { owners } = state;
  return { ownerLists: owners.ownerLists };
};

export default compose(connect(mapStateToProps, null), withStyles(muiStyles))(Dashboard);
