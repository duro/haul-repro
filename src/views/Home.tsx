import { inject, observer } from 'mobx-react'
import React from 'react'
import { Button, Text } from 'react-native'
import { NavigationScreenProps } from 'react-navigation'
import { compose, withHandlers } from 'recompose'
import styled from 'styled-components/native'
import { ISession } from '../store/Session'

interface IHandlers {
  handleLogout: () => void
  handleNextScreen: () => void
}

interface IProps extends NavigationScreenProps, IHandlers {
  session: ISession
}

const StyledContainer = styled.View`
  flex: 1;
  background-color: white;
  align-items: center;
  justify-content: center;
`

const enhancers = compose<IProps, NavigationScreenProps>(
  inject(({ store }) => ({ session: store.session })),
  observer,
  withHandlers<IProps, IHandlers>({
    handleLogout: props => () => {
      const { session } = props
      session.logout()
      props.navigation.navigate('Auth')
    },
    handleNextScreen: props => () => {
      props.navigation.navigate('Next')
    }
  })
)

export default enhancers(
  class Home extends React.Component<IProps> {
    public render() {
      return (
        <StyledContainer>
          <Text>Home</Text>
          <Button
            title="Logout"
            color="#841584"
            onPress={this.props.handleLogout}
          />
          <Button
            title="Next Screen"
            color="#841584"
            onPress={this.props.handleNextScreen}
          />
        </StyledContainer>
      )
    }
  }
)
