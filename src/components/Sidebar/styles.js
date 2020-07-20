import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Container = styled.aside`
  display: flex;
  flex-shrink: 0;
  align-items: center;
  width: 200px;
  height: 100%;
  background-color: #252526;
  flex-direction: column;
  transition: all 0.2s ease 0s;
  &:hover {
    width: 240px;
  }
`;

export const SidebarLink = styled(NavLink)`
  width: 100%;
  text-align: center;
  text-decoration: none;
  padding-top: 10px;
  color: #eee;
  &:hover {
    color: #f50057;
  }
`; 