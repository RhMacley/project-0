import styled from 'styled-components'

import { RiDashboardLine } from 'react-icons/ri'
import { BsBarChart } from 'react-icons/bs'
import { IoFileTrayStackedOutline } from 'react-icons/io5'

export const Sidenav = styled.div`
  width: 240px;
  background: rgb(29,28,64);
  background: linear-gradient(0deg, rgba(29,28,64,1) 0%, rgba(29,28,64,1) 35%, rgba(88,85,214,1) 100%);
  height: 100vh;
`;

export const LogoWrap = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 1.5rem;
  cursor: pointer;
`;

export const Logo = styled.img`
  width: 160px;
`;

export const List = styled.ul`
  padding: 20px;
`;

export const ListItem = styled.li`
  display: flex;
  align-items: center;
  list-style: none;
  margin: 30px 0;
`;

export const DashIcon = styled(RiDashboardLine)`
  color: #fff;
  font-size: 1.5rem;
`;

export const BarIcon = styled(BsBarChart)`
  color: #fff;
  font-size: 1.5rem;
`;

export const StockIcon = styled(IoFileTrayStackedOutline)`
  color: #fff;
  font-size: 1.5rem;
`;

export const Item = styled.a`
  color: #FFF;
  font-size: 1.2rem;
  font-family: 'Poppins', sans-serif;
  font-weight: 700;
  text-decoration: none;
  cursor: pointer;
  padding: 0 20px;
`;
