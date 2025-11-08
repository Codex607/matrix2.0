import React from 'react';
import { motion } from 'framer-motion';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Cookies: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-50">
      <Header />
      
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-xl p-8 border border-slate-200"
        >
          <h1 className="text-3xl font-bold text-slate-900 mb-8">Cookie Policy</h1>
          
          <div className="prose prose-slate max-w-none">
            <p className="text-slate-600 mb-6">
              Last updated: January 20, 2025
            </p>
            
            <section className="mb-8">
              <h2 className="text-xl font-semibold text-slate-900 mb-4">What Are Cookies</h2>
              <p className="text-slate-600 mb-4">
                Cookies are small text files that are placed on your computer or mobile device when you visit our website.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-slate-900 mb-4">How We Use Cookies</h2>
              <p className="text-slate-600 mb-4">
                We use cookies to improve your experience on our website, remember your preferences, and analyze how you use our services.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-slate-900 mb-4">Managing Cookies</h2>
              <p className="text-slate-600 mb-4">
                You can control and/or delete cookies as you wish. You can delete all cookies that are already on your computer 
                and you can set most browsers to prevent them from being placed.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-slate-900 mb-4">Contact Us</h2>
              <p className="text-slate-600">
                If you have any questions about our use of cookies, please contact us through our support system.
              </p>
            </section>
          </div>
        </motion.div>
      </main>

      <Footer />
    </div>
  );
};

export default Cookies;