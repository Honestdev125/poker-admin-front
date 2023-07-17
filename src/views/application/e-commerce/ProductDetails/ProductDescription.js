// project imports
import Specification from './Specification';
import Accordion from 'ui-component/extended/Accordion';

// accordion data
const descriptionData = [
    {
        id: 'basic1',
        defaultExpand: true,
        title: 'Specification',
        content: <Specification />
    },
    {
        id: 'basic2',
        title: 'Material and Wash instruction',
        content:
            'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum'
    },
    {
        id: 'basic3',
        title: 'Add on data',
        content:
            'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary'
    }
];

// ==============================|| PRODUCT DETAILS - DESCRIPTION ||============================== //

const ProductDescription = () => <Accordion data={descriptionData} />;

export default ProductDescription;
