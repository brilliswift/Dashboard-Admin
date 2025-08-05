import React from 'react';
import { useDashboard } from './hooks/useDashboard';
import Header from './components/Header';
import ResetButton from './components/ResetButton';
import StatGrid from './components/StatGrid';
import { DASHBOARD_ACTIONS } from './constants';

const Dashboard = () => {
  const { state, dispatch } = useDashboard();

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <Header />

        {/* Tombol Reset */}
        <ResetButton 
          onReset={() => dispatch({ type: DASHBOARD_ACTIONS.RESET_DATA })} 
        />

        {/* Grid Cards */}
        <StatGrid state={state} dispatch={dispatch} />

      </div>
    </div>
  );
};

export default Dashboard;
