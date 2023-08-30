import Container from "@/components/ui/container";
import getKittens from "@/actions/get-kittens";
import getLitters from "@/actions/get-litters";

import PreviewCards from "@/components/preview-cards";

export const revalidate = 0;
export const dynamic = "force-dynamic";

const Preview = async () => {
  const litters = await getLitters();
  const kittens = await getKittens();
  return (
    <div className="bg-[#EDEFEB] border-secondary-tan border-b-[3px]">
      <Container>
        <PreviewCards litters={litters} kittens={kittens} />
      </Container>
    </div>
  );
};

export default Preview;
