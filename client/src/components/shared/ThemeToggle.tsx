"use client";

import { useTheme } from "next-themes";
import { Sun, Moon } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

const ThemeToggle = () => {
    const { setTheme, resolvedTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return <div className="w-28 h-13 rounded-[20px] bg-black/5 dark:bg-white/10" />;
    }

    const isDark = resolvedTheme === "dark";

    const toggleTheme = () => {
        setTheme(isDark ? "light" : "dark");
    };

    return (
        <button
            role="switch"
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="relative w-28 h-13 p-1 rounded-[20px] outline-none transition-colors duration-500 bg-black/5 dark:bg-white/10 shadow-[inset_0_2px_4px_rgba(0,0,0,0.05)] dark:shadow-[inset_0_2px_4px_rgba(0,0,0,0.2)] border border-black/5 dark:border-white/5 cursor-pointer flex items-center"
        >
            <div
                className={cn(
                    "absolute left-1 top-1 w-11 h-11 rounded-2xl bg-primary transition-transform duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)]",
                    isDark ? "translate-x-15" : "translate-x-0"
                )}
            />

            <div className="absolute inset-0 z-10 pointer-events-none">
                <div
                    className={cn(
                        "absolute left-1 top-1 w-11 h-11 flex items-center justify-center transition-transform duration-500",
                        isDark ? "-rotate-90" : "rotate-0"
                    )}
                >
                    <Sun
                        size={24}
                        strokeWidth={2.5}
                        className={cn(
                            "transition-colors duration-200",
                            isDark ? "text-[#a1a1aa]" : "text-white"
                        )}
                    />
                </div>

                <div
                    className={cn(
                        "absolute right-1 top-1 w-11 h-11 flex items-center justify-center transition-transform duration-500",
                        isDark ? "rotate-0" : "rotate-90"
                    )}
                >
                    <Moon
                        size={24}
                        strokeWidth={2.5}
                        className={cn(
                            "transition-colors duration-200",
                            isDark ? "text-white" : "text-[#a1a1aa]"
                        )}
                    />
                </div>
            </div>
        </button>
    );
};

export default ThemeToggle;