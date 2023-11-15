import { useEffect, useMemo, useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import List from "../Components/List"
import AsyncStorage from '@react-native-async-storage/async-storage';
import medata from "./../storage.medata.json"
import { useIsFocused } from "@react-navigation/native";

function HomeScreen({ route, navigation }) {

  const useIsFocus = useIsFocused();
  let [lists, setLists] = useState([])

  useEffect(() => {
    getLists();
  }, [useIsFocus]);

  useEffect(() => {
    saveLists();
  }, [lists]);

  const saveLists = async () => {
    const saveLists = lists || "";
    await AsyncStorage.setItem(medata.LISTAS, JSON.stringify(saveLists));
  }

  const getLists = async () => {
    const getList = await AsyncStorage.getItem(medata.LISTAS);
    if (getList) {
      setLists(JSON.parse(getList));
    }
  }

  const EditList = (indexLista) => {
    navigation.navigate("Adicionar Lista", {
      acao: "Editar",
      listas: lists,
      indexLista: indexLista
    })
  }



  const carregarListas = useMemo(() => {
    return (
      <View style={{ width: "100%", alignItems: "center", gap: 8 }}>
        {
          lists.map((item, index) => {
            return (
              <TouchableOpacity onPress={() => {navigation.navigate('Tarefas')}} key={index}>
                <List Titulo={item.titulo} indexLista={index} key={index} listas={lists} setListas={setLists} EditList={EditList} />
               </TouchableOpacity>
            )
          })
        }
      </View>
    )
  }, [lists]);

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>

      <TouchableOpacity onPress={() => {
        navigation.navigate('Adicionar Lista', {
          acao: "Criar",
          listas: lists
        })
      }}>
        <Text style={styles.btnTitle}>Adicionar Lista</Text>
      </TouchableOpacity>

      <Text style={styles.title}>Aqui estão as suas listas:</Text>

      {
        carregarListas
      }

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
    padding: 5,
  }
});

export default HomeScreen;