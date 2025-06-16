import type { FormFieldContextValue, FormItemContextValue } from "./types"
import {createContext} from "react";

export const FormFieldContext = createContext<FormFieldContextValue>({} as FormFieldContextValue)
export const FormItemContext = createContext<FormItemContextValue>({} as FormItemContextValue)
