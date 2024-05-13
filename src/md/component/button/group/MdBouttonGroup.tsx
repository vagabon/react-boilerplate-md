import { Theme } from '@emotion/react';
import { ButtonGroup, SxProps } from '@mui/material';
import React, { Children, Fragment, ReactElement, ReactNode, cloneElement, memo, useCallback } from 'react';
import { UuidUtils } from '../../../../utils/uuid/UuidUtils';

export interface IMdBouttonGroupProps {
  className?: string;
  variant?: 'text' | 'outlined' | 'contained';
  size?: 'small' | 'medium' | 'large';
  sx?: SxProps<Theme>;
  children: ReactNode;
}

export const MdBouttonGroup: React.FC<IMdBouttonGroupProps> = memo(
  ({ className = '', variant, size, sx, children }) => {
    const showButtons = useCallback(
      (children: ReactNode) => (
        <>
          {Children.toArray(children).map((child) => {
            const key = (child as React.JSX.Element).props?.id || UuidUtils.createUUID();
            return <Fragment key={'test-' + key}>{cloneElement(child as ReactElement, { variant, size })}</Fragment>;
          })}
        </>
      ),
      [variant, size],
    );

    return (
      <ButtonGroup variant={variant ?? 'text'} size={size ?? 'large'} sx={sx} className={className}>
        {showButtons(children)}
      </ButtonGroup>
    );
  },
);
