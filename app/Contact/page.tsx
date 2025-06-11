import ContactForm from "../components/ContactForm";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const page = () => {
  return (
    <div className="min-w-screen flex flex-col">
      <h1 className='text-5xl py-5 text-center font-base'>Contact Us</h1>
      <p className='px-5 text-center'>Curious about how we can help with your finances? Reach out to our team today. We specialize in SMSF management, business advisory, tax accounting, and more. No matter if you&apos;re an individual or a business, we offer customized solutions to fit your financial needs. Contact us by phone or email to begin your journey toward financial success.</p>

      {/* Form Content */}
      {/* <div className='px-5 py-10'>
        <div className='h-[450px] w-[400px] bg-white rounded-2xl p-10'>
          <h2 className='text-[30px]'>Send us a message</h2>
        </div> */}

      <ContactForm />
      </div>
  )
}

export default page
