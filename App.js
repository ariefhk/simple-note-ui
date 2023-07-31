import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Task from "./components/Task";

export default function App() {
    return (
        <View style={styles.container}>
            {/*task wrapper  */}
            <View style={styles.taskWrapper}>
                <Text style={styles.sectionTitle}>Today's Task</Text>

                <View style={styles.items}>
                    {/* item of the list */}

                    <Task text={"Hello Arief"} />
                    <Task text={"Hello Arief"} />
                </View>
            </View>
            {/*task wrapper  */}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#E8EAED",
    },
    taskWrapper: {
        paddingTop: 80,
        paddingHorizontal: 20,
    },
    sectionTitle: {
        fontSize: 24,
        fontWeight: "bold",
    },
    items: {
        marginTop: 30,
    },
});
