import { inject, observer } from 'mobx-react'
import { getSnapshot } from 'mobx-state-tree'
import React from 'react'
import { ActivityIndicator, View } from 'react-native'
import { NavigationScreenProps } from 'react-navigation'
import { ISession } from '../store/Session'

interface IProps extends NavigationScreenProps {
  session: ISession
}

@inject(({ store }) => ({ session: store.session }))
@observer
export default class Bootstrap extends React.Component<IProps> {
  constructor(props: IProps) {
    super(props)
    this.bootstrapAsync()
  }

  // Render any loading content that you like here
  public render() {
    return (
      <View>
        <ActivityIndicator />
      </View>
    )
  }

  // Fetch the token from storage then navigate to our appropriate place
  private bootstrapAsync = async () => {
    const { session } = this.props
    await session.bootstrap()
    const { token } = getSnapshot(session)
    this.props.navigation.navigate(token ? 'App' : 'Auth')
  }
}
