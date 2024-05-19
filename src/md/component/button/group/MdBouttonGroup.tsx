import { ButtonGroup, ButtonGroupProps } from '@mui/material';
import React, { Children, Fragment, ReactElement, ReactNode, cloneElement, memo, useCallback } from 'react';
import { UuidUtils } from '../../../../utils/uuid/UuidUtils';

export interface IMdBouttonGroupProps extends ButtonGroupProps {}

export const MdBouttonGroup: React.FC<IMdBouttonGroupProps> = memo(({ children, ...rest }) => {
  const showButtons = useCallback(
    (children: ReactNode) => (
      <>
        {Children.toArray(children).map((child) => {
          const key = (child as React.JSX.Element).props?.id || UuidUtils.createUUID();
          return (
            <Fragment key={'test-' + key}>
              {cloneElement(child as ReactElement, { variant: rest.variant, size: rest.size })}
            </Fragment>
          );
        })}
      </>
    ),
    [rest.variant, rest.size],
  );

  return (
    <ButtonGroup {...rest} style={{ gap: '5px' }}>
      {showButtons(children)}
    </ButtonGroup>
  );
});
