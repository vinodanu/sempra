import React from 'react'
import { Menu } from 'semantic-ui-react'

const Header = () => {
    return (
        <Menu pointing secondary>
            <Menu.Item  name='home' href="/home"/>
            <Menu.Item  name='profile' href="/profile"/>
            <Menu.Item  name='admin' href="/admin"/>
        </Menu>
    )
}

export default Header;