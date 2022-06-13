import React, { Fragment, useState } from 'react';
import { RightArrow } from '@styled-icons/boxicons-regular/RightArrow';
import { FormattedMessage } from 'react-intl';

import Container from '../Container';
import { Box, Flex } from '../Grid';
import NextIllustration from '../home/HomeNextIllustration';
import { I18nBold } from '../I18nFormatters';
import Link from '../Link';
import { MainDescription, MainTitle } from '../marketing/Text';
import StyledButton from '../StyledButton';
import StyledModal from '../StyledModal';
import { Span } from '../Text';

const TheFutureIsCollective = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <Fragment>
      <Flex justifyContent="center" alignItems="center" px="16px" mt="40px">
        <Flex flexDirection="column" alignItems="center">
          <Box>
            <MainTitle textAlign="center">
              <FormattedMessage id="home.futureIsCollective" defaultMessage={'The future is collective'} />
            </MainTitle>
          </Box>
          <Box my={[4, '40px']} maxWidth={['288px', '608px', '768px', null, '896px']}>
            <MainDescription>
              <FormattedMessage
                id="home.futureIsCollective.description"
                defaultMessage={
                  'Open Collective is a <b>legal and financial</b> toolbox for grassroots groups. It’s a <b>fundraising + legal status + money management</b> platform for your community. What do you want to do?'
                }
                values={{
                  b: I18nBold,
                }}
              />
            </MainDescription>
          </Box>
          <Box mb="40px" display="flex" flexDirection={['column', 'row']} alignItems="center">
            <Link href="/create">
              <StyledButton
                width={['288px', '125px']}
                my={['12px', null, 0]}
                mr={[0, '24px']}
                buttonStyle="marketing"
                whiteSpace="nowrap"
                backgroundColor="primary.900"
                fontSize="16px"
                lineHeight="20px"
              >
                <FormattedMessage id="home.startNow" defaultMessage="Start Now" />
              </StyledButton>
            </Link>
            <StyledButton
              onClick={() => setShowModal(true)}
              my={['12px', null, 0]}
              width={['288px', '196px']}
              fontSize="16px"
              lineHeight="20px"
            >
              <Span mr={'14px'} textDecoration="underline">
                <FormattedMessage id="home.makeCommunitySection.watchVideo" defaultMessage="Watch Video" />
              </Span>
              <Span className="arrowIcon">
                <RightArrow size="15" />
              </Span>
            </StyledButton>
          </Box>
          <Box display={[null, 'none']}>
            <NextIllustration
              width={320}
              height={589}
              alt="The future is collective."
              src="/static/images/new-home/budget-illustration-xs.png"
            />
          </Box>
          <Box display={['none', 'block', 'none']}>
            <NextIllustration
              width={768}
              height={431}
              alt="The future is collective."
              src="/static/images/new-home/budget-illustration-sm.png"
            />
          </Box>
          <Box display={['none', null, 'block', null, 'none']}>
            <NextIllustration
              width={978}
              height={610}
              alt="The future is collective."
              src="/static/images/new-home/budget-illustration-md.png"
            />
          </Box>
          <Box display={['none', null, null, null, 'block']}>
            <NextIllustration
              width={1014}
              height={619}
              alt="The future is collective."
              src="/static/images/new-home/budget-illustration-lg.png"
            />
          </Box>
        </Flex>
      </Flex>
      {showModal && (
        <StyledModal
          padding="0"
          background="transparent"
          width={[1, null, '670px', null, '770px']}
          onClose={() => setShowModal(false)}
        >
          <Container display="flex" width={1} height={400} maxWidth={712} background="black">
            <iframe
              title="YouTube video"
              width="100%"
              height="400px"
              src="https://www.youtube-nocookie.com/embed/IBU5fSILAe8"
              frameBorder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </Container>
        </StyledModal>
      )}
    </Fragment>
  );
};

export default TheFutureIsCollective;
