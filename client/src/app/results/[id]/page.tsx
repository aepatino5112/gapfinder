import { Metadata } from "next";
import {ResultsPageProps} from "@/types/results";
import ResultsButtons from "@/components/results/ResultsButtons";

export const generateMetadata = async ({ params }: ResultsPageProps): Promise<Metadata> => {

    // Solving the promise for the params
    const resolvedParams = await params;

    return {
        title: `Roadmap #${resolvedParams.id} | GapFinder`,
        description: "Your personalized career roadmap and skill gap analysis.",
        robots: {
            index: false,
            follow: false,
        }
    };
};


const ResultsPage = () => {

    return (
        <main>

            {/* Main heading & buttons for sharing */}
            <div className="mt-8 flex flex-col md:flex-row md:justify-between items-start md:items-center gap-4 md:gap-0">
                <h4>Skill Analysis</h4>

                {/* Shareable Buttons */}
                <ResultsButtons />
            </div>

            {/* Match score & summarized description */}

            {/* Wrapper for the skills */}

            {/* Wrapper for the roadmap */}
        </main>
    );
};

export default ResultsPage;