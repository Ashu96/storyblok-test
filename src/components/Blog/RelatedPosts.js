// import React from 'react'
// import { useStaticQuery, graphql } from 'gatsby'
// import CategorySection from './CategorySection'
// import { Heading2 } from '../../styles/text'

// function RelatedPosts({ relatedBlogsID }) {
// 	const queryData = useStaticQuery(graphql`
// 		{
// 			allStrapiBlog {
// 				edges {
// 					node {
// 						id
// 						strapiId
// 						title
// 						slug
// 						body
// 						content
// 						date(formatString: "MMMM DD, YYYY")
// 						show_contact_form
// 						show_subscribe_form
// 						blogcategories {
// 							id
// 							slug
// 							title
// 						}
// 						image {
// 							childImageSharp {
// 								fluid(maxWidth: 370) {
// 									...GatsbyImageSharpFluid
// 								}
// 							}
// 						}
// 					}
// 				}
// 			}
// 		}
// 	`)

// 	const blogs = queryData.allStrapiBlog.edges
// 		.filter(({ node }) => relatedBlogsID.some(id => id === node.strapiId))
// 		.map(({ node }) => ({ ...node }))
// 		.slice(3)

// 	return (
// 		<CategorySection
// 			Heading={Heading2}
// 			title="Related posts"
// 			blogs={blogs}
// 			showAll={false}
// 		/>
// 	)
// }

// export default RelatedPosts
