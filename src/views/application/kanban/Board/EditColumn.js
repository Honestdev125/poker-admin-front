import PropTypes from 'prop-types';

// material-ui
import { useTheme } from '@mui/material/styles';
import { OutlinedInput } from '@mui/material';

// project imports
import { useDispatch, useSelector } from 'store';
import { editColumn } from 'store/slices/kanban';

// ==============================|| KANBAN BOARD - COLUMN EDIT ||============================== //

const EditColumn = ({ column }) => {
    const theme = useTheme();
    const dispatch = useDispatch();

    const { columns } = useSelector((state) => state.kanban);

    const handleColumnRename = (event) => {
        dispatch(
            editColumn(
                {
                    id: column.id,
                    title: event.target.value,
                    itemIds: column.itemIds
                },
                columns
            )
        );
    };

    return (
        <OutlinedInput
            fullWidth
            value={column.title}
            onChange={handleColumnRename}
            sx={{
                mb: 1.5,
                '& input:focus': {
                    bgcolor: theme.palette.mode === 'dark' ? theme.palette.dark[800] : theme.palette.grey[50]
                },
                '& input:hover': {
                    bgcolor: theme.palette.mode === 'dark' ? theme.palette.dark[800] : theme.palette.grey[50]
                },
                '& input:hover + fieldset': {
                    display: 'block'
                },
                '&, & input': { bgcolor: 'transparent' },
                '& fieldset': { display: 'none' },
                '& input:focus + fieldset': { display: 'block' }
            }}
            placeholder="title"
        />
    );
};

EditColumn.propTypes = {
    column: PropTypes.object
};

export default EditColumn;
