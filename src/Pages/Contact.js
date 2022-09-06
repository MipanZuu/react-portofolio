import React from "react";
import { contactDetails } from "../Details";

function Contact() {
  const { email, instagram } = contactDetails;
  return (
    <main className="container mx-auto max-width section">
      <h2 className="text-center text-2xl md:text-3xl lg:text-6xl text-dark-heading dark:text-light-heading font-semibold md:font-bold">For any questions please drop a message</h2>
      <h3 className="text-center text-3xl md:text-4xl lg:text-6xl text-gradient font-semibold md:font-bold pt-5 md:pt-10 md:pb-6">
        <a href={`mailto:${email}`}>
          <i class="far fa-envelope"></i>
        </a>
      </h3>
      <span className="text-center text-content text-xl font-light block">or</span>
      <h3 className="text-center text-3xl md:text-4xl lg:text-6xl text-gradient font-semibold md:font-bold pt-2 md:py-6">
        <a href={instagram} target="_blank" rel="noreferrer noopener">
          <i class="fab fa-instagram"></i>
        </a>
      </h3>
    </main>
  );
}

export default Contact;
