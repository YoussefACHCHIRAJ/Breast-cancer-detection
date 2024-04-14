/* eslint-disable react/prop-types */
import { useCallback, useState } from "react";
import Dropzone from "react-dropzone";
import { motion } from "framer-motion";

const DragFiles = ({ setFile, setImage }) => {
  const [invalidFileType, setInvalidFileType] = useState(null);
  const onDrop = useCallback(
    (acceptedFiles) => {
      const file = acceptedFiles[0];
      if (!file?.type?.match("image/*")) {
        setInvalidFileType("Only images are accepted");
        return;
      }
      setFile(file);
      if (file) {
        setImage({
          file,
          preview: URL.createObjectURL(file),
        });
      }
    },
    [setFile, setImage]
  );
  return (
    <Dropzone onDrop={onDrop} multiple={false}>
      {({ getRootProps, getInputProps }) => (
        <section className="size-full bg-slate-100/100 rounded-xl p-2 relative z-20">
          <div {...getRootProps()} className="size-full">
            <input {...getInputProps()} id="file" className="z-30" />
            <label
              htmlFor="file"
              className="size-full border-2 border-dashed flex flex-col border-primary text-gray-700 items-center justify-center cursor-pointer p-2 rounded-xl -z-20"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5m-13.5-9L12 3m0 0 4.5 4.5M12 3v13.5"
                />
              </svg>
              <span className="text-xl font-semibold">
                Drag or drop some files here, or click to select files
              </span>
              {invalidFileType && (
                <motion.span
                  className="text-sm text-red-400"
                  initial={{ x: "-30vw", opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                >
                  {invalidFileType}
                </motion.span>
              )}
            </label>
          </div>
        </section>
      )}
    </Dropzone>
  );
};

export default DragFiles;
