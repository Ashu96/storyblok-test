import React from 'react'
import { navigate, Link } from 'gatsby'
import Img from 'gatsby-image'
import Styled from 'styled-components'
import { getButton, isExternal } from '../../utils'
import Icon from '../Icon'
import { backgrounds, primary, extended } from '../../constants/colors'

const DropDown = Styled.div`
  opacity: 0;
  /* z-index: -1; */
  /* transform: scale(0); */
  /* transform: translateY(5px); */
  
  position: absolute;
  top: 32px;
  min-width: 144px;
  min-height: 80px;
  border-radius: 5px;
  box-shadow: 0 8px 20px 0 rgba(152, 152, 187, 0.15);
  border: solid 1px ${backgrounds.fadedPurple};
  background-color: ${backgrounds.white};

  transition: opacity 150ms ease-in;
  transition: transform 200ms ease-in;

  & .menu-item {
    padding: 12px 16px;
    margin: 0px;
    
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
`

export function NavLogo({ item }) {
	return (
		<li className="header__logo">
			<Link to={item.link}>
				{/* {item.image && <Img fixed={item.image.childImageSharp.fixed} alt="" />} */}
				{item.image && <img src={item.image} alt="" />}
				{!item.image && item.title}
			</Link>
		</li>
	)
}

export function NavLink({ item, classNames }) {
	return (
		<li className={classNames ? classNames : 'header__nav-item'}>
			<Link to={item.link}  onClick={(event) => {
        if (isExternal(item.link)) {
          // 
          event.preventDefault()
          window.open(item.link, '_blank')
        }
      }} activeClassName="active">
				{item.image && <Img fixed={item.image.childImageSharp.fixed} alt="" />}
				{!item.image && item.title}
			</Link>
		</li>
	)
}

export function NavDropDown({ item, navItems }) {
	return (
		<li className="header__nav-dropdown">
			<Link to={item.link}>
				{/* {item.image && <Img fixed={item.image.childImageSharp.fixed} alt="" />} */}
				{!item.image && item.title}
				{item.type === 'DROP_DOWN' && (
					<Icon
						fill={extended.charcoal.three}
						className="header__nav-item--icon"
					/>
				)}
			</Link>
			<DropDownMenu items={navItems} />
		</li>
	)
}

export function NavButton({ item }) {
  const [button] = item.action
	const Button = getButton(button.type)
	return (
		<li className="header__nav-cta">
			<Button onClick={() => navigate(button.link)}>
				{!item.image && button.label}
			</Button>
		</li>
	)
}

export function DropDownMenu({ items }) {
  console.log({ items })
	return (
		<DropDown className="dropdown">
			{items.map(item => (
				<NavLink classNames="menu-item" key={item.key} item={item} />
			))}
		</DropDown>
	)
}
