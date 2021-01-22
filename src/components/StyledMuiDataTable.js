import React from 'react';
import PropTypes from 'prop-types';
//mui
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';

//mui data table
import MUIDataTable from 'mui-datatables';

const getMuiTheme = () =>
  createMuiTheme({
    overrides: {
      MUIDataTableBodyCell: {
        root: {
          color: '#000',
        },
      },
      MuiTableFooter: {
        root: {
          '& .MuiToolbar-root': {
            color: '#000',
          },
        },
      },
      MuiTableHead: {
        root: {
          color: '#000',
        },
      },
      MuiToolbar: {
        root: {
          color: '#000',
        },
      },
    },
  });

const CustomMuiDataTable = ({ data, title, columns, options }) => {
  return (
    <MuiThemeProvider theme={getMuiTheme()}>
      <MUIDataTable data={data} title={title} columns={columns} options={options} />
    </MuiThemeProvider>
  );
};

CustomMuiDataTable.propTypes = {
  data: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
  columns: PropTypes.array.isRequired,
  options: PropTypes.object.isRequired,
};

export default CustomMuiDataTable;
