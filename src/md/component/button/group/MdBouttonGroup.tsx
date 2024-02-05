import { Theme } from '@emotion/react';
import { ButtonGroup, SxProps } from '@mui/material';
import { Children, Fragment, ReactElement, ReactNode, cloneElement, useCallback } from 'react';

export interface IMdBouttonGroupProps {
  variant?: 'text' | 'outlined' | 'contained';
  size?: 'small' | 'medium' | 'large';
  sx?: SxProps<Theme>;
  children: ReactNode;
}

const MdBouttonGroup: React.FC<IMdBouttonGroupProps> = ({ variant, size, sx, children }) => {
  const showButtons = useCallback(
    (children: ReactNode) => (
      <>
        {Children.toArray(children).map((child, index) => (
          <Fragment key={'test-' + index}>{cloneElement(child as ReactElement, { variant, size })}</Fragment>
        ))}
      </>
    ),
    [variant, size],
  );

  return (
    <ButtonGroup variant={variant ?? 'text'} size={size ?? 'large'} sx={sx}>
      {showButtons(children)}
    </ButtonGroup>
  );
};

export default MdBouttonGroup;
