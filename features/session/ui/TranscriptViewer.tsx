export function TranscriptViewer({ lastMessage }: Props) {
    if (!lastMessage) return null;

    return (
        <div className="transcript-border">
            <div className="transcript">
                <p className="animate-fadeIn">{lastMessage}</p>
            </div>
        </div>
    );
}

interface Props {
    lastMessage: string
}