import React,{ useState } from "react";
import { Link } from "react-router-dom";
import { FaGoogle, FaTwitter, FaFacebook, FaUser, FaLock } from "react-icons/fa";
import ForgotPassword from "../components/ForgotPassword"; // Import ForgotPassword Component

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showForgotPassword, setShowForgotPassword] = useState(false); // Modal State

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login Attempt:", { email, password });
  };

  const handleSocialLogin = (provider) => {
    let url = "";
    switch (provider) {
      case "Google":
        url = "https://accounts.google.com/signin";
        break;
      case "Twitter":
        url = "https://twitter.com/i/flow/login";
        break;
      case "Facebook":
        url = "https://www.facebook.com/login/";
        break;
      default:
        console.log("Invalid provider");
    }
    window.open(url, "_blank");
  };

  return (
    <div className="h-screen  w-full flex items-center justify-center bg-gradient-to-r from-[#F7EAE7] to-orange-200 relative">
      {/* Light Blur Effect when Modal is Open */}
      {showForgotPassword && (
        <div className="fixed inset-0 bg-black/20 backdrop-blur-sm flex items-center justify-center z-50 transition-opacity">
          <ForgotPassword closeModal={() => setShowForgotPassword(false)} />
        </div>
      )}

      <div className="bg-white/70 backdrop-blur-md p-8 rounded-xl shadow-xl w-96 border border-gray-300 shadow-orange-400/40 ">
        <h2 className="text-2xl font-semibold text-gray-800 text-center mb-6">
          Welcome Back
        </h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Email Input */}
          <div className="relative">
            <FaUser className="absolute left-3 top-3 text-gray-500" />
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              aria-label="Email"
              className="w-full pl-10 border-b border-gray-300 focus:border-orange-500 outline-none px-2 py-2 bg-transparent text-gray-800 transition-all duration-200 ease-in-out"
              placeholder="Email"
            />
          </div>

          {/* Password Input */}
          <div className="relative">
            <FaLock className="absolute left-3 top-3 text-gray-500" />
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              aria-label="Password"
              className="w-full pl-10 border-b border-gray-300 focus:border-orange-500 outline-none px-2 py-2 bg-transparent text-gray-800 transition-all duration-200 ease-in-out"
              placeholder="Password"
            />
            <button
              type="button"
              onClick={() => setShowForgotPassword(true)}
              className="absolute right-3 bottom-[-20px] text-orange-600 text-xs hover:underline transition-all"
            >
              Forgot Password?
            </button>
          </div>

          {/* Login Button */}
          <div className="flex justify-center pt-6">
            <button
              type="submit"
              className="w-60 px-4 py-2 bg-[#FF914D] text-white font-medium rounded-full shadow-md hover:bg-[#FF7B32] transition-all duration-200 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-orange-400"
            >
              Login
            </button>
          </div>
        </form>

        {/* Social Login Options */}
        <div className="pt-8 space-y-3"> {/* Increased padding-top here */}
          <p className="text-center text-gray-500 text-sm">Or sign in with</p>
          <div className="flex justify-center space-x-6 py-2">
            <button
              className="p-2 rounded-full hover:bg-gray-100 transition-transform duration-200"
              onClick={() => handleSocialLogin("Google")}
              aria-label="Sign in with Google"
            >
              <FaGoogle size={26} className="text-red-500 hover:scale-110 transition-transform" />
            </button>
            <button
              className="p-2 rounded-full hover:bg-gray-100 transition-transform duration-200"
              onClick={() => handleSocialLogin("Twitter")}
              aria-label="Sign in with Twitter"
            >
              <FaTwitter size={26} className="text-blue-500 hover:scale-110 transition-transform" />
            </button>
            <button
              className="p-2 rounded-full hover:bg-gray-100 transition-transform duration-200"
              onClick={() => handleSocialLogin("Facebook")}
              aria-label="Sign in with Facebook"
            >
              <FaFacebook size={26} className="text-blue-700 hover:scale-110 transition-transform" />
            </button>
          </div>
        </div>

        {/* Sign Up Link */}
        <div className="mt-6 text-center text-sm">
          <p className="text-gray-600">
            Don't have an account?{" "}
            <Link
              to="/signup"
              className="text-orange-600 font-semibold hover:underline transition-all"
            >
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
