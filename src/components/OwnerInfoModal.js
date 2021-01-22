import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
//import components
import SubmitForm from './SubmitForm';

const muiStyles = theme => ({
  paper: {
    width: '90%',
    padding: '30px 0',
  },
});

const OwnerInfoModal = ({ classes, open, handleClose, submitData, onExit }) => {
  return (
    <Dialog open={open} onClose={handleClose} classes={{ paper: classes.paper }} onExit={onExit}>
      <DialogTitle align="center">Edit Owner</DialogTitle>
      <DialogContent>
        <SubmitForm submitType="Edit" submitData={submitData} callback={handleClose} />
      </DialogContent>
    </Dialog>
  );
};

OwnerInfoModal.propTypes = {
  classes: PropTypes.object.isRequired,
  open: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
  submitData: PropTypes.object.isRequired,
  onExit: PropTypes.func.isRequired,
};

export default withStyles(muiStyles)(OwnerInfoModal);
