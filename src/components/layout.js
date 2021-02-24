/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Header from "./header"
import Helmet from "react-helmet"
import { withPrefix } from "gatsby"
import Favicon from "../images/favicon.png"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      contentfulAsset(title: {eq: "Logo"}) {
        id
        file {
          url
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.contentfulAsset.file.url} />
      {/* External Scripts */}
      <Helmet>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <link rel="shortcut icon" type="image/png" href={Favicon} />
        <title>Unigamer Media - All the latest news</title>
        <script src={withPrefix('brands.js')}/>
        <script src={withPrefix('solid.js')}/>
        <script src={withPrefix('fontawesome.js')}/>

        <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ho+j7jyWK8fNQe+A12Hb8AhRq26LrZ/JpcUGGOn+Y7RsweNrtN/tE3MoK7ZeZDyx" crossorigin="anonymous"></script>
      </Helmet>
      <div>
        <main>{children}</main>
          <footer className="section-main">
            <div className="bg-green-footer container pt-5 grey pb-6">
              <div className="container">
                <div className="frame">
                  <div className="col-lg- mb-5 mb-lg-0">
                    <span className="row"><img src="https://unigamer-heroku-58da-4222-aa79-380fc4ae1f2e.s3-eu-west-1.amazonaws.com/img/logo/tertiarylogo.png" className="img-responsive f-10px lazy loading" alt="Logo" data-ll-status="loading"/><p className="ml-1 text-sm">© {new Date().getFullYear()} Unigamer. All rights reserved.</p></span>
                  </div>
                  
                </div>
              </div>
            </div>
            <div className="container pt-3 pb-5">
              <ul className="bd-footer-links ps-0 mb-3 ">
                <li className="d-inline-block"><a href="https://www.instagram.com/unigamer_official/">Instagram</a></li>
                <li className="d-inline-block ml-3"><a href="https://twitter.com/unigamer_">Twitter</a></li>
                <li className="d-inline-block ml-3"><a href="https://www.facebook.com/unigamerofficial/">Facebook</a></li>
                <li className="d-inline-block ml-3"><a href="https://www.youtube.com/c/OfficialUnigamer">Youtube</a></li>
              </ul>
              <p className="mb-0 grey text-sm">Designed and built with all the love in the world by the <a href="https://wwww.unigamer.com">Unigamer</a> team with the support of <a href="https://www.ncirl.ie">National College of Ireland</a>.</p>
            </div>
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
