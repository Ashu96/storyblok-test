// import React from 'react'
// import Styled from 'styled-components'
// import { useStaticQuery, graphql } from 'gatsby'
// // import Img from 'gatsby-image'
// import { Heading2 } from '../styles/text'
// import { getPublicURL } from '../utils'

// const AwardContentContainer = Styled.div`
//   margin-top: 120px;
//   margin-bottom: 120px;

//   & h2 {
//     text-align: center;
//   }

//   flex-direction: column;
//   & button {
//     margin-right: 16px;

//   }
// `

// function ContentWithImageList({ id }) {
// 	const data = useStaticQuery(graphql`
// 		{
// 			allImageList: allStrapiImagelist {
// 				edges {
// 					node {
// 						id
// 						strapiId
// 						title
// 						images {
// 							id
// 							url
// 						}
// 					}
// 				}
// 			}
// 		}
// 	`)

// 	const currentHeroSection = data.allImageList.edges.filter(
// 		edge => edge.node.strapiId === id.trim()
// 	)

// 	const { node } = currentHeroSection[0]
// 	const { title, images } = node
// 	return (
// 		<div
// 			className="container-fluid"
// 			style={{
// 				borderBottom: '1px solid #cecbfc',
// 				borderTop: '1px solid #cecbfc'
// 			}}
// 		>
// 			<div className="container">
// 				<div className="row">
// 					<div className="col">
// 						<AwardContentContainer className="d-flex justify-content-center align-items-center">
// 							<Heading2>{title}</Heading2>
// 							<List images={images} />
// 						</AwardContentContainer>
// 					</div>
// 				</div>
// 			</div>
// 		</div>
// 	)
// }

// export default ContentWithImageList

// const ListContainer = Styled.ul`
//   list-style: none;
//   display: flex;
//   flex-direction: column;
//   margin-top: 50px;
//   padding: 0px;

//   @media (min-width: 768px) {
//     flex-direction: row;
//     flex-wrap: wrap;
//     justify-content: center;
//   }
// `

// const ListItem = Styled.li`
//   & img {
//     height: 60px;
//     margin-bottom: 16px;
//     @media (min-width: 768px) {
//       margin-right: 40px;
//     }
//     /* margin-right: 69px; */
//   }
// `

// function List({ images }) {
// 	return (
// 		<ListContainer>
// 			{images.map(image => (
// 				<ListItem key={image.id}>
// 					<img
// 						src={getPublicURL(image.url || image.publicURL)}
// 						alt="featured in"
// 					/>
// 				</ListItem>
// 			))}
// 		</ListContainer>
// 	)
// }

// // export default List;
