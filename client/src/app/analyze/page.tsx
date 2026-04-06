import { ArrowUpFromLine, Shield } from "lucide-react";
import Btn from "@/components/shared/Button";
import TextArea from "@/components/shared/TextArea";

const Analyze = () => {

    return (
        <main className="pb-26 md:pb-0">
            {/* Main Heading & description */}
            <h4 className="pb-4 mt-8 md:mt-0">Analyze Your Job Fit</h4>
            <div className="max-w-4xl text-left">
                <p className="leading-normal">Upload your resume and paste the job description to discover your exact skill gaps.</p>
                <p className="leading-normal my-2 md:my-0">Takes less than 15 seconds.</p>
            </div>

            {/* Main wrapper */}
            <div className="my-8 flex flex-col border border-border w-full mx-auto rounded-md">

                {/* Inputs container */}
                <div className="my-6 grid grid-cols-1 gap-6 md:gap-2 md:grid-cols-2">

                    {/* Input for resume */}
                    <div className="px-20 py-10 md:p-20 flex flex-col justify-center items-center border-2 border-border border-dashed rounded-md mx-6 md:ml-6">
                        <ArrowUpFromLine className="text-primary w-16 h-16 mb-6" />
                        <h6 className="hidden md:block text-center">Drag & Drop your resume</h6>
                        <h6 className="block md:hidden text-center">Search for your resume</h6>
                        <p className="text-helper mt-4 mb-2">.PDF only (max. 2MB)</p>
                        <Btn
                            text="Browse Files"
                            type="browse"
                        />
                        <p className="text-helper mt-2">or click to browse</p>

                    </div>

                    {/* Input for job description (ShadCN's Textarea) */}
                    <TextArea
                        placeholder="Paste the job description here..."
                    />

                </div>

                {/* CTA button */}
                <div className="mx-6">
                    <Btn
                        text="Analyze My Fit"
                        type="submit"
                    />
                </div>

                {/* Disclaimer about resume storage */}
                <div className="flex justify-center items-center gap-2 mx-6 mt-6 mb-4">
                    <Shield className="text-muted-foreground w-6 h-6" />
                    <p className="security-text">Your resume is processed securely and never stored</p>
                </div>
            </div>
        </main>
    );
};

export default Analyze;