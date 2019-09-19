import PropTypes from 'prop-types'
import React from 'react'
import Styled from 'styled-components'
import Icon from '../Icon'
import { backgrounds, primary, extended } from '../../constants/colors'
import { SectionWrapper, Row, Col } from '../../styles/grid'
import { getNavItem } from '../../utils'

const HeaderContainer = Styled.header`
  height: 70px;
  display: none;

  & .row {
    padding: 15px 0px;
    width: 100%;
  }

  & .col-12 {
    display: flex;
  }

  
  & .header__logo {
    /* margin: 0px; */
    & img {
      width: 100px;
    }
  }

  & ul {
    list-style: none;
    display: none;
    margin: 0px;
    padding: 0px;

    & li {
      margin: 0px;
      margin-right: 30px;

      & a {
        display: flex;
        align-items: center;
        color: ${extended.charcoal.one};
        text-decoration: none;
        font-size: 16px;
        cursor: pointer;
        &:hover {
          color: ${primary.charcoal}
        }
      }
    }

    @media (min-width: 768px) {
      display: flex;
      align-items: center;
    }
  }

  & .header__nav-dropdown {
    z-index: 1;
    position: relative;
    & .header__nav-item--icon {
      transform: rotate(90deg);
    }
    &:hover .header__nav-item--icon {
      transform: rotate(-90deg);
    }
    &:hover > .dropdown {
      opacity: 1;
      /* z-index: 1; */
      /* transform: scale(1); */
      /* transform: translateY(0px); */
    }
  }

  & .header__nav-cta {
    display: none;
    justify-content: center;
    align-items: center;

    & button {
      height: 40px;
      padding: 6px 16px;
    }

    /* & button:first-child {
      margin-right: 16px;
    } */

    @media (min-width: 768px) {
      display: flex;
    }
  }

  @media (min-width: 1024px) {
    display: flex;
  }

`

function Header({ bgPrimary, navItems }) {
  const leftHSNavItems = navItems.filter(item => !item.RHS)
  const rightHSNavItems = navItems.filter(item => item.RHS)
  const isMobile = window.innerWidth < 1024

  return (
    <SectionWrapper
      className="container-fluid"
      bgPrimary={bgPrimary}
      containerFluidProps={{
        style: {
          borderBottom: isMobile ? `1px solid ${extended.purple.five}` : 'none'
        }
      }}
    >
      <HeaderContainer>
        <Row>
          <Col className="col-md-8">
            <ul>
              {leftHSNavItems.map(item => {
                console.log({ item })
                const NavItem = getNavItem(item)
                return (
                  <NavItem
                    key={item.id || item._uid}
                    item={item}
                    navItems={item.items}
                  />
                )
              })}
            </ul>
          </Col>
          <Col className="col-md-4">
            <ul>
              {rightHSNavItems.map(item => {
                const NavItem = getNavItem(item)
                return (
                  <NavItem
                    key={item.id || item._uid}
                    item={item}
                    navItems={item.items}
                  />
                )
              })}
            </ul>
          </Col>
        </Row>
      </HeaderContainer>
      <Menu leftHSNavItems={leftHSNavItems} rightHSNavItems={rightHSNavItems} />
    </SectionWrapper>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
  bgPrimary: PropTypes.bool
}

Header.defaultProps = {
  siteTitle: ``,
  bgPrimary: true
}

export default Header

const MenuContainer = Styled.div`
  /* color: black; */
  /* position: relative; */
  height: 52px;
  padding: 15px 0px;

  & nav {
    display: flex;
  }

  & .button {
    margin: 0px;
    padding: 0px;
    background: none;
    border: none;
  }

  & .menu-icon {
    list-style: none;
    margin: auto;
    & img {
      width: 84px;
      height: 24px;
    }
    /* position: absolute;
    top: 27px;
    right: 20px;
    width: 24px;
    height: 24px; */
  }

  & .menu__container {
    position: fixed;
    z-index: 10;
    background-color: ${backgrounds.white};
    color: ${primary.purple};
    width: 75%;
    height: 100vh;
    top: 0px;
    left: 0px;
    padding: 24px;
  }

  & .menu__overlay {
    position: fixed;
    z-index: 5;
    background-color: ${primary.charcoal};
    opacity: 0.6;
    width: 100vw;
    height: 100vh;
    top: 0px
  }

  & .list-container {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 95%;
  }

  & .menu__list {
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: left;
    list-style: none;
    padding: 0px;

    & li {
      margin: 0px;
      margin-top: 24px;

      & a {
        color: ${extended.charcoal.one};
        text-decoration: none;
        font-size: 18px;
        display: flex;
        align-items: center;
        justify-content: space-between;
      }
      & button {
        width: 100%;
      }
    }
  }

  @media (min-width: 1024px) {
    display: none;
  }
`

function Menu({ leftHSNavItems, rightHSNavItems }) {
  const [open, toggleOpen] = React.useState(false)
  console.log({
    leftHSNavItems,
    rightHSNavItems
  })
  const logo = leftHSNavItems.find(item => item.type === 'LOGO')
  const NavItem = getNavItem(logo)
  return (
    <MenuContainer>
      <nav>
        <button
          className="button"
          aria-label="navigation-menu"
          onClick={() => toggleOpen(!open)}
        >
          {!open ? (
            <Icon name="menu" fill={primary.purple} />
          ) : (
            <Icon name="close" fill={primary.purple} />
          )}
        </button>
        <NavItem classNames="menu-icon" item={logo} />
      </nav>
      {open && (
        <React.Fragment>
          <div className="menu__overlay" onClick={() => toggleOpen(!open)} />
          <div className="menu__container">
            <button
              className="button"
              aria-label="navigation-menu"
              onClick={() => toggleOpen(!open)}
            >
              {!open ? (
                <Icon name="menu" fill={primary.purple} />
              ) : (
                <Icon name="close" fill={primary.purple} />
              )}
            </button>
            <div className="list-container">
              <ul className="menu__list">
                {leftHSNavItems.map(item => {
                  if (item.type !== 'LOGO') {
                    const NavItem = getNavItem(item)
                    return (
                      <NavItem
                        classNames="menu__list-item"
                        key={item.id || item._uid}
                        item={item}
                        navItems={item.items}
                      />
                    )
                  }
                })}
              </ul>
              <ul className="menu__list menu__list--bottom">
                {rightHSNavItems.map(item => {
                  if (item.type !== 'LOGO') {
                    const NavItem = getNavItem(item)

                    return (
                      <NavItem
                        classNames={`menu__list-item`}
                        key={item.id || item._uid}
                        item={item}
                        navItems={item.items}
                      />
                    )
                  }
                })}
              </ul>
            </div>
          </div>
        </React.Fragment>
      )}
    </MenuContainer>
  )
}

// export default Menu;
