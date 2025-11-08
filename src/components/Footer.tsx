import React from 'react';
import { Link } from 'react-router-dom';
import { Bot, Github, Twitter, MessageCircle } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-zinc-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Bot className="h-8 w-8 text-indigo-400" />
              <span className="text-xl font-bold">Matrix Bot</span>
            </div>
            <p className="text-slate-400 mb-4 max-w-md">
              The ultimate Discord bot management platform. Control your server with advanced commands, premium features, and dedicated support.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-slate-400 hover:text-white transition-colors" aria-label="GitHub">
                <Github className="h-5 w-5" />
              </a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors" aria-label="Twitter">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors" aria-label="Discord">
                <MessageCircle className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/dashboard" className="text-slate-400 hover:text-white transition-colors">Dashboard</Link></li>
              <li><Link to="/commands" className="text-slate-400 hover:text-white transition-colors">Commands</Link></li>
              <li><Link to="/premium" className="text-slate-400 hover:text-white transition-colors">Premium</Link></li>
              <li><Link to="/support" className="text-slate-400 hover:text-white transition-colors">Support</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><Link to="/privacy" className="text-slate-400 hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms" className="text-slate-400 hover:text-white transition-colors">Terms of Service</Link></li>
              <li><Link to="/cookies" className="text-slate-400 hover:text-white transition-colors">Cookie Policy</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-700 mt-8 pt-8 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-slate-400 text-sm">
            © 2025 Matrix Bot. All rights reserved.
          </p>
          <p className="text-slate-400 text-sm mt-2 sm:mt-0">
            Built with ❤️ by <a rel="nofollow" target="_blank" href="https://meku.dev" className="text-indigo-400 hover:text-indigo-300 transition-colors">Meku.dev</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;