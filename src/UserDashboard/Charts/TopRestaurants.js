import React, { Component } from 'react';
import ReactTable from 'react-table';

import '../../../node_modules/react-table/react-table.css';
import './TopRestaurants.css';

class TopRestaurants extends Component { 
  render() {
    const { topRestaurants } = this.props;

    const columns = [
      {
        Header: 'Resturant',
        accessor: 'resturantName'
      },
      {
        Header: 'Orders Qty In Month',
        accessor: 'ordersInMonth'
      }
    ];

    return (
      <div className="TopRestaurantsChart">
      <ReactTable
        data={topRestaurants}
        columns={columns}
        sortable={true}
        filterable={true}
        minRows={1}
      />
      </div>
    );
  }
}

export default TopRestaurants;
