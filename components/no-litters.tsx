import Image from "next/image";
import SadCat from "@/public/SadCat.png";

const NoLitters = () => {
  return (
    <div className="p-4 sm:p-6 lg:p-8 flex justify-center items-center flex-col">
      <p className="font-jost text-4xl text-primary-tan font-medium">Sorry!</p>
      <Image src={SadCat} alt="Frowning Cat" className="max-w-[150px]" />
      <p className="font-jost sm:text-4xl text-2xl text-primary-tan font-medium text-center">
        As of right now&apos; we have no kittens.
      </p>
      <p className="md:w-[700px] sm:w-[500px] sm:text-xl text-lg font-jost mt-4 text-center">
        If you're interested in making one a part of your family, contact us to
        join our waitlist. We appreciate your patience and look forward to
        connecting you with a new feline friend soon!
      </p>
    </div>
  );
};

export default NoLitters;
