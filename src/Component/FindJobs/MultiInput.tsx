import { useEffect, useState } from 'react';
import { Checkbox, Combobox, Group, Input, Pill, PillsInput, useCombobox } from '@mantine/core';
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

  const values = value
    .slice(0, 1)
    .map((item) => (
      <Pill key={item} withRemoveButton onRemove={() => handleValueRemove(item)}>
        {item}
      </Pill>
    ));

  const options = data.filter((item) => item.toLowerCase().includes(search.trim().toLowerCase())).map((item) => (
    <Combobox.Option value={item} key={item} active={value.includes(item)} >
      <Group gap="sm" >
        <Checkbox size='xs'
          checked={value.includes(item)}
          onChange={() => { }}
          aria-hidden
          tabIndex={-1}
          style={{ pointerEvents: 'none' }}
        />
        <span className={isDarkMode ? ' text-cape-cod-300' : 'text-cape-cod-700'}>{item}</span>
      </Group>
    </Combobox.Option>
  ));

  return (
    <Combobox store={combobox} onOptionSubmit={handleValueSelect} withinPortal={false}>
      <Combobox.DropdownTarget>
        <PillsInput variant='unstyled' rightSection={<IconSelector />} onClick={() => combobox.toggleDropdown()}
          leftSection={
            <div className={`p-1 rounded-full mr-2 ${isDarkMode ? 'text-blue-400 bg-cape-cod-900' : 'text-blue-600 bg-gray-200'}`}><props.icon /></div>
          }>
          <Pill.Group>
            {value.length > 0 ? (
              <>
                {values}
                {value.length > 1 && (
                  <Pill>+{value.length - 1} more</Pill>
                )}
              </>
            ) : (
              <Input.Placeholder className={isDarkMode ? ' text-cape-cod-200' : 'text-gray-500'}>{props.title}</Input.Placeholder>
            )}
          </Pill.Group>
        </PillsInput>
      </Combobox.DropdownTarget>

      <Combobox.Dropdown
        className={isDarkMode ? "!bg-cape-cod-900 text-white !border-cape-cod-700" : "bg-white text-black border-gray-300"}
      >

        <Combobox.Search
          value={search}
          onChange={(event) => setSearch(event.currentTarget.value)}
          placeholder="Search options"
        />
        <Combobox.Options>
          {options}

          {!exactOptionMatch && search.trim().length > 0 && (
            <Combobox.Option value="$create">+ Create {search}</Combobox.Option>
          )}

          {exactOptionMatch && search.trim().length > 0 && options.length === 0 && (
            <Combobox.Empty>Nothing found</Combobox.Empty>
          )}
        </Combobox.Options>
      </Combobox.Dropdown>
    </Combobox>
  );
}
export default MultiInput