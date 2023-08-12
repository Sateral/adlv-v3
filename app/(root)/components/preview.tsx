import Container from "@/components/ui/container";
import getKittens from "@/actions/get-kittens";
import getLitters from "@/actions/get-litters";

import PreviewCards from "@/components/preview-cards";

const Preview = async () => {
  const litters = await getLitters();
  const kittens = await getKittens();
  return (
    <div className="bg-[#e1e2e1] border-secondary-tan">
      <Container>
        <PreviewCards litters={litters} kittens={kittens} />
      </Container>
    </div>
  );
};

export default Preview;
