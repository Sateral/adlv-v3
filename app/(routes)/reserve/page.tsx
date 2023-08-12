import Hero from "@/components/hero";
import { Separator } from "@/components/ui/separator";

const Reserve = () => {
  return (
    <>
      <Hero title="How to Reserve" />
      <div className="bg-[#EDEFEB]">
        <div className="mx-auto max-w-7xl font-karla p-8 text-lg">
          <div>
            <h2 className="font-bold text-center text-3xl pb-4 text-primary-tan">
              Reserving Kittens in Advance
            </h2>
            <p className="pb-4">
              <span className="pl-8">We</span> normally have a large waiting
              list for kittens. Going on the waiting list doesn't guarantee you
              a kitten but there are no obligations and no deposit required to
              be on the waiting list. We contact people on our waiting list via
              email on the day we know that our queen is pregnant. You are very
              welcome to contact us any way you prefer and we will add your name
              and your contact information to our waiting list. Once the kittens
              are born it will be available to reserve one or more kittens from
              the litter.
            </p>

            <p>
              To reserve a kitten, please describe a kitten you are interested
              in along with some information about you and any questions you may
              have. Kittens are reserved with a $400 non-refundable deposit paid
              either by person check, PayPal money transfer or cash.
            </p>
          </div>

          <Separator className="bg-primary-tan h-[2px] my-4" />

          <div>
            <h2 className="font-bold text-center text-3xl pb-2 text-primary-tan">
              Deposit
            </h2>
            <p className="pb-4">
              <span className="pl-8">All</span> kittens require a minimum
              deposit of $400.00 each, this is to reserve & secure your
              purchase. Unfortunately, due to timewasters in the past, the
              deposit is non-refundable. However if you are serious with your
              intention to purchase and home a kitten, the non-refundable
              deposit shouldn't be an issue. The balance is to be paid in cash
              on the day of collection or by bank transfer seven days prior, so
              that the bank transfer clears into our bank account. We reserve
              the right to refuse a sale & to withdraw a kitten from being for
              sale. If the kitten that is withdrawn from sale has been reserved,
              an alternative kitten will be offered. If we're unable to provide
              you with the same colour & sex kitten you requested. a refuns of
              the deposit would be considered.
            </p>

            <p className="">
              If the kitten reserved hasn't been collected by the time it
              reaches thirteen weeks of age, unless previously agreed with us,
              the deposit will be forfeited & the kitten will be
              re-advertized/sold.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Reserve;
