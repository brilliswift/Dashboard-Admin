import { useReducer } from 'react';
import { dashboardReducer } from '../reducer/dashboardReducer';
import { INITIAL_DASHBOARD_STATE, DASHBOARD_ACTIONS } from '../constants';

export const useDashboard = () => {
  const [state, dispatch] = useReducer(dashboardReducer, INITIAL_DASHBOARD_STATE);


  const actions = {
    addUser: () => dispatch({ type: DASHBOARD_ACTIONS.ADD_USER }),
    removeUser: () => dispatch({ type: DASHBOARD_ACTIONS.REMOVE_USER }),
    addOrder: () => dispatch({ type: DASHBOARD_ACTIONS.ADD_ORDER }),
    removeOrder: () => dispatch({ type: DASHBOARD_ACTIONS.REMOVE_ORDER }),
    addProduct: () => dispatch({ type: DASHBOARD_ACTIONS.ADD_PRODUCT }),
    removeProduct: () => dispatch({ type: DASHBOARD_ACTIONS.REMOVE_PRODUCT }),
    resetData: () => dispatch({ type: DASHBOARD_ACTIONS.RESET_DATA })
  };

  return {
    state,
    dispatch,
    actions
  };
};
