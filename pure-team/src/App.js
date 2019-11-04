import React from 'react';
import './App.scss';
import styled from 'styled-components/macro';
import PieMenus from './components/pie-menu/pie-menu'
import Sidebar from './components/sidebar/sidebar'

function App() {
  return (
    <div className="App">
        <MenuContainer>
            <Sidebar/>
            <ContainerPie>
                <PieMenus/>
            </ContainerPie>
        </MenuContainer>
    </div>
  );
}
const MenuContainer = styled.div`
  display: flex;
`;
const ContainerPie = styled.div`
    align-items: center;
    justify-content: center;
    display: flex;
    flex: 1;
`;
export default App;
