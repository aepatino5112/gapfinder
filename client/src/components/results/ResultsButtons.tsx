"use client";
import ShareButton from "@/components/results/ShareButton";
import { Share2, ArrowDownToLine, Link } from "lucide-react";


const ResultsButtons = () => {

    // Function to handle the share button functionality
    const handleShare = () => {

    };

    // Function to handle the download button functionality
    const handleDownload = () => {

    };

    // Function to handle the copy link functionality
    const handleCopy = () => {

    };

    return (
        <div className="flex flex-row justify-between items-center gap-4 md:gap-6 after:content-[''] after:w-4 after:shrink-0 md:after:hidden">
            <ShareButton text="Share" icon={Share2} onClick={handleShare} />
            <ShareButton text="Download" icon={ArrowDownToLine} onClick={handleDownload} />
            <ShareButton text="Copy Link" icon={Link} onClick={handleCopy} />
        </div>
    );
};

export default ResultsButtons;