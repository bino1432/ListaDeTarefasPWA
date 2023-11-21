import { useEffect, useMemo, useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Task from "../Components/Task"
import AsyncStorage from '@react-native-async-storage/async-storage';
import medata from "./../storage.medata.json"
import { useIsFocused } from "@react-navigation/native";

function TaskScreen({ route, navigation }) {

  const useIsFocus = useIsFocused();
  let [tasks, setTasks] = useState([])

  useEffect(() => {
    getTasks();
  }, [useIsFocus]);

  useEffect(() => {
    saveTasks();
  }, [tasks]);

  const saveTasks = async () => {
    const saveTasks = tasks || "";
    await AsyncStorage.setItem(medata.TAREFAS, JSON.stringify(saveTasks));
  }

  const getTasks = async () => {
    const getTasks = await AsyncStorage.getItem(medata.TAREFAS);
    if (getTasks) {
      setTasks(JSON.parse(getTasks));
    }
  }

  const EditTasks = (indexTask) => {
    navigation.navigate("EditTaskScreen", {
      acao: "Editar",
      tasks: tasks,
      indexTask: indexTask
    })
  }



  const carregarTasks = useMemo(() => {
    return (
      <View style={{ width: "100%", alignItems: "center", gap: 8 }}>
        {
          tasks.map((item, index) => {
            return (
                <Task Titulo={item.titulo} indexTask={index} key={index} tasks={tasks} setTasks={setTasks} EditTasks={EditTasks} />
            )
          })
        }
      </View>
    )
  }, [tasks]);

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>

      <TouchableOpacity onPress={() => navigation.navigate('Home')}>
        <Text style={styles.btnTitle}>Voltar</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => {
        navigation.navigate('EditTaskScreen', {
          acao: "Criar",
          tasks: tasks
        })
      }}>
        <Text style={styles.btnTitle}>Adicionar Tarefa</Text>
      </TouchableOpacity>

      <Text style={styles.title}>Aqui estão as suas Tarefas:</Text>

      {
        carregarTasks
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
    backgroundColor: "#092FBA",
    fontSize: 20,
    borderRadius: 5,
    padding: 5,
  }
});

export default TaskScreen;