import React,{useEffect, useState} from "react"
//Verification code package
import AuthCode from "react-auth-code-input"
import { Link , useHistory } from "react-router-dom"
import {
  Card,
  CardBody,
  Col,
  Container,
  Form,
  FormGroup,
  Row,
} from "reactstrap"

import {postAuthenticateLogin} from "../../helpers/fakebackend_helper"
import {post} from "../../helpers/api_helper"
import { call} from "redux-saga/effects"
import{POST_AUTH_CODE}  from "../../helpers/url_helper"
// import images
import logodark from "../../assets/images/logo-dark.png"
import logolight from "../../assets/images/logo-light.png"


const TwostepVerification = () => {
  const [authCode, setAuthCode] = useState('')
  const history = useHistory();
  
  const handleClick= props=>{
  

    var response = post(POST_AUTH_CODE,{ code: authCode })
    response.then((val) => {
      const data = val.statusCode;
              if (data === "OK")
               {
                  history.push("/dashboard");
              }
              else
              {
                document.getElementById("DisErr").innerHTML = "Please enter valid Code";
                document.getElementById("DisErr").style.color = 'red';
              }
          })
  }
  
    return (
      <React.Fragment>
        <div className="account-pages my-5 pt-sm-5">
          <Container>
            <Row>
              <Col lg={12}>
                <div className="text-center mb-5 text-muted">
                  <Link to="dashboard" className="d-block auth-logo">
                    <img
                      src={logodark}
                      alt=""
                      height="20"
                      className="auth-logo-dark mx-auto"
                    />
                    <img
                      src={logolight}
                      alt=""
                      height="20"
                      className="auth-logo-light mx-auto"
                    />
                  </Link>
                  <p className="mt-3">IDUx</p>
                </div>
              </Col>
            </Row>
            <Row className="justify-content-center">
              <Col md={8} lg={6} xl={5}>
                <Card>
                  <CardBody>
                    <div className="p-2">
                      <div className="text-center">
                        <div className="avatar-md mx-auto">
                          <div className="avatar-title rounded-circle bg-light">
                            <i className="bx bxs-lock h1 mb-0 text-primary"></i>
                          </div>
                        </div>
                        <div className="p-2 mt-4">
                          <h4>Verify your Account</h4>
                          <p className="mb-5" id="DisErr">
                            Please enter the 6 digit code from{" "}
                            <span className="font-weight-semibold">
                              Authenticator-App
                            </span>
                          </p>
                          <Form>
                            <Row>
                              <Col xs={12}>
                                <FormGroup className="verification">
                                  <label
                                    htmlFor="digit1-input"
                                    className="sr-only"
                                  >
                                    Dight 1
                                  </label>
                                  <AuthCode
                                   
                                    characters={6}
                                    className="form-control form-control-lg text-center"
                                    onChange={event => setAuthCode(event)}
                                    inputStyle={{
                                      width: "45px",
                                      height: "50px",
                                      padding: "8px",
                                      borderRadius: "8px",
                                      fontSize: "20px",
                                      textAlign: "center",
                                      marginRight: "15px",
                                      border: "1px solid #ced4da",
                                      textTransform: "uppercase",
                                    }}
                                  />
                                </FormGroup>
                              </Col>
                            </Row>
                          </Form>
                          <div className="mt-4">
                            <button
                              onClick={handleClick}
                              className="btn btn-success w-md"
                            >
                              Confirm
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardBody>
                </Card>
                <div className="mt-5 text-center">
                  {/* <p>
                    Did't receive a code ?{" "}
                    <a href="#" className="font-weight-medium text-primary">
                      {" "}
                      Resend{" "}
                    </a>{" "}
                  </p> */}
                  <p>
                    © {new Date().getFullYear()} IDUx. {" "}
                    <i className="mdi mdi- text-danger"></i> 
                  </p>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </React.Fragment>
    )
  }
export default TwostepVerification;