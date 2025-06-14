import { div } from "framer-motion/client";
import ContactForm from "../components/ContactForm";

const page = () => {
  return (
    <div className="overflow-x-hidden">
    <div className="min-w-screen flex flex-col">
      <h1 className='text-5xl mt-10 text-center font-semibold'>Contact Us</h1>
      <p className='max-w-5xl mx-auto mt-3 text-center'>Curious about how we can help with your finances? Reach out to our team today. We specialize in SMSF management, business advisory, tax accounting, and more. No matter if you&apos;re an individual or a business, we offer customized solutions to fit your financial needs. Contact us by phone or email to begin your journey toward financial success.</p>

      {/* Form Content */}

      <ContactForm />
      </div>
      </div>
  )
}

export default page
