import {
  ShieldCheckIcon,
  GlobeAltIcon,
  ChartBarIcon,
  BoltIcon,
  ChatBubbleLeftIcon,
  StarIcon,
  CheckIcon,
  CurrencyDollarIcon,
  CircleStackIcon,
} from "@heroicons/react/24/solid";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faFacebookF,
  faInstagram,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";

import Navbar from "./Navbar";

export default function App() {
  return (
    <>
      <Navbar />
      <section
        id="Home"
        className="w-full p-10 bg-gray-50 flex flex-col items-center justify-center"
      >
        <div className="flex flex-col gap-10 max-w-5xl px-6 py-6 text-center">
          <div className="flex justify-center mb-4">
            <CurrencyDollarIcon className="h-25 w-25 text-violet-500" />
          </div>

          <h1 className="text-6xl font-bold text-gray-900 mb-6">
            Empower Your Financial Future with{" "}
            <span className="text-violet-500">Cryptera</span>
          </h1>
          <p className="text-2xl text-gray-600 mb-8">
            Join millions worldwide who trust Cryptera as the future of money.
            Secure, decentralized, and revolutionary digital currency that puts
            you in control.
          </p>
          <div className="flex justify-center gap-4">
            <button className="px-10 py-2 bg-gray-900 text-white rounded shadow hover:bg-gray-800 transition">
              Start Investing
            </button>
            <button className="px-10 py-2 bg-gray-100 text-gray-800 rounded shadow hover:text-white hover:bg-violet-500 transition">
              Learn More
            </button>
          </div>
          <div className="flex justify-around text-center">
            <div className="flex flex-col">
              <h1 className="text-3xl font-bold text-violet-500">$67,000+</h1>
              <span className="text-1xl font-bold text-gray-500 mb-6">
                Current Price
              </span>
            </div>
            <div className="flex flex-col">
              <h1 className="text-3xl font-bold text-violet-500">21M</h1>
              <span className="text-1xl font-bold text-gray-500 mb-6">
                Max Supply
              </span>
            </div>
            <div className="flex flex-col">
              <h1 className="text-3xl font-bold text-violet-500">15+ Years</h1>
              <span className="text-1xl font-bold text-gray-500 mb-6">
                Proven Track Record
              </span>
            </div>
          </div>
        </div>
      </section>
      {/* 2 */}
      <section
        id="About"
        className="w-full py-20 bg-white flex flex-col items-center p-6 gap-4"
      >
        <h1 className="text-5xl font-bold text-gray-900 mb-6 text-center">
          Why Choose Cryptera?
        </h1>
        <p className="text-2xl text-gray-600 max-w-3xl text-center mb-12">
          Discover the key advantages that make Cryptera the world's leading
          cryptocurrency.
        </p>

        {/* Responsive grid for cards */}
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 w-full max-w-7xl">
          <div className="bg-slate-100 rounded-xl p-10 flex flex-col h-full text-center items-center gap-2 border border-gray-200 hover:shadow-lg transition duration-300">
            <ShieldCheckIcon className="h-12 w-12 text-violet-500 mb-4" />

            <h1 className="text-gray-500 text-xl font-bold mb-2">
              Unmatched Security
            </h1>
            <p className="text-gray-500">
              Protected by the world's most secure blockchain network with
              cryptographic proof and decentralized validation.
            </p>
          </div>
          <div className="bg-slate-100 rounded-xl p-10 flex flex-col h-full text-center items-center gap-2 border border-gray-200 hover:shadow-lg transition duration-300">
            <GlobeAltIcon className="h-12 w-12 text-violet-500 mb-4" />

            <h1 className="text-gray-500 text-xl font-bold mb-2">
              Global Accessibility
            </h1>
            <p className="text-gray-500">
              Send and receive Cryptera anywhere in the world, 24/7, without
              traditional banking limitations or borders.
            </p>
          </div>
          <div className="bg-slate-100 rounded-xl p-10 flex flex-col h-full text-center items-center gap-2 border border-gray-200 hover:shadow-lg transition duration-300">
            <ChartBarIcon className="h-12 w-12 text-violet-500 mb-4" />

            <h1 className="text-gray-500 text-xl font-bold mb-2">
              Investment Potential
            </h1>
            <p className="text-gray-500">
              Cryptera has shown remarkable growth over the years, becoming a
              preferred store of value for institutions and individuals.
            </p>
          </div>
          <div className="bg-slate-100 rounded-xl p-10 flex flex-col h-full text-center items-center gap-2 border border-gray-200 hover:shadow-lg transition duration-300">
            <BoltIcon className="h-12 w-12 text-violet-500 mb-4" />

            <h1 className="text-gray-500 text-xl font-bold mb-2">
              Lightning Fast
            </h1>
            <p className="text-gray-500">
              With Lightning Network integration, enjoy instant transactions
              with minimal fees for everyday purchases.
            </p>
          </div>
        </div>
      </section>
      {/* 3 */}
      <section
        id="Learn"
        className="w-full py-20 bg-gray-50 flex flex-col items-center p-6 gap-4"
      >
        <h1 className="text-5xl font-bold text-gray-900 mb-6 text-center">
          Trusted by Millions
        </h1>
        <p className="text-2xl text-gray-600 max-w-3xl text-center mb-12">
          See what our community says about their Cryptera experience
        </p>

        {/* Responsive grid for cards */}
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-8 w-full max-w-7xl">
          <div className="bg-slate-100 rounded-xl p-10 flex flex-col h-full gap-2  border border-gray-200 hover:shadow-lg transition duration-300">
            <ChatBubbleLeftIcon className="h-12 w-12 text-violet-500 mb-4" />

            <p className="text-gray-500">
              "Cryptera has revolutionized how I think about money and
              investments. The security and potential returns are unmatched."
            </p>
            <div className="flex flex-col">
              <div className="flex gap-1 mb-2">
                <StarIcon className="h-6 w-6 text-violet-500" />
                <StarIcon className="h-6 w-6 text-violet-500" />
                <StarIcon className="h-6 w-6 text-violet-500" />
                <StarIcon className="h-6 w-6 text-violet-500" />
                <StarIcon className="h-6 w-6 text-violet-500" />
              </div>
              <h1 className="text-gray-500 text-xl font-bold mb-1">
                Sarah Johnson
              </h1>
              <span className="text-gray-400 text-sm">Financial Advisor</span>
            </div>
          </div>
          <div className="bg-slate-100 rounded-xl p-10 flex flex-col h-full gap-2  border border-gray-200 hover:shadow-lg transition duration-300">
            <ChatBubbleLeftIcon className="h-12 w-12 text-violet-500 mb-4" />

            <p className="text-gray-500">
              "As someone in tech, I appreciate Cryptera's innovative blockchain
              technology. It's the future of digital transactions."{" "}
            </p>
            <div className="flex flex-col">
              <div className="flex gap-1 mb-2">
                <StarIcon className="h-6 w-6 text-violet-500" />
                <StarIcon className="h-6 w-6 text-violet-500" />
                <StarIcon className="h-6 w-6 text-violet-500" />
                <StarIcon className="h-6 w-6 text-violet-500" />
                <StarIcon className="h-6 w-6 text-violet-500" />
              </div>
              <h1 className="text-gray-500 text-xl font-bold mb-1">
                Michael Chen{" "}
              </h1>
              <span className="text-gray-400 text-sm">Tech Entrepreneur</span>
            </div>
          </div>
          <div className="bg-slate-100 rounded-xl p-10 flex flex-col h-full gap-2  border border-gray-200 hover:shadow-lg transition duration-300">
            <ChatBubbleLeftIcon className="h-12 w-12 text-violet-500 mb-4" />

            <p className="text-gray-500">
              "I've recommended Cryptera to my clients as a hedge against
              inflation. The results speak for themselves."
            </p>
            <div className="flex flex-col">
              <div className="flex gap-1 mb-2">
                <StarIcon className="h-6 w-6 text-violet-500" />
                <StarIcon className="h-6 w-6 text-violet-500" />
                <StarIcon className="h-6 w-6 text-violet-500" />
                <StarIcon className="h-6 w-6 text-violet-500" />
                <StarIcon className="h-6 w-6 text-violet-500" />
              </div>
              <h1 className="text-gray-500 text-xl font-bold mb-1">
                Emma Rodriguez
              </h1>
              <span className="text-gray-400 text-sm">Investment Manager</span>
            </div>
          </div>
        </div>
      </section>{" "}
      {/* 4*/}
      <section
        id="Invest"
        className="w-full py-20 bg-white flex flex-col items-center p-6 gap-4"
      >
        <h1 className="text-5xl font-bold text-gray-900 mb-6 text-center">
          Start Your Cryptera Journey
        </h1>
        <p className="text-2xl text-gray-600 max-w-3xl text-center mb-12">
          Choose the plan that fits your investment goals and experience level
        </p>

        {/* Responsive grid for cards */}
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-8 w-full max-w-7xl">
          <div className="justify-around gap-4 bg-slate-100 rounded-xl p-6 flex flex-col h-full gap-2  border border-gray-200 hover:shadow-lg transition duration-300">
            <div className="flex flex-col  gap-4 text-center">
              <h1 className="text-gray-500 text-3xl font-bold mb-1">Starter</h1>
              <h2>
                <span className="text-violet-500 text-3xl">$10</span> minimum{" "}
                <br />
                Perfect for beginners
              </h2>
            </div>

            <ul className="list-none space-y-4">
              <li className="flex items-start gap-3">
                <CheckIcon className="h-6 w-6 text-violet-500 flex-shrink-0 mt-1" />
                <span className="text-gray-600 ">Buy & sell Cryptera </span>
              </li>
              <li className="flex items-start gap-3">
                <CheckIcon className="h-6 w-6 text-violet-500 flex-shrink-0 mt-1" />
                <span className="text-gray-600">Secure wallet</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckIcon className="h-6 w-6 text-violet-500 flex-shrink-0 mt-1" />
                <span className="text-gray-600">Basic analytics</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckIcon className="h-6 w-6 text-violet-500 flex-shrink-0 mt-1" />
                <span className="text-gray-600">Email support</span>
              </li>
            </ul>
            <button className="px-10 py-2 bg-gray-900 text-white rounded shadow hover:bg-gray-800 transition">
              Get Started
            </button>
          </div>
          <div className="relative justify-between flex flex-col gap-4 bg-slate-100 rounded-xl p-6 flex flex-col h-full gap-2  border-2 border-violet-500 hover:shadow-lg transition duration-300">
            {/* Badge */}
            <span className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-violet-500 text-white text-m font-bold px-3 py-1 rounded-full shadow-lg">
              Most Popular
            </span>
            <div className="flex flex-col  gap-4 text-center">
              <h1 className="text-gray-500 text-3xl font-bold mb-1">Pro</h1>
              <h2>
                <span className="text-violet-500 text-3xl">$100</span> minimum{" "}
                <br />
                For serious investors
              </h2>
            </div>

            <ul className="list-none space-y-4">
              <li className="flex items-start gap-3">
                <CheckIcon className="h-6 w-6 text-violet-500 flex-shrink-0 mt-1" />
                <span className="text-gray-600 ">Everything in Starter</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckIcon className="h-6 w-6 text-violet-500 flex-shrink-0 mt-1" />
                <span className="text-gray-600">Advanced trading tools</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckIcon className="h-6 w-6 text-violet-500 flex-shrink-0 mt-1" />
                <span className="text-gray-600">Portfolio tracking</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckIcon className="h-6 w-6 text-violet-500 flex-shrink-0 mt-1" />
                <span className="text-gray-600">Priority support</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckIcon className="h-6 w-6 text-violet-500 flex-shrink-0 mt-1" />
                <span className="text-gray-600">Market insights</span>
              </li>
            </ul>
            <button className="px-10 py-2 bg-violet-500 text-white rounded shadow hover:bg-gray-800 transition">
              Get Started
            </button>
          </div>
          <div className="justify-around flex flex-col gap-4 bg-slate-100 rounded-xl p-6 flex flex-col h-full gap-2  border border-gray-200 hover:shadow-lg transition duration-300">
            <div className="flex flex-col  gap-4 text-center">
              <h1 className="text-gray-500 text-3xl font-bold mb-1">
                Enterprise
              </h1>
              <h2>
                <span className="text-violet-500 text-3xl">Custom</span> contact
                us <br />
                For institutions
              </h2>
            </div>

            <ul className="list-none space-y-4">
              <li className="flex items-start gap-3">
                <CheckIcon className="h-6 w-6 text-violet-500 flex-shrink-0 mt-1" />
                <span className="text-gray-600 ">Everything in Pro</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckIcon className="h-6 w-6 text-violet-500 flex-shrink-0 mt-1" />
                <span className="text-gray-600">Institutional custody</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckIcon className="h-6 w-6 text-violet-500 flex-shrink-0 mt-1" />
                <span className="text-gray-600">API access</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckIcon className="h-6 w-6 text-violet-500 flex-shrink-0 mt-1" />
                <span className="text-gray-600">Dedicated manager</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckIcon className="h-6 w-6 text-violet-500 flex-shrink-0 mt-1" />
                <span className="text-gray-600">Custom solutions</span>
              </li>
            </ul>
            <button className="px-10 py-2 bg-gray-900 text-white rounded shadow hover:bg-gray-800 transition">
              Custom solutions
            </button>
          </div>
        </div>
      </section>{" "}
      {/* 5 */}
      <section className="w-full py-20 bg-gray-900 flex flex-col items-center p-6 gap-4">
        <ShieldCheckIcon className="h-25 w-25 text-violet-500 mb-4" />

        <h1 className="text-5xl font-bold text-white mb-6 text-center">
          Ready to Join the Cryptera Revolution?
        </h1>
        <p className="text-2xl text-white max-w-3xl text-center mb-12">
          Don't wait for tomorrow. Start building your financial future with
          Cryptera today. Join millions of users who trust Cryptera for their
          digital wealth.{" "}
        </p>
        <div className="flex justify-center gap-4">
          <button className="px-10 py-2 bg-gray-900 text-white bg-violet-500 rounded shadow hover:bg-violet-600 transition">
            Create Account{" "}
          </button>
          <button className="px-10 py-2 text-white text-gray-800 rounded shadow hover:bg-white hover:text-black transition border border-white">
            Download App{" "}
          </button>
        </div>
      </section>
      <footer id="Contact" className="bg-gray-50 text-gray-700 py-12 px-6">
        {" "}
        {/* Link Sections */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mb-10  md:grid-cols-[2fr_1fr_1fr]">
          {/* Brand Section */}
          <div className="max-w-7xl mx-auto text-center md:text-left mb-10">
            <h1 className="flex items-center text-2xl font-bold text-gray-900 mb-2">
              <CurrencyDollarIcon className="h-10 w-10 text-violet-500" />
              Cryptera
            </h1>
            <p className=" max-w-md">
              The world's leading cryptocurrency platform. Secure, reliable, and
              trusted by millions worldwide.
            </p>
            <div className="flex justify-center md:justify-start gap-4 mt-6">
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={faTwitter}
                  className="w-6 h-6 text-gray-900 hover:text-blue-400 transition"
                />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={faFacebookF}
                  className="w-6 h-6 text-gray-900 hover:text-blue-600 transition"
                />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={faInstagram}
                  className="w-6 h-6 text-gray-900 hover:text-pink-400 transition"
                />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={faLinkedinIn}
                  className="w-6 h-6 text-gray-900 hover:text-blue-700 transition"
                />
              </a>
            </div>
          </div>
          {/* Learn */}
          <div>
            <h2 className="font-bold text-gray-900 mb-4">Learn</h2>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-violet-500 transition">
                  What is Cryptera?
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-violet-500 transition">
                  How to Buy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-violet-500 transition">
                  Security Guide
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-violet-500 transition">
                  Market Analysis
                </a>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h2 className="font-bold text-gray-900 mb-4">Support</h2>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-violet-500 transition">
                  Help Center
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-violet-500 transition">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-violet-500 transition">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-violet-500 transition">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
        </div>
        {/* Bottom Legal */}
        <div className="max-w-7xl mx-auto text-center border-t border-gray-700 pt-6 text-gray-600 text-sm">
          © 2025 Cryptera Platform. All rights reserved. Built with security and
          trust in mind.
        </div>
      </footer>
    </>
  );
}
