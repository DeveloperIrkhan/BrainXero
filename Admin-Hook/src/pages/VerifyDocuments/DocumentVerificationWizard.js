import React,{useRef, useState} from "react"
import { useHistory } from "react-router-dom";

import {
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  CardText,
  CardImg,
  Col,
  Container,
  Form,
  FormGroup,
  Input,
  Label,
  NavItem,
  NavLink,
  Progress,
  Row,
  TabContent,
  TabPane
} from "reactstrap"

import classnames from "classnames"
import { Link } from "react-router-dom"

//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb"

import toastr from "toastr"
import "toastr/build/toastr.min.css"

import {post} from "../../helpers/api_helper"
import{POST_UPLOAD_DOCUMENT}  from "../../helpers/url_helper"

import img1 from "../../assets/images/small/img-1.jpg"

const DocumentVerificationWizard = () => {
  const [activeTab, setactiveTab] = useState(1)
  const [activeTabProgress, setactiveTabProgress] = useState(1)
  const [progressValue, setprogressValue] = useState(25)
  const [selfie, setSelfie] = useState(img1);

  function toggleTab(tab) {
    if (activeTab !== tab) {
      if (tab >= 1 && tab <= 4) {
        setactiveTab(tab)
      }
    }
  }

  function toggleTabProgress(tab) {
    if (activeTabProgress !== tab) {
      if (tab >= 1 && tab <= 4) {
        setactiveTabProgress(tab)

        if (tab === 1) {
          setprogressValue(25)
        }
        if (tab === 2) {
          setprogressValue(50)
        }
        if (tab === 3) {
          setprogressValue(75)
        }
        if (tab === 4) {
          setprogressValue(100)
        }
      }
    }
  }

  const inputFile = useRef(null);
  const inputSelfieFile = useRef(null);
  const history = useHistory();

  const onButtonClick = () => {
    // `current` points to the mounted file input element
   inputFile.current.click();

  };

  const onSelfieClick = () => {
    // `current` points to the mounted file input element
    inputSelfieFile.current.click();

  };

  const onFileChange = event => {
    const imageFile = event.target.files[0];
    
    if (!imageFile) {
      showToast('Please select an image.');
      return false;
    }
   
    if (!imageFile.name.match(/\.(jpg|jpeg|png|gif)$/)) {
      showToast('Please select a valid image.');
      return false;
    }

    // call the OCR service here
    // event.target.files[0]
    
     const formData = new FormData();
    
      // Update the formData object
      formData.append(
        "myFile", // name of the parameter
        imageFile,
        imageFile.name
      );

      // Request made to the backend api
      // Send formData object
     /* var response = post(POST_UPLOAD_DOCUMENT, formData)
      
      response.then((val) => {
        const data = val.statusCode;
        history.push("/confirm-document");
            })
     */
    toggleTabProgress(2);
   // history.push("/biometric-auth");
  }

  const onSelfieChange = event => {
    const imageFile = event.target.files[0];
    
    if (!imageFile) {
      showToast('Please select an image.');
      return false;
    }
   
    if (!imageFile.name.match(/\.(jpg|jpeg|png|gif)$/)) {
      showToast('Please select a valid image.');
      return false;
    }

    // call the OCR service here
    // event.target.files[0]
    
     const formData = new FormData();
    
      // Update the formData object
      formData.append(
        "myFile", // name of the parameter
        imageFile,
        imageFile.name
      );

      // Request made to the backend api
      // Send formData object
     /* var response = post(POST_UPLOAD_DOCUMENT, formData)
      
      response.then((val) => {
        const data = val.statusCode;
        history.push("/confirm-document");
            })
     */
    setSelfie(URL.createObjectURL(imageFile));
   // toggleTabProgress(2);
   // history.push("/biometric-auth");
  }

  function showToast(message) {
    toastr.options = {
      positionClass: "toast-top-right",
      preventDuplicates: true,
    }
    toastr.error(message, '')
  }



  return (
    <React.Fragment>
       <input type='file' id='file' ref={inputFile} onChange={onFileChange} style={{display: 'none'}}/>
       <input type='file' id='selfiefile' ref={inputSelfieFile} onChange={onSelfieChange} style={{display: 'none'}}/>
      <div className="page-content">
        <Container fluid={true}>
          <Breadcrumbs title="Forms" breadcrumbItem="Verify Document" />

          <Row className="justify-content-center">
            <Col lg="6">
              <Card>
                <CardBody>
                  <h4 className="card-title mb-4">Verify Document Wizard</h4>
                  <div id="progrss-wizard" className="twitter-bs-wizard">
                    <ul className="twitter-bs-wizard-nav nav-justified nav nav-pills">
                      <NavItem>
                        <NavLink
                          className={classnames({
                            active: activeTabProgress === 1
                          })}
                          onClick={() => {
                            toggleTabProgress(1)
                          }}
                        >
                          <span className="step-number mr-2">01</span>
                          Document
                        </NavLink>
                      </NavItem>
                      <NavItem>
                        <NavLink
                          className={classnames({
                            active: activeTabProgress === 2
                          })}
                          onClick={() => {
                            toggleTabProgress(2)
                          }}
                        >
                          <span className="step-number mr-2">02</span>
                          <span>Selfie</span>
                        </NavLink>
                      </NavItem>
                      <NavItem>
                        <NavLink
                          className={classnames({
                            active: activeTabProgress === 3
                          })}
                          onClick={() => {
                            toggleTabProgress(3)
                          }}
                        >
                          <span className="step-number mr-2">03</span>
                          Confirm
                        </NavLink>
                      </NavItem>
                      <NavItem>
                      </NavItem>
                    </ul>

                    <div id="bar" className="mt-4">
                      <Progress
                        color="success"
                        striped
                        animated
                        value={progressValue}
                      />
                      <div className="progress-bar bg-success progress-bar-striped progress-bar-animated" />
                    </div>
                    <TabContent
                      activeTab={activeTabProgress}
                      className="twitter-bs-wizard-tab-content"
                    >
      <TabPane tabId={1}>
                          
          <Row className="justify-content-center">
            <Col lg={10}>
              <Card outline color="primary" className="border clickable" onClick= {onButtonClick}>
                <CardHeader className="bg-transparent">
                  <h5 className="my-0 text-primary">
                    <i className="mdi mdi-bullseye-arrow mr-3"/>Passport
                  </h5>
                </CardHeader>
                <CardBody>
                  <CardTitle className="mt-0">Click to upload passport</CardTitle>
                  <CardText>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </CardText>
                </CardBody>
              </Card>
            </Col>
          </Row>

          <Row className="justify-content-center" >
            <Col lg={10}>
              <Card outline color="primary" className="border clickable" onClick= {onButtonClick}>
                <CardHeader className="bg-transparent">
                  <h5 className="my-0 text-primary">
                    <i className="mdi mdi-bullseye-arrow mr-3"/>Driving License
                  </h5>
                </CardHeader>
                <CardBody>
                  <CardTitle className="mt-0">Driving License</CardTitle>
                  <CardText>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </CardText>
                </CardBody>
              </Card>
            </Col>
          </Row>

          <Row className="justify-content-center">
            <Col lg={10}>
              <Card outline color="primary" className="border clickable" onClick= {onButtonClick}>
                <CardHeader className="bg-transparent">
                  <h5 className="my-0 text-primary">
                    <i className="mdi mdi-bullseye-arrow mr-3"/>Medicare 
                  </h5>
                </CardHeader>
                <CardBody>
                  <CardTitle className="mt-0">Austrlian Medicare</CardTitle>
                  <CardText>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </CardText>
                </CardBody>
              </Card>
            </Col>
          </Row>

        </TabPane>
      

       <TabPane tabId={2}>
                        <div>
        <Row className="justify-content-center">          
          <Col lg={10}>
              <Card className="text-center" onClick={onSelfieClick}>
                <CardImg src={selfie} alt="selfie" />

                
                <CardBody>
                  <CardTitle className="mt-0">Upload your image</CardTitle>
                  <CardText>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </CardText>

                </CardBody>
              </Card>
            </Col>
            </Row>
                        </div>
                      </TabPane>
                      <TabPane tabId={3}>
                        <div>
                          <Form>
                            <Row>
                              <Col lg="6">
                                <FormGroup>
                                  <Label for="basicpill-namecard-input24">
                                    Name on Card
                                  </Label>
                                  <Input
                                    type="text"
                                    className="form-control"
                                    id="basicpill-namecard-input24"
                                  />
                                </FormGroup>
                              </Col>

                              <Col lg="6">
                                <FormGroup>
                                  <Label>Credit Card Type</Label>
                                  <select className="custom-select">
                                    <option defaultValue>
                                      Select Card Type
                                    </option>
                                    <option value="AE">American Express</option>
                                    <option value="VI">Visa</option>
                                    <option value="MC">MasterCard</option>
                                    <option value="DI">Discover</option>
                                  </select>
                                </FormGroup>
                              </Col>
                            </Row>
                            <Row>
                              <Col lg="6">
                                <FormGroup>
                                  <Label for="basicpill-cardno-input25">
                                    Credit Card Number
                                  </Label>
                                  <Input
                                    type="text"
                                    className="form-control"
                                    id="basicpill-cardno-input25"
                                  />
                                </FormGroup>
                              </Col>

                              <Col lg="6">
                                <FormGroup>
                                  <Label for="basicpill-card-verification-input26">
                                    Card Verification Number
                                  </Label>
                                  <Input
                                    type="text"
                                    className="form-control"
                                    id="basicpill-card-verification-input26"
                                  />
                                </FormGroup>
                              </Col>
                            </Row>
                            <Row>
                              <Col lg="6">
                                <FormGroup>
                                  <Label for="basicpill-expiration-input27">
                                    Expiration Date
                                  </Label>
                                  <Input
                                    type="text"
                                    className="form-control"
                                    id="basicpill-expiration-input27"
                                  />
                                </FormGroup>
                              </Col>
                            </Row>
                          </Form>
                        </div>
                      </TabPane>
                      <TabPane tabId={4}>
                        <div className="row justify-content-center">
                          <Col lg="6">
                            <div className="text-center">
                              <div className="mb-4">
                                <i className="mdi mdi-check-circle-outline text-success display-4" />
                              </div>
                              <div>
                                <h5>Confirm Detail</h5>
                                <p className="text-muted">
                                  If several languages coalesce, the grammar of
                                  the resulting
                                </p>
                              </div>
                            </div>
                          </Col>
                        </div>
                      </TabPane>
                    </TabContent>
                    <ul className="pager wizard twitter-bs-wizard-pager-link">
                      <li
                        className={
                          activeTabProgress === 1
                            ? "previous disabled"
                            : "previous"
                        }
                      >
                        <Link
                          to="#"
                          onClick={() => {
                            toggleTabProgress(activeTabProgress - 1)
                          }}
                        >
                          Previous
                        </Link>
                      </li>
                      <li
                        className={
                          activeTabProgress === 4 ? "next disabled" : "next"
                        }
                      >
                        <Link
                          to="#"
                          onClick={() => {
                            toggleTabProgress(activeTabProgress + 1)
                          }}
                        >
                          Next
                        </Link>
                      </li>
                    </ul>
                  </div>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </React.Fragment>
  )
}

export default DocumentVerificationWizard
