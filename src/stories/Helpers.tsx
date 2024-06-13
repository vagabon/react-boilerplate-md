import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { withTests } from '@storybook/addon-jest';
import { BrowserRouter } from 'react-router-dom';

import results from '../jest-test-results.json';

export const withProvider = (Story: React.FC) => (
  <BrowserRouter>
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Story />
    </LocalizationProvider>
  </BrowserRouter>
);

export const withTest = withTests({ results });
