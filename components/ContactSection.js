import React, { useState } from "react";
import baseUrl from "../utils/baseUrl";

const ContactSection = ({ styles, personalDetails }) => {
  const { phoneNumber, address } = personalDetails;
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const submitFormHandler = async (e) => {
    e.preventDefault();
    console.log(baseUrl);
    const res = await fetch(`${baseUrl}/api/contact/`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, message }),
    });

    if (res.status < 300) {
      const data = await res.json();
      console.log(data);
    }
  };

  return (
    <>
      <section className={styles.section} id="contact">
        <div className="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5">
          <div className="lg:py-12 lg:col-span-2">
            <p className="max-w-xl text-lg">
              At the same time, the fact that we are wholly owned and totally
              independent from manufacturer and other group control gives you
              confidence that we will only recommend what is right for you.
            </p>
            <div className="mt-8">
              <a href="" className="text-2xl font-bold text-pink-600">
                {phoneNumber}
              </a>
              <address className="mt-2 not-italic">{address}</address>
            </div>
          </div>
          <div className="p-8 bg-white rounded-lg shadow-lg lg:p-12 lg:col-span-3">
            <form onSubmit={submitFormHandler} className="space-y-4">
              <div>
                <label className="sr-only" htmlFor="name">
                  Name
                </label>
                <input
                  className="w-full p-3 text-sm border-gray-200 rounded-lg"
                  placeholder="Name"
                  type="text"
                  name="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div>
                <div>
                  <label className="sr-only" htmlFor="email">
                    Email
                  </label>
                  <input
                    className="w-full p-3 text-sm border-gray-200 rounded-lg"
                    placeholder="Email address"
                    type="email"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
              </div>

              <div>
                <label className="sr-only" htmlFor="message">
                  Message
                </label>
                <textarea
                  className="w-full p-3 text-sm border-gray-200 rounded-lg"
                  placeholder="Message"
                  rows={8}
                  // name="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                />
              </div>
              <div className="mt-4">
                <button
                  type="submit"
                  className="inline-flex items-center justify-center w-full px-5 py-3 text-white bg-black rounded-lg sm:w-auto"
                >
                  <span className="font-medium"> Submit </span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactSection;
