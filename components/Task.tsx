import  { useState } from "react";
import { TextInput, View, Button, FlatList, Text } from "react-native";

const Tasks = () => {
    const [task, setTask] = useState("");
    const [tasks, setTasks] = useState<string[]>([]);

    const add = () => {
        setTasks([...tasks,task]);
        setTask("");
    }

    const clear = () => {
        setTasks([]);
    }

    const removeLast = () => {
        tasks.pop();
        setTasks(tasks.slice());

    }
    return(
        <View style = {{marginTop:20}}>
            <TextInput onChangeText={setTask} value={task}/> 
            <Button title="+" onPress={add}/> 
            <Button title="Clear" onPress={clear}/> 
            <Button title="Delete last" onPress={removeLast}/> 
            <FlatList data={tasks} renderItem={({item}) => <Text>{item}</Text>}  />
        </View>
    ) 
}
export default Tasks;
