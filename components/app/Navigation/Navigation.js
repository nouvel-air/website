import React from 'react';
import Router from 'next/router';
import { Trans } from '@lingui/macro';
import { I18n } from '@lingui/react';

import { styled, theme } from 'utils/styling';
import { PageLink } from 'utils/router';

import { Div, FixedDiv, Ul, Separator, Row, Cell } from 'components/layout';
import { Icon, Image } from 'components/media';

import Facebook from '../../../svg/logo-facebook.svg';
import LinkedIn from '../../../svg/logo-linkedin.svg';
import Mail from '../../../svg/mail.svg';

import NavLink from './NavLink';
import FlagSelector from './FlagSelector';
import NavLinks from "./NavLinks";

const ScrollableDiv = styled(Div)`
  overflow-y: auto;
  overflow-x: hidden;
`;

const BorderedCell = styled(Cell)`
  border-left: 1px #808080 solid;
  border-right: 1px #808080 solid;
`;

const HoverDiv = styled(Div)`
  cursor: pointer;
  transition: all ease-in-out 200ms;
  &:hover {
    color: ${props => theme.colors[props.hoverColor]};
    background-color: ${props => theme.colors[props.hoverBgColor]};
  }
`;

const TransparentImage = styled(Image)`
  mix-blend-mode: multiply;
`;

const Navigation = () => (
  <ScrollableDiv bg="navBackground" h="100%" w="100%">
    <Div align="center" p="25px 25px">
      <PageLink page="index">
        <TransparentImage src="/static/images/nouvel-air-7.jpg" w="100%" />
      </PageLink>
    </Div>
    <Div p="0px 25px 70px">
      <NavLinks />
    </Div>
    <FixedDiv bottom left w={{ xs: '320px', sm: '300px', md: '350px' }}>
      <Separator />
      <Row>
        <Cell w={1 / 3} h="42px">
          <a href="https://www.facebook.com/NouvelAirOrg" target="_blank">
            <HoverDiv
              bg="navBackground"
              color="darkGrey"
              hoverColor="white"
              hoverBgColor="facebook"
              align="middle"
              h="100%"
            >
              <Icon size="18px">
                <Facebook />
              </Icon>
            </HoverDiv>
          </a>
        </Cell>
        <BorderedCell w={0.33} h="42px">
          <a href="https://www.linkedin.com/company/nouvel-air-org" target="_blank">
            <HoverDiv
              bg="navBackground"
              color="darkGrey"
              hoverColor="white"
              hoverBgColor="linkedin"
              align="middle"
              h="100%"
            >
              <Icon size="18px">
                <LinkedIn />
              </Icon>
            </HoverDiv>
          </a>
        </BorderedCell>
        <Cell w={0.33} h="42px">
          <PageLink page="contact-us">
            <HoverDiv
              bg="navBackground"
              color="darkGrey"
              hoverColor="white"
              hoverBgColor="doctolib"
              align="middle"
              h="100%"
            >
              <Icon size="24px">
                <Mail />
              </Icon>
            </HoverDiv>
          </PageLink>
        </Cell>
        {/*<Cell w={1 / 3} h="42px" align="middle" bg="background">*/}
        {/*  <I18n>*/}
        {/*    {({ i18n }) => <FlagSelector value={i18n._language || 'fr'} onChange={value => Router.push('/' + value)} />}*/}
        {/*  </I18n>*/}
        {/*</Cell>*/}
      </Row>
    </FixedDiv>
  </ScrollableDiv>
);

export default Navigation;
