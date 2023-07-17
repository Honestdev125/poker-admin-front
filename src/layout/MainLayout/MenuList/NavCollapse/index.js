import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

// material-ui
import { styled, useTheme } from '@mui/material/styles';
import {
    Box,
    ClickAwayListener,
    Collapse,
    List,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Paper,
    Popper,
    Typography,
    useMediaQuery
} from '@mui/material';

// project imports
import NavItem from '../NavItem';
import Transitions from 'ui-component/extended/Transitions';

import { useSelector } from 'store';
import LAYOUT_CONST from 'constant';
import useConfig from 'hooks/useConfig';

// assets
import { IconChevronDown, IconChevronRight, IconChevronUp } from '@tabler/icons';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

// mini-menu - wrapper
const PopperStyledMini = styled(Popper)(({ theme }) => ({
    overflow: 'visible',
    zIndex: 1202,
    minWidth: 180,
    '&:before': {
        content: '""',
        backgroundColor: theme.palette.background.paper,
        transform: 'translateY(-50%) rotate(45deg)',
        zIndex: 120,
        borderLeft: `1px solid ${theme.palette.grey.A800}`,
        borderBottom: `1px solid ${theme.palette.grey.A800}`
    }
}));

// horizontal-menu - wrapper
const PopperStyled = styled(Popper)(({ theme }) => ({
    overflow: 'visible',
    zIndex: 1202,
    minWidth: 180,
    '&:before': {
        content: '""',
        display: 'block',
        position: 'absolute',
        top: 34,
        left: -5,
        width: 12,
        height: 12,
        transform: 'translateY(-50%) rotate(45deg)',
        zIndex: 120,
        borderWidth: '6px',
        borderStyle: 'solid',
        borderColor: `transparent transparent ${theme.palette.background.paper}  ${theme.palette.background.paper}`
    },
    '&[data-popper-placement="left-start"]:before': {
        left: 'auto',
        right: -5,
        borderColor: `${theme.palette.background.paper}  ${theme.palette.background.paper} transparent transparent`
    },
    '&[data-popper-placement="left-end"]:before': {
        top: 'auto',
        bottom: 15,
        left: 'auto',
        right: -5,
        borderColor: `${theme.palette.background.paper}  ${theme.palette.background.paper} transparent transparent`
    },
    '&[data-popper-placement="right-end"]:before': {
        top: 'auto',
        bottom: 15
    }
}));

// ==============================|| SIDEBAR MENU LIST COLLAPSE ITEMS ||============================== //

