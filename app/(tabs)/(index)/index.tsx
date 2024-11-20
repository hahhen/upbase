import { Image, StyleSheet, Platform, View, TouchableOpacity, Button } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { IconSymbol } from '@/components/ui/IconSymbol';
import { Colors } from '@/constants/Colors';
import { Text } from 'react-native';
import React from 'react';
import { Link } from 'expo-router';

export default function HomeScreen() {

  const [tab, setTab] = React.useState('all');

  return (
    <ThemedView style={styles.container}>
      <View style={styles.topContainer}>
        <TouchableOpacity>
          <IconSymbol color={Colors.light.icon} size={40} name='arrow.left' />
        </TouchableOpacity>
        <Link href={"/form1"}>
          <View style={styles.flexContainer}>
            <IconSymbol color={Colors.light.icon} size={30} name='plus' />
            <ThemedText style={styles.tintText}>Cadastrar imóvel</ThemedText>
          </View>
        </Link>
      </View>
      <ThemedText type='title'>
        Bem vindo, Raphael!
      </ThemedText>
      <View style={styles.flexContainer}>
        <TouchableOpacity onPress={() => setTab("all")} style={[styles.tabButton, , tab == "all" ? { backgroundColor: Colors.light.tint } : { backgroundColor: Colors.light.background, borderWidth: 1, borderColor: Colors.light.secondaryBackground }]}>
          <ThemedText type='small' style={{ color: tab == "all" ? Colors.light.background : Colors.light.text }}>Todos os flats</ThemedText>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setTab("unavailable")} style={[styles.tabButton, tab == "unavailable" ? { backgroundColor: Colors.light.tint } : { backgroundColor: Colors.light.background, borderWidth: 1, borderColor: Colors.light.secondaryBackground }]}>
          <ThemedText type='small' style={{ color: tab == "unavailable" ? Colors.light.background : Colors.light.text }}>Indisponíveis</ThemedText>
        </TouchableOpacity>
      </View>
      <View style={styles.centralContainer}>
        <IconSymbol color={Colors.light.icon} size={50} name='face.dashed' />
        <ThemedText style={{ textAlign: 'center' }} type='subtitle'>Você não tem nenhum imóvel cadastrado. Que tal cadastrar agora?</ThemedText>
        <Link href={"/form1"}>
          <View style={{ padding: 10, borderColor: Colors.light.tint, borderWidth: 1, borderRadius: 14, width: '100%', display: 'flex', alignItems: 'center' }}>
            <ThemedText type='small' style={{ color: Colors.light.tint }}>Cadastrar meu primeiro imóvel</ThemedText>
          </View>
        </Link>
      </View>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  centralContainer: {
    marginTop: 100,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 20,
  },
  tabButton: {
    paddingHorizontal: 15,
    paddingVertical: 5,
    borderRadius: 12,
  },
  flexContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  tintText: {
    color: Colors.light.tint,
  },
  topContainer: {
    justifyContent: 'space-between',
    display: 'flex',
    flexDirection: 'row',
  },
  container: {
    flex: 1,
    paddingTop: 80,
    paddingHorizontal: 20,
    gap: 20,
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
