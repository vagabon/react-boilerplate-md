import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { TreeItem, TreeView } from '@mui/x-tree-view';
import { useCallback } from 'react';

export interface IMdTreeViewDto {
  id: number;
  label: string;
  childrens: IMdTreeViewDto[];
}

export interface IMdTreeViewProps {
  tree?: IMdTreeViewDto[];
  callback: (id: number) => void;
}

const MdTreeView: React.FC<IMdTreeViewProps> = ({ tree, callback }) => {
  const handleClick = useCallback(
    (nbchilds: number, id: number, callback: (id: number) => void) => () => {
      nbchilds === 0 && callback(id);
    },
    [],
  );

  const renderTree = ({ id, label, childrens }: IMdTreeViewDto) => (
    <TreeItem key={id} nodeId={id.toString()} label={label} onClick={handleClick(childrens.length, id, callback)}>
      {Array.isArray(childrens) ? childrens.map((node) => renderTree(node)) : <></>}
    </TreeItem>
  );

  return (
    <TreeView
      aria-label='file system navigator'
      defaultCollapseIcon={<ExpandMoreIcon />}
      defaultExpandIcon={<ChevronRightIcon />}
      defaultExpanded={['1']}
      sx={{ overflowX: 'hidden' }}>
      {tree?.map((node) => renderTree(node))}
    </TreeView>
  );
};

export default MdTreeView;
