/**
 * https://github.com/ReactTraining/react-media/
 */
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import invariant from 'invariant'
import json2mq from 'json2mq'

class Media extends Component {
  static propTypes = {
    defaultMatches: PropTypes.bool,
    query: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.object,
      PropTypes.arrayOf(PropTypes.object.isRequired)
    ]).isRequired,
    render: PropTypes.func,
    children: PropTypes.oneOfType([
      PropTypes.node,
      PropTypes.func
    ]),
    targetWindow: PropTypes.object
  }

  static defaultProps = {
    defaultMatches: true
  }

  state = {
    matches: this.props.defaultMatches
  }

  updateMatches = () => this.setState({ matches: this.mediaQueryList.matches })

  componentWillMount() {
    if (typeof window !== "object") return;

    const targetWindow = this.props.targetWindow || window;

    invariant(
      typeof targetWindow.matchMedia === "function",
      "<Media targetWindow> does not support `matchMedia`."
    );

    let { query } = this.props;
    if (typeof query !== "string") query = json2mq(query);

    this.mediaQueryList = targetWindow.matchMedia(query);
    this.mediaQueryList.addListener(this.updateMatches);
    this.updateMatches();
  }

  componentWillUnmount() {
    this.mediaQueryList.removeListener(this.updateMatches);
  }

  render() {
    const { children, render } = this.props;
    const { matches } = this.state;

    return render
      ? matches ? render() : null
      : children
        ? typeof children === "function"
          ? children(matches)
          : !Array.isArray(children) || children.length
            ? matches ? React.Children.only(children) : null
            : null
        : null;
  }
}

export default Media