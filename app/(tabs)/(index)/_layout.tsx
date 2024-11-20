import { Stack } from "expo-router";

export default function HomeStack(){
    return(
        <Stack>
            <Stack.Screen name="index" 
            options={{
                headerShown: false
            }}/>
            <Stack.Screen name="(form)"
            options={{
                headerShown: false
            }}/>
        </Stack>
    )
}