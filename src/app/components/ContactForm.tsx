"use client"
import { useState, SyntheticEvent, FormEvent } from "react"
import baseUrl from "@/utils/baseUrl"
import ButtonComponent from "./ButtonComponent"

const ContactForm = () => {
  const [confirmMessageSent, setConfirmMessageSent] = useState(false)
  const [errorMessageSent, setErrorMessageSent] = useState(false)
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")

  const submitFormHandler = async (e: FormEvent<HTMLFormElement>) => {
    // const submitFormHandler = async (e: SyntheticEvent) => {
    e.preventDefault()

    const res = await fetch(`${baseUrl}/api/contact/`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, message })
    })

    if (res.status < 300) {
      const data = await res.json()
      console.log(data)
      setConfirmMessageSent(true)
      setName("")
      setEmail("")
      setMessage("")
    } else {
      setErrorMessageSent(true)
    }
  }
  return (
    <>
      {confirmMessageSent && (
        <div
          className="p-4 mb-4 text-md font-bold text-blue-700 bg-blue-100 rounded-lg dark:bg-blue-200 dark:text-blue-800"
          role="alert"
        >
          Message Successfully Sent!
        </div>
      )}
      {errorMessageSent && (
        <div
          className="p-4 mb-4 text-md font-bold text-red-700 bg-red-100 rounded-lg"
          role="alert"
        >
          There has been an error! Please send an email directly instead. Sorry
          for the inconvenience!
        </div>
      )}
      <form onSubmit={submitFormHandler} className="space-y-4">
        <div>
          <label className="sr-only" htmlFor="name">
            Name
          </label>
          <input
            className="w-full p-3 text-sm border-gray-200 rounded-lg font-medium"
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
              className="w-full p-3 text-sm border-gray-200 rounded-lg font-medium"
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
            className="w-full p-3 text-sm border-gray-200 rounded-lg font-medium"
            placeholder="Message"
            rows={8}
            // name="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </div>
        <div className="mt-4">
          <ButtonComponent type="submit">Submit</ButtonComponent>
        </div>
      </form>
    </>
  )
}
export default ContactForm
