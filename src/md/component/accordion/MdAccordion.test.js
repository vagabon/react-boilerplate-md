import { render, screen } from '@testing-library/react';
import MdAccordion from './MdAccordion';

describe('MdAccordion', () => {
  test('Given MdAccordion when its mount then Alert is shown', () => {
    render(<MdAccordion title='title' description='description' />);
    expect(screen.getByTestId('Accordion')).toBeDefined();
    expect(screen.getByTestId('AccordionDetails')).toBeDefined();
    expect(screen.getByTestId('AccordionSummary')).toBeDefined();
  });
});
