// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'

import "./App.css";
import { cn } from "./lib/utils";

type ChildrenProps = {
  children?: React.ReactNode;
};
function OuterFrame({ children }: ChildrenProps) {
  return (
    <div className="relative flex min-h-svh flex-col bg-background text-foreground">
      {children}
    </div>
  );
}

function Header({ children }: ChildrenProps) {
  // sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      {children}
    </header>
  );
}

function ContainerWrapper({ children }: ChildrenProps) {
  // border-border mx-auto w-full max-w-[1400px] min-[1400px]:border-x min-[1800px]:max-w-[1536px]
  return (
    <div className="border-border mx-auto w-full max-w-[1400px] min-[1400px]:border-x min-[1800px]:max-w-[1536px]">
      {children}
    </div>
  );
}

type ClassNameProps = {
  className?: string;
};

function Container({ children, className }: ChildrenProps & ClassNameProps) {
  return (
    <div className={cn("mx-auto max-w-[1536px] min-[1280px]:px-6", className)}>
      {children}
    </div>
  );
}

function App() {
  return (
    <OuterFrame>
      <Header>
        <ContainerWrapper>
          <Container className="flex h-14 justify-between items-center gap-2 md:gap-4">
            <div className="font-bold text-lg">Node Forest</div>
            <div>On the right</div>
          </Container>
        </ContainerWrapper>
      </Header>
    </OuterFrame>
  );
}

export default App;
