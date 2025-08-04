// State awal untuk dashboard
export const initialState = {
  totalUsers: 150,
  totalOrders: 45,
  totalRevenue: 12500,
  totalProducts: 28
};

// Reducer function - menentukan bagaimana state berubah berdasarkan action
export const dashboardReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_USER':
      return {
        ...state,
        totalUsers: state.totalUsers + 1
      };
    case 'REMOVE_USER':
      return {
        ...state,
        totalUsers: state.totalUsers > 0 ? state.totalUsers - 1 : 0
      };
    case 'ADD_ORDER':
      return {
        ...state,
        totalOrders: state.totalOrders + 1,
        totalRevenue: state.totalRevenue + 250 // setiap order +250
      };
    case 'REMOVE_ORDER':
      return {
        ...state,
        totalOrders: state.totalOrders > 0 ? state.totalOrders - 1 : 0,
        totalRevenue: state.totalRevenue > 250 ? state.totalRevenue - 250 : 0
      };
    case 'ADD_PRODUCT':
      return {
        ...state,
        totalProducts: state.totalProducts + 1
      };
    case 'REMOVE_PRODUCT':
      return {
        ...state,
        totalProducts: state.totalProducts > 0 ? state.totalProducts - 1 : 0
      };
    case 'RESET_DATA':
      return initialState;
    default:
      return state;
  }
};