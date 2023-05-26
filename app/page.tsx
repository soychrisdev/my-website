import Blogs from "@/components/main/blogs/Blogs";
import Navbar from "@/components/main/header/navbar";
import Repositories from "@/components/main/repositories/Repositories";
import RepositoriesSkeleton from "@/components/main/repositories/RepositoriesSkeleton";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Suspense } from "react";

export default async function Home() {
  return (
    <main className="container m-auto min-h-screen py-4 px-4 p-2">
      <div className="grid grid-col-2 sm:grid-cols-1">
        {/* header / navbar */}
        <div className="flex justify-between">
          <Navbar />
        </div>
        {/* landing content 1 */}
        <div className="items-center text-center">
          <h1 className="font-extrabold">Hey! ✌️ Welcome to my website!</h1>
          <p>Im Christian Mesina, Full Stack Software Engineer.</p>
        </div>
        <Separator className="mt-5 mb-5" />
        {/* my blogs */}
        <div className="bg-card text-start">
          <h2 className="text-foreground">
            Check out my last blogs!
            <Badge variant="secondary">In development 🧑‍💻</Badge>
          </h2>
        </div>
        <Blogs />
        <Separator className="mt-5 mb-5" />
        {/* my projects */}
        <div className="bg-card text-start mb-5">
          <h2 className="text-foreground">Check my last projects 👀🔥!</h2>
        </div>
        <div className="flex justify-center">
          <Suspense fallback={<RepositoriesSkeleton />}>
            {/* <RepositoriesSkeleton /> */}
            {/* @ts-expect-error Server Component */}
            <Repositories />
          </Suspense>
        </div>
      </div>
    </main>
  );
}
