// project imports
import SimpleModal from './SimpleModal';
import ServerModal from './ServerModal';
import MainCard from 'ui-component/cards/MainCard';
import SecondaryAction from 'ui-component/cards/CardSecondaryAction';

// ==============================|| MODAL PAGE ||============================== //

const Modal = () => (
    <MainCard title="Simple Modal" secondary={<SecondaryAction link="https://next.material-ui.com/components/modal/" />}>
        <ServerModal />
        <SimpleModal />
    </MainCard>
);

export default Modal;
