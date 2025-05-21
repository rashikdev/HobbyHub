import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaGithub } from "react-icons/fa";
import { Link, NavLink } from "react-router";
import logo from "../assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Brand Section */}
        <div>
          <NavLink className="flex items-center" to="/">
            <img className="md:w-10 w-8 rounded-full" src={logo} alt="" />
            <h2 className="font-bold text-2xl ml-2 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-transparent bg-clip-text">
              HobbyHub
            </h2>
          </NavLink>
          <p className="text-sm">
            Discover, join, or create hobby-based groups. Build your community
            around your passion.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link to="/" className="hover:underline">
                Home
              </Link>
            </li>
            <li>
              <Link to="/all-groups" className="hover:underline">
                All Groups
              </Link>
            </li>
            <li>
              <Link to="/create-Group" className="hover:underline">
                Create Group
              </Link>
            </li>
            <li>
              <Link to="/my-Groups" className="hover:underline">
                My Groups
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Contact</h3>
          <ul className="text-sm space-y-2">
            <li>Email: support@hobbyhub.com</li>
            <li>Phone: +880 1234 567 890</li>
            <li>Address: Dhaka, Bangladesh</li>
          </ul>
        </div>

        {/* Social Links */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
          <div className="flex space-x-4 text-lg">
            <a href="#" className="hover:text-gray-300">
              <FaFacebookF />
            </a>
            <a href="#" className="hover:text-gray-300">
              <FaTwitter />
            </a>
            <a href="#" className="hover:text-gray-300">
              <FaInstagram />
            </a>
            <a href="#" className="hover:text-gray-300">
              <FaGithub />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-cyan-400 mt-10 pt-4 text-center text-sm text-white">
        &copy; {new Date().getFullYear()} HobbyHub. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
