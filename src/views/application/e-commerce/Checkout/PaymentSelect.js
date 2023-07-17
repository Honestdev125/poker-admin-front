import PropTypes from 'prop-types';

// material-ui
import { Box, FormControlLabel, Radio, Stack, Typography } from '@mui/material';

// project import
import SubCard from 'ui-component/cards/SubCard';

// ==============================|| CHECKOUT PAYMENT - OPTIONS ||============================== //

const PaymentSelect = ({ item }) => (
    <SubCard content={false}>
        <Box sx={{ p: 2 }}>
            <FormControlLabel
                value={item.value}
                control={<Radio />}
                label={
                    <Stack spacing={1} direction="row" alignItems="center" justifyContent="center" sx={{ width: '100%' }}>
                        <Stack spacing={0} sx={{ width: '100%' }}>
                            <Typography variant="subtitle1">{item.title}</Typography>
                            <Typography variant="caption">{item.caption}</Typography>
                        </Stack>
                        <Box
                            sx={{
                                backgroundImage: `url(${item.image})`,
                                backgroundSize: 'contain',
                                backgroundPosition: 'right',
                                borderColor: 'error.light',
                                ...item.size
                            }}
                        />
                    </Stack>
                }
                sx={{
                    width: '100%',
                    '& .MuiSvgIcon-root': { fontSize: 32 },
                    '& .MuiFormControlLabel-label': { width: '100%' }
                }}
            />
        </Box>
    </SubCard>
);

PaymentSelect.propTypes = {
    item: PropTypes.object
};

export default PaymentSelect;
