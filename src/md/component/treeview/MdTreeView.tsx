import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { TreeItem, TreeView } from '@mui/x-tree-view';
import { useCallback, useEffect, useState } from 'react';

export interface IMdTreeViewDto {
  id: number;
  label: string;
  childrens: IMdTreeViewDto[];
}

export interface IMdTreeViewProps {
  defaultExpanded?: string;
  tree?: IMdTreeViewDto[];
  callback: (id: number, tool: IMdTreeViewDto) => void;
}

const MdTreeView: React.FC<IMdTreeViewProps> = ({ defaultExpanded, tree, callback }) => {
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
    <TreeItem
      key={id}
      nodeId={id.toString()}
      label={label}
      onClick={handleClick(id, { id, label, childrens }, callback)}>
      {Array.isArray(childrens) ? childrens.map((node) => renderTree(node)) : <></>}
    </TreeItem>
  );

  return (
    <TreeView
      aria-label='file system navigator'
      defaultCollapseIcon={<ExpandMoreIcon />}
      defaultExpandIcon={<ChevronRightIcon />}
      defaultExpanded={expendeds}
      defaultSelected={expendeds[expendeds.length - 1]}
      sx={{ overflow: 'auto' }}>
      {tree?.map((node) => renderTree(node))}
    </TreeView>
  );
};

export default MdTreeView;
