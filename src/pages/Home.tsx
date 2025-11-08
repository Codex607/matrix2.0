import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Bot, Shield, Zap, Users, Crown, MessageCircle, ArrowRight, CheckCircle } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Home: React.FC = () => {
  const features = [
    {
      icon: Bot,
      title: 'Advanced Commands',
      description: 'Powerful moderation, utility, and fun commands to enhance your Discord server experience.'
    },
    {
      icon: Shield,
      title: 'Secure & Reliable',
      description: 'Built with security in mind, ensuring your server data is protected and bot uptime is maximized.'
    },
    {
      icon: Zap,
      title: 'Lightning Fast',
      description: 'Optimized performance with instant command responses and minimal server resource usage.'
    },
    {
      icon: Users,
      title: 'Easy Management',
      description: 'Intuitive web dashboard to configure commands, settings, and permissions with ease.'
    },
    {
      icon: Crown,
      title: 'Premium Features',
      description: 'Unlock advanced functionality with custom commands, analytics, and priority support.'
    },
    {
      icon: MessageCircle,
      title: '24/7 Support',
      description: 'Dedicated support team ready to help you get the most out of Matrix Bot.'
    }
  ];

  const stats = [
    { label: 'Active Servers', value: '50,000+' },
    { label: 'Commands Executed', value: '10M+' },
    { label: 'Happy Users', value: '500K+' },
    { label: 'Uptime', value: '99.9%' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="relative overflow-hidden py-20 sm:py-32">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h1 className="text-4xl sm:text-6xl font-bold text-slate-900 mb-6">
                  The Ultimate
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-blue-500"> Discord Bot</span>
                  <br />Management Platform
                </h1>
                <p className="text-xl text-slate-600 mb-8 max-w-3xl mx-auto">
                  Take control of your Discord server with Matrix Bot's powerful commands, premium features, and intuitive management dashboard.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    to="/dashboard"
                    className="bg-indigo-600 text-white px-8 py-4 rounded-lg hover:bg-indigo-700 transition-colors font-medium flex items-center justify-center space-x-2"
                  >
                    <span>Get Started</span>
                    <ArrowRight className="h-5 w-5" />
                  </Link>
                  <Link
                    to="/premium"
                    className="bg-white text-indigo-600 px-8 py-4 rounded-lg hover:bg-slate-50 transition-colors font-medium border border-indigo-200"
                  >
                    View Premium
                  </Link>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-3xl sm:text-4xl font-bold text-indigo-600 mb-2">
                    {stat.value}
                  </div>
                  <div className="text-slate-600">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
                Everything You Need to Manage Your Server
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                Matrix Bot provides comprehensive tools and features to help you create the perfect Discord community.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <motion.div
                    key={feature.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="bg-white rounded-xl p-8 border border-slate-200 hover:shadow-lg transition-shadow"
                  >
                    <div className="p-3 bg-indigo-100 rounded-lg w-fit mb-4">
                      <Icon className="h-6 w-6 text-indigo-600" />
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

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-indigo-600 to-blue-600">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                Ready to Transform Your Discord Server?
              </h2>
              <p className="text-xl text-indigo-100 mb-8 max-w-2xl mx-auto">
                Join thousands of server owners who trust Matrix Bot to manage their communities.
              </p>
              <Link
                to="/dashboard"
                className="bg-white text-indigo-600 px-8 py-4 rounded-lg hover:bg-slate-50 transition-colors font-medium inline-flex items-center space-x-2"
              >
                <span>Start Managing Your Server</span>
                <ArrowRight className="h-5 w-5" />
              </Link>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Home;