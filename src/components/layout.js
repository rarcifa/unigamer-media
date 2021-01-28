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
            <div className="bg-green-footer pt-5 grey pb-6">
              <div className="container">
                <div className="row">
                  <div className="col-lg-3 mb-5 mb-lg-0">
                    <div className="font-weight-bold text-uppercase text-lg text-dark mb-3">
                      <img src="https://unigamer-heroku-58da-4222-aa79-380fc4ae1f2e.s3-eu-west-1.amazonaws.com/img/logo/tertiarylogo.png" className="img-responsive f-s1 lazy loading" alt="Logo" data-ll-status="loading"/></div>
                    <p className="text-sm">© {new Date().getFullYear()} Unigamer. All rights reserved.</p>
                  </div>
                  <div className="col-lg-2 col-md-6 mb-5 mb-lg-0">
                    <h6 className="text-uppercase text-dark mb-3">Games</h6>
                    <ul className="list-unstyled text-sm">
                     <li> <a href="/ps5" className="grey">PS5</a></li>
                      <li> <a href="/ps4" className="grey">PS4</a></li>
                      <li> <a href="/xbox" className="grey">XBOX-SX</a></li>
                      <li> <a href="/xbox" className="grey">XBOX-1</a></li>
                      <li> <a href="/switch" className="grey">SWITCH</a></li>
                      <li> <a href="/pc" className="grey">PC</a></li>
                    </ul>
                  </div>
                  <div className="col-lg-2 col-md-6 mb-5 mb-lg-0">
                    <h6 className="text-uppercase text-dark mb-3">Company</h6>
                    <ul className="list-unstyled text-sm">
                      <li> <a href="/auth/login" className="grey">Login </a></li>
                      <li> <a href="/auth/login" className="grey">Register </a></li>
                      <li> <a href="/terms" className="grey">Terms </a></li>
                      <li> <a href="/terms" className="grey">About </a></li>
                      <li> <a href="/contact" className="grey">Contact </a></li>
                    </ul>
                  </div>
                  <div className="col-lg-2 col-md-6 mb-5 mb-lg-0">
                    <h6 className="text-uppercase text-dark mb-3">Partner</h6>
                    <ul className="list-unstyled text-sm">
                      <li> <a href="https://www.youtube.com/channel/UCdWHx7TOupfK4cQR2Hm8q_g" className="grey">Cheat Code Enabled </a></li>
                    </ul>
                  </div>  
                </div>
              </div>
            </div>
            <div className="container pt-3 pb-5">
              <ul className="bd-footer-links ps-0 mb-3 ">
                <li className="d-inline-block"><a href="https://github.com/twbs">Instagram</a></li>
                <li className="d-inline-block ml-3"><a href="https://twitter.com/getbootstrap">Twitter</a></li>
                <li className="d-inline-block ml-3"><a href="/docs/5.0/examples/">Facebook</a></li>
                <li className="d-inline-block ml-3"><a href="/docs/5.0/about/overview/">Youtube</a></li>
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
