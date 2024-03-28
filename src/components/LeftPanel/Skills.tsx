import React from "react";
import { Text, View } from "@react-pdf/renderer";

import { SKILLS } from "../../content";
import { Section } from "../Layout";

const Skills = () => {
  return (
    <Section title={`Skills`}>
      {SKILLS.map(({ name, subskills }, index) => {
        return (
          <View key={index}>
            <Text>{name}</Text>
            {subskills.map((subskill, index) => {
              return (
                <Text key={index} style={{ marginLeft: "10px" }}>
                  - {subskill}
                </Text>
              );
            })}
          </View>
        );
      })}
    </Section>
  );
};

export default Skills;
