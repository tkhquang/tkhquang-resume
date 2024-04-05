import React from "react";
import { Text, View, Link } from "@react-pdf/renderer";

import { Section } from "@/components/Layout";
import { WORK_EXPERIENCE } from "@/content";
import { COLORS } from "@/contants";

const WorkExperience = () => {
  return (
    <Section title={`Work Experience`}>
      {WORK_EXPERIENCE.map(
        ({ title, company, url, duration, projects }, index) => {
          return (
            <View style={{ margin: "10px 0" }} key={index} wrap={false}>
              <Text style={{ fontSize: "12px", fontWeight: 700 }}>{title}</Text>
              <Text style={{ fontSize: "10px" }}>
                {url ? (
                  <Link style={{ fontWeight: 700, color: "#00000" }} src={url}>
                    {company}
                  </Link>
                ) : (
                  <Text style={{ fontWeight: 700, color: "#00000" }}>
                    {company}
                  </Text>
                )}

                <Text>&nbsp;&nbsp;|&nbsp;&nbsp;</Text>
                <Text style={{ fontStyle: "italic" }}>{duration}</Text>
              </Text>
              {projects.map(
                ({ name, url, summary, tasks, stacks, teamSize }, index) => {
                  return (
                    <View
                      style={{ marginLeft: "15px", marginTop: "10px" }}
                      key={index}
                    >
                      <Text style={{ fontSize: "10px" }}>
                        {url ? (
                          <Link
                            style={{
                              fontSize: "10px",
                              fontWeight: 700,
                              color: COLORS.primary,
                            }}
                            src={url}
                          >
                            {name}
                          </Link>
                        ) : (
                          <Text
                            style={{
                              fontSize: "10px",
                              fontWeight: 700,
                              color: COLORS.primary,
                            }}
                          >
                            {name}
                          </Text>
                        )}

                        <Text> - </Text>
                        <Text style={{ fontSize: "10px" }}>{summary}</Text>
                      </Text>
                      <View>
                        {tasks.map((task, index) => {
                          return (
                            <Text style={{ marginLeft: "5px" }} key={index}>
                              - {task}
                            </Text>
                          );
                        })}
                      </View>
                      <Text>
                        <Text
                          style={{
                            fontStyle: "italic",
                          }}
                        >
                          Team Size:&nbsp;
                        </Text>
                        <Text style={{ fontStyle: "italic" }}>{teamSize}</Text>
                      </Text>
                      <Text>
                        <Text
                          style={{
                            fontStyle: "italic",
                          }}
                        >
                          Tech Stack:&nbsp;
                        </Text>
                        <Text style={{ fontStyle: "italic" }}>
                          {stacks.join(", ")}
                        </Text>
                      </Text>
                    </View>
                  );
                }
              )}
            </View>
          );
        }
      )}
    </Section>
  );
};

export default WorkExperience;
