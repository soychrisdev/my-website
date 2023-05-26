import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import React from "react";

export default function Blogs() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {[1, 2, 3].map((item) => (
        <BlogCard key={item} />
      ))}
    </div>
  );
}

function BlogCard() {
  return (
    <Card className="m-1 hover:animate-pulse">
      <CardHeader>
        <CardTitle>
          <Skeleton className="w-52 h-5 rounded-full" />
        </CardTitle>
        <CardDescription className="text-ellipsis overflow-hidden">
          <Skeleton className="w-48 h-5 rounded-full" />
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Skeleton className="w-36 h-5 rounded-full" />
      </CardContent>
      <CardFooter>
        <Skeleton className="w-52 h-5 rounded-full" />
      </CardFooter>
    </Card>
  );
}
