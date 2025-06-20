import {cn} from "@/shared/lib";
import {CallStatusType} from "@/features/session";

export function CallControls({ callStatus, onCall, onDisconnect }: Props) {
    return (
        <div className="w-full flex justify-center">
            {callStatus !== "ACTIVE" ? (
                <button className="btn-call" onClick={onCall}>
                    <span className={cn("absolute animate-ping", callStatus !== "CONNECTING" && "hidden")} />
                    <span className="relative">{callStatus === "INACTIVE" || callStatus === "FINISHED" ? "Start Interview" : ". . ."}</span>
                </button>
            ) : (
                <button className="btn-disconnect" onClick={onDisconnect}>
                    End
                </button>
            )}
        </div>
    );
}

interface Props {
    callStatus: CallStatusType;
    onCall: () => void;
    onDisconnect: () => void;
}