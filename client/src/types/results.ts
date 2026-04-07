import {LucideIcon} from "lucide-react";

// Interface for the props of the Results Page
export interface ResultsPageProps {
    params: Promise<{
        id: string;
    }>;
}

// Type for the props of the shareable button component
export type ShareButtonProps = {
    text: string,
    icon: LucideIcon,
    onClick: () => void;
}