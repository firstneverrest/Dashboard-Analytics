import styled from 'styled-components';

export const NavbarContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1.5rem;
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 200px;
  background: ${(props) => props.theme.colors.primary};
  color: ${(props) => props.theme.colors.tertiary};

  h2 {
    font-size: 24px;
    color: ${(props) => props.theme.colors.white};
  }
`;
