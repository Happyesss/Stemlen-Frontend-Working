import { Divider, Input, RangeSlider } from "@mantine/core"
import React, { useState } from "react";
import MultiInput from "../FindJobs/MultiInput";
import { searchFields } from "../../assets/Data/TalentData";
import { IconUserCircle } from "@tabler/icons-react";
import { useDispatch } from "react-redux";
import { UpdateFilter } from "../../Slices/FilterSlice";

const SearchBar = () => {
  const dispatch = useDispatch();
  const [value, setValue] = useState<[number, number]>([0, 50]);
  const [name , setName] = useState('')
  const handleChange = (name:any , event:any) => {
    if(name === "exp")
      dispatch(UpdateFilter({exp:event}));
    else{
      dispatch(UpdateFilter({name:event.target.value}));
      setName(event.target.value)
      }
    
  }
  return (
    <div className="flex px-5 py-8 !text-cape-cod-100 items-center">
        <div className="flex items-center">
            <div className="text-blue-400 bg-cape-cod-900 rounded-full p-1 mr-2"> <IconUserCircle size={25}/> </div>
            <Input defaultValue={name} onChange={(e)=>handleChange("name",e)} variant="unstyled" placeholder="Name" />
        </div>
      {
        searchFields.map((item, index) => <React.Fragment key={index}><div className="w-1/5">
          <MultiInput {...item} />
        </div>
          <Divider mr="xs" size="xs" orientation="vertical" />
        </React.Fragment>)
      }
      <div className="w-1/5 [&_.mantine-Slider-label]:!translate-y-10">
      <div className="flex justify-between">
        <div>Experiences </div>
        <div>{value[0]}(years) - {value[1]}(years)</div>
      </div>
        <RangeSlider onChangeEnd={(e)=>handleChange("exp",e)} size="xs" color="blue.4" max={50} value={value}  labelTransitionProps={{
          transition: 'skew-down',
          duration: 150,
          timingFunction: 'linear',}} onChange={setValue} />
      </div>
    </div>
  )
}

export default SearchBar