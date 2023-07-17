// material-ui
import { styled, useTheme } from '@mui/material/styles';
import { Container, Grid, Typography, Stack } from '@mui/material';
import Link from '@mui/material/Link';

// project imports
import AppBar from 'ui-component/extended/AppBar';
import MainCard from 'ui-component/cards/MainCard';
import { gridSpacing } from 'store/constant';

// assets
import headerBackground from 'assets/images/landing/bg-header.jpg';

const HeaderWrapper = styled('div')(({ theme }) => ({
    backgroundImage: `url(${headerBackground})`,
    backgroundSize: '100% 600px',
    backgroundAttachment: 'fixed',
    backgroundRepeat: 'no-repeat',
    textAlign: 'center',
    paddingTop: 30,
    [theme.breakpoints.down('md')]: {
        paddingTop: 0
    }
}));

// ============================|| SAAS PAGES - PRIVCY POLICY ||============================ //

const PrivacyPolicy = () => {
    const theme = useTheme();

    return (
        <HeaderWrapper>
            <AppBar />
            <Container>
                <Grid container justifyContent="center" spacing={gridSpacing}>
                    <Grid item sm={10} md={7} sx={{ mt: { md: 12.5, xs: 2.5 }, mb: { md: 8, xs: 2.5 } }}>
                        <Grid container spacing={gridSpacing}>
                            <Grid item xs={12}>
                                <Typography
                                    variant="h1"
                                    color="white"
                                    component="div"
                                    sx={{
                                        fontSize: '3.5rem',
                                        fontWeight: 900,
                                        lineHeight: 1.4,
                                        [theme.breakpoints.down('md')]: { fontSize: '1.8125rem', marginTop: '80px' }
                                    }}
                                >
                                    Privacy Policy
                                </Typography>
                            </Grid>
                            <Grid item xs={12}>
                                <Typography
                                    variant="h4"
                                    component="div"
                                    sx={{ fontWeight: 400, lineHeight: 1.4, [theme.breakpoints.up('md')]: { my: 0, mx: 12.5 } }}
                                    color="white"
                                >
                                    Last updated on 18th Feb 2022
                                </Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={12}>
                        <MainCard elevation={4} border={false} boxShadow shadow={4} sx={{ mb: 3 }}>
                            <Stack spacing={2} sx={{ textAlign: 'left' }}>
                                <Typography>
                                    This Privacy Policy governs the manner in which Demos: A Network for Ideas and Action, Ltd. (“Demos”,
                                    “Us” or “We”) collects, uses, maintains, and discloses information collected from users (“Users” or
                                    “You”) of its website located at{' '}
                                    <Link href="#" underline="none">
                                        www.demos.org
                                    </Link>{' '}
                                    (the “Website”).
                                </Typography>
                                <Typography variant="h3">The Types of Information Demos Collect</Typography>
                                <ul>
                                    <li>
                                        <Typography variant="h5">Non-personally identifiable information</Typography>
                                    </li>
                                </ul>
                                <Typography>
                                    Demos may collect non-personally identifiable information about you whenever you visit the Website. Such
                                    information may include the Internet Protocol (IP) address of the computer you used, the type of browser
                                    and operating system you used, the date and time you visited the Website, the Internet address of the
                                    site from which you linked to the Website, and which pages you viewed on the Website.
                                </Typography>
                                <ul>
                                    <li>
                                        <Typography variant="h5">Web browser cookies</Typography>
                                    </li>
                                </ul>
                                <Typography>
                                    Demos may use “cookies” to enhance your experience with the Website. A cookie is a small text file that
                                    is stored in your computer so that the Website can recognize you and keep track of your preferences. Use
                                    of cookies help to measure aggregate web statistics, such as collecting the number of Users to the
                                    Website, the number of repeat Users and the most popular webpages, to serve relevant content to a User
                                    as he/she browses the Internet, and for other purposes. You may choose to set your web browser to refuse
                                    cookies, or to alert you when cookies are being sent. If you do so, however, some parts of the Website
                                    may not function properly.
                                </Typography>
                                <Typography variant="h3">Personally identifiable information</Typography>
                                <Typography>
                                    DDemos, on its own and through select third party vendors, collects personally identifiable information,
                                    such as names, email addresses, mailing addresses and credit card information, from Users when they
                                    voluntarily provide such information to us, including, for example, when a User signs up to join our
                                    email list, purchases tickets to an event, completes the contact form, responds to a job posting, or
                                    donates money via the Website. Complete credit card information, however, is not stored.
                                </Typography>
                                <Typography variant="h3">How Demos Uses the Information that it Collects</Typography>
                                <Typography>
                                    Demos uses Users’ personal information to better understand how Users use the Website so that we can
                                    improve the Website and its offerings. Demos also uses Users’ personal information for the purpose for
                                    which the Users provided the information, in other words, for example, to add you to our email list, to
                                    process your request for tickets to an event, to respond to your inquiry, to consider you for a job, or
                                    to process your donation. If you affirmatively opt-in to our email list, we will add you to our list. If
                                    at any time you wish to stop receiving emails from us, please follow the unsubscribe instructions at the
                                    bottom of any email Demos sends you.
                                </Typography>
                                <Typography variant="h3">How Demos Protects User Information</Typography>
                                <Typography>
                                    Demos adopts appropriate data collection, storage, and processing practices and security measures to
                                    help protect against unauthorized access, alteration, disclosure or destruction of your personal
                                    information, but Demos cannot guarantee that your information is 100% secure. Your credit card
                                    information is not stored by Demos.
                                </Typography>
                                <Typography variant="h3">Sharing Personal Information</Typography>
                                <Typography>
                                    We use third party service providers, including, for example, Mailchimp, Rallybound, EventBrite and
                                    HiringThing, to help us operate the Website and administer activities on our behalf, such as collecting
                                    donations online and registering Users for events. These third party vendors may have access to User
                                    information, which becomes subject to their individual privacy policies. In addition, Demos shares
                                    personal information about Users with Demos Action, our sister organization. Demos may also share
                                    personal information with other like-minded organizations. In addition, Demos will share personally
                                    identifiable information about Users when required to do so by law, or in the good faith belief that
                                    such action is necessary to comply with state and federal laws or to respond to a court order, subpoena,
                                    or search warrant. Demos will also share personally identifiable information if it believes it is
                                    necessary to protect the rights, property, and safety of Demos or others.
                                </Typography>
                                <Typography>
                                    Demos may also share personally identifiable information in connection with, or during negotiations of,
                                    any merger, sale of company assets, financing or acquisition of all or a portion of its business to
                                    another company. Moreover, Demos may share personally identifiable information about a User upon
                                    obtaining the User’s consent.
                                </Typography>
                                <Typography>
                                    Demos may share generic aggregated demographic information not linked to any personally identifiable
                                    information regarding Users with third parties.
                                </Typography>
                                <Typography variant="h3">Sharing Personal Information</Typography>
                                <Typography>
                                    We use third party service providers, including, for example, Mailchimp, Rallybound, EventBrite and
                                    HiringThing, to help us operate the Website and administer activities on our behalf, such as collecting
                                    donations online and registering Users for events. These third party vendors may have access to User
                                    information, which becomes subject to their individual privacy policies. In addition, Demos shares
                                    personal information about Users with Demos Action, our sister organization. Demos may also share
                                    personal information with other like-minded organizations. In addition, Demos will share personally
                                    identifiable information about Users when required to do so by law, or in the good faith belief that
                                    such action is necessary to comply with state and federal laws or to respond to a court order, subpoena,
                                    or search warrant. Demos will also share personally identifiable information if it believes it is
                                    necessary to protect the rights, property, and safety of Demos or others.
                                </Typography>
                                <Typography variant="h3">Contacting Demos</Typography>
                                <Typography>
                                    If you have any questions about this Privacy Policy or anything relating to the Website, please contact
                                    Demos at{' '}
                                    <Link href="#" underline="none">
                                        info@demos.org.
                                    </Link>{' '}
                                </Typography>
                                <Typography variant="h4">February 18, 2022</Typography>
                            </Stack>
                        </MainCard>
                    </Grid>
                </Grid>
            </Container>
        </HeaderWrapper>
    );
};

export default PrivacyPolicy;
