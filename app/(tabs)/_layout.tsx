import { Tabs } from 'expo-router';
import React from 'react';
import { Platform } from 'react-native';

import { HapticTab } from '@/components/HapticTab';
import { IconSymbol } from '@/components/ui/IconSymbol';
import TabBarBackground from '@/components/ui/TabBarBackground';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarItemStyle: { marginTop: 20 },
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].background,
        tabBarInactiveTintColor: Colors[colorScheme ?? 'light'].tabIconDefault,
        headerShown: false,
        tabBarButton: HapticTab,
        tabBarBackground: TabBarBackground,
        tabBarStyle: [Platform.select({
          ios: {
            // Use a transparent background on iOS to show the blur effect
            position: 'absolute',
          },
          default: {},
        }), {
          height: 80,
          overflow: 'hidden',
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          backgroundColor: Colors[colorScheme ?? 'light'].tint,
        }],
      }}>
      <Tabs.Screen
        name="(index)"
        options={{
          title: '',
          tabBarIcon: ({ color }) => <IconSymbol size={30} name="building" color={color} />,
        }}
      />
      <Tabs.Screen
        name="calendario"
        options={{
          title: '',
          tabBarIcon: ({ color }) => <IconSymbol size={30} name="calendar" color={color} />,
        }}
      />
      <Tabs.Screen
        name="tabela"
        options={{
          title: '',
          tabBarIcon: ({ color }) => <IconSymbol size={30} name="table" color={color} />,
        }}
      />
      <Tabs.Screen
        name="conta"
        options={{
          title: '',
          tabBarIcon: ({ color }) => <IconSymbol size={30} name="person.fill" color={color} />,
        }}
      />
    </Tabs>
  );
}
