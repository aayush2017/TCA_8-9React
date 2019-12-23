import React from 'react';

import { Button } from 'react-bootstrap';

class Header extends React.Component {
    render() {
        return (
            <div>
                <h1>Hello world from Header</h1>
                <Button variant="primary">Primary</Button>
                <Button variant="info">Button</Button>
            </div>
        )
    }
}
export default Header;