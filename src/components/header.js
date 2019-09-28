import AppBar from '@material-ui/core/AppBar';
import { withStyles } from '@material-ui/core/styles';
import HeaderLink from "./HeaderLink"
import PropTypes from "prop-types"
import  React  from "react"
import Toolbar from '@material-ui/core/Toolbar';



const styles = {
  root: {
    flexGrow: 1,
  },
  show: {
    transform: 'translate(0, 0)',
    transition: 'transform .5s',
  },
  hide: {
    transform: 'translate(0, -70px)',
    transition: 'transform .5s',
  },
  main: {
    flex : "1"
  },
};
class Header extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      shouldShow: null,
    };

    this.lastScroll = null;

    this.handleScroll = this.handleScroll.bind(this);
    // Alternatively, you can throttle scroll events to avoid
    // updating the state too often. Here using lodash.
    // this.handleScroll = _.throttle(this.handleScroll.bind(this), 100);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll, { passive: true });
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll(evt) {
    const lastScroll = window.scrollY;

    if (lastScroll === this.lastScroll) {
      return;
    }

    const shouldShow = (this.lastScroll !== null) ?  (lastScroll < this.lastScroll) : null;

    if (shouldShow !== this.state.shouldShow) {
      this.setState((prevState, props) => ({
        ...prevState,
        shouldShow,
      }));
    }

    this.lastScroll = lastScroll;
  }

  render() {
    const { classes } = this.props;
    return (
        <AppBar
      position="fixed"
      color="default"
      className={
            `${classes.root} ${
              this.state.shouldShow === null ? '' : (
                this.state.shouldShow ? classes.show : classes.hide
              )
            }`
          }
    >
          <Toolbar>
              <div className={classes.main}>
                <HeaderLink to="/">Sonu Toor</HeaderLink>
              </div>
              <HeaderLink to="/About">About</HeaderLink>
              <HeaderLink to="/Contact">Contact</HeaderLink>
          </Toolbar>
        </AppBar>
    );
  }
}

Header.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Header);