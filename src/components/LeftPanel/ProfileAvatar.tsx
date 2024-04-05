import React from "react";
import { Image, View } from "@react-pdf/renderer";

import { COLORS } from "@/contants";
import Me from "@/assets/images/Aleks.jpg";

const ProfileAvatar = () => {
  return (
    <View
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        alignSelf: "center",
        marginBottom: "20px",
        backgroundColor: COLORS.primary,
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
