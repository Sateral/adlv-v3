import { Cat, Cross, Heart } from "lucide-react";

const qualities = [
  {
    icon: Cross,
    header: "Health First",
    description:
      "Our commitment to your feline friend's well-being starts with their health. Every kitten undergoes thorough health checks and vaccinations, ensuring a strong and happy start to their lives. Your new family member's health is our priority.",
  },
  {
    icon: Heart,
    header: "Raised with Love",
    description:
      "Our kittens aren't just pets; they're family. Grown amidst human warmth and affection, each one boasts a unique and loving personality, ready to form an unbreakable bond with their forever home.",
  },
  {
    icon: Cat,
    header: "Beyond Adorable",
    description:
      "Our kittens aren't just adorable; they redefine cuteness. With their fluffy coats, twinkling eyes, and irresistible antics, these little furballs will melt away your stress and fill your days with boundless joy.",
  },
];

const Qualities = () => {
  return (
    <div className="bg-[#ebe4da] flex items-center justify-center">
      <div className="max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-3 lg:gap-2 gap-4 items-stretch justify-center p-8 w-full">
          {qualities.map((quality, index) => (
            <div
              key={index}
              className={`font-karla text-primary-tan p-4 rounded-lg shadow-md hover:scale-[1.02] duration-100 ease-in-out bg-[#faf8f8] ${
                index === 1 ? "lg:mx-8" : ""
              }`}
            >
              <h2 className="text-2xl font-semibold flex items-center">
                <quality.icon size={24} className="mr-2" />
                {quality.header}
              </h2>
              <p className="text-lg">{quality.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Qualities;
