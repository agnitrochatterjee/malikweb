import ContactSection from "../components/ContactForm";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const page = () => {
  return (
    <div className={poppins.className}>
      <h1 className='text-5xl py-5 font-semibold place-self-center'>Contact Us</h1>
      <p className='px-5 place-self center'>Curious about how we can help with your finances? Reach out to our team today. We specialize in SMSF management, business advisory, tax accounting, and more. No matter if you're an individual or a business, we offer customized solutions to fit your financial needs. Contact us by phone or email to begin your journey toward financial success.</p>

      {/* Form Content */}
      {/* <div className='px-5 py-10'>
        <div className='h-[450px] w-[400px] bg-white rounded-2xl p-10'>
          <h2 className='text-[30px]'>Send us a message</h2>
        </div> */}

      <ContactSection />
      </div>
  )
}

export default page
