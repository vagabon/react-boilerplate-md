import { Skeleton, SkeletonProps } from '@mui/material';
import { ReactNode, memo } from 'react';
import { MdTypo } from '../typo/MdTypo';

export interface IMdSkeletonProps extends SkeletonProps {
  label?: string;
  children?: ReactNode;
}

export const MdSkeleton: React.FC<IMdSkeletonProps> = memo(({ label, children, ...rest }) => {
  return (
    <Skeleton {...rest}>
      {label && <MdTypo content={label} />}
      {children}
    </Skeleton>
  );
});
