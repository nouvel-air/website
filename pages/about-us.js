import React from 'react';
import Head from 'next/head';
import { Layout } from 'components/app';
import { Cell, Div, Row } from 'components/layout';
import { SideImage } from 'components/media';
import {P, LeadP, SubTitle} from 'components/text';
import {
  TopSection,
  FooterSection,
  ContentSection,
  TestimonySection,
  QuoteSection
} from 'components/section';
import ContactUsSection from "../components/section/ContactUsSection";
import { Trans } from '@lingui/macro';
import ClientSection from "../components/section/ClientSection";
import { styled, mediaQuery } from "utils/styling";

const SubTitleNoMargin = styled(SubTitle)`
  ${mediaQuery('sm')} {
      // margin-top: 0px !important;
    }
`;

const AboutUsPage = () => (
  <Layout>
    <Head>
      <title>Qui sommes-nous ? - Nouvel air</title>
    </Head>
    <TopSection image="about-us.jpg" position="center bottom">
      <Trans id="about-us.title">Qui sommes-nous?</Trans>
    </TopSection>
    <ContentSection>
      <LeadP>
        Après nous être engagés plusieurs années ensemble dans le monde associatif, nous avons décidé en 2022 de mettre
        en commun nos compétences et de créer Nouvel air. Notre envie ? Aider les organisations à déployer leurs
        ailes, afin qu'elles contribuent pleinement à l'émergence d'une société où l'humain est au centre.
      </LeadP>
      <SideImage src="/static/images/elisa-psi-2.jpg" />
      <SubTitle>Elisa Valmori</SubTitle>
      <P>
        Passionnée par la nature humaine et la compréhension profonde des relations, Elisa a obtenu un diplôme
        universitaire en psychologie en 2006. Elle a ensuite approfondi diverses orientations, notamment celle des
        Constellations familiales, une approche qui a changé sa vie personnelle et professionnelle au point de devenir
        facilitatrice en 2012. Elle accompagne aujourd'hui régulièrement des groupes en Italie et en France.
      </P>
      <P>
        Animées par la conviction profonde que chacun d'entre nous est sur cette Terre pour un but bien précis et pour
        apporter sa contribution, elle croit que les Constellations d'organisations peuvent avoir un rôle majeur dans
        la transformation sociétale actuelle, en aidant des groupes à coopérer pour réaliser des projets ayant un grand
        impact sur le monde.
      </P>
      <P style={{ clear: 'both', marginBottom: 30 }}></P>
      <SubTitle>Sébastien Rosset</SubTitle>
      <SideImage align="right" src="/static/images/sebastien.jpg" />
      <P>
        Passionné depuis toujours par l’intelligence collective, Sébastien a vécu pendant 10 ans dans une communauté
        avant de se tourner vers des dynamiques citoyennes telles que celles proposées par Colibris. Depuis 2018, il
        pratique les différents outils autour de la gouvernance partagée et a accompagné une demi-douzaine de collectifs
        et associations dans leur appropriation de ces outils et postures.
      </P>
      <P>
        Développeur web depuis l'apparition de l'Internet grand public (1995), il a toujours cherché des moyens
        par lesquels la technologie pourrait être vraiment au service de l'humain. Au sein de Nouvel air, il souhaite
        aider les organisations à ouvrir leurs données afin de faciliter l'implication de leur communauté et de
        permettre la collaboration avec d'autres organisations.
      </P>
      <P style={{ clear: 'both' }}></P>
    </ContentSection>
    <QuoteSection title="Notre raison d'être" author="Co-écrite en juillet 2022" color="black" bg="secondaryLight">
      Conscients que les organisations sont des corps vivants ayant besoin d'attention et de soin,
      nous désirons proposer des méthodes et outils innovants qui les aident à trouver équilibre et vitalité,
      afin qu'elles puissent pleinement réaliser leur raison d'être au sein de l'écosystème dans lequel elles se sont incarnées.
    </QuoteSection>
    <ClientSection />
    <TestimonySection id="15667581" />
    <ContactUsSection />
    <FooterSection />
  </Layout>
);

export default AboutUsPage;
