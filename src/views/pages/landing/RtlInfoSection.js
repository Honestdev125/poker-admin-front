// material-ui
import { styled, useTheme } from '@mui/material/styles';
import { Box, Stack, Typography } from '@mui/material';

// assets
import LightRTLImage from 'assets/images/landing/bg-rtl-info-light.svg';
import DarkRTLImage from 'assets/images/landing/bg-rtl-info-dark.svg';

import BgDark from 'assets/images/landing/bg-rtl-info-block-dark.png';
import BgLight from 'assets/images/landing/bg-rtl-info-block-light.png';

// styles
const HeaderImage = styled('img')(({ theme }) => ({
    maxWidth: '100%',
    height: '100%',
    position: 'absolute',
    right: 0,
    bottom: 0,
    [theme.breakpoints.down('xl')]: {
        right: -100
    },
    [theme.breakpoints.down('md')]: {
        right: -120
    },
    [theme.breakpoints.down('sm')]: {
        right: -160
    }
}));

const HeaderAnimationImage = styled('img')({
    maxWidth: '100%',
    filter: 'drop-shadow(0px 0px 50px rgb(33 150 243 / 30%))'
});

const RtlInfoSection = () => {
    const theme = useTheme();

    return (
        <Box
            sx={{
                background: theme.palette.mode === 'dark' ? theme.palette.background.default : theme.palette.grey[100],
                height: { xs: 240, sm: 280, md: 360, lg: 451, xl: 595 },
                overflow: 'hidden',
                position: 'relative'
            }}
        >
            <Stack spacing={2} sx={{ mt: { xs: 4, md: 6, lg: 12, xl: 15 }, ml: { xs: 2, sm: 3, md: 7 } }}>
                <Typography variant="h2" sx={{ zIndex: 2, fontSize: { xs: '1.5rem', sm: '2.125rem', lg: '2.5rem', xl: '2.75rem' } }}>
                    Multi-language, RTL Support
                </Typography>
                <Typography variant="h4" sx={{ fontWeight: 400, zIndex: '9', width: { xs: '50%', md: '100%' } }}>
                    Support Multi-language. Added 4 pre-filled language.
                </Typography>
            </Stack>
            <HeaderImage
                src={theme.palette.mode === 'dark' ? DarkRTLImage : LightRTLImage}
                sx={{ zIndex: 1, height: { xs: 'inherit' }, objectFit: { xs: 'cover', lg: 'fill' } }}
            />
            <HeaderAnimationImage
                src={theme.palette.mode === 'dark' ? BgDark : BgLight}
                alt="Berry"
                sx={{
                    position: 'absolute',
                    filter: 'none',
                    bottom: 0,
                    right: 0,
                    width: '100%',
                    transform: { xl: 'scale(0.9)', lg: 'scale(0.85)', md: 'scale(0.85)', sm: 'scale(0.9)' },
                    transformOrigin: '100% 180%'
                }}
            />
        </Box>
    );
};

export default RtlInfoSection;
