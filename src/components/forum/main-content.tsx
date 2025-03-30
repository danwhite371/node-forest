import { cn } from "@/lib/utils";
import { ChildrenProps, ClassNameProps } from "@/types";
import ContainerWrapper from "./container-wrapper";
import Container from "./container";

export default function MainContent({
  children,
  className,
}: ChildrenProps & ClassNameProps) {
  return (
    <div className={cn("h-full grow", className)}>
      <ContainerWrapper className="main-height">
        <Container className="h-full">{children}</Container>
      </ContainerWrapper>
    </div>
  );
}
