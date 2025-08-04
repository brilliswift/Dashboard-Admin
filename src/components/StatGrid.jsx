import React from 'react';
import { Users, ShoppingCart, DollarSign, TrendingUp } from 'lucide-react';
import StatCard from './StatCard';




const StatCardGrid = ({ state, dispatch }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
      <StatCard
        title="Total Pengguna"
        value={state.totalUsers}
        icon={Users}
        bgColor="bg-blue-500"
        onAdd={() => dispatch({ type: 'ADD_USER' })}
        onRemove={() => dispatch({ type: 'REMOVE_USER' })}
      />
      
      <StatCard
        title="Total Pesanan"
        value={state.totalOrders}
        icon={ShoppingCart}
        bgColor="bg-green-500"
        onAdd={() => dispatch({ type: 'ADD_ORDER' })}
        onRemove={() => dispatch({ type: 'REMOVE_ORDER' })}
      />
      
      <StatCard
        title="Total Pendapatan"
        value={state.totalRevenue}
        icon={DollarSign}
        bgColor="bg-purple-500"
        onAdd={() => dispatch({ type: 'ADD_ORDER' })}
        onRemove={() => dispatch({ type: 'REMOVE_ORDER' })}
      />
      
      <StatCard
        title="Total Produk"
        value={state.totalProducts}
        icon={TrendingUp}
        bgColor="bg-orange-500"
        onAdd={() => dispatch({ type: 'ADD_PRODUCT' })}
        onRemove={() => dispatch({ type: 'REMOVE_PRODUCT' })}
      />
    </div>
  );
};

export default StatGrid;