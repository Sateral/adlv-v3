import Link from "next/link";
import { FacebookIcon, Mail, MapPin, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#222222]">
      <div className="py-10 flex items-center justify-around text-[#E3CCB1] font-karla">
        <ul className="list-none ">
          <li className="pb-2">
            <Link href="/Contact" className="underline">
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

        <p>&copy; 2023 Aurore de la Vie</p>
      </div>
    </footer>
  );
};

export default Footer;
