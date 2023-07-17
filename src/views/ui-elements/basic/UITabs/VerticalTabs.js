import PropTypes from 'prop-types';
import React from 'react';

// material-ui
import { useTheme } from '@mui/material/styles';
import { Box, Grid, Stack, Tab, Tabs, Typography } from '@mui/material';

// project imports
import useConfig from 'hooks/useConfig';
import { gridSpacing } from 'store/constant';
import SubCard from 'ui-component/cards/SubCard';

// assets
import PersonOutlineTwoToneIcon from '@mui/icons-material/PersonOutlineTwoTone';
import DescriptionTwoToneIcon from '@mui/icons-material/DescriptionTwoTone';
import CreditCardTwoToneIcon from '@mui/icons-material/CreditCardTwoTone';
import VpnKeyTwoToneIcon from '@mui/icons-material/VpnKeyTwoTone';

// tab content
function TabPanel({ children, value, index, ...other }) {
    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`vertical-tabpanel-${index}`}
            aria-labelledby={`vertical-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box
                    sx={{
                        p: 0
                    }}
                >
                    {children}
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired
};

function a11yProps(index) {
    return {
        id: `vertical-tab-${index}`,
        'aria-controls': `vertical-tabpanel-${index}`
    };
}

// ================================|| UI TABS - VERTICAL ||================================ //

export default function VerticalTabs() {
    const theme = useTheme();
    const { borderRadius } = useConfig();

    const [value, setValue] = React.useState(0);
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div>
            <Grid container spacing={gridSpacing}>
                <Grid item xs={12} sm={4} md={3}>
                    <Tabs
                        value={value}
                        onChange={handleChange}
                        orientation="vertical"
                        variant="scrollable"
                        sx={{
                            '& .MuiTabs-flexContainer': {
                                borderBottom: 'none'
                            },
                            '& button': {
                                borderRadius: `${borderRadius}px`,
                                color: theme.palette.mode === 'dark' ? theme.palette.grey[600] : theme.palette.grey[600],
                                minHeight: 'auto',
                                minWidth: '100%',
                                py: 1.5,
                                px: 2,
                                display: 'flex',
                                flexDirection: 'row',
                                alignItems: 'flex-start',
                                textAlign: 'left',
                                justifyContent: 'flex-start'
                            },
                            '& button.Mui-selected': {
                                color: theme.palette.primary.main,
                                background: theme.palette.mode === 'dark' ? theme.palette.dark.main : theme.palette.grey[50]
                            },
                            '& button > svg': {
                                marginBottom: '0px !important',
                                marginRight: 1.25,
                                marginTop: 1.25,
                                height: 20,
                                width: 20
                            },
                            '& button > div > span': {
                                display: 'block'
                            },
                            '& > div > span': {
                                display: 'none'
                            }
                        }}
                    >
                        <Tab
                            icon={<PersonOutlineTwoToneIcon />}
                            label={
                                <Grid container direction="column">
                                    <Typography variant="subtitle1" color="inherit">
                                        User Profile
                                    </Typography>
                                    <Typography component="div" variant="caption" sx={{ textTransform: 'capitalize' }}>
                                        Profile Settings
                                    </Typography>
                                </Grid>
                            }
                            {...a11yProps(0)}
                        />
                        <Tab
                            icon={<DescriptionTwoToneIcon />}
                            label={
                                <Grid container direction="column">
                                    <Typography variant="subtitle1" color="inherit">
                                        Billing
                                    </Typography>
                                    <Typography component="div" variant="caption" sx={{ textTransform: 'capitalize' }}>
                                        Billing Information
                                    </Typography>
                                </Grid>
                            }
                            {...a11yProps(1)}
                        />
                        <Tab
                            icon={<CreditCardTwoToneIcon />}
                            label={
                                <Grid container direction="column">
                                    <Typography variant="subtitle1" color="inherit">
                                        Payment
                                    </Typography>
                                    <Typography component="div" variant="caption" sx={{ textTransform: 'capitalize' }}>
                                        Add & Update Card
                                    </Typography>
                                </Grid>
                            }
                            {...a11yProps(2)}
                        />
                        <Tab
                            icon={<VpnKeyTwoToneIcon />}
                            label={
                                <Grid container direction="column">
                                    <Typography variant="subtitle1" color="inherit">
                                        Change Password
                                    </Typography>
                                    <Typography component="div" variant="caption" sx={{ textTransform: 'capitalize' }}>
                                        Update Profile Security
                                    </Typography>
                                </Grid>
                            }
                            {...a11yProps(3)}
                        />
                    </Tabs>
                </Grid>
                <Grid item xs={12} sm={8} md={9}>
                    <TabPanel value={value} index={0}>
                        <SubCard>
                            <Stack spacing={gridSpacing}>
                                <Typography variant="body2">
                                    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf
                                    moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod.
                                </Typography>
                                <Typography>
                                    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf
                                    moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod.
                                </Typography>
                            </Stack>
                        </SubCard>
                    </TabPanel>
                    <TabPanel value={value} index={1}>
                        <SubCard>
                            <Stack spacing={gridSpacing}>
                                <Typography variant="body2">
                                    3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum
                                    eiusmod.
                                </Typography>
                                <Typography>
                                    Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda
                                    shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea
                                    proident. Ad vegan excepteur butcher vice lomo.
                                </Typography>
                            </Stack>
                        </SubCard>
                    </TabPanel>
                    <TabPanel value={value} index={2}>
                        <SubCard>
                            <Stack spacing={gridSpacing}>
                                <Typography variant="body2">
                                    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf
                                    moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod.
                                </Typography>
                                <Typography>
                                    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf
                                    moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod.
                                </Typography>
                            </Stack>
                        </SubCard>
                    </TabPanel>
                    <TabPanel value={value} index={3}>
                        <SubCard>
                            <Stack spacing={gridSpacing}>
                                <Typography variant="body2">
                                    3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum
                                    eiusmod.
                                </Typography>
                                <Typography>
                                    Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda
                                    shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea
                                    proident. Ad vegan excepteur butcher vice lomo.
                                </Typography>
                            </Stack>
                        </SubCard>
                    </TabPanel>
                </Grid>
            </Grid>
        </div>
    );
}
