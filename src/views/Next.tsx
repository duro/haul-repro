import React from 'react'
import { Button, Text } from 'react-native'
import { NavigationScreenProps } from 'react-navigation'
import styled from 'styled-components/native'

const StyledContainer = styled.View`
  flex: 1;
  background-color: white;
  align-items: center;
  justify-content: center;
`

export default class Home extends React.Component<NavigationScreenProps> {
  public render() {
    return (
      <StyledContainer>
        <Text>Second Screen</Text>
        <Button
          title="Prev Screen"
          color="#841584"
          onPress={this.handlePrevScreen}
        />
      </StyledContainer>
    )
  }

  private handlePrevScreen = () => {
    this.props.navigation.goBack()
  }
}
