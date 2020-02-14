import React from "react"
import { Link } from "gatsby"
import Layout from "../components/Layout"

export default function blog() {
  return (
    <Layout>
      Hello From Blog Page! <Link to="/">Home Page</Link>
    </Layout>
  )
}
