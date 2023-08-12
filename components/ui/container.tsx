import { FC } from "react";

interface ContainerProps {
  children: React.ReactNode;
}

const Container: FC<ContainerProps> = ({ children }) => {
  return <div className="mx-auto max-w-[1600px]">{children}</div>;
};

export default Container;
