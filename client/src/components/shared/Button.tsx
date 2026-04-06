import { Button } from "@/components/ui/button";
import {BtnProps} from "@/types/button";

const Btn = ({ text, type }: BtnProps) => {

    return (
        <Button className={`${ type === "browse" ? "px-8 md:px-16 py-4 md:py-6" : "w-full py-6 md:py-8" } text-secondary text-base md:text-lg font-normal leading-4 tracking-normal md:font-medium md:leading-8 cursor-pointer hover:bg-primary-200`}>
            {text}
        </Button>
    );
};

export default Btn;