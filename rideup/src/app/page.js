'use client';
import { useState } from 'react';
import Image from 'next/image';

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      {/* Navbar */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-sm z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex-shrink-0">
              <h1 className="text-2xl font-bold text-orange-600">RideUp</h1>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <a href="#home" className="text-gray-900 hover:text-orange-600 px-3 py-2 text-sm font-medium">Home</a>
                <a href="#about" className="text-gray-900 hover:text-orange-600 px-3 py-2 text-sm font-medium">About Us</a>
                <a href="#benefits" className="text-gray-900 hover:text-orange-600 px-3 py-2 text-sm font-medium">Benefits</a>
                <a href="#pricing" className="text-gray-900 hover:text-orange-600 px-3 py-2 text-sm font-medium">Pricing</a>
                <a href="#testimonials" className="text-gray-900 hover:text-orange-600 px-3 py-2 text-sm font-medium">Testimonials</a>
                <a href="#contact" className="text-gray-900 hover:text-orange-600 px-3 py-2 text-sm font-medium">Contact Us</a>
              </div>
            </div>
            
            <div className="hidden md:block">
              <button className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-2 rounded-full text-sm font-medium transition-colors">
                Book Now
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-900 hover:text-orange-600 p-2"
              >
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
              <a href="#home" className="block px-3 py-2 text-base font-medium text-gray-900 hover:text-orange-600">Home</a>
              <a href="#about" className="block px-3 py-2 text-base font-medium text-gray-900 hover:text-orange-600">About Us</a>
              <a href="#benefits" className="block px-3 py-2 text-base font-medium text-gray-900 hover:text-orange-600">Benefits</a>
              <a href="#pricing" className="block px-3 py-2 text-base font-medium text-gray-900 hover:text-orange-600">Pricing</a>
              <a href="#testimonials" className="block px-3 py-2 text-base font-medium text-gray-900 hover:text-orange-600">Testimonials</a>
              <a href="#contact" className="block px-3 py-2 text-base font-medium text-gray-900 hover:text-orange-600">Contact Us</a>
              <button className="w-full mt-2 bg-orange-600 hover:bg-orange-700 text-white px-6 py-2 rounded-full text-sm font-medium">
                Book Now
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-16 bg-gradient-to-br from-orange-50 to-red-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Transform Your Fitness With <span className="text-orange-600">Professional Cycling Classes</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Join our community and achieve your health goals with fun group rides.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <button className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-3 rounded-full text-lg font-medium transition-colors">
                Book a Session
              </button>
              <button className="border-2 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white px-8 py-3 rounded-full text-lg font-medium transition-colors">
                View Plans
              </button>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-4xl mb-2">⭐</div>
                <div className="text-2xl font-bold text-gray-900">500+</div>
                <div className="text-gray-600">Happy Members</div>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-2">🚴</div>
                <div className="text-2xl font-bold text-gray-900">20+</div>
                <div className="text-gray-600">Weekly Classes</div>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-2">🧑‍🏫</div>
                <div className="text-2xl font-bold text-gray-900">Professional</div>
                <div className="text-gray-600">Coaches</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">About RideUp Studio</h2>
              <p className="text-lg text-gray-600 mb-6">
                At RideUp, we believe fitness should be fun, challenging, and accessible to everyone. Our state-of-the-art cycling studio offers high-energy group classes led by certified instructors who are passionate about helping you reach your fitness goals.
              </p>
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Our Mission</h3>
                <p className="text-gray-600">To create a supportive community where everyone can discover the joy of cycling while achieving their personal fitness goals.</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Our Vision</h3>
                <p className="text-gray-600">To be the leading cycling studio that transforms lives through innovative fitness programs and exceptional community support.</p>
              </div>
            </div>
            <div className="bg-gray-200 rounded-lg h-96 flex items-center justify-center">
              <span className="text-gray-500 text-lg">Studio Image Placeholder</span>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why Join Our Cycling Classes?</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Burn Calories Fast</h3>
              <p className="text-gray-600">High-intensity cycling sessions that torch calories and boost your metabolism.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="text-4xl mb-4">❤️</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Improves Heart Health</h3>
              <p className="text-gray-600">Strengthen your cardiovascular system with our heart-pumping workouts.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="text-4xl mb-4">🧘</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Boosts Mental Health</h3>
              <p className="text-gray-600">Release endorphins and reduce stress through energizing cycling sessions.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="text-4xl mb-4">🏋️</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Increases Strength & Endurance</h3>
              <p className="text-gray-600">Build lower body strength and improve overall endurance capacity.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="text-4xl mb-4">🤝</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Community & Group Motivation</h3>
              <p className="text-gray-600">Join a supportive community that motivates and inspires your fitness journey.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="text-4xl mb-4">🕒</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Flexible Timings for Everyone</h3>
              <p className="text-gray-600">Multiple class schedules throughout the day to fit your busy lifestyle.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Choose Your Plan</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Basic Plan */}
            <div className="bg-white border-2 border-gray-200 rounded-lg p-8 hover:border-orange-300 transition-colors">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Basic Plan</h3>
              <div className="text-4xl font-bold text-orange-600 mb-6">₹999<span className="text-lg text-gray-600">/month</span></div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> 3 Classes/Week</li>
                <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> Beginner-friendly</li>
                <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> Access to morning batches</li>
              </ul>
              <button className="w-full bg-orange-600 hover:bg-orange-700 text-white py-3 rounded-full font-medium transition-colors">
                Book Now
              </button>
            </div>

            {/* Standard Plan */}
            <div className="bg-white border-2 border-orange-500 rounded-lg p-8 relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-orange-500 text-white px-4 py-1 rounded-full text-sm font-medium">Most Popular</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Standard Plan</h3>
              <div className="text-4xl font-bold text-orange-600 mb-6">₹1499<span className="text-lg text-gray-600">/month</span></div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> 5 Classes/Week</li>
                <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> Flexible timings</li>
                <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> Trainer guidance</li>
                <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> Diet tips</li>
              </ul>
              <button className="w-full bg-orange-600 hover:bg-orange-700 text-white py-3 rounded-full font-medium transition-colors">
                Book Now
              </button>
            </div>

            {/* Premium Plan */}
            <div className="bg-white border-2 border-gray-200 rounded-lg p-8 hover:border-orange-300 transition-colors">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Premium Plan</h3>
              <div className="text-4xl font-bold text-orange-600 mb-6">₹1999<span className="text-lg text-gray-600">/month</span></div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> Unlimited Classes</li>
                <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> Personal trainer</li>
                <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> Body tracking reports</li>
                <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> Weekend long rides</li>
              </ul>
              <button className="w-full bg-orange-600 hover:bg-orange-700 text-white py-3 rounded-full font-medium transition-colors">
                Book Now
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">What Our Members Say</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-orange-200 rounded-full flex items-center justify-center mr-4">
                  <span className="text-orange-600 font-semibold">SA</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Sarah Anderson</h4>
                  <div className="flex text-yellow-400">★★★★★</div>
                </div>
              </div>
              <p className="text-gray-600">"Amazing classes with incredible energy! I've lost 15kg in 6 months and feel stronger than ever. The community here is so supportive!"</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-orange-200 rounded-full flex items-center justify-center mr-4">
                  <span className="text-orange-600 font-semibold">MK</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Mike Kumar</h4>
                  <div className="flex text-yellow-400">★★★★★</div>
                </div>
              </div>
              <p className="text-gray-600">"The trainers are fantastic and really push you to achieve your goals. Best investment I've made for my health!"</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-orange-200 rounded-full flex items-center justify-center mr-4">
                  <span className="text-orange-600 font-semibold">PR</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Priya Reddy</h4>
                  <div className="flex text-yellow-400">★★★★★</div>
                </div>
              </div>
              <p className="text-gray-600">"Love the flexible timings! As a working mom, I can finally maintain a consistent fitness routine. Highly recommend!"</p>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Studio Gallery</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-gray-200 rounded-lg h-64 flex items-center justify-center">
              <span className="text-gray-500">Studio Photo 1</span>
            </div>
            <div className="bg-gray-200 rounded-lg h-64 flex items-center justify-center">
              <span className="text-gray-500">Studio Photo 2</span>
            </div>
            <div className="bg-gray-200 rounded-lg h-64 flex items-center justify-center">
              <span className="text-gray-500">Group Class Photo</span>
            </div>
            <div className="bg-gray-200 rounded-lg h-64 flex items-center justify-center">
              <span className="text-gray-500">Equipment Photo</span>
            </div>
            <div className="bg-gray-200 rounded-lg h-64 flex items-center justify-center">
              <span className="text-gray-500">Event Photo</span>
            </div>
            <div className="bg-gray-200 rounded-lg h-64 flex items-center justify-center">
              <span className="text-gray-500">Training Photo</span>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Contact Us</h2>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Get in Touch</h3>
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                  <input type="text" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                  <input type="email" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
                  <input type="tel" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                  <textarea rows="4" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"></textarea>
                </div>
                <button type="submit" className="w-full bg-orange-600 hover:bg-orange-700 text-white py-3 rounded-lg font-medium transition-colors">
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div>
              <div className="bg-white p-8 rounded-lg shadow-sm mb-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <div className="text-orange-600 mr-4">📍</div>
                    <div>
                      <p className="font-medium text-gray-900">Address</p>
                      <p className="text-gray-600">123 Fitness Street, Health City, Mumbai 400001</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="text-orange-600 mr-4">📞</div>
                    <div>
                      <p className="font-medium text-gray-900">Phone</p>
                      <p className="text-gray-600">+91 98765 43210</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="text-orange-600 mr-4">✉️</div>
                    <div>
                      <p className="font-medium text-gray-900">Email</p>
                      <p className="text-gray-600">info@rideupstudio.com</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Google Maps Placeholder */}
              <div className="bg-gray-200 rounded-lg h-64 flex items-center justify-center">
                <span className="text-gray-500">Google Maps Embed</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* About Column */}
            <div>
              <h3 className="text-xl font-bold mb-4">About RideUp</h3>
              <p className="text-gray-300 mb-4">Transform your fitness journey with our professional cycling classes. Join our community and achieve your health goals.</p>
              <p className="text-gray-300">Our mission is to create a supportive environment where fitness meets fun.</p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-xl font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="#home" className="text-gray-300 hover:text-orange-400">Home</a></li>
                <li><a href="#about" className="text-gray-300 hover:text-orange-400">About</a></li>
                <li><a href="#pricing" className="text-gray-300 hover:text-orange-400">Pricing</a></li>
                <li><a href="#contact" className="text-gray-300 hover:text-orange-400">Contact</a></li>
                <li><a href="#" className="text-gray-300 hover:text-orange-400">Book Now</a></li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-xl font-bold mb-4">Contact Info</h3>
              <div className="space-y-2 text-gray-300">
                <p>123 Fitness Street</p>
                <p>Health City, Mumbai 400001</p>
                <p>+91 98765 43210</p>
                <p>info@rideupstudio.com</p>
              </div>
            </div>

            {/* Social Media */}
            <div>
              <h3 className="text-xl font-bold mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-300 hover:text-orange-400 text-2xl">📘</a>
                <a href="#" className="text-gray-300 hover:text-orange-400 text-2xl">📷</a>
                <a href="#" className="text-gray-300 hover:text-orange-400 text-2xl">📺</a>
                <a href="#" className="text-gray-300 hover:text-orange-400 text-2xl">💬</a>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 text-center">
            <p className="text-gray-300">© 2025 Cycling Classes — All Rights Reserved</p>
            <div className="mt-2">
              <a href="#" className="text-gray-300 hover:text-orange-400 mr-4">Privacy Policy</a>
              <a href="#" className="text-gray-300 hover:text-orange-400">Terms & Conditions</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}