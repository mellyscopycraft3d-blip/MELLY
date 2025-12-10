import React, { useState } from 'react';
import { Reveal } from '../components/Reveal';
import { BRAND } from '../constants';
import { Mail, Calendar, MapPin, Send } from 'lucide-react';

export const Contact: React.FC = () => {
  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    
    const form = e.target as HTMLFormElement;
    const data = new FormData(form);

    try {
      const response = await fetch("https://formspree.io/f/mldqpoje", {
        method: "POST",
        body: data,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("idle");
        alert("Oops! There was a problem submitting your form");
      }
    } catch (error) {
      setStatus("idle");
      alert("Oops! There was a problem submitting your form");
    }
  };

  return (
    <div className="bg-brand-teal/5 min-h-[90vh]">
      <div className="container mx-auto px-6 py-12 md:py-20">
        <Reveal width="100%">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Let's Work Together</h1>
            <p className="text-xl text-gray-600">
              Ready to turn your traffic into revenue? Fill out the form below or book a call.
            </p>
          </div>
        </Reveal>

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 max-w-6xl mx-auto">
          {/* Contact Info */}
          <Reveal className="w-full lg:w-1/3">
             <div className="bg-brand-dark text-white p-10 rounded-2xl shadow-xl h-full relative overflow-hidden">
               <div className="absolute top-0 right-0 w-32 h-32 bg-brand-teal/20 rounded-full blur-3xl -mr-10 -mt-10"></div>
               
               <h3 className="text-2xl font-bold mb-8">Contact Information</h3>
               
               <div className="space-y-8">
                 <div className="flex items-start gap-4">
                   <div className="bg-white/10 p-3 rounded-lg">
                     <Mail className="text-brand-teal" size={24} />
                   </div>
                   <div>
                     <p className="font-bold mb-1">Email Me</p>
                     <a href={`mailto:${BRAND.email}`} className="text-gray-300 hover:text-white transition-colors break-all">
                       {BRAND.email}
                     </a>
                   </div>
                 </div>

                 <div className="flex items-start gap-4">
                   <div className="bg-white/10 p-3 rounded-lg">
                     <Calendar className="text-brand-teal" size={24} />
                   </div>
                   <div>
                     <p className="font-bold mb-1">Discovery Call</p>
                     <p className="text-gray-300 mb-2">15-minute free consultation</p>
                     <a href="#" className="text-brand-teal text-sm font-bold uppercase tracking-wider hover:underline">Book on Calendly</a>
                   </div>
                 </div>

                 <div className="flex items-start gap-4">
                   <div className="bg-white/10 p-3 rounded-lg">
                     <MapPin className="text-brand-teal" size={24} />
                   </div>
                   <div>
                     <p className="font-bold mb-1">Location</p>
                     <p className="text-gray-300">Remote / Worldwide</p>
                   </div>
                 </div>
               </div>

               <div className="mt-12 pt-12 border-t border-gray-700">
                 <p className="text-sm text-gray-400">
                   "Melly is the secret weapon you didn't know you needed."
                 </p>
               </div>
             </div>
          </Reveal>

          {/* Form */}
          <Reveal className="w-full lg:w-2/3">
            <div className="bg-white p-8 md:p-12 rounded-2xl shadow-lg border border-gray-100">
              {status === "success" ? (
                <div className="text-center py-20">
                  <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Send className="text-green-600" size={32} />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">Message Sent!</h3>
                  <p className="text-gray-600">Thanks for reaching out. I'll get back to you within 24 hours.</p>
                  <button onClick={() => setStatus("idle")} className="mt-8 text-brand-teal font-bold hover:underline">Send another message</button>
                </div>
              ) : (
                <form 
                  onSubmit={handleSubmit}
                  action="https://formspree.io/f/mldqpoje" 
                  method="POST" 
                  className="space-y-6"
                >
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-bold text-gray-700 mb-2">Name</label>
                      <input 
                        type="text" 
                        id="name" 
                        name="name" 
                        required 
                        placeholder="John Doe"
                        className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-brand-teal focus:ring-2 focus:ring-brand-teal/20 outline-none transition-all" 
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-bold text-gray-700 mb-2">Email</label>
                      <input 
                        type="email" 
                        id="email" 
                        name="email" 
                        required 
                        placeholder="john@example.com"
                        className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-brand-teal focus:ring-2 focus:ring-brand-teal/20 outline-none transition-all" 
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="service" className="block text-sm font-bold text-gray-700 mb-2">Interested Service</label>
                    <select 
                      id="service" 
                      name="service"
                      className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-brand-teal focus:ring-2 focus:ring-brand-teal/20 outline-none transition-all"
                    >
                      <option value="General Inquiry">General Inquiry</option>
                      <option value="Sales Page">Sales Page</option>
                      <option value="Email Sequence">Email Sequence</option>
                      <option value="Ad Copy">Ad Copy</option>
                      <option value="Website Copy">Website Copy</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-bold text-gray-700 mb-2">Project Details</label>
                    <textarea 
                      id="message" 
                      name="message" 
                      rows={5} 
                      required 
                      placeholder="Tell me about your business and goals..."
                      className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-brand-teal focus:ring-2 focus:ring-brand-teal/20 outline-none transition-all resize-none" 
                    ></textarea>
                  </div>

                  {/* Netlify/Formspree Honeypot */}
                  <input type="text" name="_gotcha" style={{display: "none"}} />

                  <button 
                    type="submit" 
                    disabled={status === "submitting"}
                    className="w-full bg-brand-teal text-white font-bold py-4 rounded-lg hover:bg-brand-tealHover transition-all shadow-lg hover:shadow-brand-teal/30 disabled:opacity-70 disabled:cursor-not-allowed flex justify-center items-center gap-2"
                  >
                    {status === "submitting" ? "Sending..." : "Send Message"}
                  </button>
                </form>
              )}
            </div>
          </Reveal>
        </div>
      </div>
    </div>
  );
};