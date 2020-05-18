import React from 'react';
import styled from 'styled-components'
import Button from './component/Button'

const MainWrapper = styled.section`
  width: 100%;
  margin:0 auto;
  display: flex;
  flex-direction:column
`
function App() {
  return (
    <MainWrapper>
      <Button primary>Primary Button</Button>
      <Button>Button</Button>
    </MainWrapper>
  );
}

export default App;
