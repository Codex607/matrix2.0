import React from 'react';
import { motion } from 'framer-motion';
import { Check, Crown } from 'lucide-react';

interface PremiumCardProps {
  title: string;
  price: string;
  period: string;
  features: string[];
  popular?: boolean;
  onSelect: () => void;
}

const PremiumCard: React.FC<PremiumCardProps> = ({
  title,
  price,
  period,
  features,
  popular = false,
  onSelect
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className={`relative bg-white rounded-xl p-8 border-2 transition-all duration-200 hover:shadow-xl ${
        popular
          ? 'border-indigo-500 shadow-lg'
          : 'border-slate-200 hover:border-indigo-300'
      }`}
    >
      {popular && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
          <div className="bg-indigo-600 text-white px-4 py-1 rounded-full text-sm font-medium flex items-center space-x-1">
            <Crown className="h-4 w-4" />
            <span>Most Popular</span>
          </div>
        </div>
      )}

      <div className="text-center mb-8">
        <h3 className="text-2xl font-bold text-slate-900 mb-2">{title}</h3>
        <div className="flex items-baseline justify-center space-x-1">
          <span className="text-4xl font-bold text-slate-900">{price}</span>
          <span className="text-slate-600">/{period}</span>
        </div>
      </div>

      <ul className="space-y-4 mb-8">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start space-x-3">
            <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
            <span className="text-slate-600">{feature}</span>
          </li>
        ))}
      </ul>

      <button
        onClick={onSelect}
        className={`w-full py-3 px-4 rounded-lg font-medium transition-colors ${
          popular
            ? 'bg-indigo-600 text-white hover:bg-indigo-700'
            : 'bg-slate-100 text-slate-900 hover:bg-slate-200'
        }`}
      >
        Get Started
      </button>
    </motion.div>
  );
};

export default PremiumCard;