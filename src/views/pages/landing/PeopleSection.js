// material-ui
import { Masonry } from '@mui/lab';
import { Box, Button, Container, Grid, Link, Stack, Typography } from '@mui/material';

// project imports
import { cards } from './CardData';
import PeopleCard from './PeopleCard';

// =============================|| LANDING - FEATURE PAGE ||============================= //

const PeopleSection = () => {
    let cardResult = <></>;
    if (cards && cards.length > 0) {
        cardResult = cards.map((card, index) => (
            <Grid key={index} item>
                <PeopleCard
                    id={card.id}
                    image={card.image ? card.image : ''}
                    name={card.name}
                    tag={card.tag}
                    content={card.content}
                    view={card.view}
                />
            </Grid>
        ));
    }

    return (
        <Container>
            <Grid container spacing={7.5} justifyContent="center">
                <Grid item xs={12} sx={{ textAlign: 'center' }}>
                    <Stack spacing={1.25} alignItems="center">
                        <Typography variant="h2" sx={{ fontSize: { xs: '1.5rem', sm: '2.125rem' } }}>
                            Testaments
                        </Typography>
                        <Typography variant="h4" sx={{ fontWeight: 400 }} align="center">
                            We are so grateful for your positive review and appreciate your support of our product
                        </Typography>
                    </Stack>
                </Grid>
                <Grid item xs={12}>
                    <Stack spacing={2} alignItems="center">
                        <Masonry columns={{ xs: 1, sm: 2, md: 3, xl: 4 }} spacing={2}>
                            {cardResult}
                        </Masonry>
                        <Box>
                            <Button variant="outlined" component={Link} href="https://links.codedthemes.com/hsqll" target="_blank">
                                Read more
                            </Button>
                        </Box>
                    </Stack>
                </Grid>
            </Grid>
        </Container>
    );
};

export default PeopleSection;
