import { toast } from 'react-toastify';
import moment from 'moment';

export const toastr = {
  success: string => toast.success(`✔️ ${string}`),
  error: string =>
    toast.error(`
    ❌ ${string}`),
};

export const a11yProps = index => ({
  id: `simple-tab-${index}`,
  'aria-controls': `simple-tabpanel-${index}`,
});

export const getAccurateDate = date => {
  return moment(date).add(1, 'days').format('YYYY-MM-DD');
};
