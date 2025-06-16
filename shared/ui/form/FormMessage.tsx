import {ComponentProps} from "react";
import {cn} from "@/shared/lib/utils";
import {useFormField} from "@/shared/lib/form";

export function FormMessage({ className, ...props }: ComponentProps<"p">) {
    const { error, formMessageId } = useFormField()
    const body = error ? String(error?.message ?? "") : props.children

    if (!body) {
        return null
    }

    return (
        <p
            data-slot="form-message"
            id={formMessageId}
            className={cn("text-destructive text-sm", className)}
            {...props}
        >
            {body}
        </p>
    )
}