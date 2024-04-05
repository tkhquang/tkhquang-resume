import React from "react";
import { Text, View, Link } from "@react-pdf/renderer";
import { Section } from "@/components/Layout";
import { CONTACTS } from "@/content";
import { COLORS } from "@/contants";

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
                  color: COLORS.onSurface,
                  marginLeft: "5px",
                }}
                src={url}
              >
                {content}
              </Link>
            ) : (
              <Text
                style={{
                  color: COLORS.onSurface,
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
