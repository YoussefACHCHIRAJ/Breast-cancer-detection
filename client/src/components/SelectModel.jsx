/* eslint-disable react/prop-types */
import { models } from "../constant";

const SelectModel = ({ selectedModel, setSelectedModel }) => {
  return (
    <div className="w-full mt-4">
      <label
        htmlFor="countries"
        className="block mb-2 text-sm font-medium text-gray-900"
      >
        Select a model
      </label>
      <select
        id="countries"
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
        value={selectedModel} onChange={e => setSelectedModel(e.target.value)}
      >
        {models.map(({label, code}) => (
          <option key={code} value={code}>{label}</option>
        ))}
      </select>
    </div>
  );
};

export default SelectModel;
