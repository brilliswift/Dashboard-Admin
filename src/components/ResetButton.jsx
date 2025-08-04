import React from 'react';

const ResetButton = ({ onReset }) => {
  return (
    <div className="mb-6">
      <button
        onClick={onReset}
        className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg font-medium transition-colors"
      >
        Reset Semua Data
      </button>
    </div>
  );
};

export default ResetButton;