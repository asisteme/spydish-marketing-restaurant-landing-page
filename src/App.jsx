import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  ChartBarIcon, 
  ChatBubbleBottomCenterTextIcon,
  CursorArrowRaysIcon,
  MapIcon,
  SparklesIcon,
  UserGroupIcon
} from '@heroicons/react/24/outline';

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

function App() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-white hero-pattern">
        <div className="max-w-7xl mx-auto">
          <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:w-full lg:pb-28 xl:pb-32 hero-pattern">
            <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
              <div className="sm:text-center lg:text-left">
                <motion.h1 
                  className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl"
                  initial="hidden"
                  animate="visible"
                  variants={fadeIn}
                >
                  <span className="block">Transform Your</span>
                  <span className="block gradient-text">Restaurant Intelligence</span>
                </motion.h1>
                <motion.p 
                  className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  Connect with diners through WhatsApp while gaining powerful insights into your business. Optimize pricing, understand trends, and grow your restaurant with AI-powered analytics.
                </motion.p>
                <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                  <div className="rounded-md shadow">
                    <a
                      href="https://wa.me/message/YOUR_WHATSAPP_NUMBER"
                      className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-[#FF6B6B] hover:bg-[#ff5252] md:py-4 md:text-lg md:px-10"
                    >
                      Start Now
                    </a>
                  </div>
                  <div className="mt-3 sm:mt-0 sm:ml-3">
                    <a
                      href="#features"
                      className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-[#4ECDC4] bg-white border-[#4ECDC4] hover:bg-gray-50 md:py-4 md:text-lg md:px-10"
                    >
                      Learn More
                    </a>
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-12 bg-white" id="features">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-[#4ECDC4] font-semibold tracking-wide uppercase">Features</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Intelligence at Your Fingertips
            </p>
          </div>

          <div className="mt-10">
            <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
              <motion.div 
                className="relative card-hover bg-white rounded-xl p-6 shadow"
                whileHover={{ scale: 1.02 }}
              >
                <dt>
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-[#FF6B6B] text-white">
                    <ChartBarIcon className="h-6 w-6" />
                  </div>
                  <p className="ml-16 text-lg leading-6 font-medium text-gray-900">Competitor Analysis</p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-gray-500">
                  Track competitor pricing and menu trends in real-time to stay ahead of the market.
                </dd>
              </motion.div>

              <motion.div 
                className="relative card-hover bg-white rounded-xl p-6 shadow"
                whileHover={{ scale: 1.02 }}
              >
                <dt>
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-[#4ECDC4] text-white">
                    <ChatBubbleBottomCenterTextIcon className="h-6 w-6" />
                  </div>
                  <p className="ml-16 text-lg leading-6 font-medium text-gray-900">Sentiment Analysis</p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-gray-500">
                  Understand customer feedback through AI-powered review analysis.
                </dd>
              </motion.div>

              <motion.div 
                className="relative card-hover bg-white rounded-xl p-6 shadow"
                whileHover={{ scale: 1.02 }}
              >
                <dt>
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-[#4ECDC4] text-white">
                    <MapIcon className="h-6 w-6" />
                  </div>
                  <p className="ml-16 text-lg leading-6 font-medium text-gray-900">Interest Heatmaps</p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-gray-500">
                  Visualize customer interest patterns with detailed heatmaps.
                </dd>
              </motion.div>

              <motion.div 
                className="relative card-hover bg-white rounded-xl p-6 shadow"
                whileHover={{ scale: 1.02 }}
              >
                <dt>
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-[#FF6B6B] text-white">
                    <SparklesIcon className="h-6 w-6" />
                  </div>
                  <p className="ml-16 text-lg leading-6 font-medium text-gray-900">AI Marketing</p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-gray-500">
                  Launch targeted campaigns powered by artificial intelligence.
                </dd>
              </motion.div>
            </dl>
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-12">
            Trusted by Restaurants Worldwide
          </h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <motion.div 
              className="bg-white rounded-xl shadow-lg p-6"
              whileHover={{ scale: 1.02 }}
            >
              <div className="flex items-center mb-4">
                <img
                  className="h-12 w-12 rounded-full"
                  src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg"
                  alt="User"
                />
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-gray-900">John Smith</h3>
                  <p className="text-sm text-gray-500">Restaurant Owner</p>
                </div>
              </div>
              <p className="text-gray-600">
                "SpyDish has transformed how we understand our market position. The competitor analysis is invaluable."
              </p>
            </motion.div>

            <motion.div 
              className="bg-white rounded-xl shadow-lg p-6"
              whileHover={{ scale: 1.02 }}
            >
              <div className="flex items-center mb-4">
                <img
                  className="h-12 w-12 rounded-full"
                  src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg"
                  alt="User"
                />
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-gray-900">Sarah Johnson</h3>
                  <p className="text-sm text-gray-500">Restaurant Manager</p>
                </div>
              </div>
              <p className="text-gray-600">
                "The AI-driven insights have helped us optimize our menu and pricing strategy effectively."
              </p>
            </motion.div>

            <motion.div 
              className="bg-white rounded-xl shadow-lg p-6"
              whileHover={{ scale: 1.02 }}
            >
              <div className="flex items-center mb-4">
                <img
                  className="h-12 w-12 rounded-full"
                  src="https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg"
                  alt="User"
                />
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-gray-900">Mike Chen</h3>
                  <p className="text-sm text-gray-500">Restaurant Owner</p>
                </div>
              </div>
              <p className="text-gray-600">
                "Customer engagement has increased significantly since we started using SpyDish's WhatsApp integration."
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="bg-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-md mx-auto">
            <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-8">
              Get Started Today
            </h2>
            <form className="grid grid-cols-1 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#4ECDC4] focus:ring-[#4ECDC4] sm:text-sm"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#4ECDC4] focus:ring-[#4ECDC4] sm:text-sm"
                  placeholder="you@example.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#4ECDC4] focus:ring-[#4ECDC4] sm:text-sm"
                  placeholder="Your message"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[#FF6B6B] hover:bg-[#ff5252] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#FF6B6B]"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-50">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
                Company
              </h3>
              <ul className="mt-4 space-y-4">
                <li>
                  <a href="#" className="text-base text-gray-500 hover:text-gray-900">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="text-base text-gray-500 hover:text-gray-900">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="text-base text-gray-500 hover:text-gray-900">
                    Careers
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
                Support
              </h3>
              <ul className="mt-4 space-y-4">
                <li>
                  <a href="#" className="text-base text-gray-500 hover:text-gray-900">
                    Help Center
                  </a>
                </li>
                <li>
                  <a href="#" className="text-base text-gray-500 hover:text-gray-900">
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a href="#" className="text-base text-gray-500 hover:text-gray-900">
                    Privacy
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
                Features
              </h3>
              <ul className="mt-4 space-y-4">
                <li>
                  <a href="#" className="text-base text-gray-500 hover:text-gray-900">
                    Analytics
                  </a>
                </li>
                <li>
                  <a href="#" className="text-base text-gray-500 hover:text-gray-900">
                    Marketing
                  </a>
                </li>
                <li>
                  <a href="#" className="text-base text-gray-500 hover:text-gray-900">
                    Insights
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
                Connect
              </h3>
              <ul className="mt-4 space-y-4">
                <li>
                  <a href="#" className="text-base text-gray-500 hover:text-gray-900">
                    Twitter
                  </a>
                </li>
                <li>
                  <a href="#" className="text-base text-gray-500 hover:text-gray-900">
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a href="#" className="text-base text-gray-500 hover:text-gray-900">
                    Facebook
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-8 border-t border-gray-200 pt-8 md:flex md:items-center md:justify-between">
            <div className="flex space-x-6 md:order-2">
              <a href="#" className="text-gray-400 hover:text-gray-500">
                <span className="sr-only">Twitter</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-gray-500">
                <span className="sr-only">LinkedIn</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
            </div>
            <p className="mt-8 text-base text-gray-400 md:mt-0 md:order-1">
              &copy; 2023 SpyDish. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
