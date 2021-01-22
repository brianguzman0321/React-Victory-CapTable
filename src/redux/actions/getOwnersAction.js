//import apis
import { getOwnerLists } from 'apis';
import { toastr } from 'utils';

//get owner lists action
export const getOwnerListDetails = () => async dispatch => {
  dispatch({ type: 'SETPAGELOADING', payload: true });
  const result = await getOwnerLists();
  if (result.status === 200) {
    dispatch({ type: 'FETCHOWNERLISTS', payload: result.data.ownerLists });
  } else {
    toastr.error(result.data.message);
  }
  dispatch({ type: 'SETPAGELOADING', payload: false });
  return true;
};
