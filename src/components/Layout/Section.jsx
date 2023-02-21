import React from "react";
import { Text, View } from "@react-pdf/renderer";

const Section = ({ title, children, ...props }) => {
  return (
    <View style={{ margin: "20px 10px" }} {...props}>
      <Text
        style={{
          fontSize: "16px",
          textTransform: "uppercase",
          fontWeight: 900
        }}
      >
        {title}
      </Text>
      <View
        style={{
          fontSize: "10px",
          fontWeight: 500,
          wordBreak: "normal"
        }}
      >
        {children}
      </View>
    </View>
  );
};

export default Section;
