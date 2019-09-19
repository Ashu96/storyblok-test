import React from 'react'
import { navigate, Link } from 'gatsby'
import Img from 'gatsby-image'
import Styled from 'styled-components'
import { getButton, isExternal } from '../../utils'
import Icon from '../Icon'
import { backgrounds, primary, extended } from '../../constants/colors'

const DropDown = Styled.div`
  opacity: 1;
  min-width: 144px;
  min-height: 80px;
  border-radius: 5px;
  background-color: ${backgrounds.white};
  display: ${props => (props.open ? 'block' : 'none')};
  transition: opacity 150ms ease-in;
  transition: transform 200ms ease-in;

  & .menu-item {
    padding: 12px 16px;
    margin-top: 12px !important;
    
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
    opacity: 0;
    position: absolute;
    top: 32px;
    box-shadow: 0 8px 20px 0 rgba(152, 152, 187, 0.15);
    border: solid 1px ${backgrounds.fadedPurple};
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
      <Link to={item.link}>
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
      </Link>
      <DropDownMenu items={navItems} open={open} />
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

export function DropDownMenu({ items, open }) {
  console.log({ items })
  return (
    <DropDown className="dropdown" open={open}>
      {items.map(item => (
        <NavLink classNames="menu-item" key={item.key} item={item} />
      ))}
    </DropDown>
  )
}
