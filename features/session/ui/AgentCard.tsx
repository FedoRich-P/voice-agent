import Image from "next/image";

export function AgentCard({ userName, isSpeaking }: Props) {
    return (
        <article className="call-view">
            <div className="card-interviewer">
                <div className="avatar">
                    <Image src="/ai-avatar.png" alt="AI" width={65} height={54} />
                    {isSpeaking && <span className="animate-speak" />}
                </div>
                <h3>AI Interviewer</h3>
            </div>

            <div className="card-border">
                <div className="card-content">
                    <Image src="/user-avatar.png" alt="user" width={539} height={539} className="rounded-full size-[120px]" />
                    <h3>{userName}</h3>
                </div>
            </div>
        </article>
    );
}
interface Props {
    userName: string;
    isSpeaking: boolean
}
