import 'bootstrap/dist/css/bootstrap.min.css';
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Barra from '../components/Barra';
import { useEffect, useState } from 'react';
import { Partida, Rodada } from '../interface/Abstracoes';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';

const Home: NextPage = () => {
  const [rodada, setRodada] = useState<Rodada>();
  const [ano, setAno] = useState('2003');

  useEffect(() => {
    fetch(`http://localhost:3001/${ano}`)
      .then((response) => response.json())
      .then((data) => setRodada(data.flat(Infinity)[data.length - 1]))
  }, [rodada]);

  const teste = rodada?.partidas;
  console.log(teste);
  return (
    <>
      <Head>
        <title>Campeonato</title>
        <meta name="description" content="Aplicação que mostra o placar dos campeonatos brasileiro" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Barra />
      <Container>
        <Row className='mt-2'>
          <Col xl={12}>
            <Card>
              <Card.Header className='bg-primary text-white'>
                <Row className='justify-content-center'>
                  <Col xl={'auto'}>
                    <Form.Select onChange={(event) => setAno(event.target.value)} aria-label="Ano do campeonato">
                      <option value="2003">2003</option>
                      <option value="2004">2004</option>
                      <option value="2005">2005</option>
                      <option value="2006">2006</option>
                      <option value="2007">2007</option>
                      <option value="2008">2008</option>
                      <option value="2009">2009</option>
                      <option value="2010">2010</option>
                      <option value="2011">2011</option>
                      <option value="2012">2012</option>
                      <option value="2013">2013</option>
                      <option value="2014">2014</option>
                      <option value="2015">2015</option>
                    </Form.Select>
                  </Col>
                </Row>
              </Card.Header>
              <Card.Body>
                Algo
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default Home
