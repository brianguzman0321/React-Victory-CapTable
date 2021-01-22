import React from 'react';
import PropTypes from 'prop-types';
import isObject from 'lodash/isObject';

import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';

import 'styles/selectField.css';

const getName = (nameKey, item) => {
  if (!nameKey) {
    return item;
  }
  if (Array.isArray(nameKey)) {
    return nameKey.map(key => item[key]).join(' ');
  } else {
    return item[nameKey];
  }
};

const muiStyles = theme => ({
  textField: {
    fontWeight: 500,
    fontSize: 16,
    height: 42,
    backgroundColor: 'rgb(232, 240, 254)',
    borderRadius: '6px',
    boxShadow: 'inset 0 2px 10px 0 rgba(0, 0, 0, 0.02)',
    border: '1px solid transparent',
    transition: 'border-color 200ms ease, box-shadow 200ms ease, background-color 200ms ease',
    '& input::-webkit-clear-button, & input::-webkit-outer-spin-button, & input::-webkit-inner-spin-button': {
      display: 'none',
    },
    '&:focus-within': {
      border: '1px solid #a279f9',
      backgroundColor: '#fff',
      boxShadow: 'inset 0 1px 3px 0 rgba(0, 0, 0, 0.05), 0 0 4px 0 #a279f9',
    },
  },
  label: {
    color: '#d3d3dc',
    lineHeight: '2em',
    fontWeight: 600,
    letterSpacing: '0.2em',
  },
});

const CustomSelectAuto = ({
  classes,
  label,
  value,
  sourceArray,
  onChange,
  valueKey,
  nameKey,
  disabled,
}) => (
  <React.Fragment>
    <Typography align="center" className={classes.label}>
      {label}
    </Typography>
    <Autocomplete
      options={sourceArray}
      value={value === undefined ? '' : value}
      getOptionSelected={option => option[nameKey]}
      getOptionLabel={label => {
        const value = isObject(label)
          ? getName(nameKey, label)
          : getName(nameKey, sourceArray.find(s => s[valueKey] === label) || {});
        return value ? value : '';
      }}
      onSelect={({ target: { value } }) => {
        const updatedValue = (sourceArray.find(s => getName(nameKey, s) === value) || {})[valueKey];
        onChange(updatedValue);
      }}
      renderInput={params => {
        return <TextField {...params} variant="outlined" className={classes.textField} />;
      }}
      disabled={disabled}
    />
  </React.Fragment>
);

CustomSelectAuto.propTypes = {
  className: PropTypes.string.isRequired,
  label: PropTypes.string,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  classes: PropTypes.object.isRequired,
  valueKey: PropTypes.string.isRequired,
  nameKey: PropTypes.string.isRequired,
  sourceArray: PropTypes.array.isRequired,
  disabled: PropTypes.bool,
};

CustomSelectAuto.defaultProps = {
  label: '',
};

export default withStyles(muiStyles)(CustomSelectAuto);
