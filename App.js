import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import OnboardingScreen from "./screens/OnboardingScreen";
import HomePageScreen from "./screens/HomePageScreen";
import { useState } from "react";

const Stack = createNativeStackNavigator();

export default function App() {

  const [isFirstLaunch, setIsFirstLaunch] = useState(true);

  if (isFirstLaunch == true) {
    return (
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Onboarding"
        >
          <Stack.Screen
            name="Onboarding"
            component={OnboardingScreen}
            options={{
              headerShown: false
            }}
          />
          <Stack.Screen
            name="Login"
            component={HomePageScreen}
            options={{
              headerShown: false
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    )

  }
}
