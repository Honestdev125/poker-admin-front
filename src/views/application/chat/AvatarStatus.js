import PropTypes from 'prop-types';

// material-ui
import { useTheme } from '@mui/material/styles';

// assets
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

// ==============================|| AVATAR STATUS ICONS ||============================== //

const AvatarStatus = ({ status, mr }) => {
    const theme = useTheme();
    switch (status) {
        case 'available':
            return (
                <FiberManualRecordIcon
                    sx={{
                        cursor: 'pointer',
                        color: theme.palette.success.dark,
                        verticalAlign: 'middle',
                        fontSize: '0.875rem',
                        mr
                    }}
                />
            );

        case 'do_not_disturb':
            return (
                <FiberManualRecordIcon
                    sx={{
                        cursor: 'pointer',
                        color: theme.palette.warning.dark,
                        verticalAlign: 'middle',
                        fontSize: '0.875rem',
                        mr
                    }}
                />
            );

        case 'offline':
            return (
                <FiberManualRecordIcon
                    sx={{
                        cursor: 'pointer',
                        color: theme.palette.error.dark,
                        verticalAlign: 'middle',
                        fontSize: '0.875rem',
                        mr
                    }}
                />
            );

        default:
            return null;
    }
};

AvatarStatus.propTypes = {
    status: PropTypes.string,
    mr: PropTypes.number
};

export default AvatarStatus;
