import Logo from "@/components/shared/Logo";
import ThemeToggle from "@/components/shared/ThemeToggle";


export default function ResultsLayout({
                                          children,
                                      }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <>
            <Logo />
            {children}
            <div className="fixed bottom-8 right-6 md:bottom-12 md:right-12 z-50">
                <ThemeToggle />
            </div>
        </>
    );
}
