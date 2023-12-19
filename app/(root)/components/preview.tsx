import Container from "@/components/ui/container";
import getKittens from "@/actions/get-kittens";
import getLitters from "@/actions/get-litters";

import PreviewCards from "@/components/preview-cards";
import NoLitters from "@/components/no-litters";

export const revalidate = 0;
export const dynamic = "force-dynamic";

const Preview = async () => {
  const litters = await getLitters();
  const kittens = await getKittens();
  return (
    <div className="bg-[#EDEFEB] border-secondary-tan border-b-[3px]">
      <Container>
        {litters.length !== 0 && (
          <PreviewCards litters={litters} kittens={kittens} />
        )}
        {litters.length === 0 && <NoLitters />}
      </Container>
    </div>
  );
};

export default Preview;
