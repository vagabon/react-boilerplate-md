import { ChevronRight as ChevronRightIcon, ExpandMore as ExpandMoreIcon } from '@mui/icons-material';
import { SimpleTreeView, TreeItem } from '@mui/x-tree-view';
import { memo, useCallback, useEffect, useState } from 'react';

export interface IMdTreeViewDto {
  id: number;
  label: string;
  childrens: IMdTreeViewDto[];
}

export interface IMdTreeViewProps {
  className?: string;
  defaultExpanded?: string;
  tree?: IMdTreeViewDto[];
  callback: (id: number, tool: IMdTreeViewDto) => void;
}

export const MdTreeView: React.FC<IMdTreeViewProps> = memo(({ className = '', defaultExpanded, tree, callback }) => {
  const [expendeds, setExpendeds] = useState<string[]>(defaultExpanded?.split(',') ?? []);

  useEffect(() => {
    setExpendeds(defaultExpanded?.split(',') ?? []);
  }, [defaultExpanded]);

  const handleClick = useCallback(
    (id: number, tool: IMdTreeViewDto, callback: (id: number, tool: IMdTreeViewDto) => void) => () => {
      callback(id, tool);
    },
    [],
  );

  const renderTree = ({ id, label, childrens }: IMdTreeViewDto) => (
    // @ts-expect-error wait for good react-19 support
    <TreeItem
      key={id}
      className={className}
      itemId={id.toString()}
      label={label}
      onClick={handleClick(id, { id, label, childrens }, callback)}>
      {Array.isArray(childrens) ? childrens.map((node) => renderTree(node)) : <></>}
    </TreeItem>
  );

  return (
    <SimpleTreeView
      className='overflow-auto'
      aria-label='file system navigator'
      slots={{ collapseIcon: ExpandMoreIcon, expandIcon: ChevronRightIcon }}
      defaultExpandedItems={expendeds}
      defaultSelectedItems={expendeds[expendeds.length - 1]}>
      {tree?.map((node) => renderTree(node))}
    </SimpleTreeView>
  );
});
