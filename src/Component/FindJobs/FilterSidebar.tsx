import { Divider, RangeSlider } from "@mantine/core";
import { dropdownData } from "../../assets/Data/JobsData";
import MultiInput from "./MultiInput";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { UpdateFilter } from "../../Slices/FilterSlice";
import { useTheme } from "../../ThemeContext";
import JobImage from '../../assets/images/jobs.png';

interface FilterFormContentProps {
  value: [number, number];
  setValue: (value: [number, number]) => void;
  handleSalaryChange: (value: [number, number]) => void;
  isDarkMode: boolean;
  compact?: boolean;
}

const FilterFormContent: React.FC<FilterFormContentProps> = ({
  value,
  setValue,
  handleSalaryChange,
  isDarkMode,
  compact = false
}) => {
  return (
    <>
      {dropdownData.filter(item => item.title === "Job Type" || item.title === "Experience").map((item, index) => (
        <React.Fragment key={index}>
          <div className="mb-4">
            <MultiInput {...item} alwaysOpen />
          </div>
          {!compact && <Divider my="xs" size="xs" color={isDarkMode ? 'gray' : 'dark'} />}
        </React.Fragment>
      ))}
      <div className="mb-4">
        <div className="flex justify-between">
          <div>Salary </div>
          <div>&#8377;{value[0]}k - &#8377;{value[1]}k</div>
        </div>
        <RangeSlider 
          onChangeEnd={handleSalaryChange} 
          size="xs" 
          color="blue.4" 
          max={200} 
          value={value} 
          labelTransitionProps={{
            transition: 'skew-down',
            duration: 150,
            timingFunction: 'linear',
          }} 
          onChange={setValue} 
        />
      </div>
    </>
  );
};

const FilterSidebar = () => {
  const dispatch = useDispatch();
  const { isDarkMode } = useTheme();
  const [value, setValue] = useState<[number, number]>([0, 200]);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedFilters, setSelectedFilters] = useState<Record<string, string[]>>({});

  const handleSalaryChange = (event: [number, number]) => {
    dispatch(UpdateFilter({ salary: event }));
  };

  return (
    <>
      <div className="w-[30rem] -ml-14 relative md:block hidden">
        <img src={JobImage} alt="Job illustration" />
      </div>

      <div className={`hidden md:flex flex-col px-5 py-4 ml-7 shadow-md rounded-lg ${isDarkMode ? 'bg-cape-cod-900 text-white' : 'bg-white text-black'}`}>
        <FilterFormContent 
          value={value}
          setValue={setValue}
          handleSalaryChange={handleSalaryChange}
          isDarkMode={isDarkMode}
        />
      </div>

      <button
        className="md:hidden fixed bottom-6 left-6 z-40 h-14 w-14 rounded-full bg-blue-500 flex items-center justify-center shadow-xl"
        onClick={() => setIsOpen(!isOpen)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-white"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"
          />
        </svg>
      </button>

      {isOpen && (
  <div className="fixed inset-0 z-50 md:hidden">
    <div
      className="fixed inset-0 bg-black bg-opacity-50"
      onClick={() => setIsOpen(false)}
    />
    <div
      className={`fixed left-1/2 bottom-0 transform -translate-x-1/2 w-full max-w-md rounded-t-2xl overflow-hidden shadow-xl ${
        isDarkMode ? 'bg-cape-cod-900 text-white' : 'bg-white text-black'
      }`}
      style={{ maxHeight: '70vh' }}
    >
      <div className="flex justify-center py-2">
        <div className="w-12 h-1 rounded-full bg-gray-400"></div>
      </div>

      <div className="p-4 overflow-y-auto" style={{ maxHeight: 'calc(70vh - 20px)' }}>
        <div className="flex justify-between items-center mb-3">
          <h2 className="text-xl font-bold">Filters</h2>
          <button
            onClick={() => setIsOpen(false)}
            className="text-gray-500 hover:text-gray-700"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        {dropdownData
          .filter(item => item.title === "Job Type" || item.title === "Experience")
          .map((item, index) => (
            <div key={index} className="mb-4">
              <div className="mb-2 font-semibold">{item.title}</div>
              <div className="flex flex-wrap gap-2">
                {item.options.map((option: string) => (
                  <button
                    key={option}
                    onClick={() => {
                      setSelectedFilters((prev: Record<string, string[]>) => {
                        const prevOptions = prev[item.title] || [];
                        const isSelected = prevOptions.includes(option);
                        const updated = isSelected
                          ? prevOptions.filter((val: string) => val !== option)
                          : [...prevOptions, option];
                        return { ...prev, [item.title]: updated };
                      });
                    }}
                    className={`px-3 py-1 rounded-full border text-sm ${
                      (selectedFilters[item.title] || []).includes(option)
                        ? 'bg-blue-500 text-white border-blue-500'
                        : 'bg-gray-100 text-gray-700 border-gray-300'
                    }`}
                  >
                    {option}
                  </button>
                ))}
              </div>
            </div>
          ))}
        <div className="mb-4">
          <div className="flex justify-between">
            <div>Salary </div>
            <div>&#8377;{value[0]}k - &#8377;{value[1]}k</div>
          </div>
          <RangeSlider
            onChangeEnd={handleSalaryChange}
            size="xs"
            color="blue.4"
            max={200}
            value={value}
            labelTransitionProps={{
              transition: 'skew-down',
              duration: 150,
              timingFunction: 'linear',
            }}
            onChange={setValue}
          />
        </div>

        <div className="mt-4 pt-4 border-t border-gray-200">
          <button
            onClick={() => {
              dispatch(UpdateFilter({ salary: value, ...selectedFilters }));
              setIsOpen(false);
            }}
            className={`w-full py-2 rounded-lg font-medium ${
              isDarkMode
                ? 'bg-blue-600 hover:bg-blue-700 text-white'
                : 'bg-blue-500 hover:bg-blue-600 text-white'
            }`}
          >
            Apply Filters
          </button>
        </div>
      </div>
    </div>
  </div>
)}
    </>
  );
}

export default FilterSidebar;