'use client';
import { useState } from 'react';
import Button from '@/components/ui/Button';

export default function ContactPage() {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    // Simulate API call
    setTimeout(() => setStatus('success'), 1500);
  };

  if (status === 'success') {
    return (
      <div className="container mx-auto px-4 py-20 text-center">
        <h2 className="text-2xl font-bold text-green-600 mb-4">Message Sent!</h2>
        <p>We will get back to you shortly.</p>
        <Button onClick={() => setStatus('idle')} className="mt-4">Send another</Button>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-12 max-w-2xl">
      <h1 className="text-4xl font-bold text-primary mb-8">Contact Us</h1>
      <form onSubmit={handleSubmit} className="space-y-6 bg-gray-50 p-8 rounded-lg">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
          <input required type="text" className="w-full p-3 border rounded-md focus:ring-2 focus:ring-secondary outline-none" placeholder="John Doe" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
          <input required type="email" className="w-full p-3 border rounded-md focus:ring-2 focus:ring-secondary outline-none" placeholder="john@example.com" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Inquiry Type</label>
          <select className="w-full p-3 border rounded-md focus:ring-2 focus:ring-secondary outline-none">
            <option>General Inquiry</option>
            <option>Course Enrollment</option>
            <option>Translation Services</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
          <textarea required rows={4} className="w-full p-3 border rounded-md focus:ring-2 focus:ring-secondary outline-none" placeholder="How can we help?" />
        </div>
        <Button type="submit" disabled={status === 'submitting'} className="w-full">
          {status === 'submitting' ? 'Sending...' : 'Send Message'}
        </Button>
      </form>
    </div>
  );
}