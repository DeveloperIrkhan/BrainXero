import React from "react"

import {
  Card,
  Col,
  Container,
  Row,
  CardBody,
  CardTitle,
  FormGroup,
  Label,
  Button,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
} from "reactstrap"

//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb"

const ConfirmDocumentData = props => {
  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid={true}>
          <Breadcrumbs title="Form" breadcrumbItem="Confirm Data" />
          <Row className="justify-content-center">
            <Col lg={6}>
              <Card>
                <CardBody>
                  <CardTitle className="mb-4">Document Details</CardTitle>
                  <Form>
                    <FormGroup className="row mb-4">
                      <Label
                        for="horizontal-firstname-Input"
                        className="col-sm-3 col-form-Label"
                      >
                        First name
                      </Label>
                      <Col sm={9}>
                        <Input
                          type="text"
                          className="form-control"
                          id="horizontal-firstname-Input"
                        />
                      </Col>
                    </FormGroup>

                    <FormGroup className="row mb-4">
                      <Label
                        for="horizontal-firstname-Input"
                        className="col-sm-3 col-form-Label"
                      >
                        Last name
                      </Label>
                      <Col sm={9}>
                        <Input
                          type="text"
                          className="form-control"
                          id="horizontal-firstname-Input"
                        />
                      </Col>
                    </FormGroup>

                    <FormGroup className="row mb-4">
                      <Label
                        for="horizontal-firstname-Input"
                        className="col-sm-3 col-form-Label"
                      >
                        Passport Number
                      </Label>
                      <Col sm={9}>
                        <Input
                          type="text"
                          className="form-control"
                          id="horizontal-firstname-Input"
                        />
                      </Col>
                    </FormGroup>

                    <FormGroup className="row mb-4">
                      <Label
                        for="horizontal-firstname-Input"
                        className="col-sm-3 col-form-Label"
                      >
                        Expiry Date
                      </Label>
                      <Col sm={9}>
                        <Input
                          type="text"
                          className="form-control"
                          id="horizontal-firstname-Input"
                        />
                      </Col>
                    </FormGroup>

                    <FormGroup className="row mb-4">
                      <Label
                        for="horizontal-firstname-Input"
                        className="col-sm-3 col-form-Label"
                      >
                        Country
                      </Label>
                      <Col sm={9}>
                        <Input
                          type="text"
                          className="form-control"
                          id="horizontal-firstname-Input"
                        />
                      </Col>
                    </FormGroup>

                    <FormGroup className="row justify-content-end">
                      <Col sm={9}>
                        <div className="custom-control custom-checkbox mb-4">
                          <Input
                            type="checkbox"
                            className="custom-control-Input"
                            id="horizontal-customCheck"
                          />
                          <Label
                            className="custom-control-Label"
                            for="horizontal-customCheck"
                          >
                            Remember me
                          </Label>
                        </div>

                        <div>
                          <Button
                            type="submit"
                            color="primary"
                            className="w-md"
                          >
                            Submit
                          </Button>
                        </div>
                      </Col>
                    </FormGroup>
                  </Form>
                </CardBody>
              </Card>
            </Col>
          </Row>
          {/* end row  */}
        </Container>
        {/* container-fluid */}
      </div>
    </React.Fragment>
  )
}

export default ConfirmDocumentData
