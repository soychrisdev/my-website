"use client";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Separator } from "@/components/ui/separator";

import { getRepositories } from "@/lib/getRepositories";

import { Star, ChevronDown, Plus, Circle } from "lucide-react";
import Link from "next/link";

export default async function Repositories() {
  const fetchedRepos = await getRepositories();

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3">
      {fetchedRepos.map((repo) => (
        <Card key={repo.id} className="m-1 overflow-hidden">
          <CardHeader className="grid grid-cols-[1fr_110px] items-start gap-4 space-y-0">
            <div className="space-y-1">
              <CardTitle>
                <Link href={repo.html_url} className="hover:underline">
                  {repo.name}
                </Link>
              </CardTitle>
              <CardDescription>
                {repo.description
                  ? repo.description
                  : "Repository without description"}
              </CardDescription>
            </div>
            <div className="flex items-center space-x-1 rounded-md bg-secondary text-secondary-foreground">
              <Button variant="secondary" className="px-3">
                <Star className="mr-2 h-4 w-4" />
                Star
              </Button>
              <Separator orientation="vertical" className="h-[20px]" />
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="secondary" className="px-2">
                    <ChevronDown className="h-4 w-4 text-secondary-foreground" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent
                  align="end"
                  alignOffset={-5}
                  className="w-[200px]"
                  forceMount
                >
                  <DropdownMenuLabel>Suggested Lists</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuCheckboxItem checked>
                    Future Ideas
                  </DropdownMenuCheckboxItem>
                  <DropdownMenuCheckboxItem>My Stack</DropdownMenuCheckboxItem>
                  <DropdownMenuCheckboxItem>
                    Inspiration
                  </DropdownMenuCheckboxItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>
                    <Plus className="mr-2 h-4 w-4" /> Create List
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </CardHeader>
          <CardContent>
            <div className="flex space-x-4 text-sm text-muted-foreground">
              <div className="flex items-center">
                <Circle
                  className={`mr-1 h-3 w-3 ${
                    repo.language === "TypeScript"
                      ? " fill-sky-400 text-sky-400"
                      : repo.language === "Java"
                      ? " fill-orange-400 text-orange-400"
                      : " fill-yellow-400 text-yellow-400"
                  }`}
                />
                {repo.language}
              </div>
              <div className="flex items-center">
                <Star className="mr-1 h-3 w-3" />
                10k
              </div>
              <div>{repo.created_at}</div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
