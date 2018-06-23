export const FETCH_USER_PURCHASES = 'FETCH_USER_PURCHASES';
export const FETCH_TOP_RESTAURANTS = 'FETCH_TOP_RESTAURANTS';
export const FETCH_SELLINGS_PER_DAY = 'FETCH_SELLINGS_PER_DAY';

const MOCK_PURCHASES_PER_MONTH = [
  {
    id: 1,
    description: 'first purchase'
  }
];

const MOCK_TOP_RESTAURANTS = [
  {
    id: 1,
    resturantName: 'Pizza Hut',
    ordersInMonth: 5182
  },
  {
    id: 2,
    resturantName: 'McDonalds',
    ordersInMonth: 4412
  },
  {
    id: 3,
    resturantName: 'Habbibs',
    ordersInMonth: 3392
  },
  {
    id: 4,
    resturantName: 'Tacco Bell',
    ordersInMonth: 2291
  },
  {
    id: 5,
    resturantName: 'Muchachos',
    ordersInMonth: 1192
  }
];

const MOCK_SELLING_PER_DAY = [
  {
    id: 1,
    date: '23/06/2018',
    amount: '15.978,38'
  },
  {
    id: 2,
    date: '24/06/2018',
    amount: '11.178,38',
  },
  {
    id: 3,
    date: '25/06/2018',
    amount: '14.278,38',
  },
  {
    id: 4,
    date: '26/06/2018',
    amount: '17.078,38',
  }
];

const INITIAL_STATE = {
  purchasesPerMonth: [],
  topRestaurants: [],
  sellingsPerDay: []
};

/* ACTION HANDLERS */
const actionHandlers = {
  [FETCH_USER_PURCHASES]: (state, action) => {
    const updatedUserPurchases = Object.assign({},
      state,
      {
        ...state,
        purchasesPerMonth: action.payload,
      }
    );
    return updatedUserPurchases;
  },

  [FETCH_TOP_RESTAURANTS]: (state, action) => {
    const updatedTopRestaurants = Object.assign({},
      state,
      {
        ...state,
        topRestaurants: action.payload,
      }
    );
    return updatedTopRestaurants;
  },

  [FETCH_SELLINGS_PER_DAY]: (state, action) => {
    const updatedSellingsPerDay = Object.assign({},
      state,
      {
        ...state,
        sellingsPerDay: action.payload,
      }
    );
    return updatedSellingsPerDay;
  },
};

/* ACTION CREATORS */
export function fetchUserPurchasesPerMonth() {
  return (dispatch) => {
    dispatch({
      type: FETCH_USER_PURCHASES,
      payload: MOCK_PURCHASES_PER_MONTH
    });
  };
}

export function fetchTopRestaurants() {
  return (dispatch) => {
    dispatch({
      type: FETCH_TOP_RESTAURANTS,
      payload: MOCK_TOP_RESTAURANTS
    });
  };
}

export function fetchSellingsPerDay() {
  return (dispatch) => {
    dispatch({
      type: FETCH_SELLINGS_PER_DAY,
      payload: MOCK_SELLING_PER_DAY
    });
  };
}

/* REDUCER */
export default function(state = INITIAL_STATE, action = {}) {
  const handler = actionHandlers[action.type];

  return handler ? handler(state, action) : state;
};
