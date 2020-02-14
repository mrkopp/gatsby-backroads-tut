import React from "react"
import { Link } from "gatsby"
import Layout from "../components/Layout"
import { FaAdobe, FaAd } from "react-icons/fa"

export default () => (
  <Layout>
    Hello world!<Link to="/blog/">Blog Page</Link>
    <FaAdobe />
  </Layout>
)
