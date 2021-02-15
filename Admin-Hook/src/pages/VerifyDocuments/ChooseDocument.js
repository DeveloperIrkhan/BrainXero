import React,{useRef, useState} from "react"
import { useHistory } from "react-router-dom";

import {
  Col,
  Row,
  Card,
  CardBody,
  CardTitle,
  CardText,
  CardHeader,
  Container,
} from "reactstrap"

import toastr from "toastr"
import "toastr/build/toastr.min.css"

//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb"
import {post} from "../../helpers/api_helper"
import{POST_UPLOAD_DOCUMENT}  from "../../helpers/url_helper"


const ChooseDocument = props => {

  const inputFile = useRef(null);
  const history = useHistory();

  const onButtonClick = () => {
    // `current` points to the mounted file input element
   inputFile.current.click();

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
    
    history.push("/biometric-auth");
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
      <div className="page-content">
        <Container fluid={true}>
          <Breadcrumbs title="UI Elements" breadcrumbItem="Choose a document" />

          <Row className="justify-content-center">
            <Col lg={6}>
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
            <Col lg={6}>
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
            <Col lg={6}>
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

        </Container>
      </div>
    </React.Fragment>
  )
}
export default ChooseDocument
