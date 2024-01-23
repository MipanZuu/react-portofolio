import React, { useState } from "react";
import { contactDetails } from "../Details";
import validator from "validator";

function Contact() {
  const { email, instagram } = contactDetails;
  const [emailError, setEmailError] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const validateEmail = (e) => {
    const userEmail = e.target.value;

    if (validator.isEmail(userEmail)) {
      setEmailError("Valid Email :)");
    } else {
      setEmailError("Enter valid Email!");
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    if (name === "email") {
      validateEmail(e);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if name, email, and message are not empty
    if (!formData.name || !formData.email || !formData.message) {
      alert("Please fill in all fields.");
      return;
    }

    // Your form submission logic here
    console.log("Form submitted:", formData);

    // Reset form after submission (if needed)
    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
      <main className="container mx-auto max-width pt-10 mb-20">
        <section>
          <div name="contact" className="w-full flex justify-center items-center p-4 ">
            <form
                method="POST"
                action="https://getform.io/f/eb17467a-6c6e-40a1-8342-0e64c7fd0e22"
                className="flex flex-col max-w-[600px] w-full"
                onSubmit={handleSubmit}
            >
              <div className="pb-8">
                <p className="text-2xl text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold">Contact</p>
                <p className="text-dark-heading dark:text-light-heading py-4">Feel free to contact me by form or social media </p>
                <h3 className="text-center text-3xl md:text-3xl lg:text-4xl text-gradient font-semibold md:font-bold pt-2 md:pt-2 md:pb-2">
                  <a href={`mailto:${email}`} title="email">
                    <i className="far fa-envelope"></i>
                  </a>
                  <a href={instagram} target="_blank" rel="noreferrer noopener" className="pl-6" title="instagram">
                    <i className="fab fa-instagram"></i>
                  </a>
                </h3>
              </div>

              <input
                  className="bg-dark-heading dark:bg-light-heading text-light-heading dark:text-dark-heading p-2 rounded-lg"
                  type="text"
                  placeholder="Name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
              />
              <input
                  className="my-4 p-2 bg-dark-heading dark:bg-light-heading text-light-heading dark:text-dark-heading rounded-lg"
                  type="text"
                  placeholder="Email"
                  name="email"
                  id="userEmail"
                  value={formData.email}
                  onChange={(e) => {
                    handleChange(e);
                    validateEmail(e);
                  }}
              />
              <span
                  style={{
                    fontWeight: "bold",
                    color: "red",
                  }}
              >
              {emailError}
            </span>
              <textarea
                  className="bg-dark-heading dark:bg-light-heading text-light-heading dark:text-dark-heading p-2 rounded-lg"
                  name="message"
                  rows="10"
                  placeholder="Message"
                  value={formData.message}
                  onChange={handleChange}
              ></textarea>
              <button className="text-dark-heading dark:text-light-heading border-dark-heading dark:border-light-heading border-2 rounded-lg bg-gradient-to-b hover:from-blue-500 hover:to-green-500 px-4 py-3 my-8 mx-auto flex items-center">
                Let's Collaborate ✨
              </button>
            </form>
          </div>
        </section>
      </main>
  );
}

export default Contact;
