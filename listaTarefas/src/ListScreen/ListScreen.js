import { useState } from "react";
import { Button, Text, TextInput, TouchableOpacity, View, StyleSheet } from "react-native";
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
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text style={styles.title} >{acao} lista</Text>
      
      <TouchableOpacity onPress={() => navigation.navigate('Home')}>
        <Text style={styles.btnTitle} >Voltar</Text>
      </TouchableOpacity>

      <TextInput style={styles.input} placeholder="Insira um item aqui" onChangeText={setNomeLista} />
      
      <TouchableOpacity onPress={buttonPressed}>
        <Text style={styles.btnTitle} >Adicionar</Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 25,
    margin: 10
  },
  btnTitle: {
    color: "#FFF",
    backgroundColor: "#027148",
    fontSize: 20,
    borderRadius: 5,
    padding: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: "#000",
    padding: 10,
    borderRadius: 10,
    margin: 10,

  }
});

export default ListScreen;