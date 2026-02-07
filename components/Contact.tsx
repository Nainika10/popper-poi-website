
import React from 'react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bebas text-white mb-4 tracking-wider">Get in Touch</h2>
          <div className="w-24 h-1 bg-red-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Info Side */}
          <div className="space-y-8">
            <div className="bg-gray-800 p-8 rounded-3xl border border-gray-700 flex items-start group">
              <div className="bg-red-600 p-4 rounded-2xl mr-6 transition-transform group-hover:rotate-12">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div>
                <h3 className="text-white text-xl font-bold mb-2 uppercase tracking-widest">Our Location</h3>
                <p className="text-gray-400 leading-relaxed">
                  Polyclinic Rd, Acharya Ranga Nagar,<br />
                  Vijayawada, Andhra Pradesh 520010
                </p>
              </div>
            </div>

            <div className="bg-gray-800 p-8 rounded-3xl border border-gray-700 flex items-start group">
              <div className="bg-amber-400 p-4 rounded-2xl mr-6 transition-transform group-hover:rotate-12">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h2.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <div>
                <h3 className="text-white text-xl font-bold mb-2 uppercase tracking-widest">Phone & Orders</h3>
                <p className="text-gray-400 text-lg">+91 79978 71816</p>
                <p className="text-gray-500 text-sm">Available on Swiggy & Zomato</p>
              </div>
            </div>
          </div>

          {/* Map Side */}
          <div className="h-full min-h-[400px] rounded-3xl overflow-hidden border border-gray-700 relative group">
            <iframe
                title="Google Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3825.4851410103753!2d80.64571127591785!3d16.501540827725964!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a35fb3421376f9d%3A0xc6730594a50d2757!2sPolyclinic%20Rd%2C%20Acharya%20Ranga%20Nagar%2C%20Vijayawada%2C%20Andhra%20Pradesh%20520010!5e0!3m2!1sen!2sin!4v1740685000000!5m2!1sen!2sin"
                className="w-full h-full grayscale hover:grayscale-0 transition-all duration-700"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
            ></iframe>
            <div className="absolute top-4 left-4 bg-black/50 backdrop-blur-md px-4 py-2 rounded-xl border border-white/10 text-white text-xs font-bold pointer-events-none group-hover:opacity-0 transition-opacity uppercase tracking-widest">
                Vijayawada • India
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
