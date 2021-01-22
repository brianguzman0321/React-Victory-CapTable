import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
//custom components
import CustomMuiDataTable from 'components/StyledMuiDataTable';
import OwnerInfoModal from 'components/OwnerInfoModal';
//mui components
import TableContainer from '@material-ui/core/TableContainer';
import IconButton from '@material-ui/core/IconButton';
import EditIcon from '@material-ui/icons/Create';
import DeleteIcon from '@material-ui/icons/Delete';
//constants
import { OWNER_TYPES_LIST } from 'constants/index';
//import redux actions
import { removeOwnerInfo } from 'redux/actions/submitAction';
//utils
import { getAccurateDate } from 'utils';

const OwnerTable = ({ ownerDetailedLists, removeOwnerInfo }) => {
  const [editOpen, setEditOpen] = useState(false);
  const [selectedOwner, setSelectedOwner] = useState({});

  //function to arrange matched owner type data to the modal
  const openEditModal = id => {
    const ownerDetail = ownerDetailedLists.find(e => e.id === id);
    setSelectedOwner({ ...ownerDetail, date: getAccurateDate(ownerDetail.date) });
    setEditOpen(true);
  };

  const tableData =
    ownerDetailedLists.length > 0 &&
    ownerDetailedLists.map(m => {
      const { id, name, date, ownerPercent, ownerType, perShareVal, shareAmount } = m;
      const obj = {
        id,
        name,
        ownerType: OWNER_TYPES_LIST.find(e => e.ownerTypeId === ownerType).ownerTypeDesc,
        shareAmount,
        perShareVal,
        ownerPercent: Number((ownerPercent * 100).toFixed(2)),
        date: getAccurateDate(date),
        edit: (
          <IconButton onClick={() => openEditModal(id)}>
            <EditIcon size={10} />
          </IconButton>
        ),
        remove: (
          <IconButton onClick={() => removeOwnerInfo(id)}>
            <DeleteIcon size={10} />
          </IconButton>
        ),
      };
      return Object.values(obj);
    });

  const columns = [
    {
      name: 'ID',
    },
    {
      name: 'Name',
    },
    {
      name: 'Owner Type',
    },
    {
      name: 'Amount of Shares',
    },
    {
      name: 'Per Share Value',
    },
    {
      name: 'Ownership %',
    },
    {
      name: 'Date Issued',
    },
    {
      name: 'Edit Owner',
    },
    {
      name: 'Remove Owner',
    },
  ];

  const options = {
    filter: true,
    selectableRows: false,
    filterType: 'vertical',
    responsive: 'checkbox',
  };

  return (
    <React.Fragment>
      <TableContainer>
        {tableData.length > 0 && (
          <CustomMuiDataTable
            data={tableData}
            title={'Cap Table'}
            columns={columns}
            options={options}
          />
        )}
      </TableContainer>
      <OwnerInfoModal
        open={editOpen}
        handleClose={() => setEditOpen(false)}
        onExit={() => setSelectedOwner({})}
        submitData={selectedOwner}
      />
    </React.Fragment>
  );
};

OwnerTable.propTypes = {
  ownerDetailedLists: PropTypes.array.isRequired,
  removeOwnerInfo: PropTypes.func.isRequired,
};

export default connect(null, { removeOwnerInfo })(OwnerTable);
