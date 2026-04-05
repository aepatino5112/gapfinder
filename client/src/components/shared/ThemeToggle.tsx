"use client";

import { useTheme } from "next-themes";
import { Sun, Moon } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

const ThemeToggle = () => {
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return <div className="w-[112px] h-[52px] rounded-[20px] bg-black/5 dark:bg-white/10" />;
    }

    const isDark = theme === "dark";

    const toggleTheme = () => {
        setTheme(isDark ? "light" : "dark");
    };

    return (
        <button
            role="switch"
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="relative w-[112px] h-[52px] p-1 rounded-[20px] outline-none transition-colors duration-500 bg-black/5 dark:bg-white/10 shadow-[inset_0_2px_4px_rgba(0,0,0,0.05)] dark:shadow-[inset_0_2px_4px_rgba(0,0,0,0.2)] border border-black/5 dark:border-white/5 cursor-pointer flex items-center"
        >
            <div
                className={cn(
                    "absolute left-1 top-1 w-[44px] h-[44px] rounded-[16px] bg-primary transition-transform duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)]",
                    isDark ? "translate-x-[60px]" : "translate-x-0"
                )}
            />

            <div className="absolute inset-0 z-10 pointer-events-none">
                <div className="absolute left-1 top-1 w-[44px] h-[44px] flex items-center justify-center">
                    <Sun
                        size={24}
                        strokeWidth={2.5}
                        className={cn(
                            "transition-all duration-500",
                            isDark ? "text-[#a1a1aa] -rotate-90" : "text-white rotate-0"
                        )}
                    />
                </div>
                <div className="absolute right-1 top-1 w-[44px] h-[44px] flex items-center justify-center">
                    <Moon
                        size={24}
                        strokeWidth={2.5}
                        className={cn(
                            "transition-all duration-500",
                            isDark ? "text-white rotate-0" : "text-[#a1a1aa] rotate-90"
                        )}
                    />
                </div>
            </div>
        </button>
    );
};

export default ThemeToggle;