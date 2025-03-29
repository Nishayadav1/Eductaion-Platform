import React,{ useState } from "react";
import { Link } from "react-router-dom";
import { EyeIcon, EyeOffIcon } from "lucide-react";

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError(""); // Clear error when user types
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.password || !formData.confirmPassword) {
      setError("All fields are required.");
      return;
    }

    if (formData.password.length < 6) {
      setError("Password must be at least 6 characters long.");
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    console.log("Signup Attempt:", formData);
  };

  return (
    <div className="mt-18 flex items-center justify-center min-h-screen bg-gradient-to-r from-[#F7EAE7] to-orange-200">
      <div className="bg-white/60 backdrop-blur-lg p-8 rounded-xl shadow-lg w-96 border border-gray-300 shadow-orange-400/50">
        <h2 className="text-2xl font-semibold text-gray-700 text-center mb-4">
          Create an Account
        </h2>
        <p className="text-sm text-gray-500 text-center mb-6">
          Sign up to access exclusive features.
        </p>

        {error && <p className="text-red-500 text-sm text-center mb-4">{error}</p>}

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full border-b border-gray-400 focus:border-orange-500 outline-none px-2 py-2 bg-transparent text-gray-700"
              placeholder="Full Name"
              aria-label="Full Name"
            />
          </div>
          <div>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full border-b border-gray-400 focus:border-orange-500 outline-none px-2 py-2 bg-transparent text-gray-700"
              placeholder="Email"
              aria-label="Email"
            />
          </div>

          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              className="w-full border-b border-gray-400 focus:border-orange-500 outline-none px-2 py-2 bg-transparent text-gray-700 pr-10"
              placeholder="Password"
              aria-label="Password"
            />
            <button
              type="button"
              className="absolute right-3 bottom-3 text-gray-600 hover:text-orange-500"
              onClick={() => setShowPassword(!showPassword)}
              aria-label="Toggle Password Visibility"
            >
              {showPassword ? <EyeOffIcon size={20} /> : <EyeIcon size={20} />}
            </button>
          </div>

          <div className="relative">
            <input
              type={showConfirmPassword ? "text" : "password"}
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
              className="w-full border-b border-gray-400 focus:border-orange-500 outline-none px-2 py-2 bg-transparent text-gray-700 pr-10"
              placeholder="Confirm Password"
              aria-label="Confirm Password"
            />
            <button
              type="button"
              className="absolute right-3 bottom-3 text-gray-600 hover:text-orange-500"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              aria-label="Toggle Confirm Password Visibility"
            >
              {showConfirmPassword ? <EyeOffIcon size={20} /> : <EyeIcon size={20} />}
            </button>
          </div>

          <button
            type="submit"
            className="w-60 px-4 py-2 bg-[#FF914D] text-white font-medium rounded-full shadow-md hover:bg-[#FF7B32] transition-all duration-200 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-orange-400 mx-auto block"
          >
            Sign Up
          </button>
        </form>

        <p className="text-sm text-gray-600 mt-4 text-center">
          Already have an account?{" "}
          <Link to="/login" className="text-orange-600 font-semibold hover:underline transition-all">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;

