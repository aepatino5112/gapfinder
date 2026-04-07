import {ShareButtonProps} from "@/types/results";

const ShareButton = ({ text, icon: Icon, onClick }: ShareButtonProps) => {

    return (
        <button type="button" onClick={onClick} className="shrink-0 whitespace-nowrap cursor-pointer hover:bg-accent text-foreground flex justify-between items-center gap-2 border-2 dark:border text-lg font-normal leading-6 py-2 px-4 border-border rounded-sm">
            <Icon className="w-4 h-4 text-foreground" />
            {text}
        </button>
    );
};

export default ShareButton;