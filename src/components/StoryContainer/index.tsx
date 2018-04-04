import * as React from 'react'
// import { View } from 'react-native'

import StyledStoryContainer from './styles'

interface IProps {
  children?: React.ReactNode
}

const StoryContainer: React.SFC = ({ children }: IProps) => (
  <StyledStoryContainer>{children}</StyledStoryContainer>
)

export default StoryContainer
