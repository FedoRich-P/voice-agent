'use client'

import { useContext } from "react"
import { useFormContext, useFormState } from "react-hook-form"
import { FormFieldContext, FormItemContext } from "./context"

export const useFormField = () => {
    const fieldContext = useContext(FormFieldContext)
    const itemContext = useContext(FormItemContext)
    const { getFieldState } = useFormContext()
    const formState = useFormState({ name: fieldContext?.name })

    if (!fieldContext) {
        throw new Error("useFormField must be used inside <FormField>")
    }

    const fieldState = getFieldState(fieldContext.name, formState)

    const { id } = itemContext

    return {
        id,
        name: fieldContext.name,
        formItemId: `${id}-form-item`,
        formDescriptionId: `${id}-form-item-description`,
        formMessageId: `${id}-form-item-message`,
        ...fieldState,
    }
}
