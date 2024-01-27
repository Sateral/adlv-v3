import Contact from "@/components/contact";
import Hero from "@/components/hero";
import { Mail, MapPin, Phone } from "lucide-react";

const ContactUs = () => {
  return (
    <div className="bg-[#EDEFEB]">
      <Hero title="Contact Us" />

      <div className="font-karla text-2xl flex justify-center items-center flex-col p-8 pb-0">
        <div>
          <p className="flex flex-row items-center">
            <Phone size={32} className="mr-1" />
            Call us at:
          </p>
          <ul className="list-disc ml-16 text-xl">
            <li>Mobile: (905)-460-7778</li>
            <li>Home: (289)-801-0610</li>
          </ul>

          <p className="flex flex-row items-center mt-4">
            <Mail size={32} className="mr-1" />
            Email us at:
          </p>
          <ul className="list-disc ml-16 text-xl">
            <li>kopylenkoa@gmail.com</li>
          </ul>

          <p className="mt-8 text-2xl flex flex-row items-center">
            <MapPin size={32} />
            We are located in Georgetown, Halton Hills ON, CA
          </p>
        </div>
      </div>

      <Contact />
    </div>
  );
};

export default ContactUs;
