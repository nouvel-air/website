import React from 'react';
import { Div } from 'components/layout';
import { Image } from 'components/media';
import { SubTitle } from 'components/text';

const clients = {
  'colibris.png': 'https://nouvel-air.org/static/pdf/cas-d-etude-colibris.pdf',
  'jardiniers-du-nous.png': 'https://www.jardiniersdunous.org/',
  'chemins-de-la-transition.png': 'https://lescheminsdelatransition.org/',
  'assemblee-virtuelle.png': 'https://assemblee-virtuelle.org/',
  'coop-des-territoires.png': 'https://www.lacoop.co/',
};

const ClientSection = () => (
  <Div p={{ xs: '45px 25px', sm: '50px' }}>
    <Div>
      <SubTitle align="center">Ils nous ont fait confiance</SubTitle>
    </Div>
    <Div align="center">
      {Object.entries(clients).map(([image, website]) => (
        <a href={website} target="_blank" rel="noopener noreferrer">
          <Image src={`/static/logos/${image}`} w="auto" h="120px" m="5px 20px" />
        </a>
      ))}
    </Div>
  </Div>
);

ClientSection.defaultProps = {
  color: 'black',
  bg: 'ultraLightGrey',
  right: false,
  linkCaption: 'En savoir +'
};

export default ClientSection;
