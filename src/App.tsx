import { Header } from './components/Header';
import { Player } from './components/Player';
import { Sidebar } from './components/Sidebar';

import { Wrapper, Container, Content } from './styles/components';

import { AppRoutes } from './routes';
import { BrowserRouter } from 'react-router-dom';

export function App() {
  return (
    <BrowserRouter>
      <Wrapper>
        <Container>
          <Sidebar />

          <Content>
            <Header />

            {/*  routes */}
            <AppRoutes />
          </Content>
        </Container>

        <Player />
      </Wrapper>
    </BrowserRouter>
  );
}
