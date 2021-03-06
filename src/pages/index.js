import React from 'react'
import { Link } from 'gatsby'
import Layout from '../layout'
import ListGroup from 'react-bootstrap/ListGroup'
export default function Index() {
  return (
    <Layout>
      <ListGroup className="buttonlink">
        <ListGroup.Item variant="success" as={Link} to="/signup">
          Sign-up for personal training now!
        </ListGroup.Item>
      </ListGroup>
    </Layout>
  )
}
