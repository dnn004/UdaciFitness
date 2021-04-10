import 'react-native-gesture-handler';
import React from 'react'
import { View, Platform, StatusBar } from 'react-native'
import AddEntry from './components/AddEntry'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from './reducers'
import History from './components/History'
import { purple, white } from './utils/colors'
import { FontAwesome, Ionicons } from '@expo/vector-icons'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Constants from 'expo-constants'

const Tab = createBottomTabNavigator()

function UdaciStatusBar({ backgroundColor, ...props }) {
  return (
    <View style={{ backgroundColor, height: Constants.statusBarHeight }}>
      <StatusBar translucent backgroundColor={backgroundColor} {...props} />
    </View>
  )
}

export default class App extends React.Component{
  componentDidMount() {
    console.log("STARTING")
  }

  render() {
    return (
      <Provider store={createStore(reducer)}>
        <NavigationContainer>
          <View style={{ flex: 1 }}>
            <UdaciStatusBar backgroundColor={purple} style="light" />
            <Tab.Navigator
              tabBarOptions={{
                activeTintColor: Platform.OS === 'ios' ? purple : white,
                style: {
                  backgroundColor: Platform.OS === 'ios' ? white : purple,
                },
                indicatorStyle: {
                  backgroundColor: 'yellow',
                }
              }}
            >
              <Tab.Screen name="History" component={History}
                options={{
                  tabBarIcon: ({ tintColor }) => <Ionicons name='ios-bookmarks' size={30} color={tintColor} />
                }}/>
              <Tab.Screen name="Add Entry" component={AddEntry}
                options={{
                  tabBarIcon: ({ tintColor }) => <FontAwesome name='plus-square' size={30} color={tintColor} />
                }} />
            </Tab.Navigator>
          </View>
        </NavigationContainer>
      </Provider>
    )
  }
}
