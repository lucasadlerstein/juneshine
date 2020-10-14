/** @jsx jsx */
import { jsx } from "theme-ui"

import Layout from "../components/layout"

import SEO from "../components/seo"
import AddToCart from "../components/Cart/AddToCart"


const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <AddToCart cta="Add to cart" bundledItems={["3325707843","3938752135265","5309944195"]} />
  </Layout>
)

export default IndexPage
