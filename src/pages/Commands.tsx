import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Filter, Plus } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import CommandCard from '../components/CommandCard';
import { toast } from 'react-toastify';

const Commands: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterCategory, setFilterCategory] = useState('all');

  const commands = [
    {
      id: '1',
      name: 'Ban User',
      description: 'Ban a user from the server with optional reason',
      trigger: '!ban @user [reason]',
      category: 'moderation',
      enabled: true,
      premium: false
    },
    {
      id: '2',
      name: 'Music Player',
      description: 'Play music from YouTube or Spotify',
      trigger: '!play [song/url]',
      category: 'music',
      enabled: true,
      premium: true
    },
    {
      id: '3',
      name: 'Welcome Message',
      description: 'Send custom welcome messages to new members',
      trigger: 'Auto-triggered',
      category: 'utility',
      enabled: false,
      premium: false
    },
    {
      id: '4',
      name: 'Server Stats',
      description: 'Display detailed server statistics',
      trigger: '!stats',
      category: 'utility',
      enabled: true,
      premium: true
    },
    {
      id: '5',
      name: 'Mute User',
      description: 'Temporarily mute a user in voice/text channels',
      trigger: '!mute @user [duration]',
      category: 'moderation',
      enabled: true,
      premium: false
    },
    {
      id: '6',
      name: 'Custom Roles',
      description: 'Create and assign custom roles with permissions',
      trigger: '!role create [name]',
      category: 'management',
      enabled: false,
      premium: true
    }
  ];

  const categories = [
    { value: 'all', label: 'All Commands' },
    { value: 'moderation', label: 'Moderation' },
    { value: 'music', label: 'Music' },
    { value: 'utility', label: 'Utility' },
    { value: 'management', label: 'Management' }
  ];

  const filteredCommands = commands.filter(command => {
    const matchesSearch = command.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         command.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = filterCategory === 'all' || command.category === filterCategory;
    return matchesSearch && matchesCategory;
  });

  const handleToggleCommand = (commandId: string, enabled: boolean) => {
    toast.success(`Command ${enabled ? 'enabled' : 'disabled'} successfully!`);
  };

  const handleEditCommand = (commandId: string) => {
    toast.info('Command editor will be available soon!');
  };

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
              <h1 className="text-3xl font-bold text-slate-900">Commands</h1>
              <p className="text-slate-600 mt-1">Manage and configure your bot commands</p>
            </div>
            <button className="mt-4 sm:mt-0 bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors font-medium flex items-center space-x-2">
              <Plus className="h-4 w-4" />
              <span>Add Command</span>
            </button>
          </motion.div>
        </div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-white rounded-xl p-6 border border-slate-200 mb-8"
        >
          <div className="flex flex-col sm:flex-row gap-4">
            {/* Search */}
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-slate-400" />
              <input
                type="text"
                placeholder="Search commands..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              />
            </div>

            {/* Category Filter */}
            <div className="relative">
              <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-slate-400" />
              <select
                value={filterCategory}
                onChange={(e) => setFilterCategory(e.target.value)}
                className="pl-10 pr-8 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent appearance-none bg-white min-w-[160px]"
              >
                {categories.map(category => (
                  <option key={category.value} value={category.value}>
                    {category.label}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </motion.div>

        {/* Commands Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCommands.map((command, index) => (
            <motion.div
              key={command.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + index * 0.1 }}
            >
              <CommandCard
                name={command.name}
                description={command.description}
                trigger={command.trigger}
                enabled={command.enabled}
                premium={command.premium}
                onToggle={(enabled) => handleToggleCommand(command.id, enabled)}
                onEdit={() => handleEditCommand(command.id)}
              />
            </motion.div>
          ))}
        </div>

        {filteredCommands.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <p className="text-slate-600 text-lg">No commands found matching your criteria.</p>
          </motion.div>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default Commands;