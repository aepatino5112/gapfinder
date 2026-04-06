import Link from "next/link";
import Image from "next/image";

const Logo = () => {

    return (
        <div className="flex justify-start items-center md:justify-end">
            {/* Light theme logo */}
            <Link href="/">
                <Image
                    src="/logo.svg"
                    width={224}
                    height={48}
                    className="block w-46 h-auto md:w-56 dark:hidden"
                    alt="GapFinder logo in light theme"
                />
            </Link>

            {/* Dark theme logo */}
            <Link href="/">
                <Image
                    src="/dark-logo.svg"
                    width={224}
                    height={48}
                    className="hidden w-46 h-auto md:w-56 dark:block"
                    alt="GapFinder logo in dark theme"
                />
            </Link>
        </div>
    );
};

export default Logo;