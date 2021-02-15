import React from "react"
import { useHistory } from "react-router-dom";

import {
  Col,
  Row,
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardImg,
  CardText,
  CardHeader,
  CardImgOverlay,
  CardFooter,
  CardDeck,
  CardColumns,
  Container,
} from "reactstrap"


import passport from "../../assets/images/passport.png"
import { Link } from "react-router-dom"

import Breadcrumbs from "../../components/Common/Breadcrumb"

const VerifyDocuments = props => {

  const history = useHistory();

  const handleScanDocument = props => {
    history.push('/choose-document');
  }

    const handleManualInput = props => {
      history.push('/confirm-document');
}

    return (
        <React.Fragment>
        <div className="page-content">
          <Container fluid={true}>
            <Breadcrumbs title="UI Elements" breadcrumbItem="Verify Documents" />
            <center>
            <Row className="justify-content-center">
              <Col mg={6} xl={3}>
                <Card>
                  <CardImg top className="img-fluid" src={passport} alt="passport" />
                  <CardBody>
                    <CardTitle className="mt-0">Scan Id Document</CardTitle>
                    <CardText>
                      Click here to upload your Id document
                    </CardText>
                    <Link onClick= {handleScanDocument}
                      to="#"
                      className="btn btn-primary waves-effect waves-light"
                    >
                      Upload Id Card
                    </Link>
                  </CardBody>
                </Card>
              </Col>
              </Row>

              <Row className="justify-content-center">
              <Col mg={6} xl={3}>
                <Card>
                  <CardImg top className="img-fluid" src={passport} alt="passport" />
                  <CardBody>
                    <CardTitle className="mt-0">Enter Details Manually</CardTitle>
                    <CardText>
                     Please enter your details Manually
                    </CardText>
                    <Link onClick= {handleManualInput}
                      to="#"
                      className="btn btn-primary waves-effect waves-light"
                    >
                      Enter details
                    </Link>
                  </CardBody>
                </Card>
              </Col>
              </Row>
              </center>
             </Container>
             </div>
        </React.Fragment> 
    )}
   
export default VerifyDocuments