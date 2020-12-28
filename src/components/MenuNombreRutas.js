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
            <MenuItem onClick={props.handleMenuClose}>Profile2</MenuItem>
            <MenuItem onClick={props.handleMenuClose}>My account2</MenuItem>
        </Menu>
    );

  return (
    <>
        {renderMenu2}
    </>
  );
}