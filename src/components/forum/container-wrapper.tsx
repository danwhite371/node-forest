import { cn } from '@/lib/utils';
import { ChildrenProps, ClassNameProps } from '@/types';

export default function ContainerWrapper({
  children,
  className,
}: ChildrenProps & ClassNameProps) {
  // border-border mx-auto w-full max-w-[1400px] min-[1400px]:border-x min-[1800px]:max-w-[1536px]
  return (
    <div
      className={cn(
        'border-border mx-auto w-full max-w-[1400px] min-[1400px]:border-x min-[1800px]:max-w-[1536px]',
        className
      )}
    >
      {children}
    </div>
  );
}
