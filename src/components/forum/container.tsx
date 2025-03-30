import { cn } from "@/lib/utils";
import { ChildrenProps, ClassNameProps } from "@/types";

export default function Container({
  children,
  className,
}: ChildrenProps & ClassNameProps) {
  return (
    <div className={cn("mx-auto max-w-[1536px] min-[1280px]:px-6", className)}>
      {children}
    </div>
  );
}
