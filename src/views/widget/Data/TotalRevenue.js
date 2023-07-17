import PropTypes from 'prop-types';

// material-ui
import { Divider, List, ListItemButton, ListItemIcon, ListItemText, Stack, Typography } from '@mui/material';

// third party
import PerfectScrollbar from 'react-perfect-scrollbar';

// project imports
import MainCard from 'ui-component/cards/MainCard';

// assets
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';

// ===========================|| DASHBOARD ANALYTICS - TOTAL REVENUE CARD ||=========================== //

const TotalRevenue = ({ title }) => {
    const successSX = { color: 'success.dark' };
    const errorSX = { color: 'error.main' };

    return (
        <MainCard title={title} content={false}>
            <PerfectScrollbar style={{ height: 370 }}>
                <List
                    component="nav"
                    aria-label="main mailbox folders"
                    sx={{
                        '& svg': {
                            width: 32,
                            my: -0.75,
                            ml: -0.75,
                            mr: 0.75
                        }
                    }}
                >
                    <ListItemButton>
                        <ListItemIcon>
                            <ArrowDropUpIcon sx={successSX} />
                        </ListItemIcon>
                        <ListItemText
                            primary={
                                <Stack direction="row" justifyContent="space-between" alignItems="center">
                                    <span>Bitcoin</span>
                                    <Typography sx={successSX}>+ $145.85</Typography>
                                </Stack>
                            }
                        />
                    </ListItemButton>
                    <Divider />
                    <ListItemButton>
                        <ListItemIcon>
                            <ArrowDropDownIcon sx={errorSX} />
                        </ListItemIcon>
                        <ListItemText
                            primary={
                                <Stack direction="row" justifyContent="space-between" alignItems="center">
                                    <span>Ethereum</span>
                                    <Typography sx={errorSX}>- $6.368</Typography>
                                </Stack>
                            }
                        />
                    </ListItemButton>
                    <Divider />
                    <ListItemButton>
                        <ListItemIcon>
                            <ArrowDropUpIcon sx={successSX} />
                        </ListItemIcon>
                        <ListItemText
                            primary={
                                <Stack direction="row" justifyContent="space-between" alignItems="center">
                                    <span>Ripple</span>
                                    <Typography sx={successSX}>+ $458.63</Typography>
                                </Stack>
                            }
                        />
                    </ListItemButton>
                    <Divider />
                    <ListItemButton>
                        <ListItemIcon>
                            <ArrowDropDownIcon sx={errorSX} />
                        </ListItemIcon>
                        <ListItemText
                            primary={
                                <Stack direction="row" justifyContent="space-between" alignItems="center">
                                    <span>Neo</span>
                                    <Typography sx={errorSX}>- $5.631</Typography>
                                </Stack>
                            }
                        />
                    </ListItemButton>
                    <Divider />
                    <ListItemButton>
                        <ListItemIcon>
                            <ArrowDropDownIcon sx={errorSX} />
                        </ListItemIcon>
                        <ListItemText
                            primary={
                                <Stack direction="row" justifyContent="space-between" alignItems="center">
                                    <span>Ethereum</span>
                                    <Typography sx={errorSX}>- $6.368</Typography>
                                </Stack>
                            }
                        />
                    </ListItemButton>
                    <Divider />
                    <ListItemButton>
                        <ListItemIcon>
                            <ArrowDropUpIcon sx={successSX} />
                        </ListItemIcon>
                        <ListItemText
                            primary={
                                <Stack direction="row" justifyContent="space-between" alignItems="center">
                                    <span>Ripple</span>
                                    <Typography sx={successSX}>+ $458.63</Typography>
                                </Stack>
                            }
                        />
                    </ListItemButton>
                    <Divider />
                    <ListItemButton>
                        <ListItemIcon>
                            <ArrowDropDownIcon sx={errorSX} />
                        </ListItemIcon>
                        <ListItemText
                            primary={
                                <Stack direction="row" justifyContent="space-between" alignItems="center">
                                    <span>Neo</span>
                                    <Typography sx={errorSX}>- $5.631</Typography>
                                </Stack>
                            }
                        />
                    </ListItemButton>
                    <Divider />
                    <ListItemButton>
                        <ListItemIcon>
                            <ArrowDropDownIcon sx={errorSX} />
                        </ListItemIcon>
                        <ListItemText
                            primary={
                                <Stack direction="row" justifyContent="space-between" alignItems="center">
                                    <span>Ethereum</span>
                                    <Typography sx={errorSX}>- $6.368</Typography>
                                </Stack>
                            }
                        />
                    </ListItemButton>
                    <Divider />
                    <ListItemButton>
                        <ListItemIcon>
                            <ArrowDropUpIcon sx={successSX} />
                        </ListItemIcon>
                        <ListItemText
                            primary={
                                <Stack direction="row" justifyContent="space-between" alignItems="center">
                                    <span>Ripple</span>
                                    <Typography sx={successSX}>+ $458.63</Typography>
                                </Stack>
                            }
                        />
                    </ListItemButton>
                    <Divider />
                    <ListItemButton>
                        <ListItemIcon>
                            <ArrowDropDownIcon sx={errorSX} />
                        </ListItemIcon>
                        <ListItemText
                            primary={
                                <Stack direction="row" justifyContent="space-between" alignItems="center">
                                    <span>Neo</span>
                                    <Typography sx={errorSX}>- $5.631</Typography>
                                </Stack>
                            }
                        />
                    </ListItemButton>
                </List>
            </PerfectScrollbar>
        </MainCard>
    );
};

TotalRevenue.propTypes = {
    title: PropTypes.string
};

export default TotalRevenue;
