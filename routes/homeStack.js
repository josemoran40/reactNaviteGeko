// In App.js in a new project

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from '../components/login/loginScreen';
import Calculator from '../components/calculator/calculator';
import visibleOperations from '../components/report/visibleOperations';


const Stack = createStackNavigator();

function Drawer() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Login" component={Login}
                    options={{
                        title: '',
                        headerStyle: { height: 0 }
                    }} />

                <Stack.Screen name="Report" component={visibleOperations}
                    options={{
                        title: '',
                        headerStyle: { height: 0 },
                        headerTintColor: '#F4F4F4',
                    }} />

                <Stack.Screen name="Calculator" component={Calculator}
                    options={{
                        title: '',
                        headerStyle: { height: 0 },
                        headerTintColor: '#F4F4F4',
                    }} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default Drawer;