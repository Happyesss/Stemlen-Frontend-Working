import { Divider, RangeSlider } from "@mantine/core";
import { dropdownData } from "../../assets/Data/JobsData";
import MultiInput from "./MultiInput";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { UpdateFilter } from "../../Slices/FilterSlice";
import { useTheme } from "../../ThemeContext";
import JobImage from '../../assets/images/jobs.png';

const FilterSidebar = () => {
  const dispatch = useDispatch();
  const { isDarkMode } = useTheme();
  const [value, setValue] = useState<[number, number]>([0, 200]);

  const handleChange = (event: any) => {
    dispatch(UpdateFilter({ salary: event }));
  };

  return (
    <><div className="w-[30rem] -ml-14 relative sm-mx:w-full">
      <img src={JobImage} alt="" className="sm-mx:w-full" />

    </div><div className={`flex flex-col px-5 py-4 ml-7 shadow-md rounded-lg sm:px-3 sm:py-2 ${isDarkMode ? 'bg-cape-cod-900 text-white' : 'bg-white text-black'}`}>

        {dropdownData.filter(item => item.title === "Job Type" || item.title === "Experience").map((item, index) => (
          <React.Fragment key={index}>
            <div className="mb-4">
              <MultiInput {...item} alwaysOpen />
            </div>
            <Divider my="xs" size="xs" color={isDarkMode ? 'gray' : 'dark'} />
          </React.Fragment>
        ))}
        <div className="mb-4">
          <div className="flex justify-between">
            <div>Salary </div>
            <div>&#8377;{value[0]}k - &#8377;{value[1]}k</div>
          </div>
          <RangeSlider onChangeEnd={handleChange} size="xs" color="blue.4" max={200} value={value} labelTransitionProps={{
            transition: 'skew-down',
            duration: 150,
            timingFunction: 'linear',
          }} onChange={setValue} />
        </div>
      </div></>
  );
}

export default FilterSidebar;
