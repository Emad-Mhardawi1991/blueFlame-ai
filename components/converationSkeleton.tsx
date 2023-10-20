import { cn } from "@/lib/utils";
import { HtmlHTMLAttributes } from "react";
import { Skeleton } from "./ui/skeleton";

const ConversationSkeleton = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <div className={cn(className, " flex gap-5 justify-center items-center p-4 ")}>
      <Skeleton className="w-14 h-14 rounded-full bg-gray-900 p-0" />
      <div className="flex flex-col gap-2 w-full ">
        <Skeleton className="bg-gray-900  h-4 w-1/2" />
        <Skeleton className="bg-gray-900  h-6 w-8/12" />
      </div>
    </div>
  );
};

export default ConversationSkeleton;
