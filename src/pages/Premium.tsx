import React from 'react';
import { motion } from 'framer-motion';
import { Crown, Check, Zap } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import PremiumCard from '../components/PremiumCard';
import { toast } from 'react-toastify';

const Premium: React.FC = () => {
  const plans = [
    {
      title: 'Basic',
      price: '$4.99',
      period: 'month',
      features: [
        'Advanced moderation commands',
        'Custom welcome messages',
        'Basic analytics',
        'Priority support',
        'Remove command cooldowns'
      ]
    },
    {
      title: 'Pro',
      price: '$9.99',
      period: 'month',
      popular: true,
      features: [
        'Everything in Basic',
        'Music bot with premium sources',
        'Advanced analytics & insights',
        'Custom command creation',
        'Auto-moderation features',
        'Server backup & restore',
        'Custom bot branding'
      ]
    },
    {
      title: 'Enterprise',
      price: '$19.99',
      period: 'month',
      features: [
        'Everything in Pro',
        'Multiple server management',
        'Advanced API access',
        'Custom integrations',
        'Dedicated support manager',
        'White-label solution',
        'Custom feature development'
      ]
    }
  ];

  const premiumFeatures = [
    {
      icon: Zap,
      title: 'Lightning Fast Performance',
      description: 'Premium servers ensure your commands execute instantly with zero delays.'
    },
    {
      icon: Crown,
      title: 'Exclusive Commands',
      description: 'Access to premium-only commands and features not available in the free tier.'
    },
    {
      icon: Check,
      title: 'Priority Support',
      description: 'Get help faster with priority support queue and dedicated assistance.'
    }
  ];

  const handleSelectPlan = (planTitle: string) => {
    toast.success(`Selected ${planTitle} plan! Redirecting to payment...`);
  };

  return (
    <div className="min-h-screen bg-slate-50">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-indigo-600 to-blue-600 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <Crown className="h-16 w-16 mx-auto mb-6 text-yellow-300" />
              <h1 className="text-4xl sm:text-5xl font-bold mb-6">
                Unlock Premium Features
              </h1>
              <p className="text-xl text-indigo-100 mb-8 max-w-3xl mx-auto">
                Take your Discord server to the next level with advanced commands, analytics, and priority support.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Premium Features */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">Why Go Premium?</h2>
              <p className="text-xl text-slate-600">Discover the benefits of upgrading your Matrix Bot experience</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {premiumFeatures.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <motion.div
                    key={feature.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="text-center"
                  >
                    <div className="p-4 bg-indigo-100 rounded-full w-fit mx-auto mb-4">
                      <Icon className="h-8 w-8 text-indigo-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-slate-900 mb-3">
                      {feature.title}
                    </h3>
                    <p className="text-slate-600">
                      {feature.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Pricing Plans */}
        <section className="py-20 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
                Choose Your Plan
              </h2>
              <p className="text-xl text-slate-600">
                Select the perfect plan for your server's needs
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {plans.map((plan, index) => (
                <motion.div
                  key={plan.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <PremiumCard
                    {...plan}
                    onSelect={() => handleSelectPlan(plan.title)}
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">Frequently Asked Questions</h2>
            </div>

            <div className="space-y-6">
              {[
                {
                  question: 'Can I cancel my subscription anytime?',
                  answer: 'Yes, you can cancel your subscription at any time. Your premium features will remain active until the end of your billing period.'
                },
                {
                  question: 'Do you offer refunds?',
                  answer: 'We offer a 7-day money-back guarantee for all premium plans. If you\'re not satisfied, contact our support team.'
                },
                {
                  question: 'Can I upgrade or downgrade my plan?',
                  answer: 'Absolutely! You can change your plan at any time. Changes will be prorated and reflected in your next billing cycle.'
                },
                {
                  question: 'Is there a free trial available?',
                  answer: 'Yes, we offer a 3-day free trial for all premium plans. No credit card required to start your trial.'
                }
              ].map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-slate-50 rounded-lg p-6"
                >
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">
                    {faq.question}
                  </h3>
                  <p className="text-slate-600">
                    {faq.answer}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Premium;