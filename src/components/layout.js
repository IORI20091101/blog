import React, { useEffect, useState } from "react"
import { Link } from "gatsby"

const styles = {}
styles.float = "right"
styles.listStyle = "none"

const ListLink = props => (
  <li style={{ display: `inline-block`, marginRight: `1rem` }}>
    <Link to={props.to}>{props.children}</Link>
  </li>
)

const IconItem = props => (
  <li style={{ display: `inline-block`, marginRight: `1rem` }}>
    <span>{props.children}</span>
  </li>
)

const Layout = ({ location, title, children }) => {
  let localTheme = ""

  if (typeof window !== "undefined") {
    localTheme = localStorage.getItem("theme")
  }

  let defaultTheme = "light"
  let currentTheme = defaultTheme

  if (localTheme) {
    if (localTheme === "dark" || localTheme === "light") {
      currentTheme = localTheme
    }
  } else if (typeof window !== "undefined" && window.matchMedia) {
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

  const [theme, setTheme] = useState(currentTheme)

  useEffect(() => {
    // Update the document title using the browser API
    document.documentElement.className = currentTheme + "-theme"
  })

  function showLightTheme() {
    document.documentElement.className = "light-theme"
    localStorage.setItem("theme", "light")
    setTheme("light")
  }

  function showDarkTheme() {
    document.documentElement.className = "dark-theme"
    localStorage.setItem("theme", "dark")
    setTheme("dark")
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

          {theme === "dark" && (
            <IconItem>
              <span
                role="presentation"
                class="iconfont icon-light"
                onClick={showLightTheme}
                onKeyDown={showLightTheme}
              ></span>
            </IconItem>
          )}
          {theme === "light" && (
            <IconItem>
              <span
                role="presentation"
                class="iconfont icon-dark"
                onClick={showDarkTheme}
                onKeyDown={showDarkTheme}
              ></span>
            </IconItem>
          )}
          <IconItem>
            <span role="presentation" class="iconfont icon-search"></span>
          </IconItem>
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
