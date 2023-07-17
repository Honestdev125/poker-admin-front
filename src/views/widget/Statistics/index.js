// material-ui
import { useTheme } from '@mui/material/styles';
import { Grid } from '@mui/material';

// project imports
import ProjectTaskCard from './ProjectTaskCard';
import CustomerSatisfactionCard from './CustomerSatisfactionCard';
import IconGridCard from './IconGridCard';
import WeatherCard from './WeatherCard';

import RevenueCard from 'ui-component/cards/RevenueCard';
import ReportCard from 'ui-component/cards/ReportCard';
import IconNumberCard from 'ui-component/cards/IconNumberCard';
import SideIconCard from 'ui-component/cards/SideIconCard';
import HoverDataCard from 'ui-component/cards/HoverDataCard';
import HoverSocialCard from 'ui-component/cards/HoverSocialCard';
import RoundIconCard from 'ui-component/cards/RoundIconCard';
import UserCountCard from 'ui-component/cards/TotalCountCard';

import { gridSpacing } from 'store/constant';

// assets
import AssessmentOutlinedIcon from '@mui/icons-material/AssessmentTwoTone';
import ThumbDownAltOutlinedIcon from '@mui/icons-material/ThumbDownAltTwoTone';
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayTwoTone';
import MonetizationOnTwoToneIcon from '@mui/icons-material/MonetizationOnTwoTone';
import AccountCircleTwoTone from '@mui/icons-material/AccountCircleTwoTone';
import LocalMallTwoToneIcon from '@mui/icons-material/LocalMallTwoTone';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import DescriptionTwoToneIcon from '@mui/icons-material/DescriptionTwoTone';
import EmojiEventsTwoToneIcon from '@mui/icons-material/EmojiEventsTwoTone';
import AccountBalanceWalletTwoToneIcon from '@mui/icons-material/AccountBalanceWalletTwoTone';
import ShoppingCartTwoToneIcon from '@mui/icons-material/ShoppingCartTwoTone';
import EmojiEmotionsTwoToneIcon from '@mui/icons-material/EmojiEmotionsTwoTone';
import BugReportTwoToneIcon from '@mui/icons-material/BugReportTwoTone';
import FolderOpenTwoToneIcon from '@mui/icons-material/FolderOpenTwoTone';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';
import RemoveRedEyeTwoToneIcon from '@mui/icons-material/RemoveRedEyeTwoTone';
import RadioButtonCheckedTwoToneIcon from '@mui/icons-material/RadioButtonCheckedTwoTone';
import PanToolTwoToneIcon from '@mui/icons-material/PanToolTwoTone';

// ===========================|| WIDGET STATISTICS ||=========================== //

