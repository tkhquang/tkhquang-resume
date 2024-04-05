import React from "react";
import { Text, View } from "@react-pdf/renderer";

import { INFO } from "@/content";
import { COLORS } from "@/contants";

const Headline = () => {
  return (
    <View>
      <View
        style={{
          color: COLORS.primary,
          fontSize: "24px",
          textTransform: "uppercase",
          fontWeight: 900,
          lineHeight: 1,
        }}
      >
        <Text>{INFO.firstName}</Text>
        <Text>{INFO.lastName}</Text>
      </View>
      <View style={{ marginTop: "10px" }}>
        <Text
          style={{
            color: COLORS.primary,
            fontSize: "16px",
            textTransform: "uppercase",
            fontWeight: 900,
          }}
        >
          {INFO.title}
        </Text>
      </View>
    </View>
  );
};

export default Headline;
