import React from "react";

import ContactForm from "./ContactForm";

const ContactSection = ({ styles, personalDetails }) => {
  const { phoneNumber, address, email } = personalDetails;

  return (
    <>
      <section className={styles.section} id="contact">
        <div className="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5">
          <div className="lg:py-12 lg:col-span-2">
            <h3 className="font-bold lg:text-2xl lg:p-10">
              I would like to connect
            </h3>
            <p className="max-w-xl">
              <span className="text-sm font-bold">Email: </span>
              <span className="text-base italic">{email}</span>
            </p>
            <p className="max-w-xl">
              <span className="text-sm font-bold">Number: </span>
              <span className="text-base italic">{phoneNumber}</span>
            </p>
            <p className="max-w-xl">
              <span className="text-sm font-bold">Address: </span>
              <span className="text-base italic">{address}</span>
            </p>
          </div>
          <div className="p-8 bg-white rounded-lg shadow-lg lg:p-12 lg:col-span-3">
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactSection;
