import React from 'react';
import { motion } from 'framer-motion';
import { Server, Users, MessageSquare, Activity, Settings, Crown } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import StatsCard from '../components/StatsCard';

const Dashboard: React.FC = () => {
  const serverStats = [
    { title: 'Total Members', value: '1,234', icon: Users, trend: { value: 12, isPositive: true } },
    { title: 'Commands Used', value: '5,678', icon: MessageSquare, trend: { value: 8, isPositive: true } },
    { title: 'Active Channels', value: '23', icon: Activity, trend: { value: 2, isPositive: true } },
    { title: 'Server Uptime', value: '99.9%', icon: Server, trend: { value: 0.1, isPositive: true } }
  ];

  const recentActivity = [
    { action: 'Command executed', details: '!ban @user123', time: '2 minutes ago' },
    { action: 'New member joined', details: 'Welcome @newuser!', time: '5 minutes ago' },
    { action: 'Role assigned', details: 'Moderator role to @helper', time: '10 minutes ago' },
    { action: 'Channel created', details: '#general-chat', time: '1 hour ago' },
    { action: 'Message deleted', details: 'Spam message removed', time: '2 hours ago' }
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col sm:flex-row sm:items-center sm:justify-between"
          >
            <div>
              <h1 className="text-3xl font-bold text-slate-900">Dashboard</h1>
              <p className="text-slate-600 mt-1">Welcome back! Here's what's happening with your server.</p>
            </div>
            <div className="mt-4 sm:mt-0 flex space-x-3">
              <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors font-medium flex items-center space-x-2">
                <Settings className="h-4 w-4" />
                <span>Server Settings</span>
              </button>
              <button className="bg-yellow-500 text-white px-4 py-2 rounded-lg hover:bg-yellow-600 transition-colors font-medium flex items-center space-x-2">
                <Crown className="h-4 w-4" />
                <span>Upgrade</span>
              </button>
            </div>
          </motion.div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {serverStats.map((stat, index) => (
            <motion.div
              key={stat.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <StatsCard {...stat} />
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Recent Activity */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="lg:col-span-2 bg-white rounded-xl p-6 border border-slate-200"
          >
            <h2 className="text-xl font-semibold text-slate-900 mb-6">Recent Activity</h2>
            <div className="space-y-4">
              {recentActivity.map((activity, index) => (
                <div key={index} className="flex items-start space-x-3 p-3 rounded-lg hover:bg-slate-50 transition-colors">
                  <div className="w-2 h-2 bg-indigo-500 rounded-full mt-2 flex-shrink-0"></div>
                  <div className="flex-1">
                    <p className="text-sm font-medium text-slate-900">{activity.action}</p>
                    <p className="text-sm text-slate-600">{activity.details}</p>
                    <p className="text-xs text-slate-400 mt-1">{activity.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Quick Actions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="bg-white rounded-xl p-6 border border-slate-200"
          >
            <h2 className="text-xl font-semibold text-slate-900 mb-6">Quick Actions</h2>
            <div className="space-y-3">
              <button className="w-full text-left p-3 rounded-lg hover:bg-slate-50 transition-colors border border-slate-200">
                <div className="font-medium text-slate-900">Manage Commands</div>
                <div className="text-sm text-slate-600">Configure bot commands</div>
              </button>
              <button className="w-full text-left p-3 rounded-lg hover:bg-slate-50 transition-colors border border-slate-200">
                <div className="font-medium text-slate-900">View Logs</div>
                <div className="text-sm text-slate-600">Check server activity</div>
              </button>
              <button className="w-full text-left p-3 rounded-lg hover:bg-slate-50 transition-colors border border-slate-200">
                <div className="font-medium text-slate-900">Create Ticket</div>
                <div className="text-sm text-slate-600">Get support help</div>
              </button>
              <button className="w-full text-left p-3 rounded-lg hover:bg-slate-50 transition-colors border border-slate-200">
                <div className="font-medium text-slate-900">Backup Settings</div>
                <div className="text-sm text-slate-600">Save configuration</div>
              </button>
            </div>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Dashboard;