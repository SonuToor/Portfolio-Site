import AppBar from "@material-ui/core/AppBar"
import { withStyles } from "@material-ui/core/styles"
import HideHeader from './HideHeader';
import HeaderLink from "./HeaderLink"
import PropTypes from "prop-types"
import React from "react"
import Toolbar from "@material-ui/core/Toolbar"

const styles = {
  root: {
    flexGrow: 1,
  },
  main: {
    flex: "1",
  },
}


class Header extends React.PureComponent {
  render() {
    const { classes } = this.props
    return (
      <HideHeader >
        <AppBar
          position="fixed"
          color="default"
        >
          <Toolbar>
            <div className={classes.main}>
              <HeaderLink to="/">Sonu Toor</HeaderLink>
            </div>
            <HeaderLink to="/About">About</HeaderLink>
            <HeaderLink to="/Contact">Contact</HeaderLink>
          </Toolbar>
        </AppBar>
      </HideHeader>
    )
  }
}

Header.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(Header)
