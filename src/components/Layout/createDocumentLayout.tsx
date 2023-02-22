import React from "react";
import { Document, Page, View } from "@react-pdf/renderer";

type CreateDocumentLayoutOptions = {
  leftPanel: React.ComponentType;
  rightPanel: React.ComponentType;
};

function createDocumentLayout({
  leftPanel: LeftPanel,
  rightPanel: RightPanel,
}: CreateDocumentLayoutOptions) {
  const MyDocument = () => (
    <Document>
      <Page
        size="A4"
        style={{
          fontFamily: "Montserrat",
          lineHeight: "1.5",
          flexDirection: "row",
          color: "#000000",
          backgroundColor: "#E4E4E4",
        }}
      >
        <View
          style={{
            padding: "40px 10px",
            width: `${100 / 3}%`,
            backgroundColor: "#95c9d8",
          }}
        >
          <LeftPanel />
        </View>
        <View
          style={{
            padding: "40px 10px",
            width: `${(100 / 3) * 2}%`,
            backgroundColor: "#FFFFFF",
          }}
        >
          <RightPanel />
        </View>
      </Page>
    </Document>
  );

  return MyDocument;
}

export default createDocumentLayout;
