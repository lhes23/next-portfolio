import React from "react"
import data from "@/utils/data.json"

import ContactForm from "./ContactForm"
import { styles } from "./MainContent"

const ContactSection = () => {
  const { phoneNumber, address, email } = data.personalDetails
  return (
    <>
      <section className={styles.section} id="contact">
        <div className="grid grid-cols-1 gap-x-6 gap-y-8 lg:grid-cols-5">
          <div className={`p-8 lg:col-span-2 ${styles.bgCardGlass}`}>
            <h3 className="font-bold text-gray-800 text-center text-xl py-4 lg:text-2xl lg:p-10">
              I would like to connect
            </h3>
            <p className="py-2 text-md">
              Please message me or contact me directly thru email. I would like
              to hear from you
            </p>
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
          <div
            className={`p-8 rounded-lg shadow-lg lg:p-12 lg:col-span-3 ${styles.bgCardGlass}`}
          >
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  )
}

export default ContactSection
