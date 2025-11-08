import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Plus, Search, Filter } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import TicketCard from '../components/TicketCard';
import { toast } from 'react-toastify';

const Support: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');
  const [showCreateTicket, setShowCreateTicket] = useState(false);

  const tickets = [
    {
      id: 'TKT-001',
      title: 'Bot not responding to commands',
      status: 'open' as const,
      priority: 'high' as const,
      createdAt: new Date('2025-01-20T10:00:00Z'),
      lastReply: new Date('2025-01-20T14:30:00Z')
    },
    {
      id: 'TKT-002',
      title: 'Premium features not working',
      status: 'pending' as const,
      priority: 'medium' as const,
      createdAt: new Date('2025-01-19T15:20:00Z'),
      lastReply: new Date('2025-01-19T16:45:00Z')
    },
    {
      id: 'TKT-003',
      title: 'How to setup welcome messages?',
      status: 'closed' as const,
      priority: 'low' as const,
      createdAt: new Date('2025-01-18T09:15:00Z')
    },
    {
      id: 'TKT-004',
      title: 'Music bot connection issues',
      status: 'open' as const,
      priority: 'medium' as const,
      createdAt: new Date('2025-01-17T11:30:00Z')
    }
  ];

  const statusOptions = [
    { value: 'all', label: 'All Tickets' },
    { value: 'open', label: 'Open' },
    { value: 'pending', label: 'Pending' },
    { value: 'closed', label: 'Closed' }
  ];

  const filteredTickets = tickets.filter(ticket => {
    const matchesSearch = ticket.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         ticket.id.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = filterStatus === 'all' || ticket.status === filterStatus;
    return matchesSearch && matchesStatus;
  });

  const handleTicketClick = (ticketId: string) => {
    toast.info(`Opening ticket ${ticketId}...`);
  };

  const handleCreateTicket = () => {
    setShowCreateTicket(true);
  };

  const handleSubmitTicket = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success('Support ticket created successfully!');
    setShowCreateTicket(false);
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
              <h1 className="text-3xl font-bold text-slate-900">Support Center</h1>
              <p className="text-slate-600 mt-1">Get help with Matrix Bot and manage your support tickets</p>
            </div>
            <button
              onClick={handleCreateTicket}
              className="mt-4 sm:mt-0 bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors font-medium flex items-center space-x-2"
            >
              <Plus className="h-4 w-4" />
              <span>Create Ticket</span>
            </button>
          </motion.div>
        </div>

        {/* Quick Help */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-gradient-to-r from-blue-500 to-indigo-600 rounded-xl p-6 text-white mb-8"
        >
          <h2 className="text-xl font-semibold mb-4">Need Quick Help?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-white/10 rounded-lg p-4">
              <h3 className="font-medium mb-2">Documentation</h3>
              <p className="text-sm text-blue-100">Check our comprehensive guides and tutorials</p>
            </div>
            <div className="bg-white/10 rounded-lg p-4">
              <h3 className="font-medium mb-2">Discord Server</h3>
              <p className="text-sm text-blue-100">Join our community for instant help</p>
            </div>
            <div className="bg-white/10 rounded-lg p-4">
              <h3 className="font-medium mb-2">Status Page</h3>
              <p className="text-sm text-blue-100">Check if there are any ongoing issues</p>
            </div>
          </div>
        </motion.div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white rounded-xl p-6 border border-slate-200 mb-8"
        >
          <div className="flex flex-col sm:flex-row gap-4">
            {/* Search */}
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-slate-400" />
              <input
                type="text"
                placeholder="Search tickets..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              />
            </div>

            {/* Status Filter */}
            <div className="relative">
              <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-slate-400" />
              <select
                value={filterStatus}
                onChange={(e) => setFilterStatus(e.target.value)}
                className="pl-10 pr-8 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent appearance-none bg-white min-w-[140px]"
              >
                {statusOptions.map(option => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </motion.div>

        {/* Tickets Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {filteredTickets.map((ticket, index) => (
            <motion.div
              key={ticket.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + index * 0.1 }}
            >
              <TicketCard
                {...ticket}
                onClick={() => handleTicketClick(ticket.id)}
              />
            </motion.div>
          ))}
        </div>

        {filteredTickets.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <p className="text-slate-600 text-lg">No tickets found matching your criteria.</p>
          </motion.div>
        )}

        {/* Create Ticket Modal */}
        {showCreateTicket && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50"
            onClick={() => setShowCreateTicket(false)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="bg-white rounded-xl p-6 w-full max-w-md"
              onClick={(e) => e.stopPropagation()}
            >
              <h2 className="text-xl font-semibold text-slate-900 mb-4">Create Support Ticket</h2>
              <form onSubmit={handleSubmitTicket} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">
                    Subject
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                    placeholder="Brief description of your issue"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">
                    Priority
                  </label>
                  <select className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent">
                    <option value="low">Low</option>
                    <option value="medium">Medium</option>
                    <option value="high">High</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">
                    Description
                  </label>
                  <textarea
                    required
                    rows={4}
                    className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                    placeholder="Detailed description of your issue..."
                  />
                </div>
                <div className="flex space-x-3 pt-4">
                  <button
                    type="submit"
                    className="flex-1 bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition-colors font-medium"
                  >
                    Create Ticket
                  </button>
                  <button
                    type="button"
                    onClick={() => setShowCreateTicket(false)}
                    className="flex-1 bg-slate-200 text-slate-800 py-2 rounded-lg hover:bg-slate-300 transition-colors font-medium"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </motion.div>
          </motion.div>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default Support;