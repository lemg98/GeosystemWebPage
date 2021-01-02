import React from 'react';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

import { ModalProfile } from '../index';

export default function MenuProfile(props) {
    
    const isMenuOpen = Boolean(props.anchorEl);

    const [open, setOpen] = React.useState(false);

    const handleModalOpen = () => {
        setOpen(true);
    };

    const handleModalClose = () => {
        setOpen(false);
    };

    function handelProfile(){
        props.handleMenuClose();
        handleModalOpen();
    }

    const menuId = 'primary-search-account-menu';
    const renderMenu = (
        <Menu
            anchorEl={props.anchorEl}
            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            id={menuId}
            keepMounted
            transformOrigin={{ vertical: 'top', horizontal: 'right' }}
            open={isMenuOpen}
            onClose={props.handleMenuClose}
        >
            <MenuItem onClick={handelProfile}>Perfil</MenuItem>
            <MenuItem onClick={props.handleSignOut}>Cerrar Sesion</MenuItem>
        </Menu>
    );

  return (
    <>
        {renderMenu}
        <ModalProfile
            open={open} 
            handleOpen={handleModalOpen}
            handleClose={handleModalClose}
            user={props.user}
        />
    </>
  );
}