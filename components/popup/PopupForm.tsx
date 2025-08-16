import { ArrowRight, BarChart3, Building, CheckCircle, Clock, Mail, Phone, Shield, User, X, Zap } from 'lucide-react'
import React, { useState } from 'react'
import toast, { Toaster } from 'react-hot-toast'
import Image from 'next/image'
import logo from '@/public/images/logo.png'
import { Button } from '../ui/button'

interface PopupFormProps {
  setIsPopupOpen: (open: boolean) => void;
}

function PopupForm({ setIsPopupOpen }: PopupFormProps) {
  const [form, setForm] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    volume: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    setLoading(true);

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        toast.success("Message sent! We'll get back to you soon.");
        setTimeout(() => setIsPopupOpen(false), 2000);
      } else {
        toast.error('Failed to send. Please try again.');
      }
    } catch {
      toast.error('Error sending your message.');
    }
    setLoading(false);
  };

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-md z-50 flex items-center justify-center p-4 animate-fade-in">
      <Toaster position="top-center" />
      <div
        id="contact-popup"
        className="bg-white rounded-3xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto animate-scale-in border border-gray-100"
      >
        <div className="sm:p-8 p-5">
          <div className="flex items-center justify-between mb-8">
            <div className="sm:flex  items-center gap-4">
              <Image src={logo} alt="Logo" width={90} height={90} />
              <div>
                <h3 className="text-2xl font-bold text-gray-900">Let's Connect</h3>
                <p className="text-gray-600">Tell us about your payment processing needs</p>
              </div>
            </div>
            <Button
              variant="ghost"
              size="lg"
              onClick={() => setIsPopupOpen(false)}
              className="hover:bg-gray-100 rounded-full w-10 h-10 scale-200 p-0 cursor-pointer transition-all duration-200 hover:scale-250"
            >
              <X className="w-10 h-10" />
            </Button>
          </div>

          <form onSubmit={handleFormSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-3">
                  <User className="w-4 h-4 inline mr-2 text-blue-600" />
                  Full Name *
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  value={form.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-gray-50/50 hover:bg-white"
                  placeholder="Enter your full name"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-3">
                  <Building className="w-4 h-4 inline mr-2 text-blue-600" />
                  Company Name *
                </label>
                <input
                  type="text"
                  name="company"
                  required
                  value={form.company}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-gray-50/50 hover:bg-white"
                  placeholder="Enter your company name"
                />
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-3">
                  <Mail className="w-4 h-4 inline mr-2 text-blue-600" />
                  Business Email Address *
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  value={form.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-gray-50/50 hover:bg-white"
                  placeholder="Enter your business email"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-3">
                  <Phone className="w-4 h-4 inline mr-2 text-blue-600" />
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-gray-50/50 hover:bg-white"
                  placeholder="Enter your phone number"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-3">
                <BarChart3 className="w-4 h-4 inline mr-2 text-blue-600" />
                Monthly Transaction Volume
              </label>
              <select
                name="volume"
                value={form.volume}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-gray-50/50 hover:bg-white"
              >
                <option value="">Select your volume range</option>
                <option value="0-50k">$0 - $50,000</option>
                <option value="50k-250k">$50,000 - $250,000</option>
                <option value="250k-1m">$250,000 - $1,000,000</option>
                <option value="1m-5m">$1,000,000 - $5,000,000</option>
                <option value="5m+">$5,000,000+</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-3">
                <Zap className="w-4 h-4 inline mr-2 text-blue-600" />
                Tell us about your payment processing needs
              </label>
              <textarea
                rows={4}
                name="message"
                value={form.message}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 resize-none bg-gray-50/50 hover:bg-white"
                placeholder="Describe your current challenges, integration requirements, or specific features you need..."
              />
            </div>
            <div className="flex gap-4 pt-6">
              <Button
                type="button"
                variant="outline"
                onClick={() => setIsPopupOpen(false)}
                className="flex-1 py-3 rounded-md border-2 hover:bg-gray-50 transition-all duration-200"
                disabled={loading}
              >
                Cancel
              </Button>
              <Button
                type="submit"
                className="flex-1 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 hover:scale-105 rounded-md shadow-lg flex items-center justify-center"
                disabled={loading}
              >
                {loading ? (
                  <svg className="animate-spin h-5 w-5 text-white mr-2" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none"/>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/>
                  </svg>
                ) : (
                  <>
                    Send Message
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </>
                )}
              </Button>
            </div>
          </form>

          <div className="sm:block hidden mt-8 pt-6 border-t border-gray-100">
            <div className="flex items-center justify-center gap-8 text-sm text-gray-500">
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-green-500" />
                <span>Secure & Private</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-blue-500" />
                <span>24hr Response</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-purple-500" />
                <span>No Spam Promise</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PopupForm;