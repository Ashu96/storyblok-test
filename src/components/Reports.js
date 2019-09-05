// import React from 'react'
// import PropTypes from 'prop-types'
// import { useStaticQuery, graphql } from 'gatsby'
// import ReportSection from './ReportSection'
// import { extractQueryData } from '../utils'

// function Reports({ id, bgPrimary }) {
// 	const data = useStaticQuery(graphql`
// 		{
// 			allStrapiReportsection {
// 				edges {
// 					node {
// 						strapiId
// 						title
// 						order
// 						reports {
// 							body
// 							label
// 							id
// 							legend
// 							legend_before
// 							legend_after
// 							title
// 							after_image {
// 								publicURL
// 								childImageSharp {
// 									fixed(width: 192) {
// 										...GatsbyImageSharpFixed
// 									}
// 								}
// 							}
// 							before_image {
// 								publicURL
// 								childImageSharp {
// 									fixed(width: 192) {
// 										...GatsbyImageSharpFixed
// 									}
// 								}
// 							}
// 						}
// 					}
// 				}
// 			}
// 		}
// 	`)

// 	const node = extractQueryData({
// 		data: data.allStrapiReportsection,
// 		id
// 	})

// 	if (!node) {
// 		return null
// 	}

// 	return <ReportSection {...node} bgPrimary={bgPrimary} />
// }

// Reports.propTypes = {
// 	id: PropTypes.string.isRequired,
// 	bgPrimary: PropTypes.bool
// }

// Reports.defaultProps = {
// 	bgPrimary: false
// }

// export default Reports
