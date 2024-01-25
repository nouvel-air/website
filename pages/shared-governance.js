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
  AnnounceSection
} from 'components/section';
import { Trans } from '@lingui/macro';
import ContactUsSection from "../components/section/ContactUsSection";
import InformationSection from "../components/section/InformationSection";

const SharedGovernancePage = () => (
  <Layout>
    <Head>
      <title>Gouvernance partagée à Compiègne et à Paris - Nouvel air</title>
    </Head>
    <AnnounceSection link="/fr/agenda/65765622" linkCaption="Informations et inscription">
      Le défi gouvernance partagée est de retour à Compiègne ! Les 3-4-5 mai 2024
    </AnnounceSection>
    <TopSection image="gouvernance-partagee.jpg">
      <Trans id="shared-governance.title">Gouvernance partagée</Trans>
    </TopSection>
    <ContentSection>
      <LeadP>
        A Nouvel air, nous explorons les méthodes et postures de la Gouvernance partagée depuis bientôt 5 ans, avec
        comme source d'inspiration principale l'Université du Nous. Nous croyons qu'il s'agit d'un élément-clé pour
        redonner du souffle à une organisation.
      </LeadP>
      <SubTitle>Qu'est-ce que la Gouvernance partagée ?</SubTitle>
      <P>
        Le terme "Gouvernance partagée" a été popularisé en francophonie grâce au travail sans relâche de l'<a href="https://universite-du-nous.org/" target="_blank">Université
        du Nous</a>, qui a fait découvrir à des milliers de personnes une autre manière de faire ensemble au travers
        d'ateliers, de conférences mais aussi d'un grand MOOC organisé en partenariat avec le mouvement Colibris.
      </P>
      <P>
        La Gouvernance partagée est constituée d'un certain nombre de méthodes, issues pour la plupart de la <a href="https://fr.wikipedia.org/wiki/Sociocratie" target="_blank">sociocratie</a> et de l'<a href="https://fr.wikipedia.org/wiki/Holacratie" target="_blank">holacratie</a>. Appliquées correctement, ces méthodes ont surtout l'avantage d'inviter les participants à
        adopter un changement de posture par rapport à ce à quoi ils sont habitués. Car évidemment, aucun changement
        extérieur ne peut être durable sans un changement intérieur.
      </P>
      <SideImage align="right" src="/static/images/fire.jpg" />
      <P>
        Contrairement à ce que le terme peut laisser penser, la Gouvernance partagée ne se focalise pas uniquement sur
        le fait d'amener plus d'horizontalité, mais elle valorise aussi la verticalité. Il ne s'agit pas toujours
        prendre toutes les décisions en communs, mais aussi de décider lorsqu'il est utile qu'il y ait des responsables.
      </P>
      <SubTitle>Pourquoi la gouvernance partagée ?</SubTitle>
      <ul>
        <li>
          <P>
            Permettre une plus grande implication des membres, en aidant chacun (cadres, employés, bénévoles...) à
            trouver sa juste place dans l'organisation.
          </P>
        </li>
        <li>
          <P>
            Mettre en valeur la raison d'être de l'organisation, afin qu'elle soit un phare pour les actions posées au
            quotidien.
          </P>
        </li>
        <li>
          <P>
            Proposer des réunions plus efficaces et satisfaisantes pour tout le monde, grâce à des cadres clairs
            permettant à chacun de s'exprimer et de contribuer.
          </P>
        </li>
        <li>
          <P>
            Amener plus d'intelligence collective dans les décisions, en particulier dans les décisions ayant un
            impact sur la stratégie à moyen et long termes.
          </P>
        </li>
        <li>
          <P>
            Faire vivre à tous une expérience humaine intense et riche de sens, avec à la clé une nouvelle manière
            de faire ensemble.
          </P>
        </li>
      </ul>
      <P style={{ clear: 'both' }}></P>
    </ContentSection>
    <InformationSection image="coeur-poumons-2.jpg">
      <SubTitle>L'analogie coeur-poumons</SubTitle>
      <P align="justify">
        Dans le corps humain, il n'y a pas de supériorité entre les organes. Par exemple, les poumons apportent de
        l'oxygène depuis l'extérieur, tandis que le coeur impulse le sang à travers tout le corps. Chacun a une
        raison d'être bien définie, avec un périmètre clair. Si le sang déborde dans les poumons, c'est la mort.
      </P>
      <P>
        En Gouvernance partagée, c'est pareil: chaque rôle a une raison d'être définie ensemble. Il est vital que les
        rôles collaborent entre eux, mais il n'est pas nécessaire qu'ils décident tout ensemble à partir du moment où leur
        périmètre d'action est clair.
      </P>
    </InformationSection>
    <ContentSection>
      <SubTitle>✨ L'approche Nouvel Air</SubTitle>
      <P>
        A Nouvel air nous proposons:
      </P>
      <ul>
        <li>
          <P>
            Des expériences sur 3 jours pour découvrir par la pratique la Gouvernance partagée. Ces expériences étant
            ouvertes à tous, elles sont l'occasion de rencontrer des personnes avec des besoins et des expériences
            très différentes et de collaborer sur l'élaboration d'un défi choisi collectivement.
          </P>
        </li>
        <li>
          <P>
            Un accompagnement spécifique au sein des organisations (existantes ou en cours de formation) qui nous en
            font la demande, en apportant les ingrédients de la Gouvernance partagée dont elles ont besoin pour
            pleinement réaliser leur raison d'être dans ce monde.
          </P>
        </li>
      </ul>
      <P style={{ clear: 'both' }}></P>
    </ContentSection>
    <TestimonySection id="15670375" />
    {/*<QuoteSection author="Université du Nous" color="black" bg="tertiaryLight">*/}
    {/*  Si  nous  imaginons  notre  projet  comme  un  grand  jeu  collectif  coopératif,  comme  dans  n’importe quel  jeu,  pour  que  ça  fonctionne,  il  faut  des  règles.  Ce  sera  l’ensemble  des  règles  relationnelles  et organisationnelles qui permettront de répondre aux questions que posent tout projet collectif*/}
    {/*</QuoteSection>*/}
    <ContactUsSection />
    <FooterSection />
  </Layout>
);

export default SharedGovernancePage;
