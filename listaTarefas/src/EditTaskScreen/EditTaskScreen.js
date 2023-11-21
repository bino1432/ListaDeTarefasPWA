import { useState } from "react";
import { Text, TextInput, TouchableOpacity, View, StyleSheet } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import medata from './../storage.medata.json';

function EditTaskScreen({ route, navigation }) {

  const { acao, tasks, indexTask } = route.params;
  const [nomeTask, setNomeTask] = useState("")

  const addTask = () => {
    if (nomeTask.length <= 3) {
        alert("Nome muito curto!")
        return
    }

    let novaTask
        if (acao == "Criar") {
            novaTask= [{titulo: nomeTask, ultimaMod:(new Date().toLocaleString()), tarefas:[]}, ...tasks];
        }else if(acao == "Editar") {
            novaTask = tasks
            console.log(indexTask)
            var task = novaTask[indexTask]
            task.titulo = nomeTask
            task.ultimaMod = new Date().toLocaleString()
        }

        AsyncStorage.setItem(medata.TAREFAS, JSON.stringify(novaTask));

        navigation.navigate("Tarefas", {
        });
    }

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text style={styles.title} >{acao} tarefa</Text>
      
      <TouchableOpacity onPress={() => navigation.navigate('Tarefas')}>
        <Text style={styles.btnTitle}>Voltar</Text>
      </TouchableOpacity>

      <TextInput style={styles.input} placeholder="Insira um item aqui" onChangeText={setNomeTask} />
      
      <TouchableOpacity onPress={addTask}>
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
    backgroundColor: "#092FBA",
    fontSize: 20,
    borderRadius: 5,
    padding: 10,
  },
  input: {
    borderWidth: 2,
    borderColor: "#000",
    padding: 10,
    borderRadius: 10,
    margin: 10,

  }
});

export default EditTaskScreen;