const WidgetStatistics = () => {
    const theme = useTheme();

    return (
        <Grid container spacing={gridSpacing}>
            <Grid item xs={12} lg={3} sm={6}>
                <ReportCard
                    primary="$30200"
                    secondary="All Earnings"
                    color={theme.palette.secondary.main}
                    iconPrimary={AssessmentOutlinedIcon}
                />
            </Grid>
            <Grid item xs={12} lg={3} sm={6}>
                <ReportCard primary="145" secondary="Task" color={theme.palette.error.main} iconPrimary={CalendarTodayOutlinedIcon} />
            </Grid>
            <Grid item xs={12} lg={3} sm={6}>
                <ReportCard primary="290+" secondary="Page Views" color={theme.palette.success.dark} iconPrimary={DescriptionTwoToneIcon} />
            </Grid>
            <Grid item xs={12} lg={3} sm={6}>
                <ReportCard primary="500" secondary="Downloads" color={theme.palette.primary.main} iconPrimary={ThumbDownAltOutlinedIcon} />
            </Grid>

            <Grid item xs={12} lg={4} md={12}>
                <RevenueCard
                    primary="Revenue"
                    secondary="$42,562"
                    content="$50,032 Last Month"
                    iconPrimary={MonetizationOnTwoToneIcon}
                    color={theme.palette.secondary.main}
                />
            </Grid>
            <Grid item xs={12} lg={4} sm={6}>
                <RevenueCard
                    primary="Orders Received"
                    secondary="486"
                    content="20% Increase"
                    iconPrimary={AccountCircleTwoTone}
                    color={theme.palette.primary.dark}
                />
            </Grid>
            <Grid item xs={12} lg={4} sm={6}>
                <RevenueCard
                    primary="Total Sales"
                    secondary="1641"
                    content="$1,055 Revenue Generated"
                    iconPrimary={LocalMallTwoToneIcon}
                    color={theme.palette.orange.dark}
                />
            </Grid>

            <Grid item xs={12} lg={3} sm={6}>
                <IconNumberCard title="Visitors" primary="6035" color={theme.palette.primary.dark} iconPrimary={AccountCircleTwoTone} />
            </Grid>
            <Grid item xs={12} lg={3} sm={6}>
                <IconNumberCard title="Invoices" primary="19" color={theme.palette.error.main} iconPrimary={DescriptionTwoToneIcon} />
            </Grid>
            <Grid item xs={12} lg={3} sm={6}>
                <IconNumberCard title="Issues" primary="63" color={theme.palette.warning.dark} iconPrimary={BugReportTwoToneIcon} />
            </Grid>
            <Grid item xs={12} lg={3} sm={6}>
                <IconNumberCard title="Projects" primary="95%" color={theme.palette.success.dark} iconPrimary={FolderOpenTwoToneIcon} />
            </Grid>

            <Grid item xs={12} lg={3} sm={6}>
                <SideIconCard
                    iconPrimary={AccountCircleTwoTone}
                    primary="2,672"
                    secondary="Last week"
                    secondarySub="users"
                    color={theme.palette.secondary.main}
                />
            </Grid>
            <Grid item xs={12} lg={3} sm={6}>
                <SideIconCard
                    iconPrimary={AccountBalanceWalletTwoToneIcon}
                    primary="$6391"
                    secondary="Total"
                    secondarySub="earning"
                    color={theme.palette.primary.dark}
                />
            </Grid>
            <Grid item xs={12} lg={3} sm={6}>
                <SideIconCard
                    iconPrimary={EmojiEmotionsTwoToneIcon}
                    primary="9,276"
                    secondary="Today"
                    secondarySub="visitors"
                    color={theme.palette.success.dark}
                />
            </Grid>
            <Grid item xs={12} lg={3} sm={6}>
                <SideIconCard
                    iconPrimary={ShoppingCartTwoToneIcon}
                    primary="3,619"
                    secondary="New"
                    secondarySub="order"
                    color={theme.palette.error.main}
                />
            </Grid>

            <Grid item xs={12} lg={3} sm={6}>
                <HoverDataCard
                    title="Total Paid Users"
                    iconPrimary={ArrowDownwardIcon}
                    primary={7652}
                    secondary="8% less Last 3 Months"
                    color={theme.palette.error.main}
                />
            </Grid>
            <Grid item xs={12} lg={3} sm={6}>
                <HoverDataCard
                    title="Order Status"
                    iconPrimary={ArrowUpwardIcon}
                    primary={625}
                    secondary="6% From Last 3 Months"
                    color={theme.palette.success.dark}
                />
            </Grid>
            <Grid item xs={12} lg={3} sm={6}>
                <HoverDataCard
                    title="Unique Visitors"
                    iconPrimary={ArrowDownwardIcon}
                    primary={6522}
                    secondary="10% From Last 6 Months"
                    color={theme.palette.error.main}
                />
            </Grid>
            <Grid item xs={12} lg={3} sm={6}>
                <HoverDataCard
                    title="Monthly Earnings"
                    iconPrimary={ArrowUpwardIcon}
                    primary={5963}
                    secondary="36% From Last 6 Months"
                    color={theme.palette.success.dark}
                />
            </Grid>

            <Grid item xs={12} lg={3} sm={6}>
                <HoverSocialCard
                    primary="Facebook Users"
                    secondary="1165 +"
                    iconPrimary={FacebookIcon}
                    color={theme.palette.secondary.main}
                />
            </Grid>
            <Grid item xs={12} lg={3} sm={6}>
                <HoverSocialCard primary="Twitter Users" secondary="780 +" iconPrimary={TwitterIcon} color={theme.palette.info.main} />
            </Grid>
            <Grid item xs={12} lg={3} sm={6}>
                <HoverSocialCard primary="Linked In Users" secondary="998 +" iconPrimary={LinkedInIcon} color={theme.palette.dark.main} />
            </Grid>
            <Grid item xs={12} lg={3} sm={6}>
                <HoverSocialCard primary="Youtube Videos" secondary="650 +" iconPrimary={YouTubeIcon} color={theme.palette.error.main} />
            </Grid>

            <Grid item xs={12} lg={4} sm={6}>
                <RoundIconCard
                    primary="Impressions"
                    secondary="1,563"
                    content="May 23 - June 01 (2018)"
                    iconPrimary={RemoveRedEyeTwoToneIcon}
                    color="primary.main"
                    bgcolor="primary.light"
                />
            </Grid>
            <Grid item xs={12} lg={4} sm={6}>
                <RoundIconCard
                    primary="Goal"
                    secondary="30,564"
                    content="May 28 - June 01 (2018)"
                    iconPrimary={RadioButtonCheckedTwoToneIcon}
                    color="success.dark"
                    bgcolor="success.light"
                />
            </Grid>
            <Grid item xs={12} lg={4} md={12}>
                <RoundIconCard
                    primary="Impact"
                    secondary="42.6%"
                    content="May 30 - June 01 (2018)"
                    iconPrimary={PanToolTwoToneIcon}
                    color="warning.dark"
                    bgcolor="warning.light"
                />
            </Grid>

            <Grid item xs={12}>
                <ProjectTaskCard />
            </Grid>

            <Grid item xs={12} lg={4}>
                <UserCountCard
                    primary="Daily user"
                    secondary="1,658"
                    iconPrimary={AccountCircleTwoTone}
                    color={theme.palette.secondary.main}
                />
            </Grid>
            <Grid item xs={12} lg={4} sm={6}>
                <UserCountCard
                    primary="Daily page view"
                    secondary="1K"
                    iconPrimary={DescriptionTwoToneIcon}
                    color={theme.palette.primary.dark}
                />
            </Grid>
            <Grid item xs={12} lg={4} sm={6}>
                <UserCountCard
                    primary="Last month visitor"
                    secondary="5,678"
                    iconPrimary={EmojiEventsTwoToneIcon}
                    color={theme.palette.success.dark}
                />
            </Grid>

            <Grid item xs={12} lg={4}>
                <CustomerSatisfactionCard />
            </Grid>

            <Grid item xs={12} lg={4}>
                <IconGridCard />
            </Grid>

            <Grid item xs={12} lg={4} md={12}>
                <WeatherCard />
            </Grid>
        </Grid>
    );
};

export default WidgetStatistics;
