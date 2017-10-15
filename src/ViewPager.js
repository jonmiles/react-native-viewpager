// @flow

import React, { Component } from "react";
import {
  View,
  StyleSheet,
  Animated,
  Dimensions,
  PanResponder
} from "react-native";

const { width, height } = Dimensions.get("screen");

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  page: {
    position: "absolute",
    top: 0,
    left: 0,
    bottom: 0,
    width,
    alignItems: "center",
    justifyContent: "center"
  }
});

type DefaultProps = {
  initialIndex: number
};

type Props = DefaultProps & {
  renderPage: Function,
  pageData: any[]
};

type State = {
  index: number,
  x: number,
  offset: number,
  xTracker: Animated.Value
};

class ViewPager extends Component<DefaultProps, Props, State> {
  props: Props;
  state: State;

  panResponder: *;
  xTracker: Animated.Value;

  static defaultProps: DefaultProps = {
    initialIndex: 0
  };

  constructor(props: Props) {
    super(props);

    const { initialIndex } = props;

    this.xTracker = new Animated.Value(0);
    this.xTracker.addListener(e => this.setState({ x: e.value }));

    this.state = {
      index: initialIndex,
      x: -width * initialIndex,
      offset: 0,
      xTracker: this.xTracker
    };
  }

  componentWillMount() {
    this.panResponder = PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onMoveShouldSetPanResponder: () => true,
      onPanResponderGrant: () => {
        this.xTracker.stopAnimation();
      },
      onPanResponderMove: (evt: *, gestureState: *) => {
        const { dx } = gestureState;
        this.setState({ offset: gestureState.dx });
        this.xTracker.setOffset(gestureState.dx);
      },
      onPanResponderRelease: (evt: *, gestureState: *) => {
        const { vx } = gestureState;
        const { x, offset } = this.state;
        const stopPosition = x + offset;
        const nextPage = this.getNextPage(stopPosition, vx);
        this.snapToPage(nextPage);
      }
    });
  }

  componentWillUnmount() {
    if (this.xTracker) {
      this.xTracker.removeAllListeners();
    }
  }

  getNextPage(x: number, vx: number = 0) {
    const isThrown = vx && (vx < -0.5 || vx > 0.5);

    let index;
    if (isThrown) {
      index =
        vx > 0
          ? Math.abs(Math.ceil(x / width))
          : Math.abs(Math.floor(x / width));
    } else {
      index = Math.abs(Math.round(x / width));
    }

    return Math.min(Math.max(index, 0), this.props.pageData.length - 1);
  }

  snapToPage = (index: number) => {
    this.setState({ index, offset: 0 });

    this.xTracker.flattenOffset();
    Animated.spring(this.xTracker, {
      toValue: -width * index,
      friction: 6
    }).start();
  };

  renderPages(pageIndex: number) {
    const { pageData, renderPage } = this.props;

    return pageData.map((page: *, index: number) => {
      return Math.abs(index - pageIndex) < 2 ? (
        <View key={index} style={[styles.page, { left: width * index }]}>
          {renderPage ? renderPage(page) : null}
        </View>
      ) : null;
    });
  }

  render() {
    const { index, xTracker } = this.state;

    return (
      <View style={styles.container}>
        <Animated.View
          {...this.panResponder.panHandlers}
          style={[styles.container, { left: xTracker }]}
        >
          {this.renderPages(index)}
        </Animated.View>
      </View>
    );
  }
}

export default ViewPager;
