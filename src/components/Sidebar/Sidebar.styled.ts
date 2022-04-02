import styled from 'styled-components';

export const SidebarContainer = styled.nav`
  display: flex;
  flex-direction: column;
  padding: 24px;
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 250px;
  background: ${(props) => props.theme.colors.primary};
  color: ${(props) => props.theme.colors.tertiary};

  h2 {
    font-size: 20px;
    color: ${(props) => props.theme.colors.white};
  }
`;

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 16px;

  span {
    margin-right: 8px;
    margin-top: 6px;
  }
`;

export const IconContainer = styled.span`
  font-size: 18px;
`;

export const Title = styled.h6`
  font-size: 12px;
  font-weight: 600;
  margin: 16px 0;
  text-transform: uppercase;
  letter-spacing: 1px;
  opacity: 0.6;
`;

export const NavContainer = styled.div`
  display: flex;
  cursor: pointer;

  a {
    color: ${(props) => props.theme.colors.tertiary};
    text-decoration: none;
    font-size: 15px;
    margin: 0 0 20px 16px;
    transition: color 0.3s ease-in-out;
  }

  &:hover a {
    color: ${(props) => props.theme.colors.white};
    transition: color 0.3s ease-in-out;
  }

  path {
    transition: fill 0.3s ease-in-out;
  }

  &:hover path {
    fill: ${(props) => props.theme.colors.white};
    transition: fill 0.3s ease-in-out;
  }
`;
