import * as React from 'react'
import { AppRegistry } from 'react-native'

import StorybookUI from './storybook'

class StorybookRoot extends React.Component {
  render() {
    return <StorybookUI />
  }
}

AppRegistry.registerComponent('Freebird', () => StorybookRoot)
