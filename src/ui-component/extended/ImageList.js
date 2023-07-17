import PropTypes from 'prop-types';

// material-ui
import { ImageListItem, ImageListItemBar } from '@mui/material';
import MImageList from '@mui/material/ImageList';

// project imports
import useConfig from 'hooks/useConfig';

// set image width & height radio
function srcset(image, width, height, rows = 1, cols = 1) {
    return `${image}?w=${width * cols}&h=${height * rows}&fit=crop&auto=format 1x,
  ${image}?w=${width * cols}&h=${height * rows}&fit=crop&auto=format&dpr=2 2x`;
}

// ==============================|| IMAGE LIST/GRID ||============================== //

const ImageList = ({ itemData }) => {
    const { borderRadius } = useConfig();

    return (
        <MImageList
            sx={{
                // Promote the list into its own layer in Chrome. This costs memory, but helps keeping high FPS.
                transform: 'translateZ(0)',
                overflowY: 'visible',
                mb: 0
            }}
            gap={8}
        >
            {itemData.map((item) => {
                const cols = item.featured ? 2 : 1;
                const rows = item.featured ? 2 : 1;

                return (
                    <ImageListItem key={item.img} cols={cols} rows={rows} sx={{ overflow: 'hidden', borderRadius: `${borderRadius}px` }}>
                        <img srcSet={srcset(`assets/images/profile/${item.img}`, 250, 200, rows, cols)} alt={item.title} loading="lazy" />
                        <ImageListItemBar
                            sx={{
                                background: 'linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)'
                            }}
                            title={item.title}
                            position="top"
                            actionPosition="left"
                        />
                    </ImageListItem>
                );
            })}
        </MImageList>
    );
};

ImageList.propTypes = {
    itemData: PropTypes.array
};

export default ImageList;
