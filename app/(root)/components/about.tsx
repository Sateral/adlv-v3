import Image from "next/image";
import Irina from "@/public/Irina.webp";
import Container from "@/components/ui/container";
import Link from "next/link";

const About = () => {
  return (
    <div className="bg-[#EDEFEB]">
      <Container>
        <div className="flex items-center lg:flex-row flex-col gap-8 px-4 py-10 sm:px-6 lg:px-8">
          <div className="font-karla text-lg">
            <p className="font-light text-4xl font-sans">
              Welcome to the Aurore de la Vie cattery!
            </p>
            <p className="mt-2">
              We&apos;re Irina and Andrey, and along with our children, we breed
              and raise British Shorthairs, located in Georgetown, Ontario,
              Canada.
            </p>
            <p className="mt-2">
              Our commitment to breeding these magnificent feline companions has
              led us on an incredible journey. With our extensive experience and
              expertise, we ensure the health, well-being, and impeccable
              lineage of our cats. We take great pride in upholding the highest
              standards of breeding practices for our British Shorthairs.
            </p>
            <p className="mt-2">
              We&apos;ve been registered breeders of British Shorthairs with CCA
              since 2010 and we are members of one of the oldest cat club in
              Canada - Hamilton Cat Fanciers. Our involvement with the cat
              fanciers community allows us to stay connected with fellow
              enthusiasts, exchange knowledge, and continuously improve our
              breeding practices.
            </p>
            <p className="mt-2">
              To learn more about our journey and the exceptional qualities that
              set us apart, we invite you to explore further.{" "}
              <Link href="/about-us">Click here</Link> to discover how our
              dedication and love for these remarkable creatures have shaped
              Aurore de la Vie cattery
            </p>
          </div>

          <Image
            src={Irina}
            priority={true}
            alt="Irina of Aurore de la Vie"
            className="max-w-[380px] max-h-[285px] rounded-lg shadow-xl"
          />
        </div>
      </Container>
    </div>
  );
};

export default About;
