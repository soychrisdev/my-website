"use client";
import { Switch } from "./ui/switch";
import { SunIcon, MoonIcon } from "lucide-react";
import useTheme from "@/store/store";

export default function ThemeHandler() {
  const setTheme = useTheme((state) => state.setTheme);
  const darkModeState = useTheme((state) => state.darkMode);

  const handleTheme = (state: boolean) => {
    setTheme(state);
  };

  return (
    <div className="flex items-center space-x-2">
      <div className="transition-all">
        {darkModeState ? (
          <SunIcon className="animate-spin-slow" />
        ) : (
          <MoonIcon className="animate-pulse" />
        )}
      </div>
      <Switch
        id="airplane-mode"
        onCheckedChange={(state) => handleTheme(state)}
        checked={darkModeState}
      />
    </div>
  );
}
