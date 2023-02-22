import React from "react";
import { Text, View, Link } from "@react-pdf/renderer";

import { CONTACTS } from "../../content";
import { Section } from "../Layout";

const Contact = () => {
  return (
    <Section title={`Contact`} wrap={false}>
      {CONTACTS.map(({ title, content, url }, index) => {
        return (
          <View key={index}>
            <Text>{title}:</Text>
            {url ? (
              <Link
                style={{
                  color: "#000000",
                  marginLeft: "5px",
                }}
                src={url}
              >
                {content}
              </Link>
            ) : (
              <Text
                style={{
                  color: "#000000",
                  marginLeft: "5px",
                }}
              >
                {content}
              </Text>
            )}
          </View>
        );
      })}
    </Section>
  );
};

export default Contact;
