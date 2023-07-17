import PropTypes from 'prop-types';

// material-ui
import { styled } from '@mui/material/styles';
import { Grid, Rating, Typography } from '@mui/material';

// assets
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';
import SentimentDissatisfiedIcon from '@mui/icons-material/SentimentDissatisfied';
import SentimentSatisfiedIcon from '@mui/icons-material/SentimentSatisfied';
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAltOutlined';
import SentimentVerySatisfiedIcon from '@mui/icons-material/SentimentVerySatisfied';

// project imports

// style constant
const StyledRating = styled(Rating)({
    '& .MuiRating-iconFilled': {
        color: '#ff6d75'
    },
    '& .MuiRating-iconHover': {
        color: '#ff3d47'
    }
});

// customized icons
const customIcons = {
    1: {
        icon: <SentimentVeryDissatisfiedIcon />,
        label: 'Very Dissatisfied'
    },
    2: {
        icon: <SentimentDissatisfiedIcon />,
        label: 'Dissatisfied'
    },
    3: {
        icon: <SentimentSatisfiedIcon />,
        label: 'Neutral'
    },
    4: {
        icon: <SentimentSatisfiedAltIcon />,
        label: 'Satisfied'
    },
    5: {
        icon: <SentimentVerySatisfiedIcon />,
        label: 'Very Satisfied'
    }
};

// ===============================|| CUSTOMIZED ICON ||=============================== //

function IconContainer({ value, ...other }) {
    return <span {...other}>{customIcons[value].icon}</span>;
}

IconContainer.propTypes = {
    value: PropTypes.number.isRequired
};

// ===============================|| UI RATING - CUSTOMIZED ||=============================== //

export default function CustomizedRatings() {
    return (
        <>
            <Grid container spacing={2} justifyContent="center">
                <Grid item>
                    <Typography component="legend">Empty Icon</Typography>
                </Grid>
                <Grid item>
                    <Rating name="customized-empty" defaultValue={2} precision={0.5} emptyIcon={<StarBorderIcon fontSize="inherit" />} />
                </Grid>
            </Grid>
            <Grid container spacing={2} justifyContent="center">
                <Grid item>
                    <Typography component="legend">Icon & Color</Typography>
                </Grid>
                <Grid item>
                    <StyledRating
                        name="customized-color"
                        defaultValue={2}
                        getLabelText={(value) => `${value} Heart${value !== 1 ? 's' : ''}`}
                        precision={0.5}
                        icon={<FavoriteIcon fontSize="inherit" />}
                        emptyIcon={<FavoriteBorderIcon sx={{ color: '#ff6d75' }} fontSize="inherit" />}
                    />
                </Grid>
            </Grid>
            <Grid container spacing={2} justifyContent="center">
                <Grid item>
                    <Typography component="legend">6 Stars</Typography>
                </Grid>
                <Grid item>
                    <Rating name="customized-10" defaultValue={2} max={8} />
                </Grid>
            </Grid>
            <Grid container spacing={2} justifyContent="center">
                <Grid item>
                    <Typography component="legend">Icon Set</Typography>
                </Grid>
                <Grid item>
                    <Rating
                        name="customized-icons"
                        defaultValue={2}
                        getLabelText={(value) => customIcons[value].label}
                        IconContainerComponent={IconContainer}
                    />
                </Grid>
            </Grid>
        </>
    );
}
