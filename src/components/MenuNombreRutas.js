import React from 'react';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

export default function MenuNombreRutas(props) {
    
    const isMenuOpen = Boolean(props.anchorEl);

    function handleRouteSelected(idx){
        props.handleMenuClose();
        // Index of route
        props.handleRouteSelected(idx);
    }

    const menuId = 'primary-search-account-menu';
    const renderMenu = (
        <Menu
            anchorEl={props.anchorEl}
            anchorOrigin={{ vertical: 'top', horizontal: 'left' }}
            id={menuId}
            keepMounted
            transformOrigin={{ vertical: 'top', horizontal: 'left' }}
            open={isMenuOpen}
            onClose={props.handleMenuClose}
        >
            {props.routes.map(function(item, idx){
                return (
                    <MenuItem 
                        key={idx} 
                        onClick={handleRouteSelected.bind(this, idx)}
                    >
                        {item['Nombre']}
                    </MenuItem>
                );
            })}
        </Menu>
    );

  return (
    <>
        {renderMenu}
    </>
  );
}