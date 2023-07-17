import PropTypes from 'prop-types';
import React from 'react';

// material-ui
import { useTheme } from '@mui/material/styles';
import { Box, Tab, Tabs, Typography, styled } from '@mui/material';

// assets
import MenuTwoToneIcon from '@mui/icons-material/MenuTwoTone';
import StarTwoToneIcon from '@mui/icons-material/StarTwoTone';
import PanoramaTwoToneIcon from '@mui/icons-material/PanoramaTwoTone';

// tab content
function TabPanel({ children, value, index, ...other }) {
    return (
        <div role="tabpanel" hidden={value !== index} id={`simple-tabpanel-${index}`} aria-labelledby={`simple-tab-${index}`} {...other}>
            {value === index && (
                <Box
                    sx={{
                        p: 3
                    }}
                >
                    <Typography>{children}</Typography>
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

// icon tab style
const AntTabs = styled(Tabs)(({ theme }) => ({
    background: theme.palette.mode === 'dark' ? theme.palette.dark[800] : theme.palette.primary.light,
    width: 186,
    borderRadius: '12px',
    '& .MuiTabs-indicator': {
        backgroundColor: theme.palette.secondary.main
    }
}));

// style constant
const AntTab = styled((props) => <Tab disableRipple {...props} />)(({ theme }) => ({
    textTransform: 'none',
    minWidth: 0,
    [theme.breakpoints.up('sm')]: {
        minWidth: 0
    },
    fontWeight: theme.typography.fontWeightRegular,
    marginRight: theme.spacing(1),
    marginLeft: theme.spacing(1),
    color: theme.palette.secondary.main,
    fontFamily: [
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"'
    ].join(','),
    '&:hover': {
        color: theme.palette.secondary.main,
        opacity: 1
    },
    '&.Mui-selected': {
        color: theme.palette.secondary.main,
        fontWeight: theme.typography.fontWeightMedium
    },
    '&.Mui-focusVisible': {
        backgroundColor: theme.palette.secondary.main
    }
}));

// ================================|| UI TABS - ICONS ||================================ //

export default function IconTabs() {
    const theme = useTheme();
    const [value, setValue] = React.useState(0);
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <>
            <AntTabs theme={theme} value={value} onChange={handleChange} aria-label="ant example">
                <AntTab icon={<MenuTwoToneIcon sx={{ fontSize: '1.3rem' }} />} />
                <AntTab icon={<StarTwoToneIcon sx={{ fontSize: '1.3rem' }} />} />
                <AntTab icon={<PanoramaTwoToneIcon sx={{ fontSize: '1.3rem' }} />} />
            </AntTabs>
            <TabPanel value={value} index={0}>
                Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute,
                non cupidatat skateboard dolor brunch.
            </TabPanel>
            <TabPanel value={value} index={1}>
                Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute,
                non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod.
            </TabPanel>
            <TabPanel value={value} index={2}>
                Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
            </TabPanel>
        </>
    );
}
