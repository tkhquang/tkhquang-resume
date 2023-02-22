import React from "react";
import { Text, View, Link } from "@react-pdf/renderer";

import { LINKS } from "../../content";
import { Section } from "../Layout";

const Links = () => {
  return (
    <Section title={`Links`}>
      {LINKS.map(({ title, content, url }, index) => {
        return (
          <View key={index}>
            <Text>{title}:</Text>
            <Link
              style={{
                color: "#000000",
                marginLeft: "5px",
              }}
              src={url}
            >
              {content}
            </Link>
          </View>
        );
      })}
    </Section>
  );
};

export default Links;
