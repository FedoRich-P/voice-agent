import { generateText } from "ai";
import { google } from "@ai-sdk/google";

import {getRandomInterviewCover} from "@/shared/lib";
import {db} from "@/shared/firebase/admin";

export async function POST(request: Request) {
    const { type, role, level, techstack, amount, userid } = await request.json();

    try {
        const { text: questions } = await generateText({
            model: google("gemini-2.0-flash-001"),
            prompt: `Подготовьте вопросы для собеседования.
                    Должность: ${role}.
                    Уровень опыта работы: ${level}.
                    Технический стек, используемый на работе: ${techstack}.
                    Соотношение поведенческих и технических вопросов должно быть в пользу: ${type}.
                    Количество необходимых вопросов: ${amount}.
                    Пожалуйста, возвращайте только вопросы, без дополнительного текста.
                    Вопросы будут зачитываться голосовым помощником, поэтому не используйте "/" или "*" или любые другие специальные символы, которые могут нарушить работу голосового помощника.
                    Возвращайте вопросы в следующем формате:
                    ["Вопрос 1", "Вопрос 2", "Вопрос 3"]
                    
                    Спасибо! <3`,
        });

        const interview = {
            role,
            type,
            level,
            techstack: techstack.split(","),
            questions: JSON.parse(questions),
            userId: userid,
            finalized: true,
            coverImage: getRandomInterviewCover(),
            createdAt: new Date().toISOString(),
        };

        await db.collection("interviews").add(interview);

        return Response.json({ success: true }, { status: 200 });
    } catch (error) {
        console.error("Error:", error);
        return Response.json({ success: false, error: error }, { status: 500 });
    }
}

export async function GET() {
    return Response.json({ success: true, data: "Спасибо!" }, { status: 200 });
}

// Привет, {{username}}. Давай начнем собеседовние. Я задам тебе несколько вопросов, что бы определить твои уровень знаний. Ты готов ?