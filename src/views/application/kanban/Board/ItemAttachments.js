import { useState, useCallback } from 'react';

// material-ui
import { alpha, styled } from '@mui/material/styles';
import { Box, Paper, Button, IconButton } from '@mui/material';

// third-party
import { isString } from 'lodash';
import { useDropzone } from 'react-dropzone';

// assets
import CancelIcon from '@mui/icons-material/Cancel';
import AddRoundedIcon from '@mui/icons-material/AddRounded';

const DropZoneStyle = styled('div')(({ theme }) => ({
    width: 64,
    height: 64,
    fontSize: 24,
    display: 'flex',
    cursor: 'pointer',
    alignItems: 'center',
    justifyContent: 'center',
    margin: theme.spacing(0.5),
    borderRadius: theme.shape.borderRadius,
    '&:hover': { opacity: 0.72 }
}));

function UploadFile() {
    const [files, setFiles] = useState([]);

    const handleRemove = (file) => {
        const filteredItems = files.filter((_file) => _file !== file);
        setFiles(filteredItems);
    };

    const handleDrop = useCallback(
        (acceptedFiles) => {
            setFiles(
                acceptedFiles.map((file) => {
                    const reader = new FileReader();

                    reader.onabort = () => console.log('file reading was aborted');
                    reader.onerror = () => console.log('file reading has failed');
                    reader.onload = () => {
                        const binaryStr = reader.result;
                        console.log(binaryStr);
                    };
                    reader.readAsArrayBuffer(file);

                    return Object.assign(file, {
                        preview: URL.createObjectURL(file)
                    });
                })
            );
        },
        [setFiles]
    );

    const { getRootProps, getInputProps, isDragActive } = useDropzone({
        onDrop: handleDrop
    });

    return (
        <>
            {files.map((file) => {
                const { name, preview } = file;
                const key = isString(file) ? file : name;

                return (
                    <Box
                        key={key}
                        sx={{
                            p: 0,
                            m: 0.5,
                            width: 64,
                            height: 64,
                            borderRadius: 0.25,
                            overflow: 'hidden',
                            position: 'relative'
                        }}
                    >
                        <Paper
                            variant="outlined"
                            component="img"
                            src={isString(file) ? file : preview}
                            sx={{ width: '100%', height: '100%', objectFit: 'cover', position: 'absolute', borderRadius: 1 }}
                        />
                        <Box sx={{ top: 6, right: 6, position: 'absolute' }}>
                            <IconButton
                                size="small"
                                onClick={() => handleRemove(file)}
                                sx={{
                                    p: '1px',
                                    color: 'common.white',
                                    bgcolor: (theme) => alpha(theme.palette.grey[900], 0.72),
                                    '&:hover': {
                                        bgcolor: (theme) => alpha(theme.palette.grey[900], 0.48)
                                    }
                                }}
                            >
                                <CancelIcon />
                            </IconButton>
                        </Box>
                    </Box>
                );
            })}

            <DropZoneStyle
                {...getRootProps()}
                sx={{
                    ...(isDragActive && { opacity: 0.72 })
                }}
            >
                <input {...getInputProps()} />

                <Button variant="outlined" size="large" sx={{ p: 2.25 }}>
                    <AddRoundedIcon />
                </Button>
            </DropZoneStyle>
        </>
    );
}

const ItemAttachments = () => (
    <Box sx={{ display: 'flex' }}>
        <UploadFile />
    </Box>
);

export default ItemAttachments;
