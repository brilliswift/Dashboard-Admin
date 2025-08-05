import React from 'react';
import { Users, ShoppingCart, DollarSign, TrendingUp } from 'lucide-react';
import StatCard from './StatCard';
import { DASHBOARD_ACTIONS } from '../constants';

const StatGrid = ({ state, dispatch }) => {
  // Konfigurasi untuk setiap stat card
  const statsConfig = [
    {
      title: "Total Pengguna",
      value: state.totalUsers,
      icon: Users,
      bgColor: "bg-blue-500",
      addAction: DASHBOARD_ACTIONS.ADD_USER,
      removeAction: DASHBOARD_ACTIONS.REMOVE_USER
    },
    {
      title: "Total Pesanan",
      value: state.totalOrders,
      icon: ShoppingCart,
      bgColor: "bg-green-500",
      addAction: DASHBOARD_ACTIONS.ADD_ORDER,
      removeAction: DASHBOARD_ACTIONS.REMOVE_ORDER
    },
    {
      title: "Total Pendapatan",
      value: state.totalRevenue,
      icon: DollarSign,
      bgColor: "bg-purple-500",
      addAction: DASHBOARD_ACTIONS.ADD_ORDER, // menambah order juga menambah revenue
      removeAction: DASHBOARD_ACTIONS.REMOVE_ORDER
    },
    {
      title: "Total Produk",
      value: state.totalProducts,
      icon: TrendingUp,
      bgColor: "bg-orange-500",
      addAction: DASHBOARD_ACTIONS.ADD_PRODUCT,
      removeAction: DASHBOARD_ACTIONS.REMOVE_PRODUCT
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
      {statsConfig.map((stat, index) => (
        <StatCard
          key={index}
          title={stat.title}
          value={stat.value}
          icon={stat.icon}
          bgColor={stat.bgColor}
          onAdd={() => dispatch({ type: stat.addAction })}
          onRemove={() => dispatch({ type: stat.removeAction })}
        />
      ))}
    </div>
  );
};

export default StatGrid;
