import React, { useState } from 'react';
import PropTypes from 'prop-types';
//import victory chart features
import { VictoryPie, VictoryContainer, Slice, VictoryLabel } from 'victory';
//constants
import { OWNER_TYPES_LIST } from 'constants/index';
//custom components
import OwnerInfoModal from 'components/OwnerInfoModal';
//utils
import { getAccurateDate } from 'utils';

const OwnerGraphs = ({ ownerLists, totalValue }) => {
  const [editOpen, setEditOpen] = useState(false);
  const [selectedOwner, setSelectedOwner] = useState({});

  const ownerDetailedLists = ownerLists.map(e => {
    return {
      x: e.name,
      y: ((e.perShareVal * e.shareAmount) / totalValue) * 100,
      z: e.ownerType,
    };
  });

  //function to arrange matched owner type data to the modal
  const openEditModal = id => {
    const ownerDetail = ownerLists[id];
    setSelectedOwner({ ...ownerDetail, date: getAccurateDate(ownerDetail.date) });
    setEditOpen(true);
  };

  return (
    <React.Fragment>
      {ownerLists.length > 0 && (
        <VictoryPie
          height={170}
          colorScale={['tomato', 'orange', 'gold', 'cyan', 'navy']}
          data={ownerDetailedLists.length > 0 && ownerDetailedLists}
          containerComponent={<VictoryContainer responsive={true} />}
          labels={({ datum }) =>
            `${datum.x}(${
              OWNER_TYPES_LIST.find(e => e.ownerTypeId === datum.z)
                ? OWNER_TYPES_LIST.find(e => e.ownerTypeId === datum.z).ownerTypeDesc
                : '...'
            }): ${datum.y.toFixed(2)}%`
          }
          padding={{ left: 20, top: 40, right: 20, bottom: 40 }}
          labelComponent={<VictoryLabel height={5} />}
          style={{
            labels: { padding: 20, fontSize: 5, fill: 'red' },
            data: {
              cursor: 'pointer',
            },
          }}
          dataComponent={<Slice name="slice" />}
          events={[
            {
              target: 'data',
              childName: 'slice',
              eventHandlers: {
                onClick: e => ({
                  target: 'data',
                  mutation: props => {
                    openEditModal(props.index);
                  },
                }),
              },
            },
          ]}
          animate={{
            duration: 2000,
          }}
        />
      )}
      <OwnerInfoModal
        open={editOpen}
        handleClose={() => setEditOpen(false)}
        onExit={() => setSelectedOwner({})}
        submitData={selectedOwner}
      />
    </React.Fragment>
  );
};

OwnerGraphs.propTypes = {
  ownerLists: PropTypes.array.isRequired,
  totalValue: PropTypes.number.isRequired,
};

export default OwnerGraphs;
