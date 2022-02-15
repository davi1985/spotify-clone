import { Container, Search, User } from './styles';
export const Header = () => {
  return (
    <Container>
      <Search>
        <input placeholder="Search" />
      </Search>

      <User>
        <img
          src="https://avatars.githubusercontent.com/u/32596296?v=4"
          alt="Usuário logado"
        />
        Davi Silva
      </User>
    </Container>
  );
};
