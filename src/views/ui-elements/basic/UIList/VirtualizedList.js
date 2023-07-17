// material-ui
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';

// third party
import { FixedSizeList } from 'react-window';

// list render
function renderRow(props) {
    const { index, style } = props;

    return (
        <ListItemButton style={style} key={index}>
            <ListItemText primary={`Item ${index + 1}`} />
        </ListItemButton>
    );
}

// ================================|| UI LIST - SCROLLABLE ||================================ //

export default function VirtualizedList() {
    return (
        <div>
            <FixedSizeList height={280} width="auto" itemSize={46} itemCount={200}>
                {renderRow}
            </FixedSizeList>
        </div>
    );
}
