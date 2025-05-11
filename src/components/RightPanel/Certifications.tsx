import React from "react";
import { Text, View, Link } from "@react-pdf/renderer";

import { Section } from "@/components/Layout";
import { CERTIFICATIONS } from "@/content";
import { COLORS } from "@/contants";

const Certifications = () => {
  return (
    <Section title={`Certifications`} wrap={false}>
      {CERTIFICATIONS.map(({ organization, certificates }, index) => {
        return (
          <View key={index}>
            <Text>{organization}</Text>
            {certificates.map(
              ({ name, url, issueDate, expirationDate }, index) => {
                return (
                  <View key={index} style={{ marginLeft: "0px" }}>
                    <Text>
                      <Text>• </Text>
                      {url ? (
                        <Link
                          src={url}
                          style={{
                            color: COLORS.onSurface,
                          }}
                        >
                          {name}
                        </Link>
                      ) : (
                        <Text style={{ fontWeight: 700 }}>{name}</Text>
                      )}
                    </Text>
                    {(issueDate || expirationDate) && (
                      <Text
                        style={{
                          marginLeft: "6px",
                          fontStyle: "italic",
                          fontSize: "9px",
                        }}
                      >
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
