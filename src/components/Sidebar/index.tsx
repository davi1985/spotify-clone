import {
  Container,
  NewPlaylist,
  AddPlaylistImg,
  NavContainer,
  Nav,
  NavItem,
  NavItemLink,
  NavItemSpan,
} from './styles';
import AddPlaylistIcon from '../../assets/images/add_playlist.svg';

import { sidebarMenu } from '../../data/sidebar-menu';

export const Sidebar = () => {
  return (
    <Container>
      <NavContainer>
        <Nav>
          {sidebarMenu.firt.map((item, index) => (
            <NavItem key={index}>
              <NavItemLink href="" main>
                {item?.label}
              </NavItemLink>
            </NavItem>
          ))}
        </Nav>

        <Nav>
          <NavItem>
            <NavItemSpan>Sua Biblioteca</NavItemSpan>
          </NavItem>

          {sidebarMenu.second.map((item, index) => (
            <NavItem key={index}>
              <NavItemLink href="">{item.label}</NavItemLink>
            </NavItem>
          ))}
        </Nav>

        <Nav>
          <NavItem>
            <NavItemSpan>Playlist</NavItemSpan>
          </NavItem>

          <NavItem>
            <NavItemLink href="" main>
              Melhores do rock
            </NavItemLink>
          </NavItem>
        </Nav>
      </NavContainer>

      <NewPlaylist>
        <AddPlaylistImg src={AddPlaylistIcon} alt="Adicionar playlist" />
        Nova playlist
      </NewPlaylist>
    </Container>
  );
};
