'use client'

import {useState} from "react";
import {CallStatus, CallStatusType, SavedMessage} from "@/features/session";

export function useCallManager(props: AgentProps) {
    const { userName, userId, interviewId, feedbackId, type, questions } = props;

    const [callStatus, setCallStatus] = useState<CallStatusType>(CallStatus.INACTIVE);
    const [messages, setMessages] = useState<SavedMessage[]>([]);
    const [isSpeaking, setIsSpeaking] = useState(false);
    const [lastMessage, setLastMessage] = useState("");

    // useEffect(() => {
    //     const onCallStart = () => {
    //         setCallStatus(CallStatus.ACTIVE);
    //     };
    //
    //     const onCallEnd = () => {
    //         setCallStatus(CallStatus.FINISHED);
    //     };
    //
    //     const onMessage = (message: Message) => {
    //         if (message.type === "transcript" && message.transcriptType === "final") {
    //             const newMessage = { role: message.role, content: message.transcript };
    //             setMessages((prev) => [...prev, newMessage]);
    //         }
    //     };
    //
    //     const onSpeechStart = () => {
    //         console.log("speech start");
    //         setIsSpeaking(true);
    //     };
    //
    //     const onSpeechEnd = () => {
    //         console.log("speech end");
    //         setIsSpeaking(false);
    //     };
    //
    //     const onError = (error: Error) => {
    //         console.log("Error:", error);
    //     };
    //
    //     vapi.on("call-start", onCallStart);
    //     vapi.on("call-end", onCallEnd);
    //     vapi.on("message", onMessage);
    //     vapi.on("speech-start", onSpeechStart);
    //     vapi.on("speech-end", onSpeechEnd);
    //     vapi.on("error", onError);
    //
    //     return () => {
    //         vapi.off("call-start", onCallStart);
    //         vapi.off("call-end", onCallEnd);
    //         vapi.off("message", onMessage);
    //         vapi.off("speech-start", onSpeechStart);
    //         vapi.off("speech-end", onSpeechEnd);
    //         vapi.off("error", onError);
    //     };
    // }, []);
    //
    // useEffect(() => {
    //     if (messages.length > 0) {
    //         setLastMessage(messages[messages.length - 1].content);
    //     }
    //
    //     const handleGenerateFeedback = async (messages: SavedMessage[]) => {
    //         console.log("handleGenerateFeedback");
    //
    //         const { success, feedbackId: id } = await createFeedback({
    //             interviewId: interviewId!,
    //             userId: userId!,
    //             transcript: messages,
    //             feedbackId,
    //         });
    //
    //         if (success && id) {
    //             router.push(`/interview/${interviewId}/feedback`);
    //         } else {
    //             console.log("Error saving feedback");
    //             router.push("/");
    //         }
    //     };
    //
    //     if (callStatus === CallStatus.FINISHED) {
    //         if (type === "generate") {
    //             router.push("/");
    //         } else {
    //             handleGenerateFeedback(messages);
    //         }
    //     }
    // }, [messages, callStatus, feedbackId, interviewId, router, type, userId]);
    //
    // const handleCall = async () => {
    //     setCallStatus(CallStatus.CONNECTING);
    //
    //     if (type === "generate") {
    //         await vapi.start(process.env.NEXT_PUBLIC_VAPI_WORKFLOW_ID!, {
    //             variableValues: {
    //                 username: userName,
    //                 userid: userId,
    //             },
    //         });
    //     } else {
    //         let formattedQuestions = "";
    //         if (questions) {
    //             formattedQuestions = questions
    //                 .map((question) => `- ${question}`)
    //                 .join("\n");
    //         }
    //
    //         await vapi.start(interviewer, {
    //             variableValues: {
    //                 questions: formattedQuestions,
    //             },
    //         });
    //     }
    // };
    //
    // const handleDisconnect = () => {
    //     setCallStatus(CallStatus.FINISHED);
    //     vapi.stop();
    // };

    return {
        callStatus,
        messages,
        isSpeaking,
        lastMessage,
        // handleCall,
        // handleDisconnect,
    };
}