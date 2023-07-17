import { useState } from 'react';
import { useDispatch } from 'store';

// material-ui
import { Button, CardContent, Grid, IconButton, InputAdornment, TextField, Tooltip } from '@mui/material';

// third-party
import { CopyToClipboard } from 'react-copy-to-clipboard';

// project imports
import MainCard from 'ui-component/cards/MainCard';
import SecondaryAction from 'ui-component/cards/CardSecondaryAction';
import SubCard from 'ui-component/cards/SubCard';
import { openSnackbar } from 'store/slices/snackbar';
import { gridSpacing } from 'store/constant';

// assets
import ContentCopyTwoToneIcon from '@mui/icons-material/ContentCopyTwoTone';
import ContentCutTwoToneIcon from '@mui/icons-material/ContentCutTwoTone';
import LinkIcon from '@mui/icons-material/Link';

// ==============================|| PLUGIN - COPY TO CLIPBOARD ||============================== //

const ClipboardPage = () => {
    const dispatch = useDispatch();

    const [text1, setText1] = useState('https://berrydashboard.io/');
    const [text2, setText2] = useState(
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    );
    const [text3] = useState(
        'Lorem ipsum cacilds, vidis litro abertis. Consetis adipiscings elitis. Pra lá , depois divoltis porris, paradis. Paisis, filhis, espiritis santis. Mé faiz elementum girarzis, nisi eros vermeio, in elementis mé pra quem é amistosis quis leo. Manduma pindureta quium dia nois paga.'
    );

    return (
        <MainCard
            title="Clipboard"
            secondary={
                <SecondaryAction icon={<LinkIcon fontSize="small" />} link="https://www.npmjs.com/package/react-copy-to-clipboard" />
            }
        >
            <Grid container spacing={gridSpacing}>
                <Grid item xs={12}>
                    <SubCard title="Copy from TextField">
                        <TextField
                            fullWidth
                            label="Website"
                            type="text"
                            value={text1}
                            onChange={(e) => {
                                setText1(e.target.value);
                            }}
                            InputProps={{
                                endAdornment: (
                                    <InputAdornment position="end">
                                        <CopyToClipboard
                                            text={text1}
                                            onCopy={() =>
                                                dispatch(
                                                    openSnackbar({
                                                        open: true,
                                                        message: 'Text Copied',
                                                        variant: 'alert',
                                                        alert: {
                                                            color: 'success'
                                                        },
                                                        close: false,
                                                        anchorOrigin: { vertical: 'top', horizontal: 'right' },
                                                        transition: 'SlideLeft'
                                                    })
                                                )
                                            }
                                        >
                                            <Tooltip title="Copy">
                                                <IconButton aria-label="Copy from another element" edge="end" size="large">
                                                    <ContentCopyTwoToneIcon sx={{ fontSize: '1.1rem' }} />
                                                </IconButton>
                                            </Tooltip>
                                        </CopyToClipboard>
                                    </InputAdornment>
                                )
                            }}
                        />
                    </SubCard>
                </Grid>
                <Grid item xs={12} md={6}>
                    <SubCard title="Copy from TextArea">
                        <TextField
                            multiline
                            rows={4}
                            fullWidth
                            label="Copy text"
                            onChange={(e) => setText2(e.target.value)}
                            value={text2}
                            sx={{ mb: gridSpacing }}
                        />
                        <CopyToClipboard
                            text={text2}
                            onCopy={() =>
                                dispatch(
                                    openSnackbar({
                                        open: true,
                                        message: 'Text Copied',
                                        variant: 'alert',
                                        alert: {
                                            color: 'success'
                                        },
                                        close: false,
                                        anchorOrigin: { vertical: 'top', horizontal: 'right' },
                                        transition: 'SlideLeft'
                                    })
                                )
                            }
                        >
                            <Button variant="contained" size="small" sx={{ mr: 1.5 }}>
                                <ContentCopyTwoToneIcon sx={{ fontSize: '1rem', mr: 1 }} /> Copy
                            </Button>
                        </CopyToClipboard>
                        <CopyToClipboard
                            text={text2}
                            onCopy={() => {
                                setText2('');
                                dispatch(
                                    openSnackbar({
                                        open: true,
                                        message: 'Text Cut',
                                        variant: 'alert',
                                        alert: {
                                            color: 'success'
                                        },
                                        close: false,
                                        anchorOrigin: { vertical: 'top', horizontal: 'right' },
                                        transition: 'SlideLeft'
                                    })
                                );
                            }}
                        >
                            <Button variant="contained" size="small" color="secondary">
                                <ContentCutTwoToneIcon sx={{ fontSize: '1rem', mr: 1 }} /> Cut
                            </Button>
                        </CopyToClipboard>
                    </SubCard>
                </Grid>
                <Grid item xs={12} md={6}>
                    <SubCard
                        title="Copy from Container"
                        secondary={
                            <CopyToClipboard
                                text={text3}
                                onCopy={() =>
                                    dispatch(
                                        openSnackbar({
                                            open: true,
                                            message: 'Text Copied',
                                            variant: 'alert',
                                            alert: {
                                                color: 'success'
                                            },
                                            close: false,
                                            anchorOrigin: { vertical: 'top', horizontal: 'right' },
                                            transition: 'SlideLeft'
                                        })
                                    )
                                }
                            >
                                <Tooltip title="Copy">
                                    <Button variant="contained" sx={{ mr: 1.5, px: 1, minWidth: 'auto' }}>
                                        <ContentCopyTwoToneIcon sx={{ fontSize: '1rem' }} />
                                    </Button>
                                </Tooltip>
                            </CopyToClipboard>
                        }
                    >
                        <CardContent sx={{ p: 0, pb: 2.5 }}>{text3}</CardContent>
                    </SubCard>
                </Grid>
            </Grid>
        </MainCard>
    );
};

export default ClipboardPage;
