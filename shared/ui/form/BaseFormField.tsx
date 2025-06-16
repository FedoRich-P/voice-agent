"use client"

import {BaseFormFieldProps, FormFieldContext} from "@/shared/lib/form"
import {Controller, type FieldValues} from "react-hook-form"

export const BaseFormField = <T extends FieldValues>(props: BaseFormFieldProps<T>) => {
    return (
        <FormFieldContext.Provider value={{ name: props.name }}>
            <Controller {...props} />
        </FormFieldContext.Provider>
    );
};
