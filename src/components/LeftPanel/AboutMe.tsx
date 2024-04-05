import React from "react";
import { Text } from "@react-pdf/renderer";

import { Section } from "@/components/Layout";
import { INFO } from "@/content";

const AboutMe = () => {
  return (
    <Section title={`About Me`}>
      <Text>{INFO.summary}</Text>
    </Section>
  );
};

export default AboutMe;
