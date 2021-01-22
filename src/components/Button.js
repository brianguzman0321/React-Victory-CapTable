import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const styles = () => ({
  root: {
    textTransform: 'capitalize',
    backgroundColor: '#a279f9',
    fontSize: '16px',
    color: '#fff',
    padding: '6px',
    borderRadius: '6px',
    lineHeight: '24px',
    fontWeight: 700,
    minWidth: 200,
    '&:hover': {
      backgroundColor: '#7649d6',
    },
  },
});

export default withStyles(styles)(Button);
