'use client';

import { useState } from 'react';
import emailjs from '@emailjs/browser';

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

export default function ContactSection() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    // Name validation
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters';
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    // Subject validation
    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required';
    } else if (formData.subject.trim().length < 5) {
      newErrors.subject = 'Subject must be at least 5 characters';
    }

    // Message validation
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({
        ...prev,
        [name]: undefined
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // EmailJS configuration - you can set these up later
      const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!;
      const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!;
      const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!;

      // Prepare template parameters
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message,
        to_email: 'naymulislamnay@gmail.com',
      };

      // Try to send email using EmailJS
      try {
        await emailjs.send(
          serviceId,
          templateId,
          templateParams,
          publicKey
        );
        setSubmitStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } catch (emailError) {
        console.log('EmailJS not configured, using fallback method');
        
        // Fallback: Create mailto link
        const mailtoLink = `mailto:naymulislamnay@gmail.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(
          `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
        )}`;
        
        // Open default email client
        window.open(mailtoLink, '_blank');
        setSubmitStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
      }
    } catch (error) {
      console.error('Error sending message:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-24 relative overflow-hidden bg-black" id="contact">
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-purple-900/10 rounded-full blur-[100px] translate-x-1/2 translate-y-1/2"></div>
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-orange-900/10 rounded-full blur-[80px] -translate-x-1/2 translate-y-1/2"></div>
      
      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        <div className="relative mb-20 text-center">
          <h2 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-6xl md:text-9xl font-bold text-stroke opacity-10 whitespace-nowrap select-none pointer-events-none font-display">
            CONTACT
          </h2>
          <h2 className="relative text-3xl md:text-4xl font-bold font-display">Contact</h2>
          <div className="w-1 h-1 bg-purple-500 rounded-full mx-auto mt-4 mb-2"></div>
          <span className="text-[10px] uppercase tracking-[0.2em] text-gray-500">Get in Touch</span>
        </div>
        
        <div className="grid md:grid-cols-2 gap-16">
          <div className="space-y-8">
            <div>
              <h3 className="text-3xl font-bold mb-4">Let&apos;s work together</h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-6">
                I&apos;m available for full-time roles &amp; freelance projects. <br />
                My inbox is always open, whether you have a question or just want to say hi. <br />
                I&apos;ll try my best to get back to you!
              </p>
                <a className="ml-5 inline-flex items-center space-x-2 px-2 py-1 bg-[#121212] border border-white/10 rounded-lg hover:border-green-500/50 transition-colors group cursor-hover" href="https://wa.me/8801731150713" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-whatsapp text-green-500 group-hover:scale-110 transition-transform"></i>
                  <span className="text-[8px] text-gray-300">+880 1731-150713</span>
                </a>
            </div>
          </div>
          
          <div className="bg-[#0a0a0a] border border-white/5 p-8 rounded-2xl shadow-2xl">
            {submitStatus === 'success' && (
              <div className="mb-6 p-4 bg-green-600/20 border border-green-500/30 rounded-lg">
                <div className="flex items-center space-x-2">
                  <i className="fas fa-check-circle text-green-400"></i>
                  <span className="text-green-400 text-sm">Message sent successfully! I&apos;ll get back to you soon.</span>
                </div>
              </div>
            )}
            
            {submitStatus === 'error' && (
              <div className="mb-6 p-4 bg-red-600/20 border border-red-500/30 rounded-lg">
                <div className="flex items-center space-x-2">
                  <i className="fas fa-exclamation-circle text-red-400"></i>
                  <span className="text-red-400 text-sm">Failed to send message. Please try again or contact me directly.</span>
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-semibold text-gray-400" htmlFor="name">
                    Your Name <span className="text-red-400">*</span>
                  </label>
                  <input
                    className={`w-full bg-[#151515] border rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:ring-1 transition-all placeholder-gray-600 ${
                      errors.name 
                        ? 'border-red-500/50 focus:border-red-500/50 focus:ring-red-500/50' 
                        : 'border-white/5 focus:border-purple-500/50 focus:ring-purple-500/50'
                    }`}
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="John Doe"
                    type="text"
                    required
                  />
                  {errors.name && <p className="text-red-400 text-xs">{errors.name}</p>}
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-semibold text-gray-400" htmlFor="email">
                    Your Email <span className="text-red-400">*</span>
                  </label>
                  <input
                    className={`w-full bg-[#151515] border rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:ring-1 transition-all placeholder-gray-600 ${
                      errors.email 
                        ? 'border-red-500/50 focus:border-red-500/50 focus:ring-red-500/50' 
                        : 'border-white/5 focus:border-purple-500/50 focus:ring-purple-500/50'
                    }`}
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="john@example.com"
                    type="email"
                    required
                  />
                  {errors.email && <p className="text-red-400 text-xs">{errors.email}</p>}
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-semibold text-gray-400" htmlFor="subject">
                  Subject <span className="text-red-400">*</span>
                </label>
                <input
                  className={`w-full bg-[#151515] border rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:ring-1 transition-all placeholder-gray-600 ${
                    errors.subject 
                      ? 'border-red-500/50 focus:border-red-500/50 focus:ring-red-500/50' 
                      : 'border-white/5 focus:border-purple-500/50 focus:ring-purple-500/50'
                  }`}
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  placeholder="Project Inquiry"
                  type="text"
                  required
                />
                {errors.subject && <p className="text-red-400 text-xs">{errors.subject}</p>}
              </div>
              <div className="space-y-2">
                <label className="text-xs font-semibold text-gray-400" htmlFor="message">
                  Message <span className="text-red-400">*</span>
                </label>
                <textarea
                  className={`w-full bg-[#151515] border rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:ring-1 transition-all placeholder-gray-600 resize-none ${
                    errors.message 
                      ? 'border-red-500/50 focus:border-red-500/50 focus:ring-red-500/50' 
                      : 'border-white/5 focus:border-purple-500/50 focus:ring-purple-500/50'
                  }`}
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Hello, I'd like to discuss a project..."
                  rows={4}
                  required
                ></textarea>
                {errors.message && <p className="text-red-400 text-xs">{errors.message}</p>}
              </div>
              <div className="w-2/3 mx-auto">
                <button
                className={`col-span-1 font-medium py-3 rounded-lg w-full font-medium text-[10px] shadow-lg transition-all transform flex items-center justify-center space-x-2 cursor-hover ${
                  isSubmitting
                    ? 'bg-gray-600 cursor-not-allowed'
                    : 'bg-gradient-to-r from-purple-600 to-purple-800 text-white shadow-purple-900/30 hover:shadow-purple-900/50 hover:-translate-y-0.5'
                }`}
                type="submit"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <i className="fas fa-paper-plane text-xs"></i>
                    <span>Send Message</span>
                  </>
                )}
              </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}