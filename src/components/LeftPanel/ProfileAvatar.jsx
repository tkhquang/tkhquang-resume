import React from "react";
import { Image } from "@react-pdf/renderer";

import Me from "../../assets/images/me.png";

const ProfileAvatar = () => {
  return (
    <Image
      src={Me}
      style={{
        width: "120px",
        height: "120px",
        alignSelf: "center",
        borderRadius: "50%",
        marginBottom: "20px"
      }}
    />
  );
};

export default ProfileAvatar;
