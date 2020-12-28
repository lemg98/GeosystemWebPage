import React from 'react';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

export default function MenuProfile(props) {
    
    const isMenuOpen = Boolean(props.anchorEl);

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
            <MenuItem onClick={props.handleMenuClose}>Profile</MenuItem>
            <MenuItem onClick={props.handleMenuClose}>My account</MenuItem>
        </Menu>
    );

  return (
    <>
        {renderMenu}
    </>
  );
}