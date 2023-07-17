import React from 'react';

// material-ui
import { styled } from '@mui/material/styles';
import { Button, CardContent, CardActions, Divider, Grid, IconButton, Modal, Typography } from '@mui/material';

// project imports
import MainCard from 'ui-component/cards/MainCard';

// assets
import CloseIcon from '@mui/icons-material/Close';

const ModalWrapper = styled('div')({
    marginBottom: 16,
    height: 500,
    flexGrow: 1,
    minWidth: 300,
    zIndex: -1,
    transform: 'translateZ(0)',
    '@media all and (-ms-high-contrast: none)': {
        display: 'none'
    }
});

// ==============================|| SERVER MODAL ||============================== //

export default function ServerModal() {
    const rootRef = React.useRef(null);

    return (
        <ModalWrapper ref={rootRef}>
            <Modal
                disablePortal
                disableEnforceFocus
                disableAutoFocus
                open
                aria-labelledby="server-modal-title"
                aria-describedby="server-modal-description"
                sx={{
                    display: 'flex',
                    p: 1,
                    alignItems: 'center',
                    justifyContent: 'center'
                }}
                container={() => rootRef.current}
            >
                <MainCard
                    sx={{
                        width: 450,
                        zIndex: 1
                    }}
                    title="Server Side Modal"
                    content={false}
                    secondary={
                        <IconButton size="large">
                            <CloseIcon fontSize="small" />
                        </IconButton>
                    }
                >
                    <CardContent>
                        <Typography variant="body1">
                            Laboris non ad et aute sint aliquip mollit voluptate velit dolore magna fugiat ex.
                        </Typography>
                        <Typography variant="body2" sx={{ mt: 2 }}>
                            Commodo amet veniam nostrud mollit quis sint qui nulla elit esse excepteur ullamco esse magna. Nisi duis aute
                            est in mollit irure enim tempor in.
                        </Typography>
                    </CardContent>
                    <Divider />
                    <CardActions>
                        <Grid container justifyContent="flex-end">
                            <Button variant="contained" type="button">
                                Open Modal
                            </Button>
                        </Grid>
                    </CardActions>
                </MainCard>
            </Modal>
        </ModalWrapper>
    );
}
