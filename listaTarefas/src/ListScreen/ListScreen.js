import { useState } from "react";
import { Button, Text, TextInput, TouchableOpacity, View } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import medata from './../storage.medata.json';

function ListScreen({ route, navigation }) {

  const { acao, listas, indexLista } = route.params;
  const [nomeLista, setNomeLista] = useState("")

  const buttonPressed = () => {
    if (nomeLista.length <= 3) {
        alert("Nome muito curto!")
        return
    }

    let novaLista
        if (acao == "Criar") {
            novaLista = [{titulo: nomeLista, ultimaMod:(new Date().toLocaleString()), tarefas:[]}, ...listas];
        }else if(acao == "Editar") {
            novaLista = listas
            console.log(indexLista)
            var lista = novaLista[indexLista]
            lista.titulo = nomeLista
            lista.ultimaMod = new Date().toLocaleString()
        }

        AsyncStorage.setItem(medata.LISTAS, JSON.stringify(novaLista));

        navigation.navigate("Home", {
        });
    }

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>List Screen</Text>
      
      <TouchableOpacity onPress={() => navigation.navigate('Home')}>
        <Text>Voltar</Text>
      </TouchableOpacity>

      <TextInput placeholder="Insira um item aqui" onChangeText={setNomeLista} />
      
      <TouchableOpacity onPress={buttonPressed}>
        <Text>Adicionar</Text>
      </TouchableOpacity>

    </View>
  );
}

export default ListScreen;