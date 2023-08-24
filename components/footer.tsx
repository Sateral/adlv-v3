import Link from "next/link";
import { FacebookIcon, Mail, MapPin, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#222222]">
      <div className="py-10 flex items-center sm:flex-row flex-col justify-around text-[#E3CCB1] font-karla">
        <div className="flex-1 flex justify-center">
          <ul className="list-none">
            <li className="pb-2">
              <Link href="/contact-us" className="underline">
                Find Us
              </Link>
            </li>

            <li className="flex items-center pb-2">
              <Mail className="mr-2" />
              kopylenkoa@gmail.com
            </li>

            <li className="flex items-center pb-2">
              <Phone className="mr-2" />
              905-460-7778
            </li>

            <li className="flex items-center pb-2">
              <MapPin className="mr-2" />
              Georgetown, Halton Hills ON, Canada
            </li>

            <li className="w-max ">
              <Link
                href="https://www.facebook.com/people/Aurore-de-la-Vie/100093337211666/"
                target="_blank"
              >
                <FacebookIcon />
              </Link>
            </li>
          </ul>
        </div>

        <p className="sm:pt-0 pt-7 flex justify-center flex-1">
          &copy; 2023 Aurore de la Vie
        </p>
      </div>
    </footer>
  );
};

export default Footer;
