import {ComponentProps} from "react";
import {cn} from "@/shared/lib/utils";
import * as LabelPrimitive from "@radix-ui/react-label"
import {Label} from "@/shared/ui";
import {useFormField} from "@/shared/lib/form";

export function FormLabel({className, ...props }: ComponentProps<typeof LabelPrimitive.Root>) {
    const { error, formItemId } = useFormField()

    return (
        <Label
            data-slot="form-label"
            data-error={!!error}
            className={cn("data-[error=true]:text-destructive", className)}
            htmlFor={formItemId}
            {...props}
        />
    )
}