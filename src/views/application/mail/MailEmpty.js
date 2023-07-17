// material-ui
import { useTheme } from '@mui/material/styles';
import { CardMedia, Stack, Typography } from '@mui/material';

// project imports
import { gridSpacing } from 'store/constant';
import imageEmpty from 'assets/images/maintenance/empty.svg';
import imageDarkEmpty from 'assets/images/maintenance/empty-dark.svg';

// ==============================|| NO/EMPTY MAIL ||============================== //

const MailEmpty = () => {
    const theme = useTheme();

    return (
        <Stack alignItems="center" spacing={gridSpacing}>
            <CardMedia
                component="img"
                image={theme.palette.mode === 'dark' ? imageDarkEmpty : imageEmpty}
                title="Slider5 image"
                sx={{ maxWidth: 720 }}
            />
            <Stack spacing={1}>
                <Typography variant="h1" color="inherit" component="div">
                    There is No Mail
                </Typography>
                <Typography variant="body2">When You have message that will Display here</Typography>
            </Stack>
        </Stack>
    );
};

export default MailEmpty;
