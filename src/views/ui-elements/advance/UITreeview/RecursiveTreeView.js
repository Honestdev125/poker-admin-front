// material-ui
import { TreeItem, TreeView } from '@mui/lab';

// assets
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

const data = {
    id: 'root',
    name: 'Parent',
    children: [
        {
            id: '1',
            name: 'Child - 1'
        },
        {
            id: '3',
            name: 'Child - 3',
            children: [
                {
                    id: '4',
                    name: 'Child - 4'
                }
            ]
        }
    ]
};

// ==============================|| UI TREEVIEW ||============================== //

export default function RecursiveTreeView() {
    const renderTree = (nodes) => (
        <TreeItem key={nodes.id} nodeId={nodes.id} label={nodes.name}>
            {Array.isArray(nodes.children) ? nodes.children.map((node) => renderTree(node)) : null}
        </TreeItem>
    );

    return (
        <TreeView defaultCollapseIcon={<ExpandMoreIcon />} defaultExpanded={['root']} defaultExpandIcon={<ChevronRightIcon />}>
            {renderTree(data)}
        </TreeView>
    );
}
