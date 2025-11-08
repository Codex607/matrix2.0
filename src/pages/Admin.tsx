import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Users, Server, Crown, MessageSquare, Settings, Search, Filter } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import StatsCard from '../components/StatsCard';

const Admin: React.FC = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [searchTerm, setSearchTerm] = useState('');

  const adminStats = [
    { title: 'Total Users', value: '125,430', icon: Users, trend: { value: 15, isPositive: true } },
    { title: 'Active Servers', value: '50,234', icon: Server, trend: { value: 8, isPositive: true } },
    { title: 'Premium Users', value: '12,567', icon: Crown, trend: { value: 23, isPositive: true } },
    { title: 'Support Tickets', value: '1,234', icon: MessageSquare, trend: { value: -5, isPositive: false } }
  ];

  const recentUsers = [
    { id: '1', username: 'user123', email: 'user123@example.com', premium: true, joinDate: '2025-01-20', servers: 5 },
    { id: '2', username: 'gamer456', email: 'gamer456@example.com', premium: false, joinDate: '2025-01-19', servers: 2 },
    { id: '3', username: 'admin789', email: 'admin789@example.com', premium: true, joinDate: '2025-01-18', servers: 12 },
    { id: '4', username: 'newbie101', email: 'newbie101@example.com', premium: false, joinDate: '2025-01-17', servers: 1 }
  ];

  const recentServers = [
    { id: '1', name: 'Gaming Community', members: 1250, premium: true, owner: 'user123', created: '2025-01-15' },
    { id: '2', name: 'Study Group', members: 45, premium: false, owner: 'student456', created: '2025-01-14' },
    { id: '3', name: 'Art Gallery', members: 890, premium: true, owner: 'artist789', created: '2025-01-13' },
    { id: '4', name: 'Tech Talk', members: 2340, premium: true, owner: 'developer101', created: '2025-01-12' }
  ];

  const tabs = [
    { id: 'overview', label: 'Overview', icon: Settings },
    { id: 'users', label: 'Users', icon: Users },
    { id: 'servers', label: 'Servers', icon: Server }
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
              <h1 className="text-3xl font-bold text-slate-900">Admin Panel</h1>
              <p className="text-slate-600 mt-1">Manage users, servers, and global settings</p>
            </div>
            <div className="mt-4 sm:mt-0">
              <span className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-medium">
                Admin Access
              </span>
            </div>
          </motion.div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {adminStats.map((stat, index) => (
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

        {/* Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-white rounded-xl border border-slate-200 mb-8"
        >
          <div className="border-b border-slate-200">
            <nav className="flex space-x-8 px-6">
              {tabs.map((tab) => {
                const Icon = tab.icon;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex items-center space-x-2 py-4 px-1 border-b-2 font-medium text-sm transition-colors ${
                      activeTab === tab.id
                        ? 'border-indigo-500 text-indigo-600'
                        : 'border-transparent text-slate-500 hover:text-slate-700 hover:border-slate-300'
                    }`}
                  >
                    <Icon className="h-4 w-4" />
                    <span>{tab.label}</span>
                  </button>
                );
              })}
            </nav>
          </div>

          <div className="p-6">
            {activeTab === 'overview' && (
              <div className="space-y-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900 mb-4">System Health</h3>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center p-3 bg-green-50 rounded-lg">
                        <span className="text-sm font-medium text-slate-900">Bot Uptime</span>
                        <span className="text-sm text-green-600">99.9%</span>
                      </div>
                      <div className="flex justify-between items-center p-3 bg-blue-50 rounded-lg">
                        <span className="text-sm font-medium text-slate-900">API Response Time</span>
                        <span className="text-sm text-blue-600">45ms</span>
                      </div>
                      <div className="flex justify-between items-center p-3 bg-yellow-50 rounded-lg">
                        <span className="text-sm font-medium text-slate-900">Database Load</span>
                        <span className="text-sm text-yellow-600">23%</span>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900 mb-4">Recent Activity</h3>
                    <div className="space-y-3">
                      <div className="p-3 border border-slate-200 rounded-lg">
                        <p className="text-sm font-medium text-slate-900">New server registered</p>
                        <p className="text-xs text-slate-500">2 minutes ago</p>
                      </div>
                      <div className="p-3 border border-slate-200 rounded-lg">
                        <p className="text-sm font-medium text-slate-900">Premium subscription activated</p>
                        <p className="text-xs text-slate-500">5 minutes ago</p>
                      </div>
                      <div className="p-3 border border-slate-200 rounded-lg">
                        <p className="text-sm font-medium text-slate-900">Support ticket resolved</p>
                        <p className="text-xs text-slate-500">10 minutes ago</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'users' && (
              <div>
                <div className="flex flex-col sm:flex-row gap-4 mb-6">
                  <div className="flex-1 relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-slate-400" />
                    <input
                      type="text"
                      placeholder="Search users..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="w-full pl-10 pr-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                    />
                  </div>
                  <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors font-medium">
                    Export Users
                  </button>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-slate-200">
                        <th className="text-left py-3 px-4 font-medium text-slate-900">User</th>
                        <th className="text-left py-3 px-4 font-medium text-slate-900">Email</th>
                        <th className="text-left py-3 px-4 font-medium text-slate-900">Premium</th>
                        <th className="text-left py-3 px-4 font-medium text-slate-900">Servers</th>
                        <th className="text-left py-3 px-4 font-medium text-slate-900">Join Date</th>
                        <th className="text-left py-3 px-4 font-medium text-slate-900">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {recentUsers.map((user) => (
                        <tr key={user.id} className="border-b border-slate-100 hover:bg-slate-50">
                          <td className="py-3 px-4 text-slate-900">{user.username}</td>
                          <td className="py-3 px-4 text-slate-600">{user.email}</td>
                          <td className="py-3 px-4">
                            <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                              user.premium ? 'bg-yellow-100 text-yellow-800' : 'bg-slate-100 text-slate-600'
                            }`}>
                              {user.premium ? 'Premium' : 'Free'}
                            </span>
                          </td>
                          <td className="py-3 px-4 text-slate-600">{user.servers}</td>
                          <td className="py-3 px-4 text-slate-600">{user.joinDate}</td>
                          <td className="py-3 px-4">
                            <button className="text-indigo-600 hover:text-indigo-700 text-sm font-medium">
                              Edit
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {activeTab === 'servers' && (
              <div>
                <div className="flex flex-col sm:flex-row gap-4 mb-6">
                  <div className="flex-1 relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-slate-400" />
                    <input
                      type="text"
                      placeholder="Search servers..."
                      className="w-full pl-10 pr-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                    />
                  </div>
                  <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors font-medium">
                    Export Servers
                  </button>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-slate-200">
                        <th className="text-left py-3 px-4 font-medium text-slate-900">Server Name</th>
                        <th className="text-left py-3 px-4 font-medium text-slate-900">Members</th>
                        <th className="text-left py-3 px-4 font-medium text-slate-900">Owner</th>
                        <th className="text-left py-3 px-4 font-medium text-slate-900">Premium</th>
                        <th className="text-left py-3 px-4 font-medium text-slate-900">Created</th>
                        <th className="text-left py-3 px-4 font-medium text-slate-900">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {recentServers.map((server) => (
                        <tr key={server.id} className="border-b border-slate-100 hover:bg-slate-50">
                          <td className="py-3 px-4 text-slate-900 font-medium">{server.name}</td>
                          <td className="py-3 px-4 text-slate-600">{server.members.toLocaleString()}</td>
                          <td className="py-3 px-4 text-slate-600">{server.owner}</td>
                          <td className="py-3 px-4">
                            <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                              server.premium ? 'bg-yellow-100 text-yellow-800' : 'bg-slate-100 text-slate-600'
                            }`}>
                              {server.premium ? 'Premium' : 'Free'}
                            </span>
                          </td>
                          <td className="py-3 px-4 text-slate-600">{server.created}</td>
                          <td className="py-3 px-4">
                            <button className="text-indigo-600 hover:text-indigo-700 text-sm font-medium">
                              Manage
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}
          </div>
        </motion.div>
      </main>

      <Footer />
    </div>
  );
};

export default Admin;