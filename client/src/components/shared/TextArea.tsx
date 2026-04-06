import { Textarea } from "@/components/ui/textarea";
import {TextAreaProps} from "@/types/textarea";

const TextArea = ({ placeholder }: TextAreaProps) => {

    return (
        <div className="flex flex-col mx-6 md:mr-6 min-h-80">
            <Textarea
                placeholder={placeholder}
                className="flex-1 resize-none overflow-y-auto job-description h-full w-full dark:border-border"
            />
        </div>
    );
};

export default TextArea;