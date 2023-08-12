import Hero from "@/components/hero";
import Link from "next/link";

const KittenPolicy = () => {
  return (
    <>
      <Hero title="Kitten Policy" />
      <div className="bg-[#EDEFEB]">
        <div className="mx-auto max-w-7xl font-karla p-8 text-lg">
          <ol className="list-decimal">
            <li className="mb-4">
              Kittens can only be reserved after deposit is received by breeder.{" "}
              <Link href="/reserve" className="text-blue-500">
                (Please click here to see How to reserve page)
              </Link>
            </li>

            <li className="mb-4">
              The outstanding balance will be paid prior or at the latest on the
              date of delivery of the kitten to the purchaser.
            </li>

            <li className="mb-4">
              Your kitten will...{" "}
              <ul className="list-disc ml-8">
                <li className="mb-4">
                  Leave our cattery at the minimum age of 13 weeks, completely
                  weaned, toilet trained and socialized with humans and other
                  cats.
                </li>
                <li className="mb-4">
                  Vaccinated twice, dewormed and health-checked by our
                  veterinarian before they leave for a new home.
                </li>
                <li className="mb-4">
                  Go to new home with samples of the food they have been raised,
                  the kitten's favorite toys, and recommended diet list.
                </li>
                <li>
                  Go to their homes with registration paper from CCA (Canada Cat
                  Association).
                </li>
              </ul>
            </li>

            <li className="mb-4">
              All our kittens will be early sterilized prior to placement.
            </li>

            <li className="mb-4">
              The kitten is to remain indoor at all times.
            </li>

            <li className="mb-4">
              Under no circumstances will this kitten be declawed.
            </li>

            <li>
              Under no circumstances will this kitten be sold, leased or given
              away to any pet shop, animal shelter, laboratory or research
              facility. The buyer further warrant that this kitten will be given
              all necessary veterinary care to maintain its health. It is fully
              understood and acknowledged between both parties that no
              long-range guarantee can be offered to the varying condition in
              the kitten's new home environment.
            </li>
          </ol>
        </div>
      </div>
    </>
  );
};

export default KittenPolicy;
