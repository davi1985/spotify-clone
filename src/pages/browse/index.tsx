import { Container, Title, List, Playlist } from './styles';

export const Browse = () => (
  <Container>
    <Title>Navegar</Title>

    <List>
      <Playlist to="/playlists/1">
        <img
          src="https://i.pinimg.com/originals/19/f6/82/19f682a67a7ca726d0fe49653288b5e5.jpg"
          alt="Playlist"
        />
        <strong>Hilsong</strong>
        <p>The best Worship song by Hillsong</p>
      </Playlist>

      <Playlist to="/playlists/1">
        <img
          src="https://i.pinimg.com/originals/19/f6/82/19f682a67a7ca726d0fe49653288b5e5.jpg"
          alt="Playlist"
        />
        <strong>Hilsong</strong>
        <p>The best Worship song by Hillsong</p>
      </Playlist>

      <Playlist to="/playlists/1">
        <img
          src="https://i.pinimg.com/originals/19/f6/82/19f682a67a7ca726d0fe49653288b5e5.jpg"
          alt="Playlist"
        />
        <strong>Hilsong</strong>
        <p>The best Worship song by Hillsong</p>
      </Playlist>

      <Playlist to="/playlists/1">
        <img
          src="https://i.pinimg.com/originals/19/f6/82/19f682a67a7ca726d0fe49653288b5e5.jpg"
          alt="Playlist"
        />
        <strong>Hilsong</strong>
        <p>The best Worship song by Hillsong</p>
      </Playlist>
    </List>
  </Container>
);
