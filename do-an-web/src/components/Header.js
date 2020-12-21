import React from 'react';
import { FaGithub } from 'react-icons/fa';

import Container from 'components/Container';

const Header = () => {
  return (
    <header>
      <Container type="content">
        <h1>Coronavirus (COVID-19)</h1>
        <ul>
          <li>
            <a >Gatsby Starter Leaflet</a>
          </li>
        </ul>
      </Container>
    </header>
  );
};

export default Header;
