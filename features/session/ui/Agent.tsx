'use client'

import {AgentCard, CallControls, TranscriptViewer, useCallManager} from "@/features/session";

export function Agent(props: AgentProps) {
    const { callStatus, messages, isSpeaking, lastMessage, handleCall, handleDisconnect } = useCallManager(props);

    return (
        <>
            <AgentCard userName={props.userName} isSpeaking={isSpeaking} />
            <TranscriptViewer messages={messages} lastMessage={lastMessage} />
            <CallControls callStatus={callStatus} onCall={handleCall} onDisconnect={handleDisconnect} />
        </>
    );
}