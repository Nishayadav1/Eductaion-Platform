import React,{ useState } from "react";

const ForgotPassword = ({ closeModal }) => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const validateEmail = (email) => {
    return /\S+@\S+\.\S+/.test(email); // Simple email validation
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");
    setMessage("");

    if (!validateEmail(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setMessage("If this email is registered, a reset link has been sent.");
    }, 2000); // Simulating API call delay
  };

  return (
    <div className="bg-white/90 backdrop-blur-lg p-8 rounded-xl shadow-lg w-96 border border-gray-200 shadow-orange-400/50 relative">
      {/* Close Button */}
      <button
        onClick={closeModal}
        className="absolute top-3 right-4 text-gray-600 text-lg hover:text-red-500 transition"
        aria-label="Close"
      >
        ✕
      </button>

      <h2 className="text-2xl font-bold text-gray-700 text-center mb-4">
        Forgot Password?
      </h2>
      <p className="text-sm text-gray-500 text-center mb-6">
        Enter your registered email and we'll send you a password reset link.
      </p>

      {error && <p className="text-red-500 text-sm text-center mb-4">{error}</p>}
      {message && <p className="text-green-600 text-sm text-center mb-4">{message}</p>}

      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full border-b border-gray-400 focus:border-orange-500 outline-none px-2 py-2 bg-transparent text-gray-700"
            placeholder="Enter your email"
            aria-label="Email"
          />
        </div>

        <div className="flex justify-center">
          <button
            type="submit"
            className={`w-60 px-4 py-2 rounded-3xl shadow-md shadow-orange-400/50 transition duration-200 ease-in-out transform hover:scale-105 ${
              loading
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-[#FF914D] text-white hover:bg-[#FF7B32]"
            }`}
            disabled={loading}
          >
            {loading ? "Sending..." : "Send Reset Link"}
          </button>
        </div>
      </form>

      <p className="text-sm text-gray-600 mt-4 text-center">
        <button
          onClick={closeModal}
          className="text-orange-600 font-semibold hover:underline transition-all"
        >
          Back to Login
        </button>
      </p>
    </div>
  );
};

export default ForgotPassword;
