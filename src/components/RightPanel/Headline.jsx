import React from "react";
import { Text, View } from "@react-pdf/renderer";

import { INFO } from "../../content";

const Headline = () => {
  return (
    <View>
      <View
        style={{
          color: "#0097b2",
          fontSize: "24px",
          textTransform: "uppercase",
          fontWeight: 900,
          lineHeight: 1
        }}
      >
        <Text>{INFO.firstName}</Text>
        <Text>{INFO.lastName}</Text>
      </View>
      <View style={{ marginTop: "10px" }}>
        <Text
          style={{
            color: "#0097b2",
            fontSize: "16px",
            textTransform: "uppercase",
            fontWeight: 900
          }}
        >
          {INFO.title}
        </Text>
      </View>
    </View>
  );
};

export default Headline;
