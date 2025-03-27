import styled from "styled-components";

export const NavbarContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  background: #2b2b2b;
  color: white;
  padding: 0.75rem 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.1);
`;

export const Logo = styled.div`
    display: flex;
    flex-direction: row;
    gap: 1rem;
    align-items: center;
    justify-content: center;

    h1 {
        font-size: 1.25rem;
    }
`;

export const NavLinks = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`;