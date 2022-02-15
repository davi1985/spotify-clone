import { Container, Header, SongList } from './styles';

import ClockIcon from '../../assets/images/clock.svg';
import PlusIcon from '../../assets/images/plus.svg';

export const Playlist = () => {
  return (
    <Container>
      <Header>
        <img
          src="https://i.pinimg.com/originals/19/f6/82/19f682a67a7ca726d0fe49653288b5e5.jpg"
          alt="Playlist"
        />

        <div>
          <span>Playlist</span>
          <h1>Hillsong</h1>
          <p>12 músicas</p>

          <button>Play</button>
        </div>
      </Header>

      <SongList cellPadding={0} cellSpacing={0}>
        <thead>
          <th />
          <th>Titulo</th>
          <th>Artista</th>
          <th>Álbum</th>
          <th>
            <img src={ClockIcon} alt="Song Time" />
          </th>
        </thead>

        <tbody>
          <tr>
            <td>
              <img src={PlusIcon} alt="Adicionar" />
            </td>

            <td>So Will I</td>
            <td>Hillsong United</td>
            <td>The Best</td>
            <td>5:23</td>
          </tr>

          <tr>
            <td>
              <img src={PlusIcon} alt="Adicionar" />
            </td>

            <td>So Will I</td>
            <td>Hillsong United</td>
            <td>The Best</td>
            <td>5:23</td>
          </tr>

          <tr>
            <td>
              <img src={PlusIcon} alt="Adicionar" />
            </td>

            <td>So Will I</td>
            <td>Hillsong United</td>
            <td>The Best</td>
            <td>5:23</td>
          </tr>
        </tbody>
      </SongList>
    </Container>
  );
};
