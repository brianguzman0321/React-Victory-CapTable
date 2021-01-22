import React from 'react';
import PropTypes from 'prop-types';
//mui components
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';

const muiStyles = theme => ({
  textField: {
    fontWeight: 500,
    fontSize: 16,
    height: 46,
    padding: '0 4.5px',
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

const CustomDateField = ({ classes, label, onChange, value }) => {
  return (
    <React.Fragment>
      <Typography align="center" className={classes.label}>
        {label}
      </Typography>
      <TextField
        type="date"
        value={value}
        onChange={({ target: { value } }) => {
          onChange(value);
        }}
        variant="outlined"
        InputProps={{ className: classes.textField, disableUnderline: true }}
        fullWidth
      />
    </React.Fragment>
  );
};

CustomDateField.propTypes = {
  classes: PropTypes.object.isRequired,
  label: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};

export default withStyles(muiStyles)(CustomDateField);
