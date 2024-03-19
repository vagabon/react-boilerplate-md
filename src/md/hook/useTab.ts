import { useCallback, useState } from 'react';
import { Primitif } from '../../dto';
import { useAppRouter } from '../../router';

export type TabTtype = { name: string; label: string };

export const useTab = (defaultTabs: TabTtype[]) => {
  const { handleNavigate } = useAppRouter();
  const [tabs, setTabs] = useState(defaultTabs);

  const updateTab = useCallback(
    (callback: (tab: TabTtype) => Primitif) => {
      setTabs(
        defaultTabs.map((defaultTab) => {
          return {
            ...defaultTab,
            after: callback(defaultTab),
          };
        }),
      );
    },
    [defaultTabs],
  );

  const handleChangeTab = useCallback(
    (url: string) => (value: string) => {
      handleNavigate(url + value)();
    },
    [handleNavigate],
  );

  return { tabs, updateTab, handleChangeTab };
};
