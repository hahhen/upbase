import FormProvider from "@/app/context/FormContext";
import { Stack } from "expo-router";

export default function FormWrapper() {
    return (
        <Stack>
            <Stack.Screen name="form1" options={{
                headerShown: false
            }} />
            <Stack.Screen name="form2" options={{
                headerShown: false
            }} />
            <Stack.Screen name="form3" options={{
                headerShown: false
            }} />
            <Stack.Screen name="form4" options={{
                headerShown: false
            }} />
            <Stack.Screen name="form5" options={{
                headerShown: false
            }} />
            <Stack.Screen name="form6" options={{
                headerShown: false
            }} />
            <Stack.Screen name="form7" options={{
                headerShown: false
            }} />
            <Stack.Screen name="form8" options={{
                headerShown: false
            }} />
        </Stack>
    )
}