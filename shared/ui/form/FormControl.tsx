import {Slot} from "@radix-ui/react-slot";
import {ComponentProps} from "react";
import {useFormField} from "@/shared/lib/form";

export function FormControl({ ...props }: ComponentProps<typeof Slot>) {
    const { error, formItemId, formDescriptionId, formMessageId } = useFormField()

    return (
        <Slot
            data-slot="form-control"
            id={formItemId}
            aria-describedby={
                !error
                    ? `${formDescriptionId}`
                    : `${formDescriptionId} ${formMessageId}`
            }
            aria-invalid={!!error}
            {...props}
        />
    )
};