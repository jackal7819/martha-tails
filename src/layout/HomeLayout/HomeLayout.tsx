import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import { Outlet } from 'react-router-dom';

import Modal from '../../layout/ModalLayout/Modal';


// import ThanksModal from '../../components/ThanksModal';

// import { useContext } from 'react';
// import { ModalContext } from '../../context/ModalContext';
import { useModalContext } from '../../context/useGlobalContext';
// import AdoptionModal from '../../components/AdoptionModal/AdoptionModal';
import ContactModal from '../../components/ContactModal/ContactModal';

const HomeLayout = () => {
	// const modalContext = useModalContext();
	// const isModalOpen = modalContext?.isModalOpen || false;
	// const openModal = modalContext?.openModal || (() => {});
	// const closeModal = modalContext?.closeModal || (() => {});
	const { isModalOpen, openModal, closeModal } = useModalContext();
	console.log(isModalOpen);
	return (
		<>
			<Header />
			<Outlet />
			<Footer />
			{/*		<Modal
				isModal={isModalOpen}
				openModal={openModal}
				closeModal={closeModal}
			>
				<ThanksModal />
				<AdoptionModal />
			</Modal> */}

			{/*	<Modal
				isModal={isModalOpen}
				openModal={openModal}
				closeModal={closeModal}
			>
			<ThanksModal />
			</Modal>*/}

			<Modal
				isModal={isModalOpen}
				openModal={openModal}
				closeModal={closeModal}
			>
				<ContactModal />
			</Modal>
		</>
	);
};

export default HomeLayout;
