import Image from 'next/image';
import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

export default function Barra() {
    return (
        <>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="/" className='d-flex align-content-center'>
                        <Image className='p-1' src="/bola.png" alt={'bola'} width={30} height={30}></Image>
                        Campeonato Brasileiro
                    </Navbar.Brand>
                </Container>
            </Navbar>
        </>
    )
}
