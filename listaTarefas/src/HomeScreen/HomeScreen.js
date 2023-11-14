import { useEffect, useMemo, useState } from "react";
import { Button, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import List from "../Components/List"
import AsyncStorage from '@react-native-async-storage/async-storage';
import medata from "./../storage.medata.json"
import { useIsFocused } from "@react-navigation/native";

function HomeScreen({ route, navigation }) {

  const focus = useIsFocused();
  let [listas, setListas] = useState([])

  useEffect(() => {
    getListas();
  }, [focus]);

  useEffect(() => {
    saveListas();
  }, [listas]);

  const saveListas = async () => {
    const saveListas = listas || "";
    await AsyncStorage.setItem(medata.LISTAS, JSON.stringify(saveListas));
  }

  const getListas = async () => {
    const getLista = await AsyncStorage.getItem(medata.LISTAS);
    if (getLista) {
      setListas(JSON.parse(getLista));
    }
  }

  const goEditarLista = (indexLista) => {
    console.log(indexLista)
    navigation.navigate("Adicionar Lista", {
      acao: "Editar",
      listas: listas,
      indexLista: indexLista
    })
  }

  const removeLista = (indexLista) => {
    let novaLista = [...listas]
    novaLista.splice(indexLista, 1)
    setListas(novaLista)
  }

  const carregarListas = useMemo(() => {
    return (
      <View style={{ width: "100%", alignItems: "center", gap: 8 }}>
        {
          listas.map((item, index) => {
            return (
              <List Titulo={item.titulo} IndexLista={index} key={index} listas={listas} setListas={setListas} goEditarLista={goEditarLista} />
            )
          })
        }
      </View>
    )
  }, [listas]);

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>

      <TouchableOpacity onPress={() => {
        navigation.navigate('Adicionar Lista', {
          acao: "Criar",
          listas: listas
        })
      }}>
        <Text style={styles.btnTitle}>Adicionar Lista</Text>
      </TouchableOpacity>

      <Text style={styles.title}>Aqui estão as suas listas</Text>

      {
        carregarListas
      }

    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
  },
  btnTitle: {
    color: "#FFF",
    backgroundColor: "#027148",
    fontSize: 17,
    borderRadius: 5,
    padding: 5,
  }
});

export default HomeScreen;