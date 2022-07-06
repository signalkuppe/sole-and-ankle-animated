import React from "react";
import styled from "styled-components/macro";
import { QUERIES, WEIGHTS } from "../../constants";
import Logo from "../Logo";
import Icon from "../Icon";
import UnstyledButton from "../UnstyledButton";
import SuperHeader from "../SuperHeader";
import MobileMenu from "../MobileMenu";
import VisuallyHidden from "../VisuallyHidden";

const Header = () => {
  const [showMobileMenu, setShowMobileMenu] = React.useState(false);

  const links = [
    { text: "Sale", href: "/sale" },
    { text: "New Releases", href: "/sale" },
    { text: "Men", href: "/men" },
    { text: "Women", href: "/women" },
    { text: "Kids", href: "/kids" },
    { text: "Collections", href: "/collections" },
  ];

  return (
    <header>
      <SuperHeader />
      <MainHeader>
        <LogoWrapper>
          <Logo />
        </LogoWrapper>
        <DesktopNav>
          {links.map((link, i) => (
            <MainLink key={i} text={link.text} href={link.href} />
          ))}
        </DesktopNav>
        <MobileActions>
          <ShoppingBagButton>
            <Icon id="shopping-bag" />
            <VisuallyHidden>Open cart</VisuallyHidden>
          </ShoppingBagButton>
          <UnstyledButton>
            <Icon id="search" />
            <VisuallyHidden>Search</VisuallyHidden>
          </UnstyledButton>
          <UnstyledButton onClick={() => setShowMobileMenu(true)}>
            <Icon id="menu" />
            <VisuallyHidden>Open menu</VisuallyHidden>
          </UnstyledButton>
        </MobileActions>
        <Filler />
      </MainHeader>

      <MobileMenu
        isOpen={showMobileMenu}
        onDismiss={() => setShowMobileMenu(false)}
      />
    </header>
  );
};

const MainHeader = styled.div`
  display: flex;
  align-items: baseline;
  padding: 18px 32px;
  border-bottom: 1px solid var(--color-gray-300);
  overflow: auto;

  @media ${QUERIES.tabletAndSmaller} {
    justify-content: space-between;
    align-items: center;
    border-top: 4px solid var(--color-gray-900);
  }

  @media ${QUERIES.phoneAndSmaller} {
    padding-left: 16px;
    padding-right: 16px;
  }
`;

const DesktopNav = styled.nav`
  display: flex;
  gap: clamp(1rem, 9.2vw - 4.5rem, 3.5rem);
  margin: 0px 48px;

  @media ${QUERIES.tabletAndSmaller} {
    display: none;
  }
`;

const MobileActions = styled.div`
  display: none;

  @media ${QUERIES.tabletAndSmaller} {
    gap: 32px;
    display: flex;
  }

  @media ${QUERIES.phoneAndSmaller} {
    gap: 16px;
  }
`;

const LogoWrapper = styled.div`
  flex: 1;

  @media ${QUERIES.tabletAndSmaller} {
    flex: revert;
  }
`;

const ShoppingBagButton = styled(UnstyledButton)`
  transform: translateX(-2px);
`;

const Filler = styled.div`
  flex: 1;

  @media ${QUERIES.tabletAndSmaller} {
    display: none;
  }
`;

const NavLink = styled.span`
  font-size: 1.125rem;
  color: var(--color-gray-900);
  font-weight: ${WEIGHTS.medium};
  display: block;
  will-change: transform;
  transition: transform 0.2s ease-out;
`;

const MainLinkWrapper = styled.a`
  text-transform: uppercase;
  text-decoration: none;
  &:first-of-type ${NavLink} {
    color: var(--color-secondary);
  }
  height: 1.5rem;
  overflow: hidden;
  will-change: transform;
  @media (prefers-reduced-motion: no-preference) {
    :hover ${NavLink} {
      transform: translateY(-100%);
    }
  }
`;
const BoldNavLink = styled(NavLink)`
  font-weight: ${WEIGHTS.bold};
`;

const MainLink = ({ text, href }) => {
  return (
    <MainLinkWrapper href={href}>
      <NavLink>{text}</NavLink>
      <BoldNavLink>{text}</BoldNavLink>
    </MainLinkWrapper>
  );
};

export default Header;
