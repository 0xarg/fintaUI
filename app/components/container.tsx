import { cn } from "../lib/utils";

export const Container = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {

    return (
      <div className={cn("mx-auto max-w-4xl  px-4 md:py-8", className)}>
        {children}
      </div>
    );
};
