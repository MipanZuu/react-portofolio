import React from "react";
import { contactDetails } from "../Details";

function Contact() {
  const { email, instagram } = contactDetails;
  return (
    <main className="container mx-auto max-width pt-10 mb-20">
      <section>
        <div name="contact" className="w-full flex justify-center items-center p-4 ">
          <form method="POST" action="https://getform.io/f/eb17467a-6c6e-40a1-8342-0e64c7fd0e22" className="flex flex-col max-w-[600px] w-full">
            <div className="pb-8">
              <p className="text-2xl text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold">Contact</p>
              <p className="text-dark-heading dark:text-light-heading py-4">Feel free to contact me by form or social media </p>
              <h3 className="text-center text-3xl md:text-3xl lg:text-4xl text-gradient font-semibold md:font-bold pt-2 md:pt-2 md:pb-2">
                <a href={`mailto:${email}`} title="email">
                  <i class="far fa-envelope"></i>
                </a>
                <a href={instagram} target="_blank" rel="noreferrer noopener" class="pl-6" title="instagram">
                  <i class="fab fa-instagram"></i>
                </a>
              </h3>
            </div>
            <input className="bg-dark-heading dark:bg-light-heading text-light-heading dark:text-dark-heading p-2 rounded-lg" type="text" placeholder="Name" name="name" />
            <input className="my-4 p-2 bg-dark-heading dark:bg-light-heading text-light-heading dark:text-dark-heading rounded-lg" type="email" placeholder="Email" name="email" />
            <textarea className="bg-dark-heading dark:bg-light-heading text-light-heading dark:text-dark-heading p-2 rounded-lg" name="message" rows="10" placeholder="Message"></textarea>
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
