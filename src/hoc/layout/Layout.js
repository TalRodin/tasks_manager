import React from 'react'
import styled from 'styled-components'

import Navbar from './elements/Container'
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer'

const MainWrapper = styled.main`
  width: 100%;
  min-height: calc(100vh - 6rem);
  margin-top: 6rem;
`;

const Layout =({children})=>(
        <>
            <Navbar/>
            <SideDrawer/>
            <MainWrapper>{children}</MainWrapper>
        </>
)
export default Layout