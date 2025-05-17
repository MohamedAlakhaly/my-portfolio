"use client"
import { useState } from "react"
import Navbar from "../components/navbar"
import { faPhone, faEnvelope, faLocationDot, faPaperPlane } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import PersonalInfoCard from "../components/personal_info_card"

export default function Contact() {
  // Form state
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  })

  // Form validation state
  const [errors, setErrors] = useState({})

  // Form submission state
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value,
    })

    // Clear error when user types
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: "",
      })
    }
  }

  // Validate form
  const validateForm = () => {
    const newErrors = {}

    if (!formData.firstName.trim()) newErrors.firstName = "First name is required"
    if (!formData.lastName.trim()) newErrors.lastName = "Last name is required"

    if (!formData.email.trim()) {
      newErrors.email = "Email is required"
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid"
    }

    if (!formData.message.trim()) newErrors.message = "Message is required"

    return newErrors
  }

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault()

    // Validate form
    const formErrors = validateForm()
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors)
      return
    }

    // Submit form
    setIsSubmitting(true)

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false)
      setSubmitSuccess(true)

      // Reset form after 3 seconds
      setTimeout(() => {
        setSubmitSuccess(false)
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          message: "",
        })
      }, 3000)
    }, 1500)
  }

  return (
    <div className="min-h-screen container mx-auto relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-40 -left-64 w-96 h-96 bg-primary/20 rounded-full blur-3xl opacity-30 animate-pulse" />
      <div className="absolute bottom-20 -right-64 w-96 h-96 bg-primary/20 rounded-full blur-3xl opacity-30 animate-pulse" />

      {/* Background grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px] z-[-1] opacity-30"></div>

      {/* Navbar */}
      <Navbar />

      {/* Header Section */}
      <div className="pt-28 pb-12 text-center relative">
        <div className="inline-block">
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-transparent mx-auto mb-4"></div>
          <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-primary from-30% to-white to-70% lg:text-5xl text-4xl font-bold animate__animated animate__fadeInDown">
            Get In Touch
          </h1>
          <div className="w-full h-1 bg-gradient-to-l from-primary to-transparent mx-auto mt-4"></div>
        </div>
        <p className="text-gray-400 mt-6 max-w-2xl mx-auto text-lg">
          Have a project in mind or want to discuss a potential collaboration? I'd love to hear from you!
        </p>
      </div>

      {/* Main Content */}
      <div className="px-4 pb-20">
        <div className="bg-zinc-800/80 backdrop-blur-sm border border-zinc-700/50 rounded-xl overflow-hidden shadow-xl">
          <div className="md:flex">
            {/* Contact Form Section */}
            <div className="md:w-2/3 p-8 md:p-10">
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-white mb-3 animate__animated animate__fadeInDown">
                  Let's work together
                </h2>
                <p className="text-gray-300 animate__animated animate__fadeInLeft">
                  As a web and mobile app developer, I'm happy to receive your inquiries about your upcoming projects,
                  whether it's developing professional websites or innovative mobile apps for iOS and Android. Feel free
                  to contact me to discuss the details and transform your ideas into a distinctive and effective digital
                  reality.
                </p>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 animate__animated animate__fadeInUp">
                  <div>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      className={`w-full bg-zinc-900/80 rounded-lg py-3 px-4 border ${
                        errors.firstName ? "border-red-500" : "border-zinc-600 focus:border-primary"
                      } text-white placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-primary/50 transition-all duration-300`}
                      placeholder="First Name"
                    />
                    {errors.firstName && <p className="text-red-500 text-xs mt-1">{errors.firstName}</p>}
                  </div>

                  <div>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      className={`w-full bg-zinc-900/80 rounded-lg py-3 px-4 border ${
                        errors.lastName ? "border-red-500" : "border-zinc-600 focus:border-primary"
                      } text-white placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-primary/50 transition-all duration-300`}
                      placeholder="Last Name"
                    />
                    {errors.lastName && <p className="text-red-500 text-xs mt-1">{errors.lastName}</p>}
                  </div>

                  <div>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full bg-zinc-900/80 rounded-lg py-3 px-4 border ${
                        errors.email ? "border-red-500" : "border-zinc-600 focus:border-primary"
                      } text-white placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-primary/50 transition-all duration-300`}
                      placeholder="Email"
                    />
                    {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                  </div>

                  <div>
                    <input
                      type="text"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full bg-zinc-900/80 rounded-lg py-3 px-4 border border-zinc-600 focus:border-primary text-white placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-primary/50 transition-all duration-300"
                      placeholder="Phone (Optional)"
                    />
                  </div>
                </div>

                <div className="mt-5 animate__animated animate__fadeInUp">
                  <textarea
                    rows={5}
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className={`w-full bg-zinc-900/80 rounded-lg py-3 px-4 border ${
                      errors.message ? "border-red-500" : "border-zinc-600 focus:border-primary"
                    } text-white placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-primary/50 transition-all duration-300`}
                    placeholder="Your Message"
                  />
                  {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
                </div>

                <div className="mt-6 animate__animated animate__fadeInUp">
                  <button
                    type="submit"
                    disabled={isSubmitting || submitSuccess}
                    className={`${
                      isSubmitting || submitSuccess ? "bg-primary/70" : "bg-primary hover:bg-primary/90"
                    } text-black font-semibold py-3 px-6 rounded-full transition-all duration-300 flex items-center gap-2 ${
                      isSubmitting
                        ? "cursor-wait"
                        : submitSuccess
                          ? "cursor-default"
                          : "cursor-pointer hover:shadow-lg hover:shadow-primary/20"
                    }`}
                  >
                    {isSubmitting ? (
                      <>
                        <svg
                          className="animate-spin -ml-1 mr-2 h-4 w-4 text-black"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          ></circle>
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          ></path>
                        </svg>
                        Sending...
                      </>
                    ) : submitSuccess ? (
                      <>
                        <svg
                          className="h-4 w-4 text-black"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        Message Sent!
                      </>
                    ) : (
                      <>
                        <FontAwesomeIcon icon={faPaperPlane} className="h-4 w-4" />
                        Send Message
                      </>
                    )}
                  </button>
                </div>
              </form>
            </div>

            {/* Contact Info Section */}
            <div className="md:w-1/3 bg-zinc-900/50 p-8 md:p-10 flex flex-col justify-center">
              <h2 className="text-xl font-bold text-white mb-6 animate__animated animate__fadeInDown">
                Contact Information
              </h2>

              <div className="space-y-2">
                <PersonalInfoCard
                  cardIcon={faPhone}
                  cardTitle="phone"
                  cardContent="(+32) 466 16 12 89"
                  cardAnimation="animate__animated animate__fadeInRight"
                />
                <PersonalInfoCard
                  cardIcon={faEnvelope}
                  cardTitle="email"
                  cardContent="alakhail755@gmail.com"
                  cardAnimation="animate__animated animate__fadeInRight"
                />
                <PersonalInfoCard
                  cardIcon={faLocationDot}
                  cardTitle="location"
                  cardContent="Belgium - Sint-niklas"
                  cardAnimation="animate__animated animate__fadeInRight"
                />
              </div>

              {/* Social Media Links */}
              <div className="mt-10">
                <h3 className="text-sm font-medium text-gray-400 mb-4">CONNECT WITH ME</h3>
                <div className="flex space-x-4">
                  <a
                    href="https://www.linkedin.com/in/mohamed-alakhaly-23a25a284/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center text-gray-300 hover:bg-primary hover:text-black transition-all duration-300"
                    aria-label="LinkedIn"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  </a>
                  <a
                    href="https://github.com/MohamedAlakhaly"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center text-gray-300 hover:bg-primary hover:text-black transition-all duration-300"
                    aria-label="GitHub"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path
                        fillRule="evenodd"
                        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>
                  <a
                    href="https://www.instagram.com/_mohamed_toto_/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center text-gray-300 hover:bg-primary hover:text-black transition-all duration-300"
                    aria-label="Instagram"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path
                        fillRule="evenodd"
                        d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
