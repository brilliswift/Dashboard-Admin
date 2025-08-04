import React, { useReducer } from 'react';
import Header from './Header';
import ResetButton from './ResetButton';
import StatGrid from './StatGrid';
import { dashboardReducer, initialState } from '../reducer/dashboardReducer';



const Dashboard = () => {
  const [state, dispatch] = useReducer(dashboardReducer, initialState);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <Header/>

        {/* Tombol Reset */}
        <ResetButton/>

        {/* Grid Cards */}
        <StatGrid/>

      </div>
    </div>
  );
};

export default Dashboard;