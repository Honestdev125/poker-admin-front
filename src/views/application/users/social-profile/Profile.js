import React from 'react';

// material-ui
import { useTheme } from '@mui/material/styles';
import { Box, Button, Divider, Grid, IconButton, Link, TextField, Typography } from '@mui/material';

// project imports
import AnimateButton from 'ui-component/extended/AnimateButton';
import Posts from 'ui-component/cards/Post';
import MainCard from 'ui-component/cards/MainCard';
import { gridSpacing } from 'store/constant';
import { useDispatch, useSelector } from 'store';
import { getPosts, editComment, addComment, addReply, likePost, likeComment, likeReply } from 'store/slices/user';

// assets
import AttachmentTwoToneIcon from '@mui/icons-material/AttachmentTwoTone';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LayersTwoToneIcon from '@mui/icons-material/LayersTwoTone';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import NavigateNextRoundedIcon from '@mui/icons-material/NavigateNextRounded';
import PeopleAltTwoToneIcon from '@mui/icons-material/PeopleAltTwoTone';
import PublicTwoToneIcon from '@mui/icons-material/PublicTwoTone';
import RecentActorsTwoToneIcon from '@mui/icons-material/RecentActorsTwoTone';

// ==============================|| SOCIAL PROFILE - POST ||============================== //

