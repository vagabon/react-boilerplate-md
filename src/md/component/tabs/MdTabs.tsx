import { Tab, Tabs } from '@mui/material';
import { SyntheticEvent, memo, useCallback } from 'react';
import { useAppTranslate } from '../../../translate';

export type TabsType = {
  name: string;
  label: string;
  after?: string;
};

export interface IMdTabsProps {
  value: string;
  callback?: (value: string) => void;
  indicatorColor?: 'secondary' | 'primary';
  color?: 'secondary' | 'primary' | 'inherit';
  label?: string;
  variant?: 'standard' | 'scrollable' | 'fullWidth';
  scrollButtons?: 'auto' | true | false;
  tabs: TabsType[];
}

const MdTabs: React.FC<IMdTabsProps> = memo(({
  value,
  callback,
  indicatorColor,
  color,
  label,
  variant,
  scrollButtons,
  tabs,
}) => {
  const { t } = useAppTranslate();

  const handleChange = useCallback(
    (event: SyntheticEvent<Element, Event>, newValue: React.SetStateAction<string>) => {
      event.stopPropagation();
      callback?.(newValue as string);
    },
    [callback],
  );

  return (
    <Tabs
      value={value}
      onChange={handleChange}
      indicatorColor={indicatorColor ?? 'secondary'}
      textColor={color ?? 'secondary'}
      aria-label={label ?? ''}
      variant={variant ?? 'fullWidth'}
      scrollButtons={scrollButtons ?? false}>
      {tabs.map((tab) => (
        <Tab key={tab.name} value={tab.name} label={t(tab.label) + (tab.after ? ' (' + tab.after + ')' : '')} />
      ))}
    </Tabs>
  );
});

export default MdTabs;
