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
          <p className="text-sm mt-2">
            Discover, join, or create hobby-based groups. Build your community
            around your passion.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link to="/" className="hover:underline hover:text-blue-500">
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/allGroups"
                className="hover:underline hover:text-blue-500"
              >
                All Groups
              </Link>
            </li>
            <li>
              <Link
                to="/createGroup"
                className="hover:underline hover:text-blue-500"
              >
                Create Group
              </Link>
            </li>
            <li>
              <Link
                to="/myGroup"
                className="hover:underline hover:text-blue-500"
              >
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
          <div className="flex space-x-4 text-2xl">
            <a
              target="_blank"
              href="https://www.facebook.com/share/16Fjh4kbAR/"
              className="hover:text-blue-500"
            >
              <FaFacebookF />
            </a>
            <a
              target="_blank"
              href="https://x.com/RashikKhan513"
              className="hover:text-blue-500"
            >
              <FaTwitter />
            </a>
            <a
              target="_blank"
              href="https://www.instagram.com/happyprincerashik/profilecard/?igsh=MXZhbXZ6dzExd3o0dA=="
              className="hover:text-blue-500"
            >
              <FaInstagram />
            </a>
            <a
              target="_blank"
              href="https://github.com/rashik218"
              className="hover:text-blue-500"
            >
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
