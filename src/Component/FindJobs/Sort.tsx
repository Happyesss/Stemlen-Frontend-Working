import { useState } from 'react';
import { Combobox, useCombobox } from '@mantine/core';
import { IconAdjustments } from '@tabler/icons-react';
import { useDispatch } from 'react-redux';
import { UpdateSort } from '../../Slices/SortSlice';

const opt = ['Relevent', 'Recent posted', 'Salary(High - Low)', 'Salary(Low - High)'];
const talentSort = ['Relevent', 'Experience(High - Low)', 'Experience(Low - High)'];

const Sort=(props:any)=> {
  const dispatch = useDispatch();
  const [selectedItem, setSelectedItem] = useState<string | null>('Relevent');
  const combobox = useCombobox({
    onDropdownClose: () => combobox.resetSelectedOption(),
  });

  const options = props.sort=="job"?opt.map((item) => (
    <Combobox.Option className='text-xs' value={item} key={item}>
      {item}
    </Combobox.Option>
  )):talentSort.map((item) => (
    <Combobox.Option className='text-xs' value={item} key={item}>
      {item}
    </Combobox.Option>
  ));

  return (
    <>
      

      <Combobox
        store={combobox}
        width={250}
        position="bottom-start"
        onOptionSubmit={(val) => {
          setSelectedItem(val);
          dispatch(UpdateSort(val));
          combobox.closeDropdown();
        }}
      >
        <Combobox.Target>
         
           <div onClick={()=> combobox. toggleDropdown()} className='border cursor-pointer border-blue-400 flex items-center px-2 py-1 rounded-xl gap-2 text-sm'>
            {selectedItem}<IconAdjustments className='text-blue-400 h-5 w-5'/>
           </div>
        </Combobox.Target>

        <Combobox.Dropdown>
          <Combobox.Options>{options}</Combobox.Options>
        </Combobox.Dropdown>
      </Combobox>
    </>
  );
}
export default Sort;