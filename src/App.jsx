import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

import { GlobalStyle } from './components/GlobalStyle'
import { Container } from './components/UI';
import { Outlet } from 'react-router-dom';


function App() {
  return (
    <Container>
      <Header />
      <GlobalStyle />
      <Outlet />
      <Footer />
    </Container>
  )
}

export default App;
