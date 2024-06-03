import { Tab, Tabs } from '@mui/material';
import { SyntheticEvent, memo, useCallback } from 'react';
import { useTranslate } from '../../../translate/hook/useTranslate';

export type TabsType = {
  name: string;
  label: string;
  after?: string;
};

export interface IMdTabsProps {
  className?: string;
  value: string;
  callback?: (value: string) => void;
  indicatorColor?: 'secondary' | 'primary';
  color?: 'secondary' | 'primary' | 'inherit';
  label?: string;
  variant?: 'standard' | 'scrollable' | 'fullWidth';
  scrollButtons?: 'auto' | true | false;
  tabs: TabsType[];
}

export const MdTabs: React.FC<IMdTabsProps> = memo(
  ({
    className = '',
    value,
    callback,
    indicatorColor = 'secondary',
    color = 'inherit',
    label,
    variant = 'fullWidth',
    scrollButtons,
    tabs,
  }) => {
    const { translate } = useTranslate();

    const handleChange = useCallback(
      (event: SyntheticEvent<Element, Event>, newValue: React.SetStateAction<string>) => {
        event.stopPropagation();
        callback?.(newValue as string);
      },
      [callback],
    );

    return (
      <Tabs
        className={className}
        value={value}
        onChange={handleChange}
        indicatorColor={indicatorColor}
        textColor={color}
        aria-label={label ?? ''}
        variant={variant}
        scrollButtons={scrollButtons ?? false}>
        {tabs.map((tab) => (
          <Tab
            key={tab.name}
            value={tab.name}
            label={translate(tab.label) + (tab.after ? ' (' + tab.after + ')' : '')}
          />
        ))}
      </Tabs>
    );
  },
);
