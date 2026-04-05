import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Analyze Your Job Fit | GapFinder",
    description: "Upload your resume and paste the job description to discover your exact skill gaps in less than 15 seconds.",
    keywords: [
        "skill gap analysis",
        "resume checker",
        "job fit assessment",
        "AI career tool",
        "hiring compatibility",
        "tech interview preparation",
        "career roadmap"
    ],
    openGraph: {
        title: "Analyze Your Job Fit | GapFinder",
        description: "Instant AI-powered skill gap analysis for your next career move.",
        type: "website",
    }
};

export default function AnalyzeLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <>
            {children}
        </>
    );
}
