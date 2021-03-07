import { Link } from "gatsby"
import Layout from '../components/layout'
import React from 'react'
import { graphql } from "gatsby"
// import { Parallax } from 'react-parallax';
 
const Subpage = props  => {

    const data = props.data.contentfulPageSubpage
    const dataSection = props.data.contentfulPageFullPage
    return (
        <Layout>
            {/* First Section */}
            <div className="container mt-5 py-5  pl-3">
                <div className="row">
                    <div className="col-4">
                        <h5 className="text-bold">{data.internalName}</h5>
                    </div>
                    <div className="col-7 mt-n2">
                        {/* Article Grid */}
                        <div className="row">

                        {data.relatedMedia.sort((a, b) => b.date > a.date ? 1 : -1).map((edge, i) => 
  
                            <Articles key={i} node={edge}/>
                            )}
                        </div>
                    </div>
                    <div className="col-1">
                        
                    </div>                 
                </div>
            </div>
            {/* Third Section */}
            <section className="section-main">
                <div className="hero-down-container-2">
                <svg viewBox="0 0 14832 55" className="hero-down"><path d="M7501.307 8.517l-68.043 39.341c-10.632 6.185-23.795 6.185-34.528 0l-68.144-39.34c-8.91-5.173-18.988-8.215-29.316-8.518H0v55h14832V0H7530.671a63.604 63.604 0 0 0-29.364 8.517z"></path></svg>
                </div>
                <div className="pt-6 text-center header-container py-5">
                <div className="col-12">
                    <h3 className="color-main">{dataSection.thirdSection[0].headline}</h3>
                </div>
                <div className="col-12">
                    <h1 className="h1 text-dark">{dataSection.thirdSection[0].content.content}</h1>     
                </div>
                <div className="col-12 py-4">
                    <a href="https://www.unigamer.com" rel="noreferrer" target="_blank" type="button" className="btn btn-main">
                    <strong>Join us now</strong>
                    </a>
                </div>
                </div>
            </section>  
        </Layout>
    )
}

/* Article Component */
const Articles = ({node}) => {
    return (
    <div className="container py-3">
        <h6 className="tiny grey-light text-bold">{node.category[0].title}</h6>
        <Link to={node.slug}><h3 className="text-bold text-dark">{node.title}</h3></Link>
        <span className="tiny grey">By <a href="/">{node.author[0].name}</a> on {node.publicationDate}</span>
        <hr className="grey-light"></hr>
    </div>
    )
}

export default Subpage

export const pageQuery = graphql`
query categoryQuery($slug: String!) {
    contentfulPageSubpage (slug: { eq: $slug }){
        slug
        internalName
        metaDescription
        shortDescription {
        shortDescription
        }
        relatedMedia {
            slug
            richText {
                raw
            }
            category {
                title
            }
            title
            date: publicationDate
            publicationDate(formatString: "dddd, Do MMMM YYYY")
            author {
                avatar {
                    fixed(height: 15, quality: 100, width: 15) {
                        src
                    }
                }
                bio {
                    bio
                }
                name
                slug
            }
        }
    }
    contentfulPageFullPage {
        thirdSection {
            title
            headline
            content {
                content
            }
        }
    }
}
`