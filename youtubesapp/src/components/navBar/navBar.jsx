import React from 'react';
import Form from 'react-bootstrap/Form';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import FormControl from 'react-bootstrap/FormControl';
import './navBar.css'


function NavBar(props){


    return(

        <Navbar bg="dark" variant="dark">
            <Navbar.Brand className='col-md-4'>Youtubes Clone</Navbar.Brand>
            <Form inline className='search-bar col-md-6' onSubmit={()=> props.handleSearchSubmit()}>
                <FormControl type="text" placeholder="Search" className="mr-sm-2" name='searchBarVal' onChange={props.handleSearchbarChange()} />
                <Button type='submit' value='Submit'></Button> 
            </Form>
        </Navbar>
    )
}


export default NavBar;