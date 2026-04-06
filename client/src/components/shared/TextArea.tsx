"use client";
import { Textarea } from "@/components/ui/textarea";
import {TextAreaProps} from "@/types/textarea";
import {ClipboardPaste} from "lucide-react";
import {useRef} from "react";

const TextArea = ({ placeholder, value, onChange }: TextAreaProps) => {

    // Reference to the native textarea
    const textareaRef = useRef<HTMLTextAreaElement>(null);

    // Function to handle the clipboard copy-paste
    const handleClipboard = async () => {

        try {
            const text = await navigator.clipboard.readText();

            if (textareaRef.current) {

                textareaRef.current.focus()
                document.execCommand('insertText', false, text);
            }
        } catch (err) {
            console.error('Could not paste from the clipboard: ', err);
        }
    };

    return (
        <div className="relative h-full mx-6 md:mr-6 min-h-80">
            <Textarea
                ref={textareaRef}
                placeholder={placeholder}
                value={value}
                onChange={((e) => onChange(e.target.value))}
                className="absolute inset-0 resize-none overflow-y-auto job-description dark:border-border pr-16"
            />

            {/* Paste from clipboard button */}
            <button
                onClick={handleClipboard}
                type="button"
                className="absolute top-3 right-6 p-1 cursor-pointer border-2 dark:border rounded-sm border-border text-muted-foreground"
                title="Paste from clipboard"
            >
                <ClipboardPaste className="h-6 w-6 text-foreground" />
            </button>
        </div>
    );
};

export default TextArea;