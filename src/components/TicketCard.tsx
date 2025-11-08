import React from 'react';
import { motion } from 'framer-motion';
import { Clock, MessageCircle, User } from 'lucide-react';
import { formatDistanceToNow } from 'date-fns';

interface TicketCardProps {
  id: string;
  title: string;
  status: 'open' | 'pending' | 'closed';
  priority: 'low' | 'medium' | 'high';
  createdAt: Date;
  lastReply?: Date;
  onClick: () => void;
}

const TicketCard: React.FC<TicketCardProps> = ({
  id,
  title,
  status,
  priority,
  createdAt,
  lastReply,
  onClick
}) => {
  const statusColors = {
    open: 'bg-green-100 text-green-800',
    pending: 'bg-yellow-100 text-yellow-800',
    closed: 'bg-slate-100 text-slate-600'
  };

  const priorityColors = {
    low: 'bg-blue-100 text-blue-800',
    medium: 'bg-orange-100 text-orange-800',
    high: 'bg-red-100 text-red-800'
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      onClick={onClick}
      className="bg-white rounded-xl p-6 border border-slate-200 hover:shadow-lg transition-all duration-200 cursor-pointer"
    >
      <div className="flex items-start justify-between mb-4">
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-slate-900 mb-2">{title}</h3>
          <p className="text-sm text-slate-600">#{id}</p>
        </div>
        <div className="flex flex-col space-y-2">
          <span className={`px-2 py-1 rounded-full text-xs font-medium ${statusColors[status]}`}>
            {status.charAt(0).toUpperCase() + status.slice(1)}
          </span>
          <span className={`px-2 py-1 rounded-full text-xs font-medium ${priorityColors[priority]}`}>
            {priority.charAt(0).toUpperCase() + priority.slice(1)}
          </span>
        </div>
      </div>

      <div className="flex items-center justify-between text-sm text-slate-500">
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-1">
            <Clock className="h-4 w-4" />
            <span>{formatDistanceToNow(createdAt, { addSuffix: true })}</span>
          </div>
          {lastReply && (
            <div className="flex items-center space-x-1">
              <MessageCircle className="h-4 w-4" />
              <span>Reply {formatDistanceToNow(lastReply, { addSuffix: true })}</span>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default TicketCard;