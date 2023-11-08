import { useState } from "react";
import { Button, Text, TextInput, TouchableOpacity, View } from "react-native";

function ListScreen({ navigation }) {

  const addTarefa = () => {
    alert("teste")
  }


  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>List Screen</Text>
      
      <TouchableOpacity onPress={() => navigation.navigate('Home')}>
        <Text>Voltar</Text>
      </TouchableOpacity>

      <TextInput placeholder="Insira um item aqui" />
      
      <TouchableOpacity onPress={addTarefa}>
        <Text>Adicionar</Text>
      </TouchableOpacity>

    </View>
  );
}

export default ListScreen;