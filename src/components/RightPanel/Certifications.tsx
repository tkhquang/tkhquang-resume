import React from "react";
import { Text, View, Link } from "@react-pdf/renderer";

import { CERTIFICATIONS } from "../../content";
import { Section } from "../Layout";

const Certifications = () => {
  return (
    <Section title={`Certifications`}>
      {CERTIFICATIONS.map(({ organization, certificates }, index) => {
        return (
          <View key={index}>
            <Text>{organization}</Text>
            {certificates.map(
              ({ name, url, issueDate, expirationDate }, index) => {
                return (
                  <View key={index} style={{ marginLeft: "5px" }}>
                    <Text>
                      <Text>• </Text>
                      {url ? (
                        <Link src={url}>{name}</Link>
                      ) : (
                        <Text style={{ fontWeight: 700 }}>{name}</Text>
                      )}
                    </Text>
                    {(issueDate || expirationDate) && (
                      <Text style={{ marginLeft: "7px", fontStyle: "italic" }}>
                        {[issueDate, expirationDate]
                          .filter((date) => !!date)
                          .join(" - ")}
                      </Text>
                    )}
                  </View>
                );
              }
            )}
          </View>
        );
      })}
    </Section>
  );
};

export default Certifications;
