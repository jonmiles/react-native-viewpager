// @flow

import React, { Component } from "react";
import { StyleSheet, Text, View, Dimensions } from "react-native";

import { ViewPager } from "../src";
import data from "./data";
import type { PageData } from "./data";

const { width, height } = Dimensions.get("screen");

const styles = StyleSheet.create({
  container: {
    height,
    marginTop: 20,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },
  pager: {
    position: "absolute",
    top: 0,
    right: 0,
    left: 0,
    height
  },
  page: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-around",
    width
  },
  title: {
    fontSize: 36,
    padding: 10,
    textAlign: "center"
  },
  footer: {
    fontSize: 18,
    padding: 10,
    textAlign: "center"
  },
  content: {
    fontSize: 70,
    fontWeight: "900",
    paddingRight: 0,
    color: "#AAA",
    backgroundColor: "transparent",
    textAlign: "center"
  }
});

export default () => {
  const renderPage = (pageData: PageData) => {
    return pageData ? (
      <View
        style={[
          styles.page,
          { backgroundColor: pageData.style.backgroundColor }
        ]}
        key={pageData.colour}
      >
        <Text style={[styles.title, { ...pageData.style }]}>
          {pageData.colour}
        </Text>
        <Text style={[styles.content, { ...pageData.style }]}>
          {pageData.word}
        </Text>
        <Text style={[styles.footer, { ...pageData.style }]}>
          {pageData.phrase.split(" ").map((word: *, index: number) => {
            return word === pageData.word ? (
              <Text
                key={index}
                style={{ fontWeight: "900" }}
              >{`${word} `}</Text>
            ) : (
              <Text key={index}>{`${word} `}</Text>
            );
          })}
        </Text>
      </View>
    ) : null;
  };

  return (
    <View style={styles.container}>
      <View style={styles.pager}>
        {data && <ViewPager renderPage={renderPage} pageData={data} />}
      </View>
    </View>
  );
};
