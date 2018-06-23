import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Line } from 'react-chartjs-2';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

import UserPurchases from './Charts/UserPurchases';
import SellingsPerDay from './Charts/SellingsPerDay';
import TopRestaurants from './Charts/TopRestaurants';

import { fetchSellingsPerDay, fetchTopRestaurants } from '../modules/userDashboard';

import './UserDashboard.css';
import '../../node_modules/react-tabs/style/react-tabs.css';

class UserDashboard extends Component { 
  componentDidMount() {
    const { fetchSellings, fetchTopSellingsRestaurants } = this.props;

    fetchSellings();
    fetchTopSellingsRestaurants();
  }

  render() {
    const { UserDashboards } = this.props;

    return (
      <div className="UserDashboard">
        <Tabs className="UserDashboardTabs">
          <TabList>
            <Tab>Restaurant Sellings Per Day</Tab>
            <Tab>Top Selling Restaurants</Tab>
          </TabList>
            <TabPanel>
              <SellingsPerDay sellingsPerDay={UserDashboards.sellingsPerDay} />
            </TabPanel>
            <TabPanel>
              <TopRestaurants topRestaurants={UserDashboards.topRestaurants} />
            </TabPanel>
        </Tabs>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  UserDashboards: state.userDashboard
});

export default connect(mapStateToProps, {
  fetchSellings: fetchSellingsPerDay,
  fetchTopSellingsRestaurants: fetchTopRestaurants
})(UserDashboard);
