import React from "react"
import { Container, Row, Col } from "reactstrap"
import {ProjectName,ProjectYear} from "../../common/constants"

const Footer = () => {
  return (
    <React.Fragment>
      <footer className="footer">
        <Container fluid={true}>
          <Row>
            <Col md={6}>{ProjectName} - {ProjectYear}</Col>
            <Col md={6}>
            </Col>
          </Row>
        </Container>
      </footer>
    </React.Fragment>
  )
}

export default Footer
