import React, { useState, useEffect } from "react";
import { Github, Linkedin, Mail, MapPin, Phone, Send, Check, AlertCircle, MessageCircle, Star } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState({});
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState({ type: '', title: '', description: '' });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: null }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) newErrors.name = "Name is required";

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email)) {
        newErrors.email = "Please enter a valid email address";
      }
    }

    if (!formData.message.trim()) newErrors.message = "Message is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const showNotification = (type, title, description) => {
    setToastMessage({ type, title, description });
    setShowToast(true);
    setTimeout(() => setShowToast(false), 4000);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      showNotification('error', 'Please correct the errors', 'Some required fields need your attention');
      return;
    }

    setIsSubmitting(true);

    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));

      showNotification('success', 'Message sent successfully!', "Thank you for reaching out. I'll get back to you soon.");
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch {
      showNotification('error', 'Failed to send message', 'Please try again later or contact me directly via email.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="relative min-h-screen bg-gradient-to-br from-slate-900 via-blue-900/40 to-purple-900/40 py-20 overflow-hidden">
      {/* Floating Background Shapes */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-blue-500/8 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      <div className="absolute top-1/2 right-20 w-64 h-64 bg-cyan-500/6 rounded-full blur-3xl animate-pulse delay-500"></div>
      <div className="absolute bottom-10 left-20 w-80 h-80 bg-violet-500/8 rounded-full blur-3xl animate-pulse delay-2000"></div>

      {/* Toast Notification */}
      {showToast && (
        <div className="fixed top-6 right-6 z-50 animate-in slide-in-from-right-full duration-300">
          <div className={`p-4 rounded-xl backdrop-blur-xl border shadow-2xl max-w-sm ${
            toastMessage.type === 'success' 
              ? 'bg-emerald-500/20 border-emerald-500/30 text-emerald-100' 
              : 'bg-red-500/20 border-red-500/30 text-red-100'
          }`}>
            <div className="flex items-start gap-3">
              {toastMessage.type === 'success' ? 
                <Check className="h-5 w-5 text-emerald-400 mt-0.5" /> : 
                <AlertCircle className="h-5 w-5 text-red-400 mt-0.5" />
              }
              <div>
                <p className="font-semibold text-sm">{toastMessage.title}</p>
                <p className="text-xs opacity-90 mt-1">{toastMessage.description}</p>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-sm border border-blue-500/30 rounded-full px-4 py-2 mb-6">
            <MessageCircle className="w-4 h-4 text-blue-400" />
            <span className="text-sm font-medium text-slate-300">Let's Connect</span>
          </div>
          <h2 className="text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Have a project in mind or want to collaborate? I'd love to hear from you. 
            Let's create something amazing together.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information Card */}
          <div className="group">
            <div className="bg-gradient-to-br from-slate-800/60 to-slate-900/60 backdrop-blur-xl border border-slate-700/50 rounded-2xl lg:rounded-3xl p-8 lg:p-10 transition-all duration-500 hover:bg-gradient-to-br hover:from-slate-800/80 hover:to-slate-900/80 hover:border-slate-600/70 hover:shadow-2xl hover:shadow-blue-500/10 hover:-translate-y-2">
              <div className="flex items-center gap-3 mb-8">
                <div className="p-3 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl shadow-lg">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl lg:text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Contact Information
                </h3>
              </div>

              <div className="space-y-6">
                <ContactItem
                  icon={<Mail className="w-5 h-5" />}
                  iconBg="from-blue-500 to-cyan-500"
                  title="Email"
                  content={
                    <a href="mailto:rajuyadav973760@gmail.com" className="hover:text-blue-400 transition-colors">
                      rajuyadav973760@gmail.com
                    </a>
                  }
                />
                <ContactItem
                  icon={<Phone className="w-5 h-5" />}
                  iconBg="from-emerald-500 to-teal-500"
                  title="Phone"
                  content="+91 9737606648"
                />
                <ContactItem
                  icon={<Github className="w-5 h-5" />}
                  iconBg="from-purple-500 to-pink-500"
                  title="GitHub"
                  content={
                    <a
                      href="https://github.com/rajuyadav376"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-purple-400 transition-colors"
                    >
                    https://github.com/rajuyadav376
                    </a>
                  }
                />
                <ContactItem
                  icon={<Linkedin className="w-5 h-5" />}
                  iconBg="from-blue-600 to-blue-800"
                  title="LinkedIn"
                  content={
                    <a
                      href="https://www.linkedin.com/in/raju-yadav-76a541320/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-blue-400 transition-colors"
                    >
                     https://www.linkedin.com/in/raju-yadav-76a541320/
                    </a>
                  }
                />
                <ContactItem
                  icon={<MapPin className="w-5 h-5" />}
                  iconBg="from-orange-500 to-red-500"
                  title="Location"
                  content="Ahmedabad, Gujarat, India"
                />
              </div>

              {/* Stats */}
              <div className="mt-8 pt-8 border-t border-slate-700/50">
                <div className="grid grid-cols-3 gap-4">
                  <StatItem number="50+" label="Projects" />
                  <StatItem number="3+" label="Years" />
                  <StatItem number="24/7" label="Available" />
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form Card */}
          <div className="group">
            <div className="bg-gradient-to-br from-slate-800/60 to-slate-900/60 backdrop-blur-xl border border-slate-700/50 rounded-2xl lg:rounded-3xl p-8 lg:p-10 transition-all duration-500 hover:bg-gradient-to-br hover:from-slate-800/80 hover:to-slate-900/80 hover:border-slate-600/70 hover:shadow-2xl hover:shadow-purple-500/10 hover:-translate-y-2">
              <div className="flex items-center gap-3 mb-8">
                <div className="p-3 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl shadow-lg">
                  <Send className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl lg:text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Send Message
                </h3>
              </div>

              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    label="Full Name"
                    placeholder="John Doe"
                    required
                    error={errors.name}
                  />
                  <FormField
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    label="Email Address"
                    placeholder="john@example.com"
                    required
                    error={errors.email}
                  />
                </div>
                <FormField
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  label="Subject"
                  placeholder="Project Discussion"
                />
                <FormField
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  label="Message"
                  placeholder="Tell me about your project..."
                  multiline
                  rows={5}
                  required
                  error={errors.message}
                />
                
                <button
                  type="button"
                  onClick={handleSubmit}
                  disabled={isSubmitting}
                  className="w-full py-4 px-8 rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold text-lg shadow-xl hover:shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 hover:scale-[1.02] disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center gap-3 group"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                      Sending Message...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                      Send Message
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const ContactItem = ({ icon, iconBg, title, content }) => (
  <div className="group flex items-start gap-4 p-4 rounded-xl bg-slate-800/30 hover:bg-slate-700/30 transition-all duration-300">
    <div className={`p-3 bg-gradient-to-br ${iconBg} rounded-xl shadow-lg group-hover:scale-110 transition-transform duration-300`}>
      <div className="text-white">{icon}</div>
    </div>
    <div className="flex-1">
      <h4 className="text-lg font-semibold text-slate-200 mb-1">{title}</h4>
      <div className="text-slate-400 group-hover:text-slate-300 transition-colors">
        {content}
      </div>
    </div>
  </div>
);

const StatItem = ({ number, label }) => (
  <div className="text-center p-4 rounded-xl bg-slate-800/30 hover:bg-slate-700/30 transition-all duration-300 group cursor-pointer">
    <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300">
      {number}
    </div>
    <div className="text-sm text-slate-400 mt-1">{label}</div>
  </div>
);

const FormField = ({
  name,
  value,
  onChange,
  label,
  placeholder,
  type = "text",
  required = false,
  multiline = false,
  rows = 1,
  error,
}) => {
  const inputClasses = `w-full px-4 py-3 bg-slate-800/50 border border-slate-600/50 rounded-xl text-slate-200 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 transition-all duration-300 backdrop-blur-sm ${
    error ? 'border-red-500/50 focus:ring-red-500/50 focus:border-red-500/50' : ''
  }`;

  return (
    <div className="space-y-2">
      <label className="block text-sm font-semibold text-slate-300">
        {label} {required && <span className="text-red-400">*</span>}
      </label>
      {multiline ? (
        <textarea
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          rows={rows}
          required={required}
          className={`${inputClasses} resize-none`}
        />
      ) : (
        <input
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          required={required}
          className={inputClasses}
        />
      )}
      {error && (
        <p className="text-red-400 text-sm flex items-center gap-2 mt-1">
          <AlertCircle className="w-4 h-4" />
          {error}
        </p>
      )}
    </div>
  );
};