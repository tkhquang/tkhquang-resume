import { Font } from "@react-pdf/renderer";

import { createDocumentLayout } from "./Layout";
import LeftPanel from "./LeftPanel/LeftPanel";
import RightPanel from "./RightPanel/RightPanel";

import Montserrat from "../assets/fonts/Montserrat-Regular.ttf";
import MontserratItalic from "../assets/fonts/Montserrat-Italic.ttf";
import MontserratBold from "../assets/fonts/Montserrat-Bold.ttf";
import MontserratSemiBold from "../assets/fonts/Montserrat-SemiBold.ttf";

// Register font
Font.register({
  family: "Montserrat",
  src: Montserrat,
  fonts: [
    {
      src: Montserrat
    },
    {
      src: MontserratItalic,
      fontStyle: "italic"
    },
    {
      src: MontserratSemiBold,
      fontWeight: 900
    },
    {
      src: MontserratBold,
      fontWeight: 900
    }
  ]
});

// Disable hyphenate words
const hyphenationCallback = (word) => {
  return [word];
};

Font.registerHyphenationCallback(hyphenationCallback);

const Document = createDocumentLayout({
  leftPanel: LeftPanel,
  rightPanel: RightPanel
});

export default Document;
