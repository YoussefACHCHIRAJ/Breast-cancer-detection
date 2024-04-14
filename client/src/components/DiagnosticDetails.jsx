/* eslint-disable react/prop-types */
import { motion } from "framer-motion";
import Image from "./Image";
import Result from "./Result";
import { useState } from "react";
import useDiagnostic from "../hooks/useDiagnostic";
import Loading from "./Loading";
import ErrorMessage from "./ErrorMessage";
import ReadyToStart from "./ReadyToStart";
import { childrenVariants, containerVariants, models } from "../constant";
import SelectModel from "./SelectModel";

const DiagnosticDetails = ({ image, setFile, setImage }) => {
  const [result, setResult] = useState(null);
  const [selectedModel, setSelectedModel] = useState(models[0]?.code);
  const {
    mutate: startDiagnostic,
    isLoading,
    error,
    isError,
  } = useDiagnostic({
    onSuccess: (data) => {
      setResult(data);
    },
  });

  const handleCancel = () => {
    setFile(null);
    setImage(null);
  };

  const handleStartDiagnostic = async () => {
    if (isLoading) return;
    try {
      startDiagnostic({file: image?.file, selectedModel});
    } catch (error) {
      console.error("Error starting diagnostic:", error);
    }
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="h-[35em]  lg:h-[28em] flex gap-2 justify-center items-center lg:items-start flex-col lg:flex-row mt-0 md:mt-12 bg-slate-50/50 p-4 rounded-3xl"
    >
      <Image image={image} />

      <div className=" flex-1 h-full flex flex-col pt-3 md:pt-0  px-4  w-full mx-6">
        <div className="w-full h-1/2 mb-3">
          {isError ? (
            <ErrorMessage message={error?.message} />
          ) : isLoading ? (
            <Loading />
          ) : result ? (
            <Result res={result} />
          ) : (
            <ReadyToStart />
          )}
        </div>
        <div>
          <SelectModel
            selectedModel={selectedModel}
            setSelectedModel={setSelectedModel}
          />
          <div className="flex flex-col md:flex-row items-center justify-center md:gap-3 mx-6 my-2 ">
            <motion.button
              type="button"
              onClick={handleStartDiagnostic}
              className={`px-6 py-2 mt-4 border-2 rounded-xl md:text-md text-white text-sm font-bold md:w-1/2 w-full block ${
                isLoading
                  ? "bg-gray-300 border-gray-300 cursor-wait"
                  : "border-green-600 bg-green-500 hover:bg-green-400"
              }`}
              variants={childrenVariants}
            >
              Start the diagnostic
            </motion.button>
            <motion.button
              type="button"
              onClick={handleCancel}
              className="px-6 py-2 mt-2 md:mt-4 border-2 text-sm md:text-md border-red-600 rounded-xl bg-red-500 hover:bg-red-400  text-white font-bold md:w-1/2 w-full block"
              variants={childrenVariants}
            >
              Cancel
            </motion.button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default DiagnosticDetails;
