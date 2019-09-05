// import React from 'react'
// import Styled from 'styled-components'
// import { graphql, useStaticQuery } from 'gatsby'
// import { backgrounds } from '../constants/colors'
// import { Heading2 } from '../styles/text'
// import { SectionWrapper, Row, Col } from '../styles/grid'
// import { extractQueryData, getCard } from '../utils'

// const SectionWithCardsContainer = Styled.div`
  
//   & .col {
//     margin-bottom: 32px;
//   }

//   & .heading {
//     text-align: center;
//     display: flex;
//     flex-direction: column;
//     margin-bottom: 64px;

//     @media (min-width: 768px) {
//      padding: 0px 20%;
//     }
//   }

//   & .cards {
    
//   }

// `

// function SectionWithCards({ id, bgPrimary }) {
// 	const data = useStaticQuery(graphql`
// 		{
// 			allStrapiContentwithcard {
// 				edges {
// 					node {
// 						cards {
// 							body
// 							id
// 							order
// 							title
// 							type
// 							image {
// 								childImageSharp {
// 									fluid(maxWidth: 285) {
// 										...GatsbyImageSharpFluid
// 									}
// 								}
// 							}
// 						}
// 						strapiId
// 						id
// 						title
// 						two_in_row
// 					}
// 				}
// 			}
// 		}
// 	`)

// 	const node = extractQueryData({
// 		data: data.allStrapiContentwithcard,
// 		id
// 	})

// 	if (!node) {
// 		return null
// 	}

// 	const { title, cards, two_in_row } = node

// 	return (
// 		<SectionWrapper
// 			bgPrimary={bgPrimary}
// 			containerProps={{ style: { paddingBottom: '100px' } }}
// 		>
// 			<Row>
// 				<Col>
// 					<SectionWithCardsContainer>
// 						<div className="heading">
// 							<Heading2>{title}</Heading2>
// 						</div>
// 						<div className="row">
// 							{cards.map(card => {
// 								const Card = getCard(card.type)
// 								return (
// 									<div
// 										key={card.id}
// 										className={`col ${two_in_row ? 'col-lg-6' : 'col-lg-4'}`}
// 									>
// 										<Card
// 											title={card.title}
// 											body={card.body}
// 											media={
// 												card.image &&
// 												card.image.childImageSharp &&
// 												card.image.childImageSharp.fluid
// 											}
// 											large={two_in_row}
// 										/>
// 									</div>
// 								)
// 							})}
// 						</div>
// 					</SectionWithCardsContainer>
// 				</Col>
// 			</Row>
// 		</SectionWrapper>
// 	)
// }

// export default SectionWithCards
