import { Button } from "@/components/ui/button";
import {BtnProps} from "@/types/button";

const Btn = ({ text }: BtnProps) => {

    return (
        <Button className="py-4 px-8 md:py-6 md:px-16 text-secondary text-base md:text-lg font-normal leading-4 tracking-normal md:font-medium md:leading-8 cursor-pointer hover:bg-primary-200">
            {text}
        </Button>
    );
};

export default Btn;