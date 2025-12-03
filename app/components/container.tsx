import { cn } from "../lib/utils";

export const Container = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {

    return (
      <div className={cn("mx-auto max-w-5xl w-full relative z-10  md:py-0", className)}>
        {children}
      </div>
    );
};
