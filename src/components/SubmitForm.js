import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
//import redux action
import { submitOwnerInfo, updateOwnerInfo } from 'redux/actions/submitAction';
//mui components
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
//custom components
import OutlinedTextField from 'components/CustomTextField';
import CustomSelect from 'components/CustomSelect';
import CustomDateField from 'components/CustomDateField';
import CustomButton from 'components/Button';
//constants
import { OWNER_TYPES_LIST } from 'constants/index';

const muiStyles = theme => ({
  container: {
    padding: '100px 0 50px 100px',
  },
  btnContainer: {
    marginTop: 30,
  },
});

const SubmitForm = ({
  classes,
  submitType,
  submitOwnerInfo,
  updateOwnerInfo,
  submitData,
  callback,
}) => {
  const [companyInfo, setCompanyInfo] = useState(submitData || {});
  const [disableBtn, setDisableBtn] = useState(false);

  useEffect(() => {
    const { name, ownerType, shareAmount, perShareVal, date } = companyInfo;
    if (name && ownerType && shareAmount && perShareVal && date) {
      setDisableBtn(false);
    } else {
      setDisableBtn(true);
    }
  }, [companyInfo]);

  const handleSubmit = async obj => {
    setDisableBtn(true);
    const res = submitType === 'create' ? await submitOwnerInfo(obj) : await updateOwnerInfo(obj);
    if (res) {
      setCompanyInfo({});
      setDisableBtn(false);
      if (callback) {
        callback();
      }
    }
  };

  return (
    <Grid
      container
      justify="center"
      alignItems="center"
      className={submitType === 'create' && classes.container}
      spacing={submitType === 'create' && 3}
    >
      {submitType === 'create' && (
        <Grid item xs={7}>
          <Typography align="center" variant="h6" fullWidth>
            Add Owner
          </Typography>
        </Grid>
      )}
      {/* Name Input Field   */}
      <Grid item xs={7}>
        <OutlinedTextField
          onChange={value => {
            setCompanyInfo(Object.assign({}, companyInfo, { name: value }));
          }}
          label="Name"
          value={companyInfo.name}
        />
      </Grid>
      {/* Owner Type Select Field   */}
      <Grid item xs={7}>
        <CustomSelect
          onChange={value => {
            setCompanyInfo(Object.assign({}, companyInfo, { ownerType: value }));
          }}
          value={companyInfo.ownerType}
          label="Owner Type"
          valueKey="ownerTypeId"
          nameKey="ownerTypeDesc"
          sourceArray={OWNER_TYPES_LIST}
        />
      </Grid>
      {/* Amount of Shares Input Field   */}
      <Grid item xs={7}>
        <OutlinedTextField
          onChange={value => {
            setCompanyInfo(Object.assign({}, companyInfo, { shareAmount: value }));
          }}
          label="Amount of Shares"
          type="number"
          value={companyInfo.shareAmount || ''}
        />
      </Grid>
      {/* Data Field  */}
      <Grid item xs={7}>
        <CustomDateField
          onChange={value => {
            setCompanyInfo(Object.assign({}, companyInfo, { date: value }));
          }}
          value={companyInfo.date || new Date()}
          label="Date Issued"
        />
      </Grid>
      {/* Per Share Value Input Field   */}
      <Grid item xs={7}>
        <OutlinedTextField
          onChange={value => {
            setCompanyInfo(Object.assign({}, companyInfo, { perShareVal: value }));
          }}
          label="Per Share Value"
          type="number"
          value={companyInfo.perShareVal || ''}
        />
      </Grid>
      {/* Submit Button */}
      <Grid item xs={7} align="center" className={classes.btnContainer}>
        <CustomButton disabled={disableBtn} onClick={() => handleSubmit(companyInfo)}>
          {submitType === 'create' ? 'Create' : 'Save'}
        </CustomButton>
      </Grid>
    </Grid>
  );
};

SubmitForm.propTypes = {
  classes: PropTypes.object.isRequired,
  submitType: PropTypes.string.isRequired,
  submitOwnerInfo: PropTypes.func.isRequired,
  updateOwnerInfo: PropTypes.func.isRequired,
  submitData: PropTypes.object.isRequired,
  callback: PropTypes.func,
};

export default compose(
  withStyles(muiStyles),
  connect(null, { submitOwnerInfo, updateOwnerInfo })
)(SubmitForm);
