import React from 'react';
import Head from 'next/head';
import { Layout } from 'components/app';
import { SideImage } from 'components/media';
import { LeadP, P, SubTitle } from 'components/text';
import {
  TopSection,
  FooterSection,
  TestimonySection,
  ContentSection,
} from 'components/section';
import { Trans } from '@lingui/macro';

const OrganizationalConstellationsPage = () => (
  <Layout>
    <Head>
      <title>Constellations d'organisations à Compiègne et Paris - Nouvel air</title>
    </Head>
    <TopSection image="constellations-2.jpg">
      <Trans id="organizational-constellations.title">Constellations d'organisations</Trans>
    </TopSection>
    <ContentSection>
      <LeadP>
        La Constellation d'organisation est un outil qui permet, à travers des mises en scènes, de faire émerger les
        dynamiques, les résistances et les interactions qui composent une organisation. Elle permet à chacun de prendre
        sa place, de rétablir l'équilibre et l'harmonie, et de trouver les ressources pour amener des solutions durables
        en accord avec la raison d'être de l'organisation.
      </LeadP>
      <SideImage align="left" src="/static/images/balloons.jpg"/>
      <P>
        Cet outil est une adaptation des Constellation familiales, pratiqué depuis des décennies partout dans le monde.
        En effet, une entreprise, une association, un groupe de personnes travaillant ensemble dans un but commun,
        constitue un système qui est régis par les mêmes principes que les systèmes familiaux. C’est un organisme à part
        entière, qui peut avoir besoin d’être “guéri” pour retrouver sa pleine vitalité et mener à bien sa mission.
      </P>
      <SubTitle>Pourquoi faire une Constellation d’organisation ?</SubTitle>
      <ul>
        <li>
          <P>
            Vous avez besoin de clarifier la raison d’être de votre organisation, de retrouver le lien avec ses
            bénéficiaires ?
          </P>
        </li>
        <li>
          <P>
            Vous voulez redynamiser les différents rôles et cercles qui la composent, ou imaginer une nouvelle manière
            de fonctionner ensemble ?
          </P>
        </li>
        <li>
          <P>
            Vous voulez mieux comprendre sa place dans un écosystème ou un territoire ?
          </P>
        </li>
        <li>
          <P>
            Vous rencontrez des tensions ou des difficultés par rapport à l’argent ?
          </P>
        </li>
        <li>
          <P>
            L’organisation est passée par des phases “traumatisantes” et vous ressentez que cela impacte encore son
            fonctionnement actuel ?
          </P>
        </li>
      </ul>
      <SubTitle>📃 Comment se déroule une Constellation ?</SubTitle>
      <SideImage align="right" src="/static/images/constellation-organisation.jpg" width="500px" />
      <P>
        La mise en scène d’une Constellation d'organisation passe par plusieurs étapes: en amont de la Constellation, le
        facilitateur clarifie avec le client la problème que celui-ci souhaite traiter. Ensemble, ils décident de ce qui
        va être mis en scène: des fonctions, des cercles, des personnes, des concepts plus abstraits tels que le blocage,
        l'objectif, la raison d'être de l'organisation, etc...
      </P>
      <P>
        Le jour J, le client choisit parmi les participants (qui peuvent être extérieurs à l'organisation) ceux qui vont
        incarner tel ou tel rôle et il les place dans l'espace. Assez vite va se constituer un champ grâce
        auquel les participants auront accès à des informations, des sentiments, parfois des symptômes physiques
        appartenant aux personnes ou concepts qu'ils représentent.
      </P>
      <P>
        Accompagnant le mouvement, le facilitateur pose des questions aux représentants pour obtenir des informations sur
        leur état d'esprit et leurs relations avec les autres personnages de la scène. Il peut aussi leur proposer des
        phrases pour favoriser une rééquilibrage du système.
      </P>
      <P>
        Au fur et à mesure que la Constellation avance, les représentants entrent en contact les uns avec les autres,
        accompagnés dans l'expression de leur ressenti. Chacun prend sa juste place et l'énergie du champ devient plus
        légère. La résolution d'une Constellation donne généralement aux participants le sentiment d’être déchargés d'un poids – un
        sentiment de paix émerge au sein du champ d'énergie de l'organisation.
      </P>
    </ContentSection>
    <TestimonySection id="15667581" />
    <ContentSection>
      <SideImage align="left" src="/static/images/fusee.jpg"/>
      <SubTitle>✨ Offre d'accompagnement gratuit</SubTitle>
      <P>
        Si nous avons lancé Nouvel air, c’est parce que nous sommes convaincus que des organisations saines peuvent
        avoir un profond impact sur le monde. Mais nous savons également que les organisations – en particulier les
        associations – n’ont pas toujours les moyens de se procurer les « soins » dont elles auraient besoin, soit parce
        qu’elles sont justement en difficultés financières, soit parce qu’elles fonctionnent avec des moyens économiques
        très limités.
      </P>
      <P>
        Face à ce constat, nous souhaitons « faire notre part » en proposant – au maximum deux fois par année – une
        Constellation gratuite à une organisation qui en fait la demande. Cette offre comprend la « formule complète »
        que nous proposons dans nos prestations payantes, à savoir :
      </P>
      <ul>
        <li>
          <P>
            une visio de préparation pour déterminer précisément les problèmes sur lesquels vous souhaitez travailler ;
          </P>
        </li>
        <li>
          <P>
            une demi-journée de constellation (naturellement en présentiel), avec débrief « à chaud » des participants ;
          </P>
        </li>
        <li>
          <P>
            une débrief « à froid » pour réfléchir à ce qui est sorti de la constellation et imaginer les prochains pas
            qui pourraient être entrepris.
          </P>
        </li>
      </ul>
      <P>
        Pour candidater, merci de prendre connaissance de <a href="/static/pdf/offre-accompagnement-gratuit.pdf" target="_blank">ce document</a>.
      </P>
      <P>
        <em>Les candidatures pour la deuxième session sont ouvertes ! Date limite: 1er novembre 2024</em>
      </P>
      <P style={{clear: 'both'}}></P>
    </ContentSection>
    <FooterSection/>
  </Layout>
);

export default OrganizationalConstellationsPage;
