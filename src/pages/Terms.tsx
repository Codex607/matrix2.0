import React from 'react';
import { motion } from 'framer-motion';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Terms: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-50">
      <Header />
      
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-xl p-8 border border-slate-200"
        >
          <h1 className="text-3xl font-bold text-slate-900 mb-8">Terms of Service</h1>
          
          <div className="prose prose-slate max-w-none">
            <p className="text-slate-600 mb-6">
              Last updated: January 20, 2025
            </p>
            
            <section className="mb-8">
              <h2 className="text-xl font-semibold text-slate-900 mb-4">Acceptance of Terms</h2>
              <p className="text-slate-600 mb-4">
                By accessing and using Matrix Bot services, you accept and agree to be bound by the terms 
                and provision of this agreement.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-slate-900 mb-4">Use License</h2>
              <p className="text-slate-600 mb-4">
                Permission is granted to temporarily use Matrix Bot for personal, non-commercial transitory viewing only.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-slate-900 mb-4">Disclaimer</h2>
              <p className="text-slate-600 mb-4">
                The materials on Matrix Bot are provided on an 'as is' basis. Matrix Bot makes no warranties, 
                expressed or implied, and hereby disclaims and negates all other warranties.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-slate-900 mb-4">Contact Information</h2>
              <p className="text-slate-600">
                If you have any questions about these Terms of Service, please contact us through our support system.
              </p>
            </section>
          </div>
        </motion.div>
      </main>

      <Footer />
    </div>
  );
};

export default Terms;