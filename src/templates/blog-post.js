import Layout from '../components/layout'
import React from 'react'
import { graphql } from "gatsby"
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
//import { BLOCKS } from '@contentful/rich-text-types';
import { Link } from "gatsby"


const BlogPost = props  => {

    /* RichText Parser */
    const data = props.data.contentfulPageBlogPost
    const dataSection = props.data.contentfulPageFullPage
    const documents = JSON.parse(props.data.contentfulPageBlogPost.richText.raw)
    const options = {
            renderText: text => text.split('\n').flatMap((text, i) => [i > 0 && <br />, 
                text])
    
    }
    // const document = JSON.parse(props.data.contentfulPageBlogPost.richText.raw, options)

    return (
      <Layout>
            {/* First Section */}
            <div className="container mt-5 py-5 pl-3">
                <div className="row">
                    <div className="col-4">
                        <div className="col-8 pt-5">
                            <img className="round-2 mr-1 greyscale" src={data.author[0].avatar.fixed.src} alt={data.author[0].name}/>
                            <h5 className="text-bold text-dark pt-3">{data.author[0].name}</h5>
                            <a className="text-sm" href="/">@{data.author[0].slug} <i className="green fas fa-badge-check"></i></a>
                            
                            <div className="text-sm grey pt-2">{data.author[0].bio.bio} </div>
                        </div>
                    </div>
                    <div className="col-7 pt-2">
                        {/* Article Grid */}
                        <div className="row">
                            <div className="container pb-5">
                                <h6 className="tiny grey-light text-bold">{data.category[0].title}</h6>
                                <h3 className="text-bold text-dark">{data.title}</h3>
                                <div className="text-sm grey">by <a href="/">{data.author[0].name}</a></div>
                                <div className="text-sm grey">on {data.publicationDate}</div>
              
                            </div>
                            <div className="container">
                                {/* RichText */}
                                {documentToReactComponents(documents, options)}  
          
                            </div>
                        </div>
                    </div>
                    <div className="col-1">
                        
                    </div>                 
                </div>
            </div>
            {/* Second Section */}
            <div className="container border-top mt-5 py-5  pl-3">
                <div className="row">
                    <div className="col-4">
                        <h5 className="text-bold">Related Articles</h5>
                    </div>
                    <div className="col-7 mt-n2">
                        {/* Article Grid */}
                        <div className="row">
                            {data.relatedArticles.map((edge, i) => 
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
        <Link to={`../` + node.slug}><h3 className="text-bold text-dark">{node.title}</h3></Link>
        <span className="tiny grey">By <a href="/">{node.author[0].name}</a> on {node.publicationDate}</span>
        <hr className="grey-light"></hr>
    </div>
    )
}

  
export default BlogPost

export const pageQuery = graphql`
  query blogPostQuery($slug: String!) {
    contentfulPageBlogPost(slug: { eq: $slug }) {
        title
        slug
        publicationDate(formatString: "MMMM D, YYYY")
        richText {
            raw
        }
        relatedArticles {
            category {
              title
            }
            title
            slug
            publicationDate(formatString: "dddd, Do MMMM YYYY")
            author {
                slug
                name
            }
        }
        author {
            avatar {
                fixed(height: 100, quality: 100, width: 100) {
                    src
                }
            }
            slug
            name
            bio {
                bio
              }
        }
        category {
            title
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