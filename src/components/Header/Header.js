// import { Helmet } from 'react-helmet'
import PropTypes from 'prop-types'
import React from 'react'
import Styled from 'styled-components'
import { 
  // backgrounds,
  primary,
  extended
} from '../../constants/colors'
import { SectionWrapper, Row, Col } from '../../styles/grid'
import { getNavItem } from '../../utils'

const HeaderContainer = Styled.header`
  height: 70px;

  & .row {
    padding: 15px 0px;
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
      margin-right: 49px;

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

`

function Header({ bgPrimary, siteTitle, navItems, allNavItems }) {
	const leftHSNavItems = navItems.filter(item => !item.RHS)
	const rightHSNavItems = navItems.filter(item => item.RHS)

	return (
		<SectionWrapper className="container-fluid" bgPrimary={bgPrimary}>
			{/* <Helmet htmlAttributes={{ lang: 'en' }}>
				<meta charSet="utf-8" />
				<meta
					name="description"
					content={`Uprise is a proactive and science-based Employee Assistance Program (EAP)
provider in Australia.`}
				/>
				<title>{siteTitle}</title>
			</Helmet> */}
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

// const MenuContainer = Styled.div`
//   /* color: black; */
//   /* position: relative; */
//   & button {
//     margin: 0px;
//     padding: 0px;
//     background: none;
//     border: none;
//   }

//   & .menu-icon {
//     position: absolute;
//     top: 27px;
//     right: 20px;
//     width: 24px;
//     height: 24px;
//   }

//   & .menu__container {
//     position: fixed;
//     z-index: 20;
//     background-color: ${primary.purple};
//     color: ${backgrounds.white};
//     width: 100%;
//     height: 100vh;
//     top: 70px;
//     left: 0px;
//   }

//   & .menu__list {
//     display: flex;
//     flex-direction: column;
//     justify-content: center;
//     text-align: left;

//     & li {
//       margin: 0px;
//       margin-top: 49px;

//       & a {
//         color: ${backgrounds.white};
//         text-decoration: none;
//         font-size: 18px;
//       }
//     }
//   }

//   @media (min-width: 768px) {
//     display: none;
//   }
// `

// function Menu() {
//   const [open, toggleOpen] = React.useState(false)

//   return (
//     <MenuContainer>
//       <button aria-label="navigation-menu" onClick={() => toggleOpen(!open)}>
//         {!open ? (
//           <img loading='lazy'
//             alt="burger"
//             className="menu-icon"
//             src={require('../../images/menu.svg')}
//           />
//         ) : (
//           <img loading='lazy'
//             alt="close"
//             className="menu-icon close"
//             src={require('../../images/close.svg')}
//           />
//         )}
//       </button>
//       {open && (
//         <div className="menu__container">
//           <ul className="menu__list">
//             <li>
//               <Link to="/">For Employers</Link>
//             </li>
//             <li>
//               <Link to="/">For Employees</Link>
//             </li>
//             <li>
//               <Link to="/">Pricing</Link>
//             </li>
//             <li>
//               <Link to="/">Help</Link>
//             </li>
//           </ul>
//         </div>
//       )}
//     </MenuContainer>
//   )
// }

// export default Menu;
