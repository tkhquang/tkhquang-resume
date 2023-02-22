import React from "react";
import { Text, View } from "@react-pdf/renderer";

import { WORK_EXPERIENCE } from "../../content";
import { Section } from "../Layout";

const WorkExperience = () => {
  return (
    <Section title={`Work Experience`}>
      {WORK_EXPERIENCE.map(({ title, company, duration, projects }, index) => {
        return (
          <View style={{ margin: "10px 0" }} key={index} wrap={false}>
            <Text style={{ fontSize: "12px", fontWeight: 700 }}>{title}</Text>
            <Text style={{ fontSize: "10px" }}>
              <Text style={{ fontWeight: 700 }}>{company}</Text>
              <Text>&nbsp;&nbsp;|&nbsp;&nbsp;</Text>
              <Text style={{ fontStyle: "italic" }}>{duration}</Text>
            </Text>
            {projects.map(({ name, summary, tasks, stacks }, index) => {
              return (
                <View style={{ marginLeft: "15px" }} key={index}>
                  <Text style={{ fontSize: "10px" }}>
                    <Text
                      style={{
                        fontSize: "10px",
                        fontWeight: 700,
                        color: "#0097b2",
                      }}
                    >
                      {name}
                    </Text>
                    <Text> - </Text>
                    <Text style={{ fontSize: "10px" }}>{summary}</Text>
                  </Text>
                  <View>
                    {tasks.map((task, index) => {
                      return (
                        <Text style={{ marginLeft: "5px" }} key={index}>
                          • {task}
                        </Text>
                      );
                    })}
                  </View>
                  <Text>
                    <Text>Tech Stack: </Text>
                    <Text>{stacks.join(", ")}</Text>
                  </Text>
                </View>
              );
            })}
          </View>
        );
      })}
    </Section>
  );
};

export default WorkExperience;
