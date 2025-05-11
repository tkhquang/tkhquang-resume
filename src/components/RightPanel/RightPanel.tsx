import React from "react";
import { View } from "@react-pdf/renderer";

import Headline from "./Headline";
import WorkExperience from "./WorkExperience";
import Certifications from "./Certifications";

const RightPanel = () => {
  return (
    <View>
      <View style={{ marginLeft: "10px" }}>
        <Headline />
      </View>
      <WorkExperience />
      {/* <Certifications /> */}
    </View>
  );
};

export default RightPanel;
