import { forwardRef } from 'react';
import {
  MultiSelect,
  MultiSelectProps,
  Box,
  CloseButton,
  SelectItemProps,
  MultiSelectValueProps,
} from '@mantine/core';

const countriesData = [
  { label: 'United States', value: 'US' },
  { label: 'Great Britain', value: 'GB' },
  { label: 'Finland', value: 'FI' },
  { label: 'France', value: 'FR' },
  { label: 'Russia', value: 'RU' },
];


function Value({
  value,
  label,
  onRemove,
  classNames,
  ...others
}) {
  return (
    <div {...others}>
      <Box
        sx={() => ({
          display: 'flex',
          cursor: 'default',
          alignItems: 'center',
          paddingLeft: 10,
          borderRadius: 4,
        })}
      >
        <Box sx={{ lineHeight: 1, fontSize: 12 }}>{label}</Box>
        <CloseButton
          onMouseDown={onRemove}
          variant="transparent"
          size={22}
          iconSize={14}
          tabIndex={-1}
          className="text-white"
        />
      </Box>
    </div>
  );
}

const Item = forwardRef(({ label, value, ...others }, ref) => {
  return (
    <div ref={ref} {...others}>
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <div>{label}</div>
      </Box>
    </div>
  );
});

export default function Demo({MultiSelectProps, hiddenTagData}) {
  return (
    <MultiSelect
      data={hiddenTagData}
      limit={20}
      classNames={{value: "rounded-full bg-blue-300 text-white"}}
      valueComponent={Value}
      itemComponent={Item}
      searchable
      placeholder="Pick countries"
      label="Which countries you visited last year?"
      {...MultiSelectProps}
    />
  );
}