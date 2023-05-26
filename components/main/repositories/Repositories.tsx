"use client";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { getRepositories } from "@/lib/getRepositories";
import {
  HoverCard,
  HoverCardTrigger,
  HoverCardContent,
} from "@radix-ui/react-hover-card";
import Link from "next/link";

export default async function Repositories() {
  const fetchedRepos = await getRepositories();

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {fetchedRepos.map((repo) => (
        <Card key={repo.id} className="m-1 hover:animate-pulse">
          <CardHeader>
            <CardTitle>
              <Link
                href={repo.html_url}
                target="_blank"
                className="hover:text-teal-200"
              >
                {repo.name}
              </Link>
            </CardTitle>
            <CardDescription className="text-ellipsis overflow-hidden">
              {repo.html_url}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <HoverCard>
              <HoverCardTrigger>Hover</HoverCardTrigger>
              <HoverCardContent>
                The React Framework – created and maintained by @vercel.
              </HoverCardContent>
            </HoverCard>
          </CardContent>
          <CardFooter>
            <p>{repo.created_at}</p>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}
