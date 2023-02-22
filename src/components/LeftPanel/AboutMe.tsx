import React from "react";
import { Text } from "@react-pdf/renderer";

import { INFO } from "../../content";
import { Section } from "../Layout";

const AboutMe = () => {
  return (
    <Section title={`About Me`}>
      <Text>{INFO.summary}</Text>
    </Section>
  );
};

export default AboutMe;
