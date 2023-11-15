import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

function TaskScreen({ navigation }) {

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <TouchableOpacity onPress={() => {navigation.navigate("Home")}}>
                <Text style={styles.btnTitle}>Voltar</Text>
            </TouchableOpacity>
            <TouchableOpacity>
                <Text style={styles.btnTitle}>Adicionar Tarefa</Text>
            </TouchableOpacity>
            <Text style={styles.title}>Aqui estão as suas tarefas:</Text>
        </View>
    );
};

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
        margin: 5
      }
});

export default TaskScreen;