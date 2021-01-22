//import apis
import { addOwnerData, updateOwnerData, getOwnerLists, removeOwnerData } from 'apis';
//import notification function
import { toastr } from 'utils';

//submit Company Info Action
export const submitOwnerInfo = submitObj => async dispatch => {
  dispatch({ type: 'SETPAGELOADING', payload: true });
  const result = await addOwnerData(submitObj);
  if (result.status === 200) {
    toastr.success(result.data.message);
    const fetchOwnersResult = await getOwnerLists();
    if (fetchOwnersResult.status === 200) {
      dispatch({ type: 'FETCHOWNERLISTS', payload: fetchOwnersResult.data.ownerLists });
    }
  } else {
    toastr.error(result.data.message);
  }
  dispatch({ type: 'SETPAGELOADING', payload: false });
  return true;
};

//remove owner Info Action
export const removeOwnerInfo = id => async dispatch => {
  dispatch({ type: 'SETPAGELOADING', payload: true });
  const result = await removeOwnerData(id);
  if (result.status === 200) {
    toastr.success(result.data.message);
    const removeOwnerResult = await getOwnerLists();
    if (removeOwnerResult.status === 200) {
      dispatch({ type: 'FETCHOWNERLISTS', payload: removeOwnerResult.data.ownerLists });
    }
  } else {
    toastr.error(result.data.message);
  }
  dispatch({ type: 'SETPAGELOADING', payload: false });
  return true;
};

//remove owner Info Action
export const updateOwnerInfo = submitObj => async dispatch => {
  dispatch({ type: 'SETPAGELOADING', payload: true });
  const result = await updateOwnerData(submitObj);
  if (result.status === 200) {
    toastr.success(result.data.message);
    const updateOwnerResult = await getOwnerLists();
    if (updateOwnerResult.status === 200) {
      dispatch({ type: 'FETCHOWNERLISTS', payload: updateOwnerResult.data.ownerLists });
    }
  } else {
    toastr.error(result.data.message);
  }
  dispatch({ type: 'SETPAGELOADING', payload: false });
  return true;
};
