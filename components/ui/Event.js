import React from 'react';
import PropTypes from 'prop-types';
import { useRef, useState, useEffect } from 'react';
import { I18n } from '@lingui/react';
import { styled } from '../../utils/styling';
import { Div, AbsoluteDiv } from '../layout';
import { P, SubTitle, Markdown } from '../text';
import { Button } from '../input';
import { PageLink } from '../../utils/router';
import { Hidden, Visible } from '../layout';
import LinkIcon from '../../svg/link.svg';
import SideImage from "../media/SideImage";

const fromDateToDate = (event, i18n) => {
  const startDate = new Date(event.startDate);
  const endDate = new Date(event.endDate);
  if (startDate.getDate() === endDate.getDate()) {
    return(`Le ${i18n.date(event.startDate, { dateStyle: 'full' })} de ${i18n.date(event.startDate, { timeStyle: 'short' })} à ${i18n.date(event.endDate, { timeStyle: 'short' })}`);
  } else {
    return(`Du ${i18n.date(event.startDate, { dateStyle: 'long', timeStyle: 'short' })} au ${i18n.date(event.endDate, { dateStyle: 'long', timeStyle: 'short' })}`);
  }
};

const Gradient = styled(AbsoluteDiv)`
  background: linear-gradient(to bottom, transparent, #fff);
`;

const SquareDiv = styled(Div)`
  overflow: hidden;
  height: 0;
  padding-top: 85%;
  margin-right: 30px;
`;

const FlexDiv = styled(Div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const AllEventsLink = ({ float }) => (
  <PageLink page="testimonies">
    <Button colors="darkGrey" style={{ float }} w={float ? undefined : '100%'}>
      Tous les événements
    </Button>
  </PageLink>
);

const Event = ({ event, showMore, expand }) => {
  const contentRef = useRef(null);
  const [isLongText, setLongText] = useState(false);
  const [isExpanded, setIsExpanded] = useState(expand);
  useEffect(() => {
    setLongText(contentRef.current.clientHeight < contentRef.current.scrollHeight);
  }, [contentRef.current]);

  return event ? (
    <I18n>
      {({ i18n }) => (
        <Div p={{ xs: '0px', md: '25px 0px' }} m={{ xs: '0 0 25px', sm: '0px' }}>
          <Hidden sm md lg xl>
            <Div bg="primaryLight" p="15px">
              <P align="center" m="0" upper>{i18n.date(event.startDate, { weekday: 'long' })}</P>
              <P align="center" m="0" fontSize="55px" lineHeight="1em" bold>{i18n.date(event.startDate, { day: 'numeric' })}</P>
              <P align="center" m="0" lineHeight="2em" upper>{i18n.date(event.startDate, { month: 'long' })}</P>
            </Div>
          </Hidden>
          <Div p={{ xs: '30px 0 0', sm: '0 0 0 180px' }} maxH={isExpanded ? undefined : '400px'} noOverflow ref={contentRef}>
            <Visible sm md lg xl>
              <AbsoluteDiv top left h="180px" w="180px">
                <SquareDiv bg="primaryLight">
                  <AbsoluteDiv top bottom left right p="20px">
                    <FlexDiv>
                      <P align="center" m="0" upper>{i18n.date(event.startDate, { weekday: 'long' })}</P>
                      <P align="center" m="0" fontSize="55px" lineHeight="1em" bold>{i18n.date(event.startDate, { day: 'numeric' })}</P>
                      <P align="center" m="0" lineHeight="2em" upper>{i18n.date(event.startDate, { month: 'long' })}</P>
                    </FlexDiv>
                  </AbsoluteDiv>
                </SquareDiv>
              </AbsoluteDiv>
            </Visible>
            <SubTitle p={{ xs: '0px', sm: '0px' }}>
              {showMore ? 'Evénement' : event.title}
              {!expand &&
                <PageLink page="event" param={event.id}>
                  <LinkIcon style={{ width: 18, height: 18, marginLeft: 5, fill: 'lightgrey' }} />
                </PageLink>
              }
            </SubTitle>
            <P m="10px 0" italic>{fromDateToDate(event, i18n)}</P>
            {event.image &&
              <a href={event.image.url} target="_blank">
                <SideImage align="right" src={event.image.url} />
              </a>
            }
            <Markdown>{event.content}</Markdown>
            {showMore && (
              <Visible sm md lg xl>
                <AllEventsLink float="left" />
              </Visible>
            )}
            {showMore && (
              <Hidden sm md lg xl>
                <Div p="0 0 15px">
                  <AllEventsLink />
                </Div>
              </Hidden>
            )}
            {isLongText && !isExpanded && (
              <Gradient bottom left right h="150px" align="middle">
                <Button colors="darkGrey" onClick={() => setIsExpanded(true)} m="30px 0 0">
                  Lire plus
                </Button>
              </Gradient>
            )}
          </Div>
        </Div>
      )}
    </I18n>
  ) : null;
};

Event.propTypes = {
  event: PropTypes.object,
  showMore: PropTypes.bool
};

export default Event;
