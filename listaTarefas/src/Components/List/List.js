import { StyleSheet, Text, View, TouchableOpacity } from "react-native";


const List = ({ Titulo, listas, setListas, IndexLista, EditList }) => {

    const removeLista = () => {
        var novaLista = [...listas];
        novaLista.splice(IndexLista, 1);
        setListas(novaLista);
    }

    return (
        <View style={styles.list}>
            <Text>{Titulo}</Text>

            <View style={styles.btns}>
                <TouchableOpacity style={styles.editBtn} onPress={() => EditList(IndexLista)}>
                    <Text style={styles.btnTitle}>Editar</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.removeBtn} onPress={removeLista} >
                    <Text style={styles.btnTitle}>Excluir</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    list: {
        paddingLeft: 30,
        flex: 1,
        gap: 200,
        backgroundColor: '#FFFAFA',
        borderRadius: 15,
        minWidth: 400,
        maxWidth: 400,
        minHeight: 80,
        maxHeight: 80,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"

    },
    removeBtn: {
        flex: 1,
        minWidth: 50,
        minHeight: 50,
        maxWidth: 50,
        maxHeight: 50,
        borderColor: "#911",
        borderWidth: 2,
        borderRadius: 14
    },
    editBtn: {
        flex: 1,
        minWidth: 50,
        minHeight: 50,
        maxWidth: 50,
        maxHeight: 50,
        borderColor: "#32ff32",
        borderWidth: 2,
        borderRadius: 14
    },
    btns: {
        flex: 1,
        alignItems: "center",
        flexDirection: "row"
    },
    btnTitle: {
        flex: 1,
    }
})

export default List;