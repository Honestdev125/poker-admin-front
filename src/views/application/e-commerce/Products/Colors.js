import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';

// material-ui
import { useTheme } from '@mui/material/styles';
import { ButtonBase, Grid, Skeleton, Tooltip } from '@mui/material';

// project imports
import Avatar from 'ui-component/extended/Avatar';
import ColorOptions from '../ColorOptions';

// assets
import CheckIcon from '@mui/icons-material/Check';

// ==============================|| PRODUCT - COLOR OPTIONS ||============================== //

const Color = ({ bg, id, colors, label, handelFilter }) => {
    const theme = useTheme();

    return (
        <Grid item>
            <Tooltip title={label}>
                <ButtonBase sx={{ borderRadius: '50%' }} onClick={() => handelFilter('colors', id)}>
                    <Avatar
                        color="inherit"
                        size="badge"
                        sx={{
                            bgcolor: bg,
                            color: theme.palette.mode === 'light' ? theme.palette.grey[50] : theme.palette.grey[800],
                            opacity: colors.some((item) => item === id) ? 0.6 : 1
                        }}
                    >
                        {colors.some((item) => item === id) && (
                            <CheckIcon sx={{ color: theme.palette.mode === 'dark' ? 'dark.800' : 'grey.50' }} fontSize="inherit" />
                        )}
                    </Avatar>
                </ButtonBase>
            </Tooltip>
        </Grid>
    );
};

Color.propTypes = {
    bg: PropTypes.string,
    id: PropTypes.string,
    label: PropTypes.string,
    colors: PropTypes.array,
    handelFilter: PropTypes.func
};

// ==============================|| PRODUCT - COLOR ||============================== //

const Colors = ({ colors, handelFilter }) => {
    const [isColorsLoading, setColorLoading] = useState(true);
    useEffect(() => {
        setColorLoading(false);
    }, []);

    return (
        <>
            {isColorsLoading ? (
                <Grid item xs={12}>
                    <Skeleton variant="rectangular" width="100%" height={158} />
                </Grid>
            ) : (
                <Grid container spacing={1} alignItems="center">
                    {ColorOptions.map((color, index) => (
                        <Color key={index} id={color.value} bg={color.bg} label={color.label} colors={colors} handelFilter={handelFilter} />
                    ))}
                </Grid>
            )}
        </>
    );
};

Colors.propTypes = {
    colors: PropTypes.array,
    handelFilter: PropTypes.func
};

export default Colors;
