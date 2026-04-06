import { Metadata } from "next";

interface ResultsPageProps {
    params: Promise<{
        id: string;
    }>;
}

export const generateMetadata = async ({ params }: ResultsPageProps): Promise<Metadata> => {

    // Solving the promise
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

const ResultsPage = async ({ params }: ResultsPageProps) => {

    // Simulación de carga para que puedas ver la animación del loading.tsx
    // (Borra esto cuando ya conectes tu IA real)
    await new Promise((resolve) => setTimeout(resolve, 10000));

    return (
        <main className="margin-body flex flex-col items-center justify-center h-[calc(100vh-8rem)]">
            <h1 className="text-4xl font-bold text-foreground">
                Roadmap Ready!
            </h1>
            <p className="text-muted-foreground mt-4 text-xl">
                Displaying analysis for ID: <span className="font-mono text-primary">{(await params).id}</span>
            </p>
        </main>
    );
};

export default ResultsPage;