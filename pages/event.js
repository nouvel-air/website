import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { Layout } from 'components/app';
import { Visible, Div, Row, Cell, Separator } from 'components/layout';
import { P, SubTitle } from 'components/text';
import { TopSection, FooterSection } from 'components/section';
import { Event } from 'components/ui';
import { Trans } from '@lingui/macro';
import { PageLink } from '../utils/router';

const EventPage = () => {
  const router = useRouter();
  const { eventId } = router.query;

  const { loading, data } = useQuery(
    gql`
      query ($eventId: ItemId!) {
        eventFr(filter: { id: { eq: $eventId } }) {
          id
          title
          content
          startDate
          endDate
          image {
            url
          }
        }
      }
    `,
    {
      variables: {
        eventId
      }
    }
  );

  return (
    <Layout>
      <Head>
        <title>Agenda - Nouvel air</title>
      </Head>
      <TopSection image="events.jpg">
        <Trans id="events.title">Agenda</Trans>
      </TopSection>
      <Div p={{ xs: "30px", sm: "50px 80px" }}>
        <Row>
          <Cell w={{ xs: 1, sm: 1/2 }}>
            <SubTitle>📅 événement</SubTitle>
          </Cell>
          <Cell w={{ sm: 1/2 }}>
            <Visible sm md lg xl>
              <PageLink page="events">
                <P style={{ cursor: 'pointer', textDecoration: 'underline', marginTop: 0 }} align="right">
                  Voir tous les événements
                </P>
              </PageLink>
            </Visible>
          </Cell>
        </Row>
        <Separator m="15px 0px" color="ultraLightGrey" />
        {loading && (
          <Div minH="100vh" p={{ xs: '25px', sm: '50px' }}>
            <P align="center">Chargement en cours...</P>
          </Div>
        )}
        {data && data.eventFr && (
          <Event event={data.eventFr} expand={true} />
        )}
        {!loading && (data && !data.eventFr) && (
          <Div minH="500px">
            <P>Cet événement n'existe pas.</P>
            <PageLink page="events">
              <P style={{ cursor: 'pointer', textDecoration: 'underline' }}>Voir tous les événements</P>
            </PageLink>
          </Div>
        )}
      </Div>
      <FooterSection />
    </Layout>
  );
};

export default EventPage;
