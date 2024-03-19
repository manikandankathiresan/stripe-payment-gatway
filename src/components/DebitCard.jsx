import React from 'react';
import Modal from 'react-responsive-modal';
import 'react-responsive-modal/styles.css';


const DebitCard = ({ open, setOpen }) => {

    const onCloseModal = () => setOpen(false);
    return (
        <div>
            <Modal open={open} onClose={onCloseModal} center>

                <div class="credit-card">
                    <img src="https://raw.githubusercontent.com/ismailvtl/ismailvtl.github.io/3d5c5c3d591463bfba973d10ebfadd9eb063dbbc/images/visa-logo.png" class="logo" alt='card' />
                    <div class="numbers">4000 0035 6000 0008</div>
                    <div class="name-and-expiry">
                        <span>K MANIKANDAN</span>
                        <span>05/29</span>
                        <span>cvv 121</span>
                    </div>
                </div>


            </Modal>
        </div>
    )
}

export default DebitCard
