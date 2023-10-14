import * as React from 'react';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

export default function ColorToggleButton({
  value, setValue
}: {value: string, setValue: any}) {

  const handleChange = (
    event: React.MouseEvent<HTMLElement>,
    newAlignment: string,
  ) => {
    setValue(newAlignment);
  };

  return (
    <ToggleButtonGroup
      color="primary"
      value={value}
      exclusive
      onChange={handleChange}
      aria-label="Platform"
    >
      <ToggleButton value="list">List</ToggleButton>
      <ToggleButton value="map">Map</ToggleButton>
    </ToggleButtonGroup>
  );
}
