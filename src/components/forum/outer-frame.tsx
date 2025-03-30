import { ChildrenProps } from "@/types";

export default function OuterFrame({ children }: ChildrenProps) {
  return (
    <div className="relative flex min-h-svh flex-col bg-background text-foreground">
      {children}
    </div>
  );
}
