import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
    Keyboard,
    KeyboardAvoidingView,
    Platform,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native";
import Task from "./components/Task";

export default function App() {
    const [task, setTask] = useState(null);
    const [taskItem, setTaskItem] = useState([]);

    const handleAddTask = () => {
        Keyboard.dismiss();
        setTaskItem([...taskItem, task]);
        setTask(null);
    };

    const completeTask = (index) => {
        const itemsCopy = [...taskItem];
        itemsCopy.splice(index, 1);
        setTaskItem(itemsCopy);
    };

    return (
        <View style={styles.container}>
            {/*task wrapper  */}
            <View style={styles.taskWrapper}>
                <Text style={styles.sectionTitle}>Today's Task</Text>

                <View style={styles.items}>
                    {/* item of the list */}

                    {taskItem &&
                        taskItem.map((task, index) => {
                            return (
                                <TouchableOpacity
                                    key={index}
                                    onPress={() => completeTask(index)}
                                >
                                    <Task text={task} />
                                </TouchableOpacity>
                            );
                        })}
                </View>
            </View>
            {/*task wrapper  */}
            <KeyboardAvoidingView
                behavior={Platform.OS === "ios" ? "padding" : "height"}
                style={styles.writeTaskWrapper}
            >
                <TextInput
                    style={styles.input}
                    placeholder="Write a task"
                    value={task}
                    onChangeText={(text) => setTask(text)}
                />
                <TouchableOpacity onPress={() => handleAddTask()}>
                    <View style={styles.addWrapper}>
                        <Text style={styles.addText}>+</Text>
                    </View>
                </TouchableOpacity>
            </KeyboardAvoidingView>
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
    writeTaskWrapper: {
        position: "absolute",
        bottom: 60,
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
    },
    input: {
        backgroundColor: "#fff",
        width: 250,
        padding: 15,
        borderRadius: 60,
        borderColor: "#C0C0C0",
        borderWidth: 1,
    },
    addWrapper: {
        width: 60,
        height: 60,
        backgroundColor: "#fff",
        borderColor: "#C0C0C0",
        borderWidth: 1,
        borderRadius: 100,
        justifyContent: "center",
        alignItems: "center",
    },
    addText: {},
});
