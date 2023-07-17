// material-ui
import { useTheme } from '@mui/material/styles';
import { Paper, Typography } from '@mui/material';
import {
    Timeline,
    TimelineItem,
    TimelineSeparator,
    TimelineConnector,
    TimelineContent,
    TimelineDot,
    TimelineOppositeContent
} from '@mui/lab';

// assets
import FastfoodIcon from '@mui/icons-material/FastfoodTwoTone';
import LaptopMacIcon from '@mui/icons-material/LaptopMacTwoTone';
import HotelIcon from '@mui/icons-material/HotelTwoTone';
import RepeatIcon from '@mui/icons-material/RepeatTwoTone';

// ==============================|| UI TIMELINE - CUSTOMIZED ||============================== //

export default function CustomizedTimeline() {
    const theme = useTheme();
    const paper = {
        p: 2.5,
        boxShadow: 'none',
        background: theme.palette.mode === 'dark' ? theme.palette.dark.main : theme.palette.primary.light,
        border: '1px dashed',
        borderColor: theme.palette.mode === 'dark' ? theme.palette.dark.dark : theme.palette.primary.dark
    };
    return (
        <Timeline position="alternate">
            <TimelineItem>
                <TimelineOppositeContent>
                    <Typography variant="body2" color="textSecondary">
                        9:30 am
                    </Typography>
                </TimelineOppositeContent>
                <TimelineSeparator>
                    <TimelineDot color="secondary">
                        <FastfoodIcon sx={{ color: '#fff' }} />
                    </TimelineDot>
                    <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                    <Paper elevation={3} sx={paper}>
                        <Typography variant="h5" component="h1">
                            Eat
                        </Typography>
                        <Typography>Because you need strength</Typography>
                    </Paper>
                </TimelineContent>
            </TimelineItem>
            <TimelineItem>
                <TimelineOppositeContent>
                    <Typography variant="body2" color="textSecondary">
                        10:00 am
                    </Typography>
                </TimelineOppositeContent>
                <TimelineSeparator>
                    <TimelineDot color="primary">
                        <LaptopMacIcon />
                    </TimelineDot>
                    <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                    <Paper elevation={3} sx={paper}>
                        <Typography variant="h5" component="h1">
                            Code
                        </Typography>
                        <Typography>Because it&apos;s awesome!</Typography>
                    </Paper>
                </TimelineContent>
            </TimelineItem>
            <TimelineItem>
                <TimelineSeparator>
                    <TimelineDot color="secondary">
                        <HotelIcon />
                    </TimelineDot>
                    <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                    <Paper elevation={3} sx={paper}>
                        <Typography variant="h5" component="h1">
                            Sleep
                        </Typography>
                        <Typography>Because you need rest</Typography>
                    </Paper>
                </TimelineContent>
            </TimelineItem>
            <TimelineItem>
                <TimelineSeparator>
                    <TimelineDot color="primary">
                        <RepeatIcon />
                    </TimelineDot>
                </TimelineSeparator>
                <TimelineContent>
                    <Paper elevation={3} sx={paper}>
                        <Typography variant="h5" component="h1">
                            Repeat
                        </Typography>
                        <Typography>Because this is the life you love!</Typography>
                    </Paper>
                </TimelineContent>
            </TimelineItem>
        </Timeline>
    );
}
