import ThemeHandler from "@/components/ThemeHandler";

import { StarIcon } from "lucide-react";

export default function Navbar() {
  return (
    <div className="flex justify-between">
      <StarIcon />
      <ThemeHandler />
    </div>
  );
}
