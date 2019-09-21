import React from 'react'
import { navigate, Link } from 'gatsby'
import Img from 'gatsby-image'
import Styled from 'styled-components'
import { getButton, isExternal, getSlugFromTitle } from '../../utils'
import Icon from '../Icon'
import { backgrounds, primary, extended } from '../../constants/colors'

const DropDown = Styled.div`
  opacity: 1;
  border-radius: 5px;
  background-color: ${backgrounds.white};
  transition: opacity 150ms ease-in;
  transition: transform 200ms ease-in;

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
      <Link to={item.link}>
        {/* {item.image && <Img fixed={item.image.childImageSharp.fixed} alt="" />} */}
        {item.image && <img loading="lazy" src={item.image} alt="" />}
        {!item.image && item.title}
      </Link>
    </li>
  )
}

export function NavLink({ item, classNames }) {
  return (
    <li className={classNames ? classNames : 'header__nav-item'}>
      <Link
        to={item.link}
        onClick={event => {
          if (isExternal(item.link)) {
            //
            event.preventDefault()
            window.open(item.link, '_blank')
          }
        }}
        activeClassName="active"
      >
        {item.image && <Img fixed={item.image.childImageSharp.fixed} alt="" />}
        {!item.image && item.title}
      </Link>
    </li>
  )
}

export function NavDropDown({ item, navItems, classNames }) {
  const [open, toggleOpen] = React.useState(false)
  return (
    <li
      className={`header__nav-dropdown ${classNames}`}
      onClick={() => toggleOpen(!open)}
    >
      <a>
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
      </a>
      <DropDownMenu
        items={navItems}
        open={open}
        id={getSlugFromTitle(item.title)}
      />
    </li>
  )
}

export function NavButton({ item, classNames }) {
  const [button] = item.action
  const Button = getButton(button.type)
  return (
    <li className={`header__nav-cta ${classNames}`}>
      <Button onClick={() => navigate(button.link)}>
        {!item.image && button.label}
      </Button>
    </li>
  )
}

export function DropDownMenu({ id, items, open }) {
  React.useEffect(() => {
    if (open && window && window.TimelineMax) {
      const tl = new window.TimelineMax({})
      tl.to(`#${id}`, 0.2, { height: 180 })
      tl.staggerTo(`.menu-item--${id}`, 0.25, { opacity: 1 }, 0.1)
    }
    if (!open && window && window.TimelineMax) {
      const tl = new window.TimelineMax({})

      tl.staggerTo(`.menu-item--${id}`, 0.25, { opacity: 0 }, 0.1)
      tl.to(`#${id}`, 0.2, {
        height: 0
      })
    }
  }, [open, id])
  return (
    <DropDown id={id} className="dropdown" open={open}>
      {items.map(item => (
        <NavLink
          classNames={`menu-item menu-item--${id}`}
          key={item.key}
          item={item}
        />
      ))}
    </DropDown>
  )
}
