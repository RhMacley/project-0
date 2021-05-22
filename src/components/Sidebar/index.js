import React from 'react'
import { Link } from 'react-router-dom'

import imageLogo from '../../images/logo5.png'
import { Sidenav, List, ListItem, Item, Logo, LogoWrap, DashIcon, BarIcon, StockIcon} from './style'

function SideBar() {
  return (
    <Sidenav>
      <LogoWrap>
      <Logo  src={imageLogo}/>
      </LogoWrap>
      <List>
        <Link to='/' style={{ textDecoration: 'none' }}>
        <ListItem>
          <DashIcon />
          <Item>Dashboard</Item>
        </ListItem>
        </Link>
        <Link to='/products' style={{ textDecoration: 'none' }}>
        <ListItem>
          <StockIcon />
          <Item>Produtos</Item>
        </ListItem>
        </Link>
        <Link to='/sales' style={{ textDecoration: 'none' }}>
        <ListItem>
          <BarIcon />
          <Item>Vendas</Item>
        </ListItem>
        </Link>
      </List>
    </Sidenav>
  )
}

export default SideBar;
