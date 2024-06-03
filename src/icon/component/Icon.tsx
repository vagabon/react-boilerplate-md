import { memo } from 'react';
import { ButtonColorType } from '../../md/component/button/MdButton';
import { useIcon } from '../hook/useIcon';

export interface IIconProps {
  icon: string;
  className?: string;
  color?: ButtonColorType;
}

export const Icon: React.FC<IIconProps> = memo(({ icon, className, color = 'inherit' }) => {
  const { getIcon } = useIcon();

  return <div className={className}>{getIcon(icon, color)}</div>;
});
