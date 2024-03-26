'use client'
import * as React from 'react';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateRange } from '@mui/x-date-pickers-pro/models';
import { DateRangePicker } from '@mui/x-date-pickers-pro/DateRangePicker';
import dayjs, { Dayjs } from 'dayjs';

export default function DateRangePickerComponent({selectedRange, onDateRangeChange}:{selectedRange:DateRange<Dayjs>, onDateRangeChange:any}) {


    return (
      <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DateRangePicker
              value={selectedRange}
              onChange={onDateRangeChange}
            />
      </LocalizationProvider>
    );
  }
