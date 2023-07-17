import PropTypes from 'prop-types';

// material-ui
import { useTheme } from '@mui/material/styles';
import { ButtonBase, Tooltip } from '@mui/material';

// third-party
import { CSVLink } from 'react-csv';

// assets
import { IconDeviceFloppy } from '@tabler/icons';

// ==============================|| CSV Export ||============================== //

export const CSVExport = ({ data, filename, headers }) => {
    const theme = useTheme();

    return (
        <Tooltip title="CSV Export" placement="left">
            <ButtonBase sx={{ mt: 0.5 }}>
                <CSVLink data={data} filename={filename} headers={headers}>
                    <IconDeviceFloppy color={theme.palette.secondary.main} aria-label="Export CSV File" />
                </CSVLink>
            </ButtonBase>
        </Tooltip>
    );
};
CSVExport.propTypes = {
    data: PropTypes.object,
    filename: PropTypes.string,
    headers: PropTypes.object
};
