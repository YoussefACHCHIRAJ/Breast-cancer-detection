import UploadFiles from "../components/UploadFiles";
import DiagnosticDetails from "../components/DiagnosticDetails";
import { useState } from "react";

const DiagnosticPage = () => {
  const [file, setFile] = useState(null);
  const [image, setImage] = useState(null);

  return (
    <div className="flex-1  ">
      {file ? (
        <DiagnosticDetails image={image} setFile={setFile} setImage={setImage} />
      ) : (
        <UploadFiles setFile={setFile} setImage={setImage} />
      )}
    </div>
  );
};

export default DiagnosticPage;
