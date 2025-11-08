import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Settings, ToggleLeft, ToggleRight, Edit3 } from 'lucide-react';

interface CommandCardProps {
  name: string;
  description: string;
  trigger: string;
  enabled: boolean;
  premium: boolean;
  onToggle: (enabled: boolean) => void;
  onEdit: () => void;
}

const CommandCard: React.FC<CommandCardProps> = ({
  name,
  description,
  trigger,
  enabled,
  premium,
  onToggle,
  onEdit
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white rounded-xl p-6 border border-slate-200 hover:shadow-lg transition-all duration-200"
    >
      <div className="flex items-start justify-between mb-4">
        <div className="flex-1">
          <div className="flex items-center space-x-2 mb-2">
            <h3 className="text-lg font-semibold text-slate-900">{name}</h3>
            {premium && (
              <span className="px-2 py-1 bg-yellow-100 text-yellow-800 text-xs font-medium rounded-full">
                Premium
              </span>
            )}
          </div>
          <p className="text-slate-600 text-sm mb-2">{description}</p>
          <code className="bg-slate-100 text-slate-800 px-2 py-1 rounded text-sm">
            {trigger}
          </code>
        </div>
      </div>

      <div className="flex items-center justify-between pt-4 border-t border-slate-100">
        <div className="flex items-center space-x-2">
          <button
            onClick={() => onToggle(!enabled)}
            className={`flex items-center space-x-1 px-3 py-1 rounded-lg text-sm font-medium transition-colors ${
              enabled
                ? 'bg-green-100 text-green-700 hover:bg-green-200'
                : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
            }`}
            aria-label={`${enabled ? 'Disable' : 'Enable'} ${name} command`}
          >
            {enabled ? <ToggleRight className="h-4 w-4" /> : <ToggleLeft className="h-4 w-4" />}
            <span>{enabled ? 'Enabled' : 'Disabled'}</span>
          </button>
        </div>

        <button
          onClick={onEdit}
          className="flex items-center space-x-1 px-3 py-1 rounded-lg text-sm font-medium text-indigo-600 hover:bg-indigo-50 transition-colors"
          aria-label={`Edit ${name} command`}
        >
          <Edit3 className="h-4 w-4" />
          <span>Edit</span>
        </button>
      </div>
    </motion.div>
  );
};

export default CommandCard;