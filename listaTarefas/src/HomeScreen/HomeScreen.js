import { Button, Text, View } from "react-native";

function HomeScreen({ navigation }) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
        <Button
                title="Lista"
                onPress={() => navigation.navigate('ListScreen')}
            />
      </View>
    );
  }

  export default HomeScreen;