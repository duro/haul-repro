import { Provider } from 'mobx-react'
import { connectReduxDevtools } from 'mst-middlewares'
import React from 'react'
import { StackNavigator, SwitchNavigator } from 'react-navigation'
import remotedev from 'remotedev'

import { onSnapshot } from 'mobx-state-tree'
import { AsyncStorage } from 'react-native'
import RootStore from './store'
import { SessionStorageKey } from './store/Session'
import Bootstrap from './views/Bootstrap'
import Home from './views/Home'
import Next from './views/Next'
import SignIn from './views/SignIn'

const AppStack = StackNavigator({ Home, Next })
const AuthStack = StackNavigator(
  { SignIn },
  {
    navigationOptions: {
      header: null
    }
  }
)

const RootNavigator = SwitchNavigator(
  {
    App: AppStack,
    Bootstrap,
    Auth: AuthStack
  },
  {
    initialRouteName: 'Bootstrap'
  }
)

const store = RootStore.create()

onSnapshot(store.session, async snapshot => {
  await AsyncStorage.setItem(SessionStorageKey, JSON.stringify(snapshot))
})

connectReduxDevtools(remotedev, store)

export default class App extends React.Component {
  public render() {
    return (
      <Provider store={store}>
        <RootNavigator />
      </Provider>
    )
  }
}
