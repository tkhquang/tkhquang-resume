import React from "react";
import { Text, View, Link } from "@react-pdf/renderer";
import { Section } from "@/components/Layout";
import { LINKS } from "@/content";
import { COLORS } from "@/contants";

const Links = () => {
  return (
    <Section title={`Links`} wrap={false}>
      {LINKS.map(({ title, content, url }, index) => {
        return (
          <View key={index}>
            <Text>{title}:</Text>
            <Link
              style={{
                color: COLORS.onSurface,
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
