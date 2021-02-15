import React,{useRef, useState} from "react"
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

// import images
import img1 from "../../assets/images/small/img-1.jpg"
import { Link } from "react-router-dom"

import toastr from "toastr"
import "toastr/build/toastr.min.css"

//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb"


const BiometricAuth = props => {

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

    // call the Rank one service to compare the documents

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
    
    history.push("/confirm-document");
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
          <Breadcrumbs title="UI Elements" breadcrumbItem="Biometric Authentication" />

          <Row className="justify-content-center">
            <Col mg={6} xl={3}>
              <Card>
                <CardImg top className="img-fluid" src={img1} alt="Skote" />
                <CardBody>
                  <CardTitle className="mt-0">Upload your image</CardTitle>
                  <CardText>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </CardText>
                  <Link onClick={onButtonClick}
                    to="#"
                    className="btn btn-primary waves-effect waves-light"
                  >
                    Upload Image
                  </Link>

                </CardBody>
              </Card>
            </Col>
          </Row>

        </Container>
      </div>
    </React.Fragment>
  )
}
export default BiometricAuth
