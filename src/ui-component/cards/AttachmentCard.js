import PropTypes from 'prop-types';

// material-ui
import { useTheme } from '@mui/material/styles';
import { Card, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import { gridSpacing } from 'store/constant';

// assets
import DownloadForOfflineTwoToneIcon from '@mui/icons-material/DownloadForOfflineTwoTone';

const backImage = require.context('assets/images/profile', true);

// ==============================|| ATTACHMENT CARD ||============================== //

const AttachmentCard = ({ title, image }) => {
    const theme = useTheme();
    const backProfile = image && backImage(`./${image}`);

    return (
        <Card sx={{ bgcolor: theme.palette.mode === 'dark' ? 'dark.dark' : 'grey.100' }}>
            <CardMedia component="img" image={backProfile} title="Slider5 image" />
            <CardContent sx={{ p: 2, pb: '16px !important' }}>
                <Grid container spacing={gridSpacing}>
                    <Grid item xs zeroMinWidth>
                        <Typography
                            variant="h5"
                            component="div"
                            sx={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}
                        >
                            {title}
                        </Typography>
                    </Grid>
                    <Grid item>
                        <DownloadForOfflineTwoToneIcon sx={{ cursor: 'pointer' }} />
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    );
};

AttachmentCard.propTypes = {
    image: PropTypes.string,
    title: PropTypes.oneOfType([PropTypes.node, PropTypes.string, PropTypes.object])
};

export default AttachmentCard;
