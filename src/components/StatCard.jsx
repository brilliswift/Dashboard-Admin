import React from 'react';

const StatCard = ({ 
  title, 
  value, 
  icon: Icon, 
  bgColor, 
  onAdd, 
  onRemove,
  addButtonText = "+ Tambah",
  removeButtonText = "- Kurangi"
}) => {
  const handleAdd = () => {
    if (onAdd && typeof onAdd === 'function') {
      onAdd();
    }
  };

  const handleRemove = () => {
    if (onRemove && typeof onRemove === 'function') {
      onRemove();
    }
  };

  return (
    <div className={`${bgColor} rounded-lg p-6 text-white shadow-md`}>
      <div className="flex items-center justify-between mb-4">
        <div>
          <h3 className="text-lg font-semibold">{title}</h3>
          <p className="text-3xl font-bold" title={value.toLocaleString()}>
            {value.toLocaleString()}
          </p>
        </div>
        {Icon && <Icon size={48} className="opacity-80" />}
      </div>
      
      <div className="flex gap-2">
        <button
          onClick={handleAdd}
          className="bg-white bg-opacity-20 hover:bg-opacity-30 px-3 py-1 rounded text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50"
          aria-label={`${addButtonText} ${title}`}
        >
          {addButtonText}
        </button>
        <button
          onClick={handleRemove}
          className="bg-white bg-opacity-20 hover:bg-opacity-30 px-3 py-1 rounded text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50"
          aria-label={`${removeButtonText} ${title}`}
        >
          {removeButtonText}
        </button>
      </div>
    </div>
  );
};

export default StatCard;
