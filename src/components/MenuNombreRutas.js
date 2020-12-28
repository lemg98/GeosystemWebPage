import React from 'react';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

export default function MenuNombreRutas(props) {
    
    const isMenuOpen = Boolean(props.anchorEl);

    const menuId2 = 'primary-search-account-menu2';
    const renderMenu2 = (
        <Menu
            anchorEl={props.anchorEl}
            anchorOrigin={{ vertical: 'top', horizontal: 'left' }}
            id={menuId2}
            keepMounted
            transformOrigin={{ vertical: 'top', horizontal: 'left' }}
            open={isMenuOpen}
            onClose={props.handleMenuClose}
        >
            <MenuItem onClick={props.handleMenuClose}>Ruta A</MenuItem>
            <MenuItem onClick={props.handleMenuClose}>Ruta B</MenuItem>
        </Menu>
    );

  return (
    <>
        {renderMenu2}
    </>
  );
}