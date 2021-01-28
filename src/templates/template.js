/* import React, { Component} from 'react'
import Layout from '../components/layout'
import { graphql } from 'gatsby'
import PropTypes from 'prop-types'

class Category extends Component {
    render() {
        const {
            title,
            shortDescription
        } = this.props.data.contentfulCategories
        return (
            <Layout>
                <h1>{title}</h1>
                <div dangerouslySetInnerHTML={{__html: shortDescription.childMarkdownRemark.html}}/>
            </Layout>
        )  
    }
}

Category.propTypes = {
    data: PropTypes.object.isRequired
}
export default Category

export const pageQuery = graphql`
  query categoryQuery($slug: String!) {
    contentfulCategories(slug: { eq: $slug }) {
        title
        slug
        shortDescription {
            shortDescription
            childMarkdownRemark {
              html
            }
        }
    }
  }
` */