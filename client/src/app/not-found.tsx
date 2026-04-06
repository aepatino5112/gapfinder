import Logo from "@/components/shared/Logo";

export const metadata = {
    title: "404 - Not Found | GapFinder",
    description: "Oops! The page you are looking for does not exist or has been moved.",
    robots: {
        index: false,
        follow: false,
    }
};

const NotFound = () => {
    return (

        <main className="margin-body h-[calc(100vh-4rem)] flex flex-col justify-between overflow-hidden">
            <Logo />

            {/* Container for the NotFound message */}
            <div className="hidden lg:flex w-full justify-between items-end">
                <p className="font-bold text-6xl text-foreground leading-14 mb-10">NOT<br />FOUND.</p>
                <p className="font-bold text-primary lg:text-[400px] xl:text-[500px] leading-none tracking-[-2.5rem]">404</p>
            </div>

            {/* Container for the NotFound message (mobile) */}
            <div className="flex flex-col lg:hidden w-full flex-1 justify-end relative">

                <p className="absolute top-1/2 -right-2 -translate-y-1/2 font-bold text-primary text-[150px] md:text-[200px] leading-none tracking-tighter -z-10">
                    404
                </p>

                <p className="font-bold text-5xl text-foreground leading-tight">
                    NOT<br />FOUND.
                </p>
            </div>
        </main>
    );
};

export default NotFound;