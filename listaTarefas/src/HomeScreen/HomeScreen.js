import { useState } from "react";
import { Button, StyleSheet, Text, TouchableOpacity, View } from "react-native";

function HomeScreen({ navigation }) {

  let [listas, setListas] = useState([])
  // let [quantidadeLista, setQuantidadeLista] = useState("0")


  // const addlist = () => {
  //   if (quantidadeLista <= 10) {
  //     setQuantidadeLista(quantidadeLista++)
  //   } else {
  //     alert("Você não pode mais adicionar listas")
  //   }
  // }

  // const deleteList = () => {
  //   if (quantidadeLista >= 0) {
  //     setQuantidadeLista(quantidadeLista--)
  //   }
  // }

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>

      <TouchableOpacity onPress={() => navigation.navigate('Adicionar Lista')}>
        <Text style={styles.btnTitle}>Adicionar Lista</Text>
      </TouchableOpacity>

      <Text style={styles.title}>Aqui estão as suas listas</Text>

      {/* <Button
                title="add list"
                onPress={addlist}
            />

            <Button
                title="del list"
                onPress={deleteList}
            /> */}

      {/* <Text>Você tem {quantidadeLista}/10</Text> */}
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