import { cn } from "@/lib/utils";
import { ChildrenProps, ClassNameProps } from "@/types";
import ContainerWrapper from "./container-wrapper";
import Container from "./container";

export default function Footer({
  children,
  className,
}: ChildrenProps & ClassNameProps) {
  return (
    <footer className={cn("border-t border-border", className)}>
      <ContainerWrapper>
        <Container className="flex py-3 box-border">{children}</Container>
      </ContainerWrapper>
    </footer>
  );
}
