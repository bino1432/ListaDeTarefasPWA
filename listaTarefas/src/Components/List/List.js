import react from "react";
import { StyleSheet, Button, Text, View, Pressable } from "react-native";


const List = ({Titulo, listas, setListas, IndexLista, goEditarLista}) => {

    const removeLista = () => {
        var novaLista = [...listas];
        novaLista.splice(IndexLista, 1);
        setListas(novaLista);
    }

    return (
        <>
            <View style={styles.lista}>
                <Text>{Titulo}</Text>

                <View>
                    <Pressable onPress={removeLista} />
                    <Pressable onPress={() => goEditarLista(IndexLista)} />
                </View>
            </View>
        </>
    )
}

export default List;