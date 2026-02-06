import React from 'react';
import Head from 'next/head';
import { Layout } from 'components/app';
import { LeadP, P, SubTitle } from 'components/text';
import {
  TopSection,
  FooterSection,
  TestimonySection,
  ContentSection
} from 'components/section';
import { PageLink } from "utils/router";
import { Trans } from '@lingui/macro';
import InformationSection from "../components/section/InformationSection";
import {SideImage} from "../components/media";
import ContactUsSection from "../components/section/ContactUsSection";

const InformationLiberationPage = () => (
  <Layout>
    <Head>
      <title>Libération de l'information intra- et inter-organisation - Nouvel air</title>
    </Head>
    <TopSection image="tree6.jpg">
      <Trans id="information-liberation.title">Libération de l'information</Trans>
    </TopSection>
    <ContentSection>
      <LeadP>
        La juste circulation des informations via les outils numériques adéquats est un facteur essentiel de la santé
        et de la vitalité d'une organisation. Nous travaillons sur la circulation intra- et inter-organisations des
        informations depuis de nombreuses années et pouvons vous accompagner dans vos choix stratégiques, mais aussi
        développer des solutions sur-mesure.
      </LeadP>
      <SideImage align="right" src="/static/images/zen2.jpg" />
      <SubTitle>Circulation intra-organisation</SubTitle>
      <P>
        Si vos informations ne sont disponibles qu’à un petit nombre, il sera difficile d’impliquer une communauté plus
        large, en particulier si elle est bénévole. La mise en place d'une véritable <PageLink page="shared-governance">gouvernance
        partagée</PageLink> (si elle est désirée) sera rendue plus compliquée, voir impossible.
      </P>
      <P>
        D'autre part, si les personnes sont noyées sous un flot d’informations intuiles pour elles, elles se mettront
        rapidement à l'ignorer, tant la vie moderne nous sollicite continuellement. Cela paralysera aussi les efforts
        entrepris vers plus d’implication et de partage.
      </P>
      <P>
        De nos jours, il existe de nombreux outils informatiques facilitant la communications: espaces de tchat, forums, wikis,
        applications mobiles... Mais encore faut-il choisir l'outil répondant aux besoins précis de votre organisation,
        et trouver la bonne manière de l'intégrer à votre fonctionnement actuel.
      </P>
      <P>
        Cela peut demander une adaptation des outils existants, afin que la transition se fasse dans la douceur. Cela
        peut aussi demander des temps de pédagogie, quoique nous croyons que, lorsque les outils répondent réellement à
        un besoin, la communauté n'a pas de difficulté à s'en emparer.
      </P>
      <P style={{ clear: 'both' }}></P>
    </ContentSection>
      <InformationSection image="organigraph.png" link="https://cercles.reconnexion.coop" linkCaption="Voir l'instance de la coopérative Reconnexion">
        <SubTitle>OrganiGraph</SubTitle>
        <P>
          Logiciel <a href="https://github.com/assemblee-virtuelle/organigraph" target="_blank">open-source</a> que nous avons développé avec l’objectif d’aider les
          organisations à rendre visible leur fonctionnement. Il permet de visualisation la structure de l’organisation
          (sous la forme d’une hiérarchie de cercles) et, pour chaque cercles, de voir les personnes impliquées, le
          calendrier des réunions, les documents, les actualités, etc. Un outil simple qui permet à n’importe qui de
          visualiser ce qui se passe pour potentiellement s’impliquer.
        </P>
      </InformationSection>
    <ContentSection>
      <SubTitle>Circulation inter-organisations</SubTitle>
      <P>
        Avec des outils appropriés, l’information peut circuler au-delà de votre organisation et aller toucher les
        acteurs de votre écosystème, ouvrant des possibilités de collaboration et de synergie. Cela est particulièrement
        pertinent pour les organisations oeuvrant pour le bien commun, où la compétition entre structure n'a pas de sens.
      </P>
      <P>
        Nous collaborons depuis 2018 avec l'association <a href="https://virtual-assembly.org" target="_blank">Assemblée Virtuelle</a> pour
        mettre au point des technologies facilitant la coopération inter-organisations. Nos efforts se sont concentrés
        sur le développement de <a href="https://semapps.org" target="_blank">SemApps</a>, une boîte à outil pour créer des logiciels
        faisant usage des standards du web sémantique.
      </P>
      <SideImage align="left" src="/static/images/semantic-web.jpg"/>
      <P>
        <a href="https://fr.wikipedia.org/wiki/Web_s%C3%A9mantique" target="_blank">Le web sémantique</a> permet à plusieurs
        organisations de partager facilement leurs données, grâce à des vocabulaires communs. Ce standard a été mis au
        point par le W3C, l’organisme international qui a permis l’émergence d'Internet (email, web...).
      </P>
      <P>
        Un des objectifs du web sémantique est de revenir aux racines d'Internet, conçu initialement pour faciliter la
        collaboration entre scientifiques. Avec le temps, de plus en plus de nos données se sont trouvées piégées par de
        grosses entreprises (les fameuses <a href="https://fr.wikipedia.org/wiki/GAFAM" target="_blank">GAFAM</a>, mais aussi la plupart
        des startups), avec l'objectif de maximiser leur rentabilité. Nous croyons cependant qu'en promouvant des
        solutions informatiques utilisant des standards partagés, il est possible de revenir à un web plus ouvert,
        collaboratif et résilient.
      </P>
    </ContentSection>
    <InformationSection right image="colibris.png" link="/static/pdf/cas-d-etude-colibris.pdf" linkCaption="Lire le cas d'étude">
      <SubTitle>Cas d'étude</SubTitle>
      <P>
        Colibris a fait appel à Nouvel air pour résoudre un problème de communication interne: donner plus de
        visibilité sur ce qui se passe à l’intérieur du mouvement afin d'augmenter l'engagement des citoyens. La solution
        que nous avons mis en place a permis de libérer l’intégralité des données du mouvement, ouvrant des perspectives
        de coopération avec d'autres organisations de la transition.
      </P>
    </InformationSection>
    <ContactUsSection />
    <FooterSection/>
  </Layout>
);

export default InformationLiberationPage;
