import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { ChevronDown, ChevronUp } from '@styled-icons/boxicons-regular';
import { Bars as MenuIcon } from '@styled-icons/fa-solid/Bars';
import NProgress from 'nprogress';
import { FormattedMessage } from 'react-intl';
import styled from 'styled-components';

import theme from '../lib/theme';

import ChangelogTrigger from './changelog/ChangelogTrigger';
import Container from './Container';
import { Box, Flex } from './Grid';
import Hide from './Hide';
import Image from './Image';
import Link from './Link';
import PopupMenu from './PopupMenu';
import SearchModal from './Search';
import SearchIcon from './SearchIcon';
import StyledButton from './StyledButton';
import StyledLink from './StyledLink';
import { Span } from './Text';
import TopBarMobileMenuV2 from './TopBarMobileMenuV2';
import TopBarProfileMenu from './TopBarProfileMenu';

const NavList = styled(Flex)`
  list-style: none;
  min-width: 20rem;
  text-align: right;
  align-items: center;
`;

const NavLinkContainer = styled(Box)`
  text-align: center;
  width: 140px;
`;

const NavButton = styled(StyledButton)`
  color: #323334;
  font-weight: 500;
  font-size: 16px;
  padding: 10px;
  cursor: pointer;
  @media (hover: hover) {
    :hover {
      background-color: white !important;
    }
  }
  :focus {
    background-color: white;
    border-radius: 1px;
  }
  :active {
    color: black;
  }
`;

const NavItem = styled(StyledLink)`
  color: #323334;
  font-weight: 500;
  font-size: 14px;
  @media (hover: hover) {
    :hover {
      text-decoration: underline;
    }
  }
`;

