import PropTypes from 'prop-types';
import { useState } from 'react';

// material-ui
import { useTheme } from '@mui/material/styles';
import { Grid, IconButton } from '@mui/material';

// third-party
import { Droppable, Draggable } from '@hello-pangea/dnd';

// project imports
import useConfig from 'hooks/useConfig';
import EditColumn from './EditColumn';
import Items from './Items';
import AddItem from './AddItem';
import AlertColumnDelete from './AlertColumnDelete';
import { gridSpacing } from 'store/constant';
import { openSnackbar } from 'store/slices/snackbar';
import { useDispatch, useSelector } from 'store';
import { deleteColumn } from 'store/slices/kanban';

// assets
import DeleteTwoToneIcon from '@mui/icons-material/DeleteTwoTone';

// column drag wrapper
const getDragWrapper = (isDragging, draggableStyle, theme, radius) => {
    const bgcolor = theme.palette.mode === 'dark' ? theme.palette.background.default : theme.palette.primary.light;
    return {
        minWidth: 250,
        border: '1px solid',
        borderColor: theme.palette.mode === 'dark' ? theme.palette.background.default : theme.palette.primary[200] + 75,
        backgroundColor: isDragging ? theme.palette.grey[50] : bgcolor,
        borderRadius: radius,
        userSelect: 'none',
        margin: `0 ${16}px 0 0`,
        height: '100%',
        ...draggableStyle
    };
};

// column drop wrapper
const getDropWrapper = (isDraggingOver, theme, radius) => {
    const bgcolor = theme.palette.mode === 'dark' ? theme.palette.background.default : theme.palette.primary.light;
    const bgcolorDrop = theme.palette.mode === 'dark' ? theme.palette.text.disabled : theme.palette.primary[200];

    return {
        background: isDraggingOver ? bgcolorDrop : bgcolor,
        padding: '8px 16px 14px',
        width: 'auto',
        borderRadius: radius
    };
};

// ==============================|| KANBAN BOARD - COLUMN ||============================== //

const Columns = ({ column, index }) => {
    const theme = useTheme();
    const dispatch = useDispatch();

    const { borderRadius } = useConfig();
    const { items, columns, columnsOrder } = useSelector((state) => state.kanban);
    const columnItems = column.itemIds.map((itemId) => items.filter((item) => item.id === itemId)[0]);

    const [open, setOpen] = useState(false);
    const handleClose = (status) => {
        setOpen(false);
        if (status) {
            dispatch(deleteColumn(column.id, columnsOrder, columns));
            dispatch(
                openSnackbar({
                    open: true,
                    message: 'Column deleted successfully',
                    anchorOrigin: { vertical: 'top', horizontal: 'right' },
                    variant: 'alert',
                    alert: {
                        color: 'success'
                    },
                    close: false
                })
            );
        }
    };

    const handleColumnDelete = () => setOpen(true);

    return (
        <Draggable draggableId={column.id} index={index}>
            {(provided, snapshot) => (
                <div
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    style={getDragWrapper(snapshot.isDragging, provided.draggableProps.style, theme, `${borderRadius}px`)}
                >
                    <Droppable droppableId={column.id} type="item">
                        {(providedDrop, snapshotDrop) => (
                            <div
                                ref={providedDrop.innerRef}
                                {...providedDrop.droppableProps}
                                style={getDropWrapper(snapshotDrop.isDraggingOver, theme, `${borderRadius}px`)}
                            >
                                <Grid container alignItems="center" spacing={gridSpacing}>
                                    <Grid item xs zeroMinWidth>
                                        <EditColumn column={column} />
                                    </Grid>
                                    <Grid item sx={{ mb: 1.5 }}>
                                        <IconButton onClick={handleColumnDelete} size="large" aria-label="Delete Columns">
                                            <DeleteTwoToneIcon fontSize="small" aria-controls="menu-simple-card" aria-haspopup="true" />
                                        </IconButton>
                                        {open && <AlertColumnDelete title={column.title} open={open} handleClose={handleClose} />}
                                    </Grid>
                                </Grid>
                                {columnItems.map((item, i) => (
                                    <Items key={i} item={item} index={i} />
                                ))}
                                {providedDrop.placeholder}
                                <AddItem columnId={column.id} />
                            </div>
                        )}
                    </Droppable>
                </div>
            )}
        </Draggable>
    );
};

Columns.propTypes = {
    column: PropTypes.object,
    index: PropTypes.number
};

export default Columns;