const Profile = () => {
    const theme = useTheme();
    const dispatch = useDispatch();
    const [posts, setPosts] = React.useState([]);
    const userState = useSelector((state) => state.user);
    const getPost = async () => {
        dispatch(getPosts());
    };

    React.useEffect(() => {
        setPosts(userState.posts);
    }, [userState]);

    React.useEffect(() => {
        getPost();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const editPost = async (id, commentId) => {
        dispatch(editComment(id, commentId));
    };

    const commentAdd = async (id, comment) => {
        dispatch(addComment(id, comment));
    };

    const replyAdd = async (postId, commentId, reply) => {
        dispatch(addReply(postId, commentId, reply));
    };

    const handlePostLikes = async (postId) => {
        dispatch(likePost(postId));
    };

    const handleCommentLikes = async (postId, commentId) => {
        dispatch(likeComment(postId, commentId));
    };

    const handleReplayLikes = async (postId, commentId, replayId) => {
        dispatch(likeReply(postId, commentId, replayId));
    };

    const sideAvatarSX = {
        borderRadius: '8px',
        width: 48,
        height: 48,
        fontSize: '1.5rem',
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        border: theme.palette.mode === 'dark' ? '1px solid' : 'none',
        '&>svg': {
            width: 24,
            height: 24
        }
    };

    return (
        <Grid container spacing={gridSpacing}>
            <Grid item xs={12} sm={12} md={4}>
                <Grid container spacing={gridSpacing}>
                    <Grid item xs={12}>
                        <MainCard>
                            <Grid container alignItems="center" spacing={gridSpacing}>
                                <Grid item>
                                    <Box
                                        sx={{
                                            ...sideAvatarSX,
                                            bgcolor: theme.palette.mode === 'dark' ? theme.palette.primary.main + 20 : 'primary.light',
                                            border: theme.palette.mode === 'dark' ? '1px solid' : 'none',
                                            borderColor: 'primary.main',
                                            color: 'primary.dark'
                                        }}
                                    >
                                        <PeopleAltTwoToneIcon />
                                    </Box>
                                </Grid>
                                <Grid item xs zeroMinWidth>
                                    <Typography variant="h3" color="primary" component="div" sx={{ mb: 0.625 }}>
                                        239k
                                    </Typography>
                                    <Typography variant="body2">Friends</Typography>
                                </Grid>
                                <Grid item>
                                    <IconButton size="large" aria-label="navigation icon">
                                        <NavigateNextRoundedIcon />
                                    </IconButton>
                                </Grid>
                            </Grid>
                            <Divider sx={{ margin: '16px 0' }} />
                            <Grid container alignItems="center" spacing={gridSpacing}>
                                <Grid item>
                                    <Box
                                        sx={{
                                            ...sideAvatarSX,
                                            bgcolor: theme.palette.mode === 'dark' ? theme.palette.secondary.main + 20 : 'secondary.light',
                                            borderColor: 'secondary.main',
                                            color: 'secondary.dark'
                                        }}
                                    >
                                        <RecentActorsTwoToneIcon />
                                    </Box>
                                </Grid>
                                <Grid item xs zeroMinWidth>
                                    <Typography
                                        variant="h3"
                                        sx={{
                                            mb: 0.625,
                                            color: theme.palette.mode === 'dark' ? theme.palette.text.secondary : 'secondary.main'
                                        }}
                                    >
                                        234k
                                    </Typography>
                                    <Typography variant="body2">Followers</Typography>
                                </Grid>
                                <Grid item>
                                    <IconButton size="large" aria-label="navigation icon">
                                        <NavigateNextRoundedIcon />
                                    </IconButton>
                                </Grid>
                            </Grid>
                        </MainCard>
                    </Grid>
                    <Grid item xs={12}>
                        <MainCard>
                            <Grid container spacing={2}>
                                <Grid item xs={12}>
                                    <Typography variant="h4">About</Typography>
                                </Grid>
                                <Grid item xs={12}>
                                    <Typography variant="body2">
                                        It is a long established fact that a reader will be distracted by the readable content of a page
                                        when looking at its layout.
                                    </Typography>
                                </Grid>
                            </Grid>
                            <Divider sx={{ margin: '16px 0' }} />
                            <Grid
                                container
                                spacing={2}
                                sx={{
                                    '& >div': {
                                        overflow: 'hidden',
                                        textOverflow: 'ellipsis',
                                        whiteSpace: 'nowrap',
                                        display: 'block',
                                        width: '100%'
                                    },
                                    '& a': {
                                        color: theme.palette.grey[700],

                                        '& svg': {
                                            mr: 1,
                                            verticalAlign: 'bottom'
                                        },
                                        '&:hover': {
                                            color: theme.palette.primary.main,
                                            textDecoration: 'none'
                                        }
                                    }
                                }}
                            >
                                <Grid item xs={12}>
                                    <Link href="https://codedthemes.com/" target="_blank" underline="hover">
                                        <PublicTwoToneIcon color="secondary" /> https://codedthemes.com/
                                    </Link>
                                </Grid>
                                <Grid item xs={12}>
                                    <Link href="https://www.instagram.com/codedthemes" target="_blank" underline="hover">
                                        <InstagramIcon sx={{ color: theme.palette.orange.dark }} /> https://www.instagram.com/codedthemes
                                    </Link>
                                </Grid>
                                <Grid item xs={12}>
                                    <Link href="https://www.facebook.com/codedthemes" target="_blank" underline="hover">
                                        <FacebookIcon color="primary" /> https://www.facebook.com/codedthemes
                                    </Link>
                                </Grid>
                                <Grid item xs={12}>
                                    <Link href="https://in.linkedin.com/company/codedthemes" target="_blank" underline="hover">
                                        <LinkedInIcon sx={{ color: theme.palette.grey[900] }} /> https://in.linkedin.com/company/codedthemes
                                    </Link>
                                </Grid>
                            </Grid>
                        </MainCard>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item xs={12} sm={12} md={8}>
                <Grid container spacing={gridSpacing}>
                    <Grid item xs={12}>
                        <MainCard>
                            <Grid container spacing={gridSpacing}>
                                <Grid item xs={12}>
                                    <TextField
                                        id="outlined-textarea"
                                        placeholder="What’s on your mind, Larry?"
                                        rows={4}
                                        fullWidth
                                        multiline
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <Grid container justifyContent="space-between" spacing={gridSpacing}>
                                        <Grid item>
                                            <Button variant="text" color="secondary" startIcon={<AttachmentTwoToneIcon />}>
                                                Gallery
                                            </Button>
                                        </Grid>
                                        <Grid item>
                                            <AnimateButton>
                                                <Button variant="contained" color="secondary" startIcon={<LayersTwoToneIcon />}>
                                                    Post
                                                </Button>
                                            </AnimateButton>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </MainCard>
                    </Grid>
                    {posts &&
                        posts.map((post) => (
                            <Grid key={post.id} item xs={12}>
                                <Posts
                                    key={post.id}
                                    post={post}
                                    editPost={editPost}
                                    renderPost={getPost}
                                    setPosts={setPosts}
                                    commentAdd={commentAdd}
                                    replyAdd={replyAdd}
                                    handlePostLikes={handlePostLikes}
                                    handleCommentLikes={handleCommentLikes}
                                    handleReplayLikes={handleReplayLikes}
                                />
                            </Grid>
                        ))}
                </Grid>
            </Grid>
        </Grid>
    );
};

export default Profile;