const TopBarV2 = ({ showSearch, menuItems, showProfileAndChangelogMenu }) => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [showSearchModal, setShowSearchModal] = useState(false);
  const ref = useRef();

  useEffect(() => {
    if (showSearchModal) {
      NProgress.configure({ parent: '.searchModal' });
    } else {
      NProgress.configure({ parent: 'body' });
    }
  }, [showSearchModal]);

  const toggleMobileMenu = () => {
    setShowMobileMenu(!showMobileMenu);
  };

  return (
    <Flex
      px={3}
      py={showSearch ? 2 : 3}
      alignItems="center"
      flexDirection="row"
      justifyContent="space-around"
      css={{ height: theme.sizes.navbarHeight, background: 'white' }}
      ref={ref}
    >
      <Link href="/">
        <Flex alignItems="center">
          <Image width="36" height="36" src="/static/images/opencollective-icon.png" alt="Open Collective logo" />
          <Hide xs sm md>
            <Box mx={2}>
              <Image height={21} width={141} src="/static/images/logotype.svg" alt="Open Collective" />
            </Box>
          </Hide>
        </Flex>
      </Link>

      <Flex alignItems="center" justifyContent={['flex-end', 'flex-end', 'center']} flex="1 1 auto">
        <Hide xs sm>
          <NavList as="ul" p={0} m={0} justifyContent="space-around" css="margin: 0;">
            {menuItems.solutions && (
              <PopupMenu
                zIndex={2000}
                closingEvents={['focusin', 'mouseover']}
                Button={({ onMouseOver, onClick, popupOpen, onFocus }) => (
                  <NavButton
                    isBorderless
                    onMouseOver={onMouseOver}
                    onFocus={onFocus}
                    onClick={onClick}
                    whiteSpace="nowrap"
                  >
                    <FormattedMessage defaultMessage="Solutions" />
                    {popupOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                  </NavButton>
                )}
                placement="bottom"
                popupMarginTop="-10px"
              >
                <NavLinkContainer>
                  {/* TODO: Add this part back when the /collectives page is designed */}
                  {/* <Link href="/collectives">*/}
                  {/*  <NavItem as={Container} mt={16} mb={16}>*/}
                  {/*    <FormattedMessage id="pricing.forCollective" defaultMessage="For Collectives" />*/}
                  {/*  </NavItem>*/}
                  {/* </Link>*/}
                  <Link href="/become-a-sponsor">
                    <NavItem as={Container} mt={16} mb={16}>
                      <FormattedMessage defaultMessage="For Sponsors" />
                    </NavItem>
                  </Link>
                  <Link href="/become-a-host">
                    <NavItem as={Container} mt={16} mb={16}>
                      <FormattedMessage id="pricing.fiscalHost" defaultMessage="For Fiscal Hosts" />
                    </NavItem>
                  </Link>
                </NavLinkContainer>
              </PopupMenu>
            )}

            {menuItems.product && (
              <PopupMenu
                zIndex={2000}
                closingEvents={['focusin', 'mouseover']}
                Button={({ onClick, onMouseOver, popupOpen, onFocus }) => (
                  <NavButton
                    isBorderless
                    onMouseOver={onMouseOver}
                    onFocus={onFocus}
                    onClick={onClick}
                    whiteSpace="nowrap"
                  >
                    <FormattedMessage id="ContributionType.Product" defaultMessage="Product" />
                    {popupOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                  </NavButton>
                )}
                placement="bottom"
                popupMarginTop="-10px"
              >
                <NavLinkContainer>
                  <Link href="/pricing">
                    <NavItem as={Container} mt={16} mb={16}>
                      <FormattedMessage id="menu.pricing" defaultMessage="Pricing" />
                    </NavItem>
                  </Link>
                  <Link href="/how-it-works">
                    <NavItem as={Container}>
                      <FormattedMessage id="menu.howItWorks" defaultMessage="How it Works" />
                    </NavItem>
                  </Link>
                  <Link href="/fiscal-hosting">
                    <NavItem as={Container} mt={16} mb={16}>
                      <FormattedMessage id="editCollective.fiscalHosting" defaultMessage="Fiscal Hosting" />
                    </NavItem>
                  </Link>
                </NavLinkContainer>
              </PopupMenu>
            )}

            {menuItems.company && (
              <PopupMenu
                zIndex={2000}
                closingEvents={['focusin', 'mouseover']}
                Button={({ onClick, onMouseOver, popupOpen, onFocus }) => (
                  <NavButton
                    isBorderless
                    onMouseOver={onMouseOver}
                    onFocus={onFocus}
                    onClick={onClick}
                    whiteSpace="nowrap"
                  >
                    <FormattedMessage id="company" defaultMessage="Company" />
                    {popupOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                  </NavButton>
                )}
                placement="bottom"
                popupMarginTop="-10px"
              >
                <NavLinkContainer>
                  <a href="https://blog.opencollective.com/">
                    <NavItem as={Container} mt={16} mb={16}>
                      <FormattedMessage id="company.blog" defaultMessage="Blog" />
                    </NavItem>
                  </a>
                  <Link href="/e2c">
                    <NavItem as={Container} mb={16}>
                      <FormattedMessage id="OC.e2c" defaultMessage="Exit to Community" />
                    </NavItem>
                  </Link>
                </NavLinkContainer>
              </PopupMenu>
            )}
            {menuItems.docs && (
              <Link href="/help">
                <NavButton as={Container} whiteSpace="nowrap">
                  <FormattedMessage defaultMessage="Help & Support" />
                </NavButton>
              </Link>
            )}
            {showSearch && menuItems.docs && <Container borderRight="2px solid #DCDDE0" height="20px" padding="5px" />}
          </NavList>
        </Hide>
        {showSearch && (
          <NavButton isBorderless onClick={() => setShowSearchModal(true)}>
            <Flex>
              <SearchIcon fill="#75777A" size={18} />
              <Hide xs sm>
                <Span ml="5px">
                  <FormattedMessage id="Search" defaultMessage="Search" />
                </Span>
              </Hide>
            </Flex>
          </NavButton>
        )}
        {showSearchModal && <SearchModal onClose={() => setShowSearchModal(false)} />}
      </Flex>

      {showProfileAndChangelogMenu && (
        <React.Fragment>
          <Container mr={3}>
            <Hide xs>
              <ChangelogTrigger />
            </Hide>
          </Container>
          <TopBarProfileMenu />
        </React.Fragment>
      )}
      <Hide md lg>
        <TopBarMobileMenuV2 showMobileMenu={showMobileMenu} closeMenu={toggleMobileMenu} />
        <Box mx={3} onClick={toggleMobileMenu}>
          <Flex as="a">
            <MenuIcon color="#aaaaaa" size={24} />
          </Flex>
        </Box>
      </Hide>
    </Flex>
  );
};

TopBarV2.propTypes = {
  showSearch: PropTypes.bool,
  showProfileAndChangelogMenu: PropTypes.bool,
  menuItems: PropTypes.object,
};

TopBarV2.defaultProps = {
  showSearch: true,
  showProfileAndChangelogMenu: true,
  menuItems: { solutions: true, product: true, company: true, docs: true },
};

export default TopBarV2;
