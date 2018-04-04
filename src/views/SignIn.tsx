import { inject, observer } from 'mobx-react'
import React from 'react'
import { Button, Text } from 'react-native'
import { NavigationScreenProps } from 'react-navigation'
import { compose, withHandlers } from 'recompose'
import styled from 'styled-components/native'
import { ISession } from '../store/Session'

const StyledContainer = styled.View`
  flex: 1;
  background-color: white;
  align-items: center;
  justify-content: center;
`

interface ISignInHandlers {
  handleSignIn: () => void
}

interface IProps extends NavigationScreenProps, ISignInHandlers {
  session: ISession
}

const enhancers = compose<IProps, NavigationScreenProps>(
  inject(({ store }) => ({ session: store.session })),
  observer,
  withHandlers<IProps, ISignInHandlers>({
    handleSignIn: props => async () => {
      const { session } = props
      await session.setToken(
        [
          'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjU4ZjMwNjUyNWY1YjYwMDA0N',
          'DNiYTVkNCIsInNjb3BlIjpbImZyZWViaXJkIiwiYWRtaW4iLCJzdXBlcmFkbWluIiwicGFyd',
          'G5lciJdLCJjcmVhdGVkQXQiOjE1MjEyMzUyMjYwNjksImlhdCI6MTUyMTIzNTIyNiwiZXhwIj',
          'oxNTIzODI3MjI2fQ.aohie2zHUkd_uOZHf1sZcIwb9eFj4tyXHFWQoBphki8'
        ].join('')
      )
      props.navigation.navigate('App')
    }
  })
)

const SignIn: React.SFC<IProps> = props => (
  <StyledContainer>
    <Text>SignIn Ya Fuck</Text>
    <Button onPress={props.handleSignIn} title="Sign In" color="#841584" />
  </StyledContainer>
)

export default enhancers(SignIn)
