import { useEffect, useState } from 'react';
import { Checkbox, Combobox, Group, Pill, PillsInput, useCombobox } from '@mantine/core';
import { IconSelector } from '@tabler/icons-react';
import { useDispatch } from 'react-redux';
import { UpdateFilter } from '../../Slices/FilterSlice';
import { useTheme } from '../../ThemeContext';

const MultiInput = (props: any) => {
  const dispatch = useDispatch();
  const { isDarkMode } = useTheme();

  useEffect(() => {
    setData(props.options);
  }, [props.options]);

  const combobox = useCombobox({
    onDropdownClose: () => combobox.resetSelectedOption(),
    onDropdownOpen: () => combobox.updateSelectedOptionIndex('active'),
  });

  const [search, setSearch] = useState('');
  const [data, setData] = useState<string[]>([]);
  const [value, setValue] = useState<string[]>([]);

  const exactOptionMatch = data.some((item) => item === search);

  const handleValueSelect = (val: string) => {
    setSearch('');

    if (val === '$create') {
      setData((current) => [...current, search]);
      setValue((current) => [...current, search]);
      dispatch(UpdateFilter({ [props.title]: [...value, search] }));
    } else {
      dispatch(UpdateFilter({ [props.title]: value.includes(val) ? value.filter((v) => v !== val) : [...value, val] }));
      setValue((current) =>
        current.includes(val) ? current.filter((v) => v !== val) : [...current, val]
      );
    }
  };

  const handleValueRemove = (val: string) => {
    dispatch(UpdateFilter({ [props.title]: value.filter((v) => v !== val) }));
    setValue((current) => current.filter((v) => v !== val));
  };

  const values = value.map((item) => (
    <Pill key={item} withRemoveButton onRemove={() => handleValueRemove(item)}>
      {item}
    </Pill>
  ));

  const options = data
    .filter((item) => item.toLowerCase().includes(search.trim().toLowerCase()))
    .map((item) => (
      <Combobox.Option value={item} key={item} active={value.includes(item)}>
        <Group gap="sm">
          <Checkbox
            size="xs"
            checked={value.includes(item)}
            onChange={() => {}}
            aria-hidden
            tabIndex={-1}
            style={{ pointerEvents: 'none' }}
          />
          <span className={isDarkMode ? 'text-cape-cod-300' : 'text-cape-cod-700'}>
            {item}
          </span>
        </Group>
      </Combobox.Option>
    ));

    return (
      <Combobox store={combobox} onOptionSubmit={handleValueSelect} withinPortal={false}>
        <Combobox.DropdownTarget>
          <PillsInput
            variant="unstyled"
            onClick={() => combobox.openDropdown()}
            leftSection={
              <div
                className={`p-1 rounded-full mr-2 ${
                  isDarkMode ? 'text-blue-400 bg-cape-cod-900' : 'text-blue-600 bg-gray-200'
                }`}
              >
                <props.icon />
              </div>
            }
            className={isDarkMode ? 'bg-cape-cod-900' : 'bg-white'} // Added background control
          >
            <Pill.Group>
              {values}
              <Combobox.EventsTarget>
                <PillsInput.Field
                  className={`${
                    isDarkMode 
                      ? '!text-white placeholder-cape-cod-400'  // Force white text in dark mode
                      : 'text-black placeholder-gray-500'
                  } ml-2 flex-1 bg-transparent`} // Added bg-transparent
                  placeholder={props.title}
                  value={search}
                  onChange={(event) => {
                    setSearch(event.currentTarget.value);
                    combobox.openDropdown();
                    combobox.updateSelectedOptionIndex();
                  }}
                  onFocus={() => combobox.openDropdown()}
                  onBlur={() => combobox.closeDropdown()}
                />
              </Combobox.EventsTarget>
            </Pill.Group>
          </PillsInput>
        </Combobox.DropdownTarget>
  
        <Combobox.Dropdown
          className={
            isDarkMode
              ? '!bg-cape-cod-900 !text-cape-cod-100 !border-cape-cod-700' // Improved text contrast
              : 'bg-white text-black border-gray-300'
          }
        >
          <Combobox.Options>
            {options}
  
            {!exactOptionMatch && search.trim().length > 0 && (
              <Combobox.Option 
                value="$create"
                className={isDarkMode ? 'hover:!bg-cape-cod-800' : ''}
              >
                + Create {search}
              </Combobox.Option>
            )}
  
            {exactOptionMatch && search.trim().length > 0 && options.length === 0 && (
              <Combobox.Empty className={isDarkMode ? '!text-cape-cod-300' : ''}>
                Nothing found
              </Combobox.Empty>
            )}
          </Combobox.Options>
        </Combobox.Dropdown>
      </Combobox>
    );
  };

export default MultiInput;