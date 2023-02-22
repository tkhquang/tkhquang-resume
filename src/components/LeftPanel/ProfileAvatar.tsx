import React from "react";
import { Image, View } from "@react-pdf/renderer";

import Me from "../../assets/images/me.png";

const ProfileAvatar = () => {
  return (
    <View
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        alignSelf: "center",
        marginBottom: "20px",
        backgroundColor: "#0097b2",
        width: "120px",
        height: "120px",
        borderRadius: "50%",
      }}
    >
      <Image
        src={Me}
        style={{
          width: "115px",
          height: "115px",
          borderRadius: "50%",
        }}
      />
    </View>
  );
};

export default ProfileAvatar;
