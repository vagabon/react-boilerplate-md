import { render, screen } from '@testing-library/react';
import MdButton from '../MdButton';
import MdBouttonGroup from './MdBouttonGroup';

describe('MdBouttonGroup', () => {
  test('Given MdBouttonGroup when its mount then ButtonGroup is shown', () => {
    render(
      <MdBouttonGroup>
        <MdButton></MdButton>
      </MdBouttonGroup>,
    );
    expect(screen.getByTestId('ButtonGroup')).toBeDefined();
  });
});
