// External packages
import React from 'react'
import { View, StatusBar } from 'react-native'
import { Provider } from 'react-redux'
import { Constants } from 'expo'

// Routes
import { AppContainer } from './utils/routes'

// Redux
import { store } from './utils/store'

// Notification
import { setLocalNotification } from './utils/helpers'

class App extends React.Component {
  componentDidMount() {
    return setLocalNotification()
  }

  render() {
    return (
      <Provider store={store}>
        <View style={{flex: 1}}>
          <View style={{backgroundColor: 'green', height: Constants.statusBarHeight}}>
            <StatusBar translucent backgroundColor={'green'} />
          </View>
          <AppContainer />
        </View>
      </Provider>
    )
  }
}

export default App
