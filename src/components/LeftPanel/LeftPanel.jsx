import React from "react";
import { View } from "@react-pdf/renderer";

import ProfileAvatar from "./ProfileAvatar";
import AboutMe from "./AboutMe";
import Skills from "./Skills";
import Links from "./Links";
import Contact from "./Contact";

const LeftPanel = () => {
  return (
    <View>
      <ProfileAvatar />
      <AboutMe />
      <Skills />
      <Links />
      <Contact />
    </View>
  );
};

export default LeftPanel;
