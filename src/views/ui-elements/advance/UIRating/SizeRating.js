// material-ui
import { Rating, Stack } from '@mui/material';

// ===============================|| UI RATING - SIZE VARIANT ||=============================== //

export default function SizeRating() {
    return (
        <Stack spacing={1}>
            <Rating name="size-small" defaultValue={2} size="small" />
            <Rating name="size-medium" defaultValue={2} />
            <Rating name="size-large" defaultValue={2} size="large" />
        </Stack>
    );
}
