import 'bootstrap/dist/css/bootstrap.min.css';
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Navbar from 'react-bootstrap/Navbar';
import Barra from '../components/barra';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Campeonato</title>
        <meta name="description" content="Aplicação que mostra o placar do campeonato brasileiro de 2015" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Barra></Barra>
      <Container>
        <Row className='mt-2'>
          <Col xl={12}>
            <Button>Teste</Button>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default Home
