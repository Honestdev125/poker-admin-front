// material-ui
import { AvatarGroup, Badge, Grid } from '@mui/material';

// project imports
import Avatar from 'ui-component/extended/Avatar';
import SubCard from 'ui-component/cards/SubCard';
import MainCard from 'ui-component/cards/MainCard';
import SecondaryAction from 'ui-component/cards/CardSecondaryAction';
import { gridSpacing } from 'store/constant';

// assets
import FolderIcon from '@mui/icons-material/FolderTwoTone';
import PageviewIcon from '@mui/icons-material/PageviewTwoTone';
import AssignmentIcon from '@mui/icons-material/AssignmentIndTwoTone';
import CheckTwoToneIcon from '@mui/icons-material/CheckTwoTone';

import Avatar1 from 'assets/images/users/avatar-1.png';
import Avatar2 from 'assets/images/users/avatar-2.png';
import Avatar3 from 'assets/images/users/avatar-3.png';
import Avatar4 from 'assets/images/users/avatar-4.png';
import Avatar5 from 'assets/images/users/avatar-5.png';
import Profile from 'assets/images/users/profile.png';

// ===============================|| UI AVATAR ||=============================== //

const UIAvatar = () => (
    <MainCard title="Avatar" secondary={<SecondaryAction link="https://next.material-ui.com/components/avatars/" />}>
        <Grid container spacing={gridSpacing}>
            <Grid item xs={12} sm={6} md={4} lg={3}>
                <SubCard title="Basic Avatar">
                    <Grid container justifyContent="center">
                        <Avatar color="default" />
                    </Grid>
                </SubCard>
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3}>
                <SubCard title="Image Avatar">
                    <Grid container spacing={3} justifyContent="center">
                        <Grid item>
                            <Avatar alt="User 1" src={Avatar1} />
                        </Grid>
                        <Grid item>
                            <Avatar alt="User 2" src={Avatar2} />
                        </Grid>
                        <Grid item>
                            <Avatar alt="User 3" src={Avatar3} />
                        </Grid>
                    </Grid>
                </SubCard>
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3}>
                <SubCard title="Letter Avatar">
                    <Grid container spacing={3} justifyContent="center">
                        <Grid item>
                            <Avatar color="primary" sx={{ fontSize: '1rem' }}>
                                AG
                            </Avatar>
                        </Grid>
                        <Grid item>
                            <Avatar color="secondary">P</Avatar>
                        </Grid>
                        <Grid item>
                            <Avatar color="error">C</Avatar>
                        </Grid>
                    </Grid>
                </SubCard>
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3}>
                <SubCard title="Icon Avatar">
                    <Grid container spacing={3} justifyContent="center">
                        <Grid item>
                            <Avatar>
                                <PageviewIcon />
                            </Avatar>
                        </Grid>
                        <Grid item>
                            <Avatar color="info">
                                <FolderIcon />
                            </Avatar>
                        </Grid>
                        <Grid item>
                            <Avatar color="success">
                                <AssignmentIcon />
                            </Avatar>
                        </Grid>
                    </Grid>
                </SubCard>
            </Grid>

            <Grid item xs={12} sm={6} md={4} lg={3}>
                <SubCard title="Variant Avatar">
                    <Grid container spacing={3} justifyContent="center">
                        <Grid item>
                            <Avatar color="primary">A</Avatar>
                        </Grid>
                        <Grid item>
                            <Avatar variant="square" color="warning">
                                <FolderIcon />
                            </Avatar>
                        </Grid>
                        <Grid item>
                            <Avatar variant="rounded" color="success">
                                <AssignmentIcon />
                            </Avatar>
                        </Grid>
                    </Grid>
                </SubCard>
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3}>
                <SubCard title="Outline Avatar">
                    <Grid container spacing={3} justifyContent="center">
                        <Grid item>
                            <Avatar color="primary" outline>
                                A
                            </Avatar>
                        </Grid>
                        <Grid item>
                            <Avatar variant="square" color="warning" outline>
                                <FolderIcon />
                            </Avatar>
                        </Grid>
                        <Grid item>
                            <Avatar variant="rounded" color="success" outline>
                                <AssignmentIcon />
                            </Avatar>
                        </Grid>
                    </Grid>
                </SubCard>
            </Grid>
            <Grid item xs={12} sm={6} md={6} lg={3}>
                <SubCard title="Fallbacks Avatar">
                    <Grid container spacing={3} justifyContent="center">
                        <Grid item>
                            <Avatar alt="Remy Sharp" src="/broken-image.jpg" color="primary">
                                A
                            </Avatar>
                        </Grid>
                        <Grid item>
                            <Avatar alt="Remy Sharp" src="/broken-image.jpg" color="error" />
                        </Grid>
                        <Grid item>
                            <Avatar src="/broken-image.jpg" color="warning" />
                        </Grid>
                    </Grid>
                </SubCard>
            </Grid>
            <Grid item xs={12} sm={6} md={6} lg={3}>
                <SubCard title="Grouped Avatar">
                    <Grid container justifyContent="center">
                        <AvatarGroup max={4}>
                            <Avatar alt="User 1" src={Avatar1} />
                            <Avatar alt="User 2" src={Avatar2} />
                            <Avatar alt="User 3" src={Avatar3} />
                            <Avatar alt="User 4" src={Avatar4} />
                            <Avatar alt="User 5" src={Avatar5} />
                        </AvatarGroup>
                    </Grid>
                </SubCard>
            </Grid>
            <Grid item xs={12} md={5}>
                <SubCard title="Color Variation Avatar">
                    <Grid container spacing={3} justifyContent="center">
                        <Grid item>
                            <Avatar color="primary">A</Avatar>
                        </Grid>
                        <Grid item>
                            <Avatar color="secondary">C</Avatar>
                        </Grid>
                        <Grid item>
                            <Avatar color="error">P</Avatar>
                        </Grid>
                        <Grid item>
                            <Avatar color="warning">
                                <FolderIcon />
                            </Avatar>
                        </Grid>
                        <Grid item>
                            <Avatar color="info">
                                <AssignmentIcon />
                            </Avatar>
                        </Grid>
                        <Grid item>
                            <Avatar color="success">
                                <PageviewIcon />
                            </Avatar>
                        </Grid>
                        <Grid item>
                            <Avatar>R</Avatar>
                        </Grid>
                    </Grid>
                </SubCard>
            </Grid>
            <Grid item xs={12} md={5}>
                <SubCard title="Size Avatar">
                    <Grid container spacing={3} justifyContent="center" alignItems="center">
                        <Grid item>
                            <Avatar alt="User 1" src={Avatar1} size="xs" />
                        </Grid>
                        <Grid item>
                            <Avatar alt="User 2" src={Avatar2} size="sm" />
                        </Grid>
                        <Grid item>
                            <Avatar alt="User 3" src={Avatar3} size="md" />
                        </Grid>
                        <Grid item>
                            <Avatar alt="User 3" src={Avatar4} size="lg" />
                        </Grid>
                        <Grid item>
                            <Avatar alt="User 3" src={Avatar5} size="xl" />
                        </Grid>
                    </Grid>
                </SubCard>
            </Grid>
            <Grid item xs={12} md={2}>
                <SubCard title="Avatar with badge">
                    <Grid container spacing={3} justifyContent="center" alignItems="center">
                        <Grid item>
                            <Badge
                                overlap="circular"
                                badgeContent={
                                    <Avatar color="success" size="badge">
                                        <CheckTwoToneIcon />
                                    </Avatar>
                                }
                            >
                                <Avatar alt="User 1" src={Profile} size="xl" outline color="success" />
                            </Badge>
                        </Grid>
                    </Grid>
                </SubCard>
            </Grid>
        </Grid>
    </MainCard>
);

export default UIAvatar;
