import React from "react";
import { Mail, Phone, MapPin, Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

const ContactForm = () => {
  return (
    <section className="max-w-5xl mx-auto flex gap-12 flex-col md:flex-row py-5 md:py-10">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-10 p-6 md:px-10 md:p-13 rounded-xl shadow-md bg-white">
        {/* Left Form Section */}
        <div className="flex-1">
          <h2 className="text-2xl md:text-3xl font-base mb-6">
            Send us a message
          </h2>
          <form className="space-y-5">
            <div className="flex flex-col md:flex-row gap-4">
                <div>
            <p className="mb-2">First Name</p>
              <input
                type="text"
                placeholder="John"
                className="flex-1 p-3 bg-[#F4F4F4] rounded-md focus:outline-none"
              />
              </div>

              <div>
            <p className="mb-2">Second Name</p>

              <input
                type="text"
                placeholder="Doe"
                className="flex-1 p-3 bg-[#F4F4F4] rounded-md focus:outline-none"
              />
              </div>
            </div>

            <div>
            <p className="mb-2">Email</p>
            <input
              type="email"
              placeholder="JohnDoe@gmail.com"
              className="w-full p-3 bg-[#F4F4F4] rounded-md focus:outline-none"
            />
            </div>

            <div>
            <p className="mb-2">Phone Number</p>
            <input
              type="tel"
              placeholder="123-456-7890"
              className="w-full p-3 bg-[#F4F4F4] rounded-md focus:outline-none"
            />
            </div>

            <div>
            <p className="mb-2">Your Message</p>
            <textarea
              rows={4}
              placeholder="Message..."
              className="w-full p-3 bg-[#F4F4F4] rounded-md focus:outline-none"
            ></textarea>
            </div>
            <button
              type="submit"
              className="w-full px-6 py-3 bg-[#B2DC18] text-white font-semibold rounded-md cursor-pointer hover:scale-105 transition-all"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>

      <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-10 p-3 rounded-xl">
        {/* Right Info Section */}
        <div className="flex-1">
          <h2 className="text-2xl md:text-3xl text-left font-base mt-4">
            Get in Touch
          </h2>
          <p className="text-gray-500 text-1xl mt-3 mb-9 text-left">
            Looking for help with your tax return or payroll? Or maybe
            you&apos;re interested in full accounting services. Whatever you
            need, we’re here to help you get on with business.
          </p>

          <div className="space-y-4 mb-6">
            <div className="flex mb-12 items-start gap-3">
              <div className="bg-[#B2DC18] p-2 rounded-full text-white">
                <Phone size={20} />
              </div>
              <div>
                <p className="font-medium">Phone Number</p>
                <p className="text-gray-500 text-sm">0449779218</p>
              </div>
            </div>
            <div className="flex mb-12 items-start gap-3">
              <div className="bg-white p-2 rounded-full text-gray-700">
                <Mail size={20} />
              </div>
              <div>
                <p className="font-medium">Mail ID</p>
                <p className="text-gray-500 text-sm">
                  reception@malikaziz.com.au
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="bg-[#B2DC18] p-2 rounded-full text-white">
                <MapPin size={20} />
              </div>
              <div>
                <p className="font-medium">Location</p>
                <p className="text-gray-500 text-sm">
                  PO Box 795 Labrador, Qld 4215
                </p>
              </div>
            </div>
          </div>

          <div className="relative z-10 w-full place-self-center mt-10 border-t border-gray-300 pt-4" />

          {/* Social Icons */}
          <div>
            <p className="font-medium mt-6 mb-2">Follow Our Social Media</p>
            <div className="flex gap-4">
              <div className="flex items-start gap-3">
                <div className="cursor-pointer bg-[#B2DC18] p-2 rounded-full text-white">
                  <Facebook size={20} />
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="cursor-pointer bg-white p-2 rounded-full text-white">
                <Instagram size={20} color="black"/>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="cursor-pointer bg-[#B2DC18] p-2 rounded-full text-white">
                <Linkedin size={20}/>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="cursor-pointer bg-white p-2 rounded-full text-white">
                  <Twitter size={20} color="black" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
