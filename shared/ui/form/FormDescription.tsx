import { cn } from "@/shared/lib/utils"
import {ComponentProps} from "react";
import {useFormField} from "@/shared/lib/form";

export function FormDescription({ className, ...props }: ComponentProps<"p">) {
    const { formDescriptionId } = useFormField()

    return (
        <p
            data-slot="form-description"
            id={formDescriptionId}
            className={cn("text-sm text-muted-foreground", className)}
            {...props}
        />
    )
}