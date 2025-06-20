import {SavedMessage} from "@/features/session";
import {cn} from "@/shared/lib";

export function TranscriptViewer({messages, lastMessage}: Props) {

    if (!messages) return null;

    return (
        <div className="transcript-border">
            <div className="transcript">
                <p
                    key={lastMessage}
                    className={cn(
                        "transition-opacity duration-500 opacity-0",
                        "animate-fadeIn opacity-100"
                    )}
                >
                    {lastMessage}
                </p>
            </div>
        </div>
    )
}

interface Props {
    messages: SavedMessage[]
    lastMessage: string
}