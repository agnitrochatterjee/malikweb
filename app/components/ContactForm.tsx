import React from "react";
import { Mail, Phone, MapPin, Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

const ContactForm = () => {
  return (
    <section className="w-full flex gap-5 flex-col md:flex-row py-5 lg:px-40 lg:py-16">
      <div className="w-1/2 max-w-7xl mx-auto flex flex-col md:flex-row gap-10 px-10 p-6 rounded-xl shadow-md bg-white">
        {/* Left Form Section */}
        <div className="flex-1">
          <h2 className="text-2xl md:text-3xl font-semibold mb-6">
            Send us a message
          </h2>
          <form className="space-y-5">
            <div className="flex flex-col md:flex-row gap-4">
              <input
                type="text"
                placeholder="John"
                className="flex-1 p-3 bg-[#F4F4F4] rounded-md focus:outline-none"
              />
              <input
                type="text"
                placeholder="Doe"
                className="flex-1 p-3 bg-[#F4F4F4] rounded-md focus:outline-none"
              />
            </div>
            <input
              type="email"
              placeholder="JohnDoe@gmail.com"
              className="w-full p-3 bg-[#F4F4F4] rounded-md focus:outline-none"
            />
            <input
              type="tel"
              placeholder="123-456-7890"
              className="w-full p-3 bg-[#F4F4F4] rounded-md focus:outline-none"
            />
            <textarea
              rows={4}
              placeholder="Message..."
              className="w-full p-3 bg-[#F4F4F4] rounded-md focus:outline-none"
            ></textarea>
            <button
              type="submit"
              className="w-full px-6 py-3 bg-[#B2DC18] text-white font-semibold rounded-md cursor-pointer hover:scale-105 transition-all"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>

      <div className="w-1/2 max-w-7xl mx-auto flex flex-col md:flex-row gap-10 p-3 rounded-xl">
        {/* Right Info Section */}
        <div className="flex-1">
          <h2 className="text-2xl md:text-3xl text-center font-semibold mb-6">
            Get in Touch
          </h2>
          <p className="text-gray-600 text-1xl mb-6 text-center">
            Looking for help with your tax return or payroll? Or maybe
            you&apos;re interested in full accounting services. Whatever you
            need, we’re here to help you get on with business.
          </p>

          <div className="space-y-4 mb-6">
            <div className="flex items-start gap-3">
              <div className="bg-[#B2DC18] p-2 rounded-full text-white">
                <Phone size={20} />
              </div>
              <div>
                <p className="font-medium">Phone Number</p>
                <p className="text-gray-600 text-sm">0449779218</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="bg-gray-200 p-2 rounded-full text-gray-700">
                <Mail size={20} />
              </div>
              <div>
                <p className="font-medium">Mail ID</p>
                <p className="text-gray-600 text-sm">
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
                <p className="text-gray-600 text-sm">
                  PO Box 795 Labrador, Qld 4215
                </p>
              </div>
            </div>
          </div>

          {/* Social Icons */}
          <div>
            <p className="font-medium mb-2">Follow Our Social Media</p>
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
