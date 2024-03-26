'use client'
import * as React from 'react';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateRange } from '@mui/x-date-pickers-pro/models';
import { DateRangePicker } from '@mui/x-date-pickers-pro/DateRangePicker';
import dayjs, { Dayjs } from 'dayjs';

export default function DateRangePickerComponent({ onDateRangeChange }:{onDateRangeChange:any}) {
  const [selectedRange, setSelectedRange] = React.useState<DateRange<Dayjs>>([
      dayjs(),
      dayjs().add(1, 'day'),
  ]);

  const handleDateRangeChange = (newValue: DateRange<Dayjs>) => {
      setSelectedRange(newValue);
      if (onDateRangeChange) {
          onDateRangeChange(newValue);
      }
  };
    return (
      <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DateRangePicker
              value={selectedRange}
              onChange={onDateRangeChange}
            />
      </LocalizationProvider>
    );
  }
