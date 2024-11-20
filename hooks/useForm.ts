import { FormContext } from "@/app/context/FormContext";
import { useContext } from "react";

export default function useForm() {
    return useContext(FormContext);
}