import React from 'react';

const StatCard = ({ title, value, icon: Icon, bgColor, onAdd, onRemove }) => {
  return (
    <div className={`${bgColor} rounded-lg p-6 text-white shadow-md`}>
      <div className="flex items-center justify-between mb-4">
        <div>
          <h3 className="text-lg font-semibold">{title}</h3>
          <p className="text-3xl font-bold">{value.toLocaleString()}</p>
        </div>
        <Icon size={48} className="opacity-80" />
      </div>
      <div className="flex gap-2">
        <button
          onClick={onAdd}
          className="bg-white bg-opacity-20 hover:bg-opacity-30 px-3 py-1 rounded text-sm font-medium transition-colors"
        >
          + Tambah
        </button>
        <button
          onClick={onRemove}
          className="bg-white bg-opacity-20 hover:bg-opacity-30 px-3 py-1 rounded text-sm font-medium transition-colors"
        >
          - Kurangi
        </button>
      </div>
    </div>
  );
};

export default StatCard;