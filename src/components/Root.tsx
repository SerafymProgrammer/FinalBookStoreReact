import * as React from 'react'
import styled from 'styled-components'

interface RootProps {
  className?: string
}

const Root: React.SFC<RootProps> = ({ children }) => <Wrapper>{children}</Wrapper>

export default Root

const Wrapper = styled('div')`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 100vh;
  background-color: white;
  color: black;

`
