import React from 'react';
import { useDashboard } from '../hooks/useDashboard';
import Header from './Header';
import ResetButton from './ResetButton';
import StatGrid from './StatGrid';
import { DASHBOARD_ACTIONS } from '../constants';

const Dashboard = () => {
    const { state, dispatch } = useDashboard();

    return (
        <div className="min-h-screen bg-gray-100 p-6">
            <div className="max-w-6xl mx-auto">
                <Header />
                <ResetButton
                    onReset={() => dispatch({ type: DASHBOARD_ACTIONS.RESET_DATA })}
                />
                <StatGrid state={state} dispatch={dispatch} />
            </div>
        </div>
    );
};

export default Dashboard;
