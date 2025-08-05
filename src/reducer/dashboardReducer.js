import { DASHBOARD_ACTIONS, INITIAL_DASHBOARD_STATE, BUSINESS_CONSTANTS } from '../constants';


const increaseValue = (currentValue, increment = 1) => currentValue + increment;
const decreaseValue = (currentValue, decrement = 1, min = BUSINESS_CONSTANTS.MIN_VALUE) => 
  currentValue > min ? currentValue - decrement : min;


export const dashboardReducer = (state, action) => {
  switch (action.type) {
    case DASHBOARD_ACTIONS.ADD_USER:
      return {
        ...state,
        totalUsers: increaseValue(state.totalUsers)
      };

    case DASHBOARD_ACTIONS.REMOVE_USER:
      return {
        ...state,
        totalUsers: decreaseValue(state.totalUsers)
      };

    case DASHBOARD_ACTIONS.ADD_ORDER:
      return {
        ...state,
        totalOrders: increaseValue(state.totalOrders),
        totalRevenue: increaseValue(state.totalRevenue, BUSINESS_CONSTANTS.ORDER_VALUE)
      };

    case DASHBOARD_ACTIONS.REMOVE_ORDER:
      return {
        ...state,
        totalOrders: decreaseValue(state.totalOrders),
        totalRevenue: decreaseValue(state.totalRevenue, BUSINESS_CONSTANTS.ORDER_VALUE)
      };

    case DASHBOARD_ACTIONS.ADD_PRODUCT:
      return {
        ...state,
        totalProducts: increaseValue(state.totalProducts)
      };

    case DASHBOARD_ACTIONS.REMOVE_PRODUCT:
      return {
        ...state,
        totalProducts: decreaseValue(state.totalProducts)
      };

    case DASHBOARD_ACTIONS.RESET_DATA:
      return INITIAL_DASHBOARD_STATE;

    default:
      return state;
  }
};

