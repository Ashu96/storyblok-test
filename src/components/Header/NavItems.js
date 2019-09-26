import React from 'react'
import Img from 'gatsby-image'
import Styled from 'styled-components'
import { TimelineMax } from 'gsap/TweenMax'
import { Anchor } from '../Generic'
import Icon from '../Icon'
import { getButton, getSlugFromTitle, navigateTo } from '../../utils'
import { backgrounds, primary, extended } from '../../constants/colors'

const DropDown = Styled.ul`
  opacity: 0;
  height: 1px;
  border-radius: 5px;
  background-color: ${backgrounds.white};
  transition: opacity 150ms ease-in;
  transition: transform 200ms ease-in;
  
  display: flex;
  flex-direction: column;

  & .menu-item {
    padding: 12px 16px;
    margin-top: 12px !important;
    margin-right: 0px;
    
    &:hover {
      background-color: ${backgrounds.fadedPurple};
    }
    & > a.active {
      color: ${backgrounds.white};
      background-color: ${primary.purple};
      margin: -12px -16px;
      padding: 12px 16px;
    }
  }

  @media (min-width: 1024px) {
    position: absolute;
    top: 32px;
    box-shadow: 0 8px 20px 0 rgba(152, 152, 187, 0.15);
  }
`

export function NavLogo({ item, classNames }) {
  return (
    <li className={`header__logo ${classNames}`}>
      <Anchor to={item.link}>
        {item.image && <img loading="lazy" src={item.image} alt="" />}
        {!item.image && item.title}
      </Anchor>
    </li>
  )
}

export function NavLink({ item, classNames }) {
  return (
    <li className={classNames ? classNames : 'header__nav-item'}>
      <Anchor to={item.link} activeClassName="active">
        {item.image && <Img fixed={item.image.childImageSharp.fixed} alt="" />}
        {!item.image && item.title}
      </Anchor>
    </li>
  )
}

export function NavDropDown({ item, navItems, classNames }) {
  const [open, toggleOpen] = React.useState(false)
  const [isClicked, setIsClicked] = React.useState(false)
  return (
    <li
      className={`header__nav-dropdown ${classNames}`}
      onClick={() => {
        setIsClicked(true)
        toggleOpen(!open)
      }}
    >
      <div className="link">
        {/* {item.image && <Img fixed={item.image.childImageSharp.fixed} alt="" />} */}
        {!item.image && item.title}
        {item.type === 'DROP_DOWN' && (
          <Icon
            name="chevron"
            rotate={open ? -90 : 90}
            fill={extended.charcoal.three}
            className="header__nav-item--icon"
          />
        )}
      </div>
      <DropDownMenu
        items={navItems}
        open={open}
        id={getSlugFromTitle(item.title)}
        isClicked={isClicked}
      />
    </li>
  )
}

export function NavButton({ item, classNames }) {
  const [button] = item.action
  const Button = getButton(button.type)
  return (
    <li className={`header__nav-cta ${classNames}`}>
      <Button onClick={() => navigateTo(button.link)}>
        {!item.image && button.label}
      </Button>
    </li>
  )
}

export function DropDownMenu({ id, items, open, isClicked }) {
  React.useEffect(() => {
    if (isClicked && open) {
      const tl = new TimelineMax({})
      tl.to(`#${id}`, 0.2, { height: 180, autoAlpha: 1 })
      tl.staggerTo(`.menu-item--${id}`, 0.15, { autoAlpha: 1 }, 0.1)
    }
    if (isClicked && !open) {
      const tl = new TimelineMax({})
      tl.staggerTo(`.menu-item--${id}`, 0.15, { autoAlpha: 0 }, 0.1)
      tl.to(`#${id}`, 0.2, {
        height: 0
      })
    }
  }, [open, id, isClicked])
  console.log({ dropdown: items })
  return (
    <DropDown id={id} className="dropdown" open={open}>
      {items.map(item => (
        <NavLink
          classNames={`menu-item menu-item--${id}`}
          key={item._uid}
          item={item}
        />
      ))}
    </DropDown>
  )
}
