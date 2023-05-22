import React, { useEffect, useState } from 'react'
import { Card, Row, Col, Table, Container, Image, Button } from 'react-bootstrap'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from '../../services/firebase'
import Head from 'next/head'
import Link from 'next/link'
import Layout from '@/components/layout'

export default function Profile () {
  const [name, setName] = useState('')

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setName(user.email)
      } else {
        alert('You are not Logged in')
      }
    })
  }, [])

  return (
        <>
            <Layout>
            <Head>
                <title>Profile Page</title>
            </Head>
            <div className="Profile-bg-image">
                <Container className="mt-5 mb-5">
                    <Row>
                        <Col md={3}>
                            <Card className="mb-2 square rounded-circle" style={{ width: '11rem' }}>
                                <Card.Img cls variant="top" src="Default_pfp.png"/>                                </Card>
                        </Col>
                        <Col md={6}>
                            <div className="mt-3 ms-2" style={{ color: 'whitesmoke', textAlign: 'start' }}>
                                <h2 className="ms-4">{name}</h2>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, reprehenderit?</p>
                            </div>
                        </Col>
                        <Col md={3}>
                            <h1 style={{ color: 'orange' }}>PROFILE</h1>
                            <p style={{ color: 'white' }}>Share your Profile: </p>
                            <div style={{ justifyContent: 'space-between', display: 'flex' }}>
                                <Image className='thumbnail' alt='' src='facebook-48.png'/>
                                <Image className='thumbnail' alt='' src='twitter-48.png'/>
                                <Image className='thumbnail' alt='' src='instagram-48.png'/>
                            </div>
                        </Col>
                    </Row>
                </Container>

                <Container className="mt-5 mb-5" style={{ width: '1150px', height: '400px' }}>
                    <div style={{ backgroundColor: 'gray', height: '370px' }}>
                        <Row className='mb-3'>
                            <Col md={3}>
                                <h2 style={{ color: 'orange' }}>Performance</h2>
                                <Table striped bordered hover size="sm" style={{ color: 'whitesmoke', textAlign: 'center' }}>
                                    <thead>
                                        <tr>
                                            <th>Match</th>
                                            <th>Win</th>
                                            <th>Lose</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>0</td>
                                            <td>0</td>
                                            <td>0</td>
                                        </tr>
                                    </tbody>
                                </Table>
                            </Col>
                            <Col md={{ span: 7, offset: 2 }} style={{ backgroundColor: 'white' }}>
                                <h2 style={{ color: 'orange' }}>History</h2>
                            </Col>
                        </Row>
                        <Row className='mt-3 mb-3'>
                            <Col md={3}>
                                <h2 style={{ color: 'orange' }}>Gemes</h2>
                                <Image className='rounded' alt='' src='game-list-1.png'/>
                            </Col>
                        </Row>
                        <Row className='mt-3 mb-3'>
                            <Col md={3} style={{ color: 'orange' }}>
                                <h2>E-certificat</h2>
                                <p ><Button variant="light" style={{ color: 'orange' }}>Download</Button></p>
                            </Col>
                        </Row>
                    </div>
                </Container>
            </div>
            </Layout>
        </>
  )
}
