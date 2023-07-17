import PropTypes from 'prop-types';
import { useState } from 'react';

// material-ui
import { useTheme } from '@mui/material/styles';
import { ButtonBase, CardMedia, IconButton, Link, Menu, MenuItem, Stack, Tooltip, Typography } from '@mui/material';

// third-party
import { Draggable } from '@hello-pangea/dnd';

// project imports
import useConfig from 'hooks/useConfig';
import EditStory from '../Backlogs/EditStory';
import AlertItemDelete from './AlertItemDelete';
import { openSnackbar } from 'store/slices/snackbar';
import { useDispatch, useSelector } from 'store';
import { selectItem, deleteItem } from 'store/slices/kanban';

// assets
import MoreVertTwoToneIcon from '@mui/icons-material/MoreVertTwoTone';
import MenuBookTwoToneIcon from '@mui/icons-material/MenuBookTwoTone';

const backImage = require.context('assets/images/profile', true);

// item drag wrapper
const getDragWrapper = (isDragging, draggableStyle, theme, radius) => {
    const bgcolor = theme.palette.mode === 'dark' ? theme.palette.background.paper + 90 : theme.palette.grey[50];
    return {
        userSelect: 'none',
        margin: `0 0 ${8}px 0`,
        padding: 16,
        border: '1px solid',
        borderColor: theme.palette.mode === 'dark' ? theme.palette.background.default : theme.palette.primary[200] + 75,
        backgroundColor: isDragging ? bgcolor : theme.palette.background.paper,
        borderRadius: radius,
        ...draggableStyle
    };
};

// ==============================|| KANBAN BOARD - ITEMS ||============================== //

const Items = ({ item, index }) => {
    const theme = useTheme();
    const dispatch = useDispatch();
    const backProfile = item.image && backImage(`./${item.image}`);

    const { borderRadius } = useConfig();
    const kanban = useSelector((state) => state.kanban);
    const { userStory, items, columns } = kanban;

    const itemStory = userStory.filter((story) => story?.itemIds?.filter((itemId) => itemId === item.id)[0])[0];

    const handlerDetails = (id) => {
        dispatch(selectItem(id));
    };

    const [anchorEl, setAnchorEl] = useState(null);
    const handleClick = (event) => {
        setAnchorEl(event?.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const [open, setOpen] = useState(false);
    const handleModalClose = (status) => {
        setOpen(false);
        if (status) {
            dispatch(deleteItem(item.id, items, columns, userStory));
            dispatch(
                openSnackbar({
                    open: true,
                    message: 'Task Deleted successfully',
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

    const [openStoryDrawer, setOpenStoryDrawer] = useState(false);
    const handleStoryDrawerOpen = () => {
        setOpenStoryDrawer((prevState) => !prevState);
    };

    const editStory = () => {
        setOpenStoryDrawer((prevState) => !prevState);
    };

    return (
        <Draggable key={item.id} draggableId={item.id} index={index}>
            {(provided, snapshot) => (
                <div
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    style={getDragWrapper(snapshot.isDragging, provided.draggableProps.style, theme, `${borderRadius}px`)}
                >
                    <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ mb: itemStory ? -0.75 : 0 }}>
                        <Typography
                            onClick={() => handlerDetails(item.id)}
                            variant="subtitle1"
                            sx={{
                                display: 'inline-block',
                                width: 'calc(100% - 34px)',
                                textOverflow: 'ellipsis',
                                whiteSpace: 'nowrap',
                                overflow: 'hidden',
                                verticalAlign: 'middle',
                                cursor: 'pointer'
                            }}
                        >
                            {item.title}
                        </Typography>

                        <ButtonBase sx={{ borderRadius: '12px' }} onClick={handleClick} aria-controls="menu-comment" aria-haspopup="true">
                            <IconButton component="span" size="small" disableRipple aria-label="more options">
                                <MoreVertTwoToneIcon fontSize="inherit" />
                            </IconButton>
                        </ButtonBase>
                        <Menu
                            id="menu-comment"
                            anchorEl={anchorEl}
                            keepMounted
                            open={Boolean(anchorEl)}
                            onClose={handleClose}
                            variant="selectedMenu"
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'right'
                            }}
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right'
                            }}
                        >
                            <MenuItem
                                onClick={() => {
                                    handleClose();
                                    handlerDetails(item.id);
                                }}
                            >
                                Edit
                            </MenuItem>
                            <MenuItem
                                onClick={() => {
                                    handleClose();
                                    setOpen(true);
                                }}
                            >
                                Delete
                            </MenuItem>
                        </Menu>
                        {open && <AlertItemDelete title={item.title} open={open} handleClose={handleModalClose} />}
                    </Stack>
                    {itemStory && (
                        <>
                            <Stack direction="row" spacing={0.5} alignItems="center">
                                <Tooltip title="User Story">
                                    <MenuBookTwoToneIcon color="secondary" sx={{ fontSize: '0.875rem' }} />
                                </Tooltip>
                                <Tooltip title={itemStory.title}>
                                    <Link
                                        variant="caption"
                                        color="secondary"
                                        underline="hover"
                                        onClick={editStory}
                                        sx={{ cursor: 'pointer', pt: 0.5 }}
                                    >
                                        User Story #{itemStory.id}
                                    </Link>
                                </Tooltip>
                            </Stack>
                            {openStoryDrawer && (
                                <EditStory story={itemStory} open={openStoryDrawer} handleDrawerOpen={handleStoryDrawerOpen} />
                            )}
                        </>
                    )}
                    {backProfile && (
                        <CardMedia
                            component="img"
                            image={backProfile}
                            sx={{ width: '100%', borderRadius: 1, mt: 1.5 }}
                            title="Slider5 image"
                        />
                    )}
                </div>
            )}
        </Draggable>
    );
};

Items.propTypes = {
    index: PropTypes.number,
    item: PropTypes.object
};

export default Items;
