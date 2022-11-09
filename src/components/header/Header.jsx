import React from 'react';
import css from './Header.module.css';
import UserMenu from '../userMenu/UserMenu'

function Header() {
    
    return ( 
        <header className={css.header}>
            <h1 className={css.headerTitle}>Awesome Kanban Board</h1>
            <UserMenu />
        </header>
     );
}

export default Header;