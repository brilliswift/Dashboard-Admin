
// Dashboard action types
export const DASHBOARD_ACTIONS = {
  ADD_USER: 'ADD_USER',
  REMOVE_USER: 'REMOVE_USER',
  ADD_ORDER: 'ADD_ORDER',
  REMOVE_ORDER: 'REMOVE_ORDER',
  ADD_PRODUCT: 'ADD_PRODUCT',
  REMOVE_PRODUCT: 'REMOVE_PRODUCT',
  RESET_DATA: 'RESET_DATA'
};

// Initial state untuk dashboard
export const INITIAL_DASHBOARD_STATE = {
  totalUsers: 150,
  totalOrders: 45,
  totalRevenue: 12500,
  totalProducts: 28
};

// Constants untuk business logic
export const BUSINESS_CONSTANTS = {
  ORDER_VALUE: 250, // setiap order bernilai 250
  MIN_VALUE: 0
};
