import ReactPDF from "@react-pdf/renderer";
import Document from "../src/components/Document";

ReactPDF.render(<Document />, `dist/Quang_Trinh_Khac-Resume.pdf`);