const NavCollapse = ({ menu, level, parentId }) => {
    const theme = useTheme();
    const matchDownMd = useMediaQuery(theme.breakpoints.down('md'));

    const { layout, borderRadius } = useConfig();
    const { drawerOpen } = useSelector((state) => state.menu);

    const [open, setOpen] = useState(false);
    const [selected, setSelected] = useState(null);
    const [anchorEl, setAnchorEl] = useState(null);

    const handleClickMini = (event) => {
        setAnchorEl(null);
        if (drawerOpen) {
            setOpen(!open);
            setSelected(!selected ? menu.id : null);
        } else {
            setAnchorEl(event?.currentTarget);
        }
    };

    const handleHover = (event) => {
        setAnchorEl(event?.currentTarget);
    };

    const handleClosePopper = () => {
        setOpen(false);
        setSelected(null);
        setAnchorEl(null);
    };

    const openMini = Boolean(anchorEl);
    const { pathname } = useLocation();

    const checkOpenForParent = (child, id) => {
        child.forEach((item) => {
            if (item.url === pathname) {
                setOpen(true);
                setSelected(id);
            }
        });
    };

    // menu collapse for sub-levels
    useEffect(() => {
        setOpen(false);
        setSelected(null);
        if (openMini) setAnchorEl(null);
        if (menu.children) {
            menu.children.forEach((item) => {
                if (item.children?.length) {
                    checkOpenForParent(item.children, menu.id);
                }
                if (pathname && pathname.includes('product-details')) {
                    if (item.url && item.url.includes('product-details')) {
                        setSelected(menu.id);
                        setOpen(true);
                    }
                }
                if (item.url === pathname) {
                    setSelected(menu.id);
                    setOpen(true);
                }
            });
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [pathname, menu.children]);

    // menu collapse & item
    const menus = menu.children?.map((item) => {
        switch (item.type) {
            case 'collapse':
                return <NavCollapse key={item.id} menu={item} level={level + 1} parentId={parentId} />;
            case 'item':
                return <NavItem key={item.id} item={item} level={level + 1} parentId={parentId} />;
            default:
                return (
                    <Typography key={item.id} variant="h6" color="error" align="center">
                        Menu Items Error
                    </Typography>
                );
        }
    });

    const isSelected = selected === menu.id;

    const Icon = menu.icon;
    const menuIcon = menu.icon ? (
        <Icon
            strokeWidth={1.5}
            size={drawerOpen ? '20px' : '24px'}
            style={{ color: isSelected ? theme.palette.secondary.main : theme.palette.text.primary }}
        />
    ) : (
        <FiberManualRecordIcon
            sx={{
                color: isSelected ? theme.palette.secondary.main : theme.palette.text.primary,
                width: isSelected ? 8 : 6,
                height: isSelected ? 8 : 6
            }}
            fontSize={level > 0 ? 'inherit' : 'medium'}
        />
    );

    const collapseIcon = drawerOpen ? (
        <IconChevronUp stroke={1.5} size="16px" style={{ marginTop: 'auto', marginBottom: 'auto' }} />
    ) : (
        <IconChevronRight stroke={1.5} size="16px" style={{ marginTop: 'auto', marginBottom: 'auto' }} />
    );

    const textColor = theme.palette.mode === 'dark' ? 'grey.400' : 'text.primary';
    const iconSelectedColor = theme.palette.mode === 'dark' && drawerOpen ? 'text.primary' : 'secondary.main';

    const popperId = openMini ? `collapse-pop-${menu.id}` : undefined;

    return (
        <>
            {layout === LAYOUT_CONST.VERTICAL_LAYOUT || (layout === LAYOUT_CONST.HORIZONTAL_LAYOUT && matchDownMd) ? (
                <>
                    <ListItemButton
                        sx={{
                            zIndex: 1201,
                            borderRadius: `${borderRadius}px`,
                            mb: 0.5,
                            pl: drawerOpen ? `${level * 24}px` : 1.25,
                            ...(drawerOpen &&
                                level === 1 &&
                                theme.palette.mode !== 'dark' && {
                                    '&:hover': {
                                        background: theme.palette.secondary.light
                                    },
                                    '&.Mui-selected': {
                                        background: theme.palette.secondary.light,
                                        color: iconSelectedColor,
                                        '&:hover': {
                                            color: iconSelectedColor,
                                            background: theme.palette.secondary.light
                                        }
                                    }
                                }),
                            ...((!drawerOpen || level !== 1) && {
                                py: level === 1 ? 0 : 1,
                                '&:hover': {
                                    bgcolor: 'transparent'
                                },
                                '&.Mui-selected': {
                                    '&:hover': {
                                        bgcolor: 'transparent'
                                    },
                                    bgcolor: 'transparent'
                                }
                            })
                        }}
                        selected={selected === menu.id}
                        {...(!drawerOpen && { onMouseEnter: handleClickMini, onMouseLeave: handleClosePopper })}
                        onClick={handleClickMini}
                    >
                        {menuIcon && (
                            <ListItemIcon
                                sx={{
                                    minWidth: level === 1 ? 36 : 18,
                                    color: isSelected ? iconSelectedColor : textColor,
                                    ...(!drawerOpen &&
                                        level === 1 && {
                                            borderRadius: `${borderRadius}px`,
                                            width: 46,
                                            height: 46,
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            '&:hover': {
                                                bgcolor:
                                                    theme.palette.mode === 'dark' ? theme.palette.secondary.main + 25 : 'secondary.light'
                                            },
                                            ...(isSelected && {
                                                bgcolor:
                                                    theme.palette.mode === 'dark' ? theme.palette.secondary.main + 25 : 'secondary.light',
                                                '&:hover': {
                                                    bgcolor:
                                                        theme.palette.mode === 'dark'
                                                            ? theme.palette.secondary.main + 30
                                                            : 'secondary.light'
                                                }
                                            })
                                        })
                                }}
                            >
                                {menuIcon}
                            </ListItemIcon>
                        )}
                        {(drawerOpen || (!drawerOpen && level !== 1)) && (
                            <ListItemText
                                primary={
                                    <Typography variant={selected === menu.id ? 'h5' : 'body1'} color="inherit" sx={{ my: 'auto' }}>
                                        {menu.title}
                                    </Typography>
                                }
                                secondary={
                                    menu.caption && (
                                        <Typography
                                            variant="caption"
                                            sx={{ ...theme.typography.subMenuCaption }}
                                            display="block"
                                            gutterBottom
                                        >
                                            {menu.caption}
                                        </Typography>
                                    )
                                }
                            />
                        )}

                        {openMini || open ? (
                            collapseIcon
                        ) : (
                            <IconChevronDown stroke={1.5} size="16px" style={{ marginTop: 'auto', marginBottom: 'auto' }} />
                        )}

                        {!drawerOpen && (
                            <PopperStyledMini
                                open={openMini}
                                anchorEl={anchorEl}
                                placement="right-start"
                                style={{
                                    zIndex: 2001
                                }}
                                modifiers={[
                                    {
                                        name: 'offset',
                                        options: {
                                            offset: [-12, 0]
                                        }
                                    }
                                ]}
                            >
                                {({ TransitionProps }) => (
                                    <Transitions in={openMini} {...TransitionProps}>
                                        <Paper
                                            sx={{
                                                overflow: 'hidden',
                                                mt: 1.5,
                                                boxShadow: theme.shadows[8],
                                                backgroundImage: 'none'
                                            }}
                                        >
                                            <ClickAwayListener onClickAway={handleClosePopper}>
                                                <Box>{menus}</Box>
                                            </ClickAwayListener>
                                        </Paper>
                                    </Transitions>
                                )}
                            </PopperStyledMini>
                        )}
                    </ListItemButton>
                    {drawerOpen && (
                        <Collapse in={open} timeout="auto" unmountOnExit>
                            {open && (
                                <List
                                    component="div"
                                    disablePadding
                                    sx={{
                                        position: 'relative',
                                        '&:after': {
                                            content: "''",
                                            position: 'absolute',
                                            left: '32px',
                                            top: 0,
                                            height: '100%',
                                            width: '1px',
                                            opacity: theme.palette.mode === 'dark' ? 0.2 : 1,
                                            background:
                                                theme.palette.mode === 'dark' ? theme.palette.dark.light : theme.palette.primary.light
                                        }
                                    }}
                                >
                                    {menus}
                                </List>
                            )}
                        </Collapse>
                    )}
                </>
            ) : null}

            {layout === LAYOUT_CONST.HORIZONTAL_LAYOUT && !matchDownMd ? (
                <>
                    <ListItemButton
                        id={`boundary-${popperId}`}
                        disableRipple
                        selected={selected === menu.id}
                        onMouseEnter={handleHover}
                        onMouseLeave={handleClosePopper}
                        onClick={handleHover}
                        aria-describedby={popperId}
                    >
                        {menuIcon && <ListItemIcon sx={{ my: 'auto', minWidth: !menu.icon ? 18 : 36 }}>{menuIcon}</ListItemIcon>}
                        <ListItemText
                            primary={
                                <Typography variant={selected === menu.id ? 'h5' : 'body1'} color="inherit" sx={{ my: 'auto' }}>
                                    {menu.title}
                                </Typography>
                            }
                        />
                        {openMini ? <IconChevronRight stroke={1.5} size="16px" /> : <IconChevronDown stroke={1.5} size="16px" />}

                        {anchorEl && (
                            <PopperStyled
                                id={popperId}
                                open={openMini}
                                anchorEl={anchorEl}
                                placement="right-start"
                                style={{
                                    zIndex: 2001
                                }}
                                modifiers={[
                                    {
                                        name: 'offset',
                                        options: {
                                            offset: [-10, 0]
                                        }
                                    }
                                ]}
                            >
                                {({ TransitionProps }) => (
                                    <Transitions in={openMini} {...TransitionProps}>
                                        <Paper
                                            sx={{
                                                overflow: 'hidden',
                                                mt: 1.5,
                                                py: 0.5,
                                                boxShadow: theme.shadows[8],
                                                backgroundImage: 'none'
                                            }}
                                        >
                                            <ClickAwayListener onClickAway={handleClosePopper}>
                                                <Box>{menus}</Box>
                                            </ClickAwayListener>
                                        </Paper>
                                    </Transitions>
                                )}
                            </PopperStyled>
                        )}
                    </ListItemButton>
                </>
            ) : null}
        </>
    );
};

NavCollapse.propTypes = {
    menu: PropTypes.object,
    level: PropTypes.number,
    parentId: PropTypes.string
};

export default NavCollapse;
