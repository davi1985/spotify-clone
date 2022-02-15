import styled from 'styled-components';

export const Container = styled.aside`
  height: 100%;
  width: 200px;
  background: #121212;
  color: #b3b3b3;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const NavContainer = styled.div`
  padding: 25px;
`;

export const Nav = styled.ul`
  list-style: none;
  margin-top: 25px;

  &:first-child() {
    margin: 0;
  }
`;

export const NavItem = styled.li``;

type NavItemLinkProps = {
  main?: boolean;
};

export const NavItemLink = styled.a<NavItemLinkProps>`
  color: inherit;
  text-decoration: none;
  font-size: 13px;
  line-height: 32px;
  transition: color 0.3s;

  &:hover {
    color: #fff;
  }

  font-weight: ${(props) => (props.main ? 'bold' : 'normal')};
`;

export const NavItemSpan = styled.span`
  font-size: 11px;
  text-transform: uppercase;
  line-height: 22px;
  letter-spacing: 1.11px;
  font-weight: 300;
`;

export const NewPlaylist = styled.button`
  background: transparent;
  border: 0;
  border-top: 1px solid #282828;
  font-size: 13px;
  color: #b3b3b3;
  display: flex;
  align-items: center;
  padding: 15px 25px;
  transition: filter 0.2s;

  &:hover {
    color: #fff;
    filter: brightness(0.9);
  }
`;

export const AddPlaylistImg = styled.img`
  margin-right: 10px;
`;
