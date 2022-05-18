import {createStackNavigator}from'@react-navigation/stack';
import Home from '../home';
import Quiz from '../quiz'
import Result from '//'

const Stack = createStackNavigator();

function MyStack(){
  return (
    <Stack.Navigator>
    <Stack.Screen name="Home" component={Home}/>
    <Stack.Screen name="Quiz" component={Quiz}/>
    <Stack.Screen name="Result" component={Result}/>
    
    </Stack.Navigator>


  );
}