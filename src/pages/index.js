import React from "react"
import Layout from "../components/layout"
//import Image from "../components/image"
//import Carousel from 'react-bootstrap/Carousel'
import { graphql } from 'gatsby'
import { Link } from "gatsby"
import Brand from "../images/brand_logo.png"

/*  Main Skeleton */
const IndexPage = props => {
  const data = props.data.contentfulPageFullPage
  const background = props.data.contentfulPageFullPage.firstSection[0].featuredMedia.file.url
  return (
    <Layout>
      {/*!-- Hero Section */}
      <section className="section-green">
        <div className="header-container space-header">
          <div className="row">
            <h3 className="text-light">{data.heroSection[0].headline}</h3>
          </div>
          <div className="row">
            <h1 className="h1 text-white">{data.heroSection[0].content.content}</h1>
          </div>
        </div>
      </section>
      {/* First Section */}
      <section className="section-main pb-5">
        <div className="hero-down-container">
          <svg viewBox="0 0 14832 55" className="hero-down "><path d="M7501.307 8.517l-68.043 39.341c-10.632 6.185-23.795 6.185-34.528 0l-68.144-39.34c-8.91-5.173-18.988-8.215-29.316-8.518H0v55h14832V0H7530.671a63.604 63.604 0 0 0-29.364 8.517z"></path></svg>
        </div>
        <div className="pt-6 text-center section-cotainer pt-5">
          <div className="col-12">
            <h3 className="color-main">{data.secondSection[0].headline}</h3>
          </div>
          <div className="col-12">
            <h1 className="h1 text-dark">{data.secondSection[0].content.content}</h1>
          </div>
        </div>
        <div className="posts-container col-12 col-sm-12 col-md-10 col-lg-10 col-xl-7 pt-3 pb-6">
          <div className="row">
            <div className="col-12 col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 px-0">
              {/* Post Left Grid */}
              {data.secondSection[0].referenceMany.map((edge, i) =>
                <PostsL key={i} node={edge} />
              ).slice(0, 3)}
            </div>
            <div className="col-12 col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 px-0">
              {/* Post Left Grid */}
              {data.secondSection[0].referenceMany.map((edge, i) =>
                <PostsR key={i} node={edge} />
              ).slice(3)}
            </div>
          </div>
        </div>
        <br></br>
        <br></br>
      </section>

      {/* Second Section */}
      <section
        style={{
          backgroundImage: `url(` + (background) + `)`,
          backgroundRepeat: `no-repeat`,
          backgroundSize: `cover`,
          width: `100%`,
          height: `100%`
        }}
      >
        <div className="space-header container">

          <div className="col-6">
            <h3 className="text-white">{data.firstSection[0].headline}</h3>
          </div>
          <div className="col-6">
            <h1 className="h1 text-white">{data.firstSection[0].content.content}</h1>
          </div>
          <div className="underscore">
            <h1> </h1>
          </div>

          <div className="mx-auto col-12 col-12 col-sm-12 col-md-12 col-lg-8 col-xl-7 py-5">
            <div className="card-transparent ">
              <div className="container pt-3 pb-1 text-white">
                <div className="row mt-n1">
                  {/* Post Block */}
                  <div className="col-12">
                    {/* Post Author Top */}
                    <Link to="https://www.unigamer.com" className="text-bold text-white">{data.firstSection[0].reference.author.name}</Link>
                    <span className="float-right text-bold">{data.firstSection[0].reference.publicationDate}</span>
                    <div className="mt-n1">@{data.firstSection[0].reference.author.slug}</div>
                    <div className="h4 pt-3 pb-2 pr-3 text-white">
                      {/* Post Content */}
                      {data.firstSection[0].reference.content.childMarkdownRemark.htmlAst.children[0].children[0].value}
                      <Link to="https://www.unigamer.com">www.unigamer.com</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Third Section */}
      <section className="section-main">
        <div className="hero-down-container-2">
          <svg viewBox="0 0 14832 55" className="hero-down"><path d="M7501.307 8.517l-68.043 39.341c-10.632 6.185-23.795 6.185-34.528 0l-68.144-39.34c-8.91-5.173-18.988-8.215-29.316-8.518H0v55h14832V0H7530.671a63.604 63.604 0 0 0-29.364 8.517z"></path></svg>
        </div>
        <div className="pt-6 text-center header-container py-5">
          <div className="col-12">
            <h3 className="color-main">{data.thirdSection[0].headline}</h3>
          </div>
          <div className="col-12">
            <h1 className="h1 text-dark">{data.thirdSection[0].content.content}</h1>
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

/* Left Post Component */
const PostsL = ({ node }) => {
  return (
    <div className="col-12 py-1 px-05">
      <div className="card">
        <div className="pr-3 pt-3 mt-1 pl-4 text-white">
          <div className="row mt-n1">
            {/* Left Post Block */}
            <div className="pt-1 pl-2 frame">
              {/* aide avatar icon */}
              <img className="round greyscale" src={node.author.avatar.fixed.src} alt={node.author.name} />
            </div>
            {/* Right Post Block */}
            <div className="col-10 pt-1 pr-2 pl-2">
              {/* Post Author Top */}
              <a href="https://www.unigamer.com" className="text-bold text-dark mr-1">{node.author.name}</a>
              <i className="green font-15 fas fa-badge-check"></i> <span className="text-muted atspacing tiny" href="#">@{node.author.slug}</span>
             
              <div className="flex items-center text-muted space-x-2 tiny">  <span className="mr-1"> {node.publicationDate}</span>
                <i className="fas fa-xs fa-user-friends text-muted"></i>
              </div>
            </div>
            <div className="container pt-3 pb-2 mb-2">
              <div className="text-dark post-font pr-3">
                {/* Post Content */}
                <div dangerouslySetInnerHTML={{ __html: node.content.childMarkdownRemark.html }} />
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  )
}

/* Right Post Component */
const PostsR = ({ node }) => {
  return (
    <div className="col-12 py-1 px-05">
    <div className="card">
      <div className="pr-3 pt-3 mt-1 pl-4 text-white">
        <div className="row mt-n1">
          {/* Left Post Block */}
          <div className="pt-1 pl-2 frame">
            {/* aide avatar icon */}
            <img className="round greyscale" src={node.author.avatar.fixed.src} alt={node.author.name} />
          </div>
          {/* Right Post Block */}
          <div className="col-10 pt-1 pr-2 pl-2">
            {/* Post Author Top */}
            <a href="https://www.unigamer.com" className="text-bold text-dark mr-1">{node.author.name}</a>
            <i className="green font-15 fas fa-badge-check"></i> <span className="text-muted atspacing tiny" href="#">@{node.author.slug}</span>
           
            <div className="flex items-center text-muted space-x-2 tiny">  <span className="mr-1"> {node.publicationDate}</span>
              <i className="fas fa-xs fa-user-friends text-muted"></i>
            </div>
          </div>
          <div className="container pt-3 pb-2 mb-2">
            <div className="text-dark post-font pr-3">
              {/* Post Content */}
              <div dangerouslySetInnerHTML={{ __html: node.content.childMarkdownRemark.html }} />
            </div>
          </div>
          
        </div>
      </div>
    </div>
  </div>
  )
}
export default IndexPage

/* Query */
export const pageQuery = graphql`
  query pageQuery {
    contentfulPageFullPage {
      heroSection {
        title
        headline
        content {
          content
        }
      }
      firstSection {
        title
        headline
        content {
          content
        }
        featuredMedia {
          file {
            url
          }
        }
        reference {
          author {
            name
            slug
            avatar {
              fixed(height: 38, quality: 100, width: 38) {
                src
              }
            }
          }
          comments
          content {
            childMarkdownRemark {
              htmlAst
            }
          }
          publicationDate(formatString: "D MMMM YYYY")
          replies
          slug
          title
          upvotes
        }
      }
      secondSection {
        title
        headline
        content {
          content
        }
        referenceMany {
          upvotes
          title
          slug
          comments
          replies
          publicationDate(formatString: "D MMMM YYYY")
          content {
            childMarkdownRemark {
              html
            }
          }
          author {
            name
            slug
            avatar {
              fixed(height: 38, width: 38, quality: 100) {
                src
              }
            }
          }
        }
      }
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