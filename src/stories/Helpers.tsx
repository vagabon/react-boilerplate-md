import { withTests } from '@storybook/addon-jest';
import { BrowserRouter } from 'react-router-dom';

import results from '../jest-test-results.json';

export const withProvider = (Story: React.FC) => (
  <BrowserRouter>
    <Story />
  </BrowserRouter>
);

export const withTest = withTests({ results });
