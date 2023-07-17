// material-ui
import { styled } from '@mui/material/styles';

// project imports
import ContactCard from './ContactCard';
import AppBar from 'ui-component/extended/AppBar';

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

// ============================|| CONTACT US MAIN ||============================ //

const ContactUsPage = () => (
    <HeaderWrapper>
        <AppBar />
        <ContactCard />
    </HeaderWrapper>
);

export default ContactUsPage;
