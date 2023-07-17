// material-ui
import { useTheme } from '@mui/material/styles';
import { Avatar, Grid } from '@mui/material';

// project imports
import Chip from 'ui-component/extended/Chip';
import SubCard from 'ui-component/cards/SubCard';
import MainCard from 'ui-component/cards/MainCard';
import SecondaryAction from 'ui-component/cards/CardSecondaryAction';
import { gridSpacing } from 'store/constant';

// assets
import User1 from 'assets/images/users/avatar-1.png';

// ================================|| UI CHIP ||================================ //

const UIChip = () => {
    const theme = useTheme();

    const handleDelete = () => {
        console.info('You clicked the delete icon.');
    };

    const handleClick = () => {
        console.info('You clicked the Chip.');
    };

    return (
        <MainCard title="Chip" secondary={<SecondaryAction link="https://next.material-ui.com/components/chips/" />}>
            <Grid container spacing={gridSpacing}>
                <Grid item xs={12} md={6}>
                    <SubCard title="Basic">
                        <Grid container spacing={3}>
                            <Grid item>
                                <Chip label="Default" />
                            </Grid>
                            <Grid item>
                                <Chip label="Deletable" onDelete={handleDelete} />
                            </Grid>
                            <Grid item>
                                <Chip label="Disabled" disabled />
                            </Grid>
                            <Grid item>
                                <Chip label="Clickable" onClick={handleClick} onDelete={handleDelete} />
                            </Grid>

                            <Grid item>
                                <Chip
                                    avatar={<Avatar>AK</Avatar>}
                                    label="Clickable deletable"
                                    onClick={handleClick}
                                    onDelete={handleDelete}
                                    color="primary"
                                />
                            </Grid>
                            <Grid item>
                                <Chip label="Clickable" avatar={<Avatar alt="Avatar 1" src={User1} />} onClick={handleClick} />
                            </Grid>
                        </Grid>
                    </SubCard>
                </Grid>

                <Grid item xs={12} md={6}>
                    <SubCard title="Outlined">
                        <Grid container spacing={3}>
                            <Grid item>
                                <Chip label="Default" variant="outlined" />
                            </Grid>
                            <Grid item>
                                <Chip label="Deletable" onDelete={handleDelete} variant="outlined" />
                            </Grid>
                            <Grid item>
                                <Chip label="Disabled" disabled variant="outlined" />
                            </Grid>
                            <Grid item>
                                <Chip label="Clickable" variant="outlined" onClick={handleClick} onDelete={handleDelete} />
                            </Grid>

                            <Grid item>
                                <Chip
                                    avatar={<Avatar>AK</Avatar>}
                                    label="Clickable deletable"
                                    onClick={handleClick}
                                    onDelete={handleDelete}
                                    color="primary"
                                    variant="outlined"
                                />
                            </Grid>
                            <Grid item>
                                <Chip
                                    label="Clickable"
                                    avatar={<Avatar alt="Avatar 1" src={User1} />}
                                    onClick={handleClick}
                                    variant="outlined"
                                />
                            </Grid>
                        </Grid>
                    </SubCard>
                </Grid>

                <Grid item xs={12}>
                    <SubCard title="Outlined Color">
                        <Grid container spacing={3}>
                            <Grid item>
                                <Chip label="Default" variant="outlined" />
                            </Grid>
                            <Grid item>
                                <Chip label="Secondary" variant="outlined" chipcolor="secondary" />
                            </Grid>
                            <Grid item>
                                <Chip label="Success" onDelete={handleDelete} variant="outlined" chipcolor="success" />
                            </Grid>
                            <Grid item>
                                <Chip label="Error" onDelete={handleDelete} variant="outlined" chipcolor="error" />
                            </Grid>
                            <Grid item>
                                <Chip label="secondary" onDelete={handleDelete} variant="outlined" chipcolor="secondary" />
                            </Grid>
                            <Grid item>
                                <Chip label="Disabled" disabled variant="outlined" />
                            </Grid>
                            <Grid item>
                                <Chip label="Clickable" variant="outlined" onClick={handleClick} onDelete={handleDelete} />
                            </Grid>

                            <Grid item>
                                <Chip
                                    avatar={
                                        <Avatar
                                            sx={{
                                                bgcolor: theme.palette.warning.dark,
                                                color: `${theme.palette.background.paper} !important`
                                            }}
                                        >
                                            AK
                                        </Avatar>
                                    }
                                    label="Clickable deletable"
                                    onClick={handleClick}
                                    onDelete={handleDelete}
                                    variant="outlined"
                                    chipcolor="warning"
                                />
                            </Grid>
                            <Grid item>
                                <Chip
                                    label="Clickable"
                                    avatar={<Avatar alt="Avatar 1" src={User1} />}
                                    onClick={handleClick}
                                    variant="outlined"
                                />
                            </Grid>
                            <Grid item>
                                <Chip
                                    label="Clickable"
                                    avatar={<Avatar alt="Avatar 1" src={User1} />}
                                    onClick={handleClick}
                                    variant="outlined"
                                    chipcolor="secondary"
                                />
                            </Grid>
                        </Grid>
                    </SubCard>
                </Grid>

                <Grid item xs={12}>
                    <SubCard title="Filled Color">
                        <Grid container spacing={3}>
                            <Grid item>
                                <Chip label="Default" />
                            </Grid>
                            <Grid item>
                                <Chip label="Secondary" chipcolor="secondary" />
                            </Grid>
                            <Grid item>
                                <Chip label="Success" onDelete={handleDelete} chipcolor="success" />
                            </Grid>
                            <Grid item>
                                <Chip label="Error" onDelete={handleDelete} chipcolor="error" />
                            </Grid>
                            <Grid item>
                                <Chip label="secondary" onDelete={handleDelete} chipcolor="secondary" />
                            </Grid>
                            <Grid item>
                                <Chip label="Disabled" disabled />
                            </Grid>
                            <Grid item>
                                <Chip label="Clickable" onClick={handleClick} onDelete={handleDelete} />
                            </Grid>

                            <Grid item>
                                <Chip
                                    avatar={
                                        <Avatar
                                            sx={{
                                                bgcolor: theme.palette.warning.dark,
                                                color: `${theme.palette.background.paper} !important`
                                            }}
                                        >
                                            AK
                                        </Avatar>
                                    }
                                    label="Clickable delete"
                                    onClick={handleClick}
                                    onDelete={handleDelete}
                                    chipcolor="warning"
                                />
                            </Grid>
                            <Grid item>
                                <Chip label="Clickable" avatar={<Avatar alt="Avatar 1" src={User1} />} onClick={handleClick} />
                            </Grid>
                            <Grid item>
                                <Chip
                                    label="Clickable"
                                    avatar={<Avatar alt="Avatar 1" src={User1} />}
                                    onClick={handleClick}
                                    chipcolor="secondary"
                                />
                            </Grid>
                        </Grid>
                    </SubCard>
                </Grid>
            </Grid>
        </MainCard>
    );
};

export default UIChip;
