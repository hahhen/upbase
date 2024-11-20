import { Image, StyleSheet, Platform, View, TouchableOpacity, Button, TextInput, ScrollView } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { IconSymbol } from '@/components/ui/IconSymbol';
import { Colors } from '@/constants/Colors';
import { Text } from 'react-native';
import React from 'react';
import useForm from '@/hooks/useForm';
import { FormContext } from '@/app/context/FormContext';
import { Picker } from '@react-native-picker/picker';
import { Link } from 'expo-router';
import DropDownPicker from 'react-native-dropdown-picker';

export default function Form1() {

  const { form, handleChange } = React.useContext(FormContext)

  const UF = [
    "AC", "AL", "AP", "AM", "BA", "CE", "DF", "ES", "GO", "MA",
    "MT", "MS", "MG", "PA", "PB", "PR", "PE", "PI", "RJ", "RN",
    "RS", "RO", "RR", "SC", "SP", "SE", "TO"
  ];
  const UFOptions = UF.map(uf => ({ label: uf, value: uf }));

  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState(form.uf);

  React.useEffect(() => {
    handleChange("uf", value)
  }, [value])
  return (
    <ScrollView automaticallyAdjustKeyboardInsets>
      <ThemedView style={styles.container}>
        <View style={styles.topContainer}>
          <TouchableOpacity>
            <IconSymbol color={Colors.light.icon} size={40} name='arrow.left' />
          </TouchableOpacity>
        </View>
        <ThemedText type='subtitle'>Para começarmos, precisamos de alguns dados</ThemedText>
        <View style={{ gap: 10 }}>
          <TextInput style={styles.input} placeholder='Nome do imóvel' value={form.nome} onChangeText={(text: string) => { handleChange("nome", text) }} />
          <ThemedText type='small'>O nome do imóvel será exibido na sua tela inicial e na reserva para o hóspede</ThemedText>
        </View>
        <View style={{ gap: 10 }}>
          <TextInput style={[styles.input, { height: 120 }]} multiline textAlignVertical='top' placeholder='Descrição' numberOfLines={4} value={form.descricao} onChangeText={(text: string) => {
            if (text.length <= 250)
              handleChange("descricao", text)
          }} />
          <ThemedText type='small'>
            {form.descricao.length}/250
          </ThemedText>
        </View>
        <TextInput style={styles.input} placeholder='CEP' value={form.cep} onChangeText={(text: string) => { handleChange("cep", text) }} />
        <TextInput style={styles.input} placeholder='Endereço' value={form.endereco} onChangeText={(text: string) => { handleChange("endereco", text) }} />
        <View style={{ flexDirection: 'row', gap: 10 }}>
          <TextInput style={[styles.input, { flex: 1 }]} placeholder='Número' value={form.numero} onChangeText={(text: string) => { handleChange("numero", text) }} />
          <TextInput style={[styles.input, { flex: 1.5 }]} placeholder='Complemento' value={form.complemento} onChangeText={(text: string) => { handleChange("complemento", text) }} />
        </View>
        <View style={{ flexDirection: 'row', gap: 10 }}>
          <TextInput style={[styles.input, { flex: 1.5 }]} placeholder='Cidade' value={form.cidade} onChangeText={(text: string) => { handleChange("cidade", text) }} />
          <View style={[{ padding: 0, flex: 1 }]}>
            <DropDownPicker textStyle={{ fontFamily: 'Jura' }} style={{
              borderWidth: 1,
              borderColor: Colors.light.secondaryBackground,
              borderRadius: 5,
              flex: 1,
              height: 54,
            }} listMode='SCROLLVIEW' open={open} setOpen={setOpen} setValue={setValue} multiple={false} value={value} items={UFOptions} placeholder='UF' />
          </View>
        </View>
        <TouchableOpacity>
          <View style={{ padding: 10, backgroundColor: Colors.light.tint, borderRadius: 14, width: '100%', display: 'flex', alignItems: 'center' }}>
            <ThemedText type='small' style={{ color: Colors.light.background }}>Continuar</ThemedText>
          </View>
        </TouchableOpacity>
      </ThemedView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  input: {
    padding: 15,
    borderWidth: 1,
    borderColor: Colors.light.secondaryBackground,
    borderRadius: 5,
    fontFamily: 'Jura'
  },
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
    paddingBottom: 15,
    paddingHorizontal: 20,
    gap: 15,
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
