import React, { useState } from "react";
import { motion } from "framer-motion";

function Contact() {
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    Subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { Subject, message } = formData;

    if (!Subject || !message) {
      alert("Please fill in all fields.");
      return;
    }
    setIsLoading(true);
    // Construct `mailto:` link
    setTimeout(() => {
      const mailtoLink = `mailto:denta.dent29@gmail.com?subject=${encodeURIComponent(Subject)}&body=${encodeURIComponent(message)}`;
      window.location.href = mailtoLink;
      setIsLoading(false);
    }, 1500); // Simulated sending delay
  };

  return (
    <main className="flex justify-center items-center min-h-screen">
      <section className="w-full max-w-lg p-8 rounded-2xl backdrop-blur-lg bg-white/10 dark:bg-black/20 shadow-xl drop-shadow-xl">
        {/* Contact Heading */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-white">Contact Me</h2>
          <motion.p
  className="text-gray-300 mt-2 text-sm text-center"
  initial={{ opacity: 0, y: 10 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8, ease: "easeOut" }}
>
  This email form will{" "}
  <span className="text-blue-400 font-semibold animate-pulse">
    direct you
  </span>{" "}
  to your default email app and{" "}
  <span className="text-purple-400 font-semibold underline decoration-dashed">
    autofill
  </span>{" "}
  the subject and message.
</motion.p>
        </div>

        {/* Form */}
        <form className="flex flex-col gap-4 mt-6" onSubmit={handleSubmit}>
          {/* Subject Input */}
          <input
            className="bg-gray-800 text-gray-300 p-3 rounded-lg outline-none focus:ring-2 focus:ring-blue-500 transition-all"
            type="text"
            placeholder="Subject"
            name="Subject"
            value={formData.Subject}
            onChange={handleChange}
            required
          />

          {/* Message Input */}
          <textarea
            className="bg-gray-800 text-gray-300 p-3 rounded-lg outline-none focus:ring-2 focus:ring-blue-500 transition-all"
            name="message"
            rows="5"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>

<motion.button
            className="w-full py-3 bg-blue-500 text-white rounded-lg font-semibold hover:bg-blue-600 transition-all duration-300 flex items-center justify-center gap-2"
            whileTap={{ scale: 0.95 }}
            disabled={isLoading}
          >
            {isLoading ? (
              <>
                <motion.div
                  className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                ></motion.div>
                Sending...
              </>
            ) : (
              <>
                Send Message
              </>
            )}
          </motion.button>
        </form>
      </section>
    </main>
  );
}

export default Contact;