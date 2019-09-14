import React from 'react';
import { Layout } from 'components/app';
import { Div, Space } from 'components/layout';
import { SideImage } from 'components/media';
import { LeadP, P, SubTitle } from 'components/text';
import { TopSection, FooterSection, TestimonySection } from 'components/section';
import { Trans } from '@lingui/macro';

const ServicesConstellationsPage = () => (
  <Layout>
    <TopSection image="birds-sky.jpg">
      <Trans id="services.constellations.title">Constellations familiales</Trans>
    </TopSection>
    <Div p="50px">
      <LeadP>
        Les constellations familiales donnent la possibilité de nous reconnecter à nos racines. Le but est d’amener
        l’amour là où il y a eu souffrance, de laisser les fardeaux et les conflits dont nous sommes chargés et qui ne
        nous appartiennent pas, en laissant à chacun sa part de responsabilité.
      </LeadP>
      <Space h="50px" />
      <SideImage src="/static/images/birds-black.jpg" />
      <P style={{ marginTop: 0 }}>
        Pendant mon parcours de développement personnel et professionnel, j’ai rencontré et intériorisé différentes
        orientations et instruments qui me servent comme une « boîte à outils » afin d’aider les personnes qui font
        appel à moi dans leur singularité et leur demande spécifique.
      </P>
      <P>
        Cette approche dite « intégrative » reflète ma vision du monde et de l’être humain (lien vers « ma vision »).
        Elle permet de porter un regard plus large sur les problèmes qui peuvent être rencontrés, compte tenu qu’il
        n’existe pas une seule voie pour dépasser une problématique, et que chaque parcours est différent d’un autre.
      </P>
      <P>
        Il est en effet souvent nécessaire d'élargir l'horizon au « système » auquel appartient la personne, afin
        d'identifier l'événement non-résolu de la généalogie qui a laissé des traces dans la mémoire familiale et qui se
        répète depuis des générations.
      </P>
      <P>
        J’accompagne le patient dans la recherche de sa propre vérité, pour l’aider à accéder à la connaissance profonde
        de soi-même. Il n’y a pas de temps pré-établi. C’est la personne qui formule sa propre demande sur la base de ce
        qui est important pour elle : cela peut être un état de souffrance, un mal-être à dépasser, un besoin de soutien
        dans un moment délicat de sa vie, le désir d’atteindre un objectif (de type émotionnel, relationnel, matériel…)
        ou de sortir de scénarios répétitifs.
      </P>
      <P>
        Dans mon accompagnement, je mets à disposition des outils dont la finalité est l’autonomie de la personne et la
        prise de responsabilité : savoir écouter et répondre à ses propres besoins, pouvoir prendre des décisions sur la
        base de ce qui nous représente vraiment, avec pour objectif ultime la réalisation profonde de soi.
      </P>

      <P style={{ marginBottom: 0 }}>
        Mon souhait est que chacun d’entre nous puisse transformer ses souffrances en talents – comme les alchimistes
        transmutaient le plomb en or – et puisse entreprendre le plus ardu mais gratifiant des chemins&nbsp;: devenir
        créateur de sa propre vie.
      </P>
    </Div>
    <TestimonySection type="Constellation" />
    <FooterSection />
  </Layout>
);

export default ServicesConstellationsPage;
