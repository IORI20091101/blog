import React, { useEffect } from "react"
import { Link } from "gatsby"

const styles = {}
styles.float = "right"
styles.listStyle = "none"

const ListLink = props => (
  <li style={{ display: `inline-block`, marginRight: `1rem` }}>
    <Link to={props.to}>{props.children}</Link>
  </li>
)

const Layout = ({ location, title, children }) => {
  let localTheme = localStorage.getItem("theme")
  let defaultTheme = "light"
  let currentTheme = defaultTheme

  if (localTheme) {
    if (localTheme === "dark" || localTheme === "light") {
      currentTheme = localTheme
    }
  } else if (window.matchMedia) {
    let prefersDarkMode = window.matchMedia("(prefers-color-scheme: dark)")
      .matches
    if (prefersDarkMode) {
      currentTheme = "dark"
    } else {
      currentTheme = "light"
    }
  } else {
    // default light
    currentTheme = defaultTheme
  }

  useEffect(() => {
    // Update the document title using the browser API
    document.documentElement.className = currentTheme + "-theme"
  })

  function showLightTheme() {
    // useEffect(() => {
    document.documentElement.className = "light-theme"
    localStorage.setItem("theme", "light")
    // })
  }

  function showDarkTheme() {
    // useEffect(() => {
    document.documentElement.className = "dark-theme"
    localStorage.setItem("theme", "dark")
    // })
  }

  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath
  let header

  if (isRootPath) {
    header = (
      <div>
        <h1 className="main-heading">
          <Link to="/">{title}</Link>
        </h1>
        <ul style={styles}>
          <ListLink to="/">Home</ListLink>
          <ListLink to="/about/">About</ListLink>
          <ListLink to="/tags/">Tags</ListLink>
          <ListLink to="/contact/">Contact</ListLink>
          <span class="iconfont icon-light" onClick={showLightTheme}></span>
          <span class="iconfont icon-dark" onClick={showDarkTheme}></span>
        </ul>
      </div>
    )
  } else {
    header = (
      <div>
        <Link className="header-link-home" to="/">
          {title}
        </Link>
        <ul style={styles}>
          <ListLink to="/">Home</ListLink>
          <ListLink to="/about/">About</ListLink>
          <ListLink to="/tags/">Tags</ListLink>
          <ListLink to="/contact/">Contact</ListLink>
        </ul>
      </div>
    )
  }

  return (
    <div className="global-wrapper" data-is-root-path={isRootPath}>
      <header className="global-header">{header}</header>
      <main>{children}</main>
      <footer>
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.com">Gatsby</a>
      </footer>
    </div>
  )
}

export default Layout
