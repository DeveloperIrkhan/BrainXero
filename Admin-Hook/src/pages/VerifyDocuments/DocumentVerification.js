import React, {useState } from "react"
import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
  Modal,
  ModalHeader,
  ModalBody,
  TabContent,
  TabPane,
  NavItem,
  NavLink,
  Label,
  Spinner,
  Button,
  Input,
  Form,
  FormGroup,
  CardTitle,
  CardSubtitle,
} from "reactstrap"

import LoadingOverlay from 'react-loading-overlay';
import classnames from "classnames"
import { Link } from "react-router-dom"

//Dropzone
import Dropzone from "react-dropzone"

//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb"

//Import images
import verificationImg from "../../assets/images/verification-img.png"
import toastr from "toastr"
import "toastr/build/toastr.min.css"

import {POST_UPLOAD_DOCUMENT} from '../../helpers/url_helper';
import {postForm} from '../../helpers/api_helper';

const DocumentVerification = () => {

    const [modal, setmodal] = useState(false)
    const [activeTab, setactiveTab] = useState(1)
    const [selectedFiles, setselectedFiles] = useState([])
    const [selfieFiles, setselfieFiles] = useState([])
    const [documentType, setdocumentType] = useState('default')
    const [flag, setFlag] = useState(false);
    const [fullName, setFullName] = useState('FullName')
    const [sex, setsex] = useState('Gender')
    const [age, setage] = useState('Age')
    const [documentNo, setdocumentNo] = useState('Document No')
    const [counrty, setcounrty] = useState('country')
    const [region, setregion] = useState('state/region')
    const [type, settype] = useState('Document Type')
    const [dateofbirth, setdateofbirth] = useState('')

 function togglemodal(){
    setmodal(!modal);
  }

  function handleBioAuth()
  {
    const formData = new FormData();
    let docFile = selectedFiles[0];
    let selfieFile = selfieFiles[0];
    let docType = documentType;
    
    // Update the formData object

  
formData.append("docFile",docFile,docFile.name);
formData.append("selfieFile",selfieFile,selfieFile.name);
formData.append("docType",docType);

    // Request made to the backend api
    // Send formData object

    var response = postForm(POST_UPLOAD_DOCUMENT, formData)
    
    response.then((val) => 
    {
      //const data = val.statusCode;
      
      setFlag(false);
      //history.push("/confirm-document");
     
      setFullName(val.documentInformation.fullName);
      setsex(val.scanResponse.scanVariables.sex)
      setage(val.scanResponse.scanVariables.age);
      setdocumentNo(val.documentInformation.documentNo);
      setcounrty(val.scanResponse.scanVariables.classInfo.country);
      setregion(val.scanResponse.scanVariables.classInfo.region)
      settype(val.scanResponse.scanVariables.classInfo.type)
      setdateofbirth(val.scanResponse.scanVariables.dateOfBirth.originalString)
      

          })


    
  }

  function toggleTab(tab) {
    if (activeTab !== tab) {
      let progress = true;
      if(activeTab==1)
      {
        if(documentType=='default')
        {
          progress=false;
          toastr.error('Please select a document type')
        }

        if(selectedFiles.length == 0)
        {
          progress=false;
          toastr.error('Please select a document image')
        }
      }
      else if (activeTab == 2)
      {
        if(selfieFiles.length == 0)
        {
          progress=false;
          toastr.error('Please select a selfie')
        }
        setFlag(true);
        handleBioAuth();
       
        
      }
      if (progress && tab >= 1 && tab <= 4) {
        setactiveTab(tab)
      }
    }
  }

 function handleAcceptedFiles(files){
    files.map(file =>
      Object.assign(file, {
        preview: URL.createObjectURL(file),
        formattedSize: formatBytes(file.size),
      })
    )
    setselectedFiles(files)
  }

  function handleSelfieFiles(files){
    files.map(file =>
      Object.assign(file, {
        preview: URL.createObjectURL(file),
        formattedSize: formatBytes(file.size),
      })
    )
    setselfieFiles(files)
  }

  /**
   * Formats the size
   */
  function formatBytes (bytes, decimals = 2) {
    if (bytes === 0) return "0 Bytes"
    const k = 1024
    const dm = decimals < 0 ? 0 : decimals
    const sizes = ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"]

    const i = Math.floor(Math.log(bytes) / Math.log(k))
    return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + " " + sizes[i]
  }

  function handleDocumentTypeChange(event)
  {
    setdocumentType(event.target.value);
  }

    return (
      <React.Fragment>
     
        <div className="page-content">
          <Container fluid>
            {/* Render Breadcrumb */}
            <Breadcrumbs title="Verify Documents" breadcrumbItem="Verify documents" />

            <Row className="justify-content-center mt-lg-5">
              <Col xl="5" sm="8">
                <Card>
                  <CardBody>
                    <div className="text-center">
                      <Row className="justify-content-center">
                        <Col lg="10">
                          <h4 className="mt-4 font-weight-semibold">
                            Document Verification
                          </h4>
                          <p className="text-muted mt-3">
                            Itaque earum rerum hic tenetur a sapiente delectus
                            ut aut reiciendis perferendis asperiores repellat.
                          </p>

                          <div className="mt-4">
                            {/* button triggers modal */}
                            <Button
                              type="button"
                              color="primary"
                              onClick={togglemodal}
                            >
                              Click here for Verification
                            </Button>
                          </div>
                        </Col>
                      </Row>

                      <Row className="justify-content-center mt-5 mb-2">
                        <Col sm="6" xs="8">
                          <div>
                            <img
                              src={verificationImg}
                              alt=""
                              className="img-fluid"
                            />
                          </div>
                        </Col>
                      </Row>
                    </div>

                    {/* modal */}
                    <Modal
                      isOpen={modal}
                      role="dialog"
                      size="lg"
                      autoFocus={true}
                      centered={true}
                      id="verificationModal"
                      tabIndex="-1"
                      toggle={togglemodal}
                    >
                      <div className="modal-content">
                        <ModalHeader toggle={togglemodal}>
                          Verify your Account
                        </ModalHeader>
                        <ModalBody>
                          <div
                            id="kyc-verify-wizard"
                            className="twitter-bs-wizard"
                          >
                            <ul className="twitter-bs-wizard-nav nav nav-pills nav-justified">
                              <NavItem>
                                <NavLink
                                  className={classnames({
                                    active: activeTab === 1,
                                  })}
                                  onClick={() => {
                                      toggleTab(1)
                                  }}
                                >
                                  <span className="step-number mr-2">01</span>
                                  Choose Document
                                </NavLink>
                              </NavItem>
                              <NavItem>
                                <NavLink
                                  className={classnames({
                                    active: activeTab === 2,
                                  })}
                                  onClick={() => {
                                    toggleTab(2)
                                  }}
                                >
                                  <span className="step-number mr-2">02</span>
                                  Upload Selfie
                                </NavLink>
                              </NavItem>
                            
                              <NavItem>
                                <NavLink
                                  className={classnames({
                                    active: activeTab === 3,
                                  })}
                                  onClick={() => {
                                    toggleTab(3)
                                  }}
                                >
                                  <span className="step-number mr-2">03</span>
                                  Confirm Details
                                </NavLink>
                              </NavItem>
                            </ul>
                            <TabContent
                              activeTab={activeTab}
                              className="twitter-bs-wizard-tab-content"
                            >
                              <TabPane tabId={1} id="personal-info">
                                <Form>
                                  <Row>
                                    <Col lg="12">
                                      <FormGroup>
                                        <Label for="kycfirstname-input">
                                          Document Type
                                        </Label>
                                        <select className="custom-select" onChange={handleDocumentTypeChange} value={documentType}>
                                            <option value="default">Open this select menu</option>
                                            <option value="passport">Passport</option>
                                            <option value="driving-license">Driving License</option>
                                            <option value="medicare">Medicare</option>
                                          </select>
                                      </FormGroup>
                                    </Col>
                                  </Row>
                                  <Row>
                                    <Col lg="12">

                                    <Dropzone accept="image/*"
                                    onDrop={acceptedFiles =>
                                      {
                                          handleAcceptedFiles(acceptedFiles)
                                      }
                                    }
                                    onDropRejected = {()=>{
                                      toastr.error("Please select an image file");
                                    }}
                                  >
                                    {({ getRootProps, getInputProps }) => (
                                        <LoadingOverlay active={flag}>

                                      <div className="dropzone">
                                        <div
                                          className="dz-message needsclick"
                                          {...getRootProps()}
                                        >
                                          <input {...getInputProps()} />
                                          <div className="mb-3">
                                            <i className="display-4 text-muted bx bxs-cloud-upload"></i>
                                          </div>
                                          <h3>
                                          
                                            Drop files here or click to upload.
                                          </h3>
                                        </div>
                                       
                                      </div>
                                      </LoadingOverlay>
                                    )}
                                  </Dropzone>
                                  <div
                                    className="dropzone-previews mt-3"
                                    id="file-previews"
                                  >
                                    {selectedFiles.map((f, i) => {
                                      return (
                                        <Card
                                          className="mt-1 mb-0 shadow-none border dz-processing dz-image-preview dz-success dz-complete"
                                          key={i + "-file"}
                                        >
                                          <div className="p-2">
                                            <Row className="align-items-center">
                                              <Col className="col-auto">
                                                <img
                                                  data-dz-thumbnail=""
                                                  height="80"
                                                  className="avatar-sm rounded bg-light"
                                                  alt={f.name}
                                                  src={f.preview}
                                                />
                                              </Col>
                                              <Col>
                                                <Link
                                                  to="#"
                                                  className="text-muted font-weight-bold"
                                                >
                                                  {f.name}
                                                </Link>
                                                <p className="mb-0">
                                                  <strong>
                                                    {f.formattedSize}
                                                  </strong>
                                                </p>
                                              </Col>
                                            </Row>
                                          </div>
                                        </Card>
                                      )
                                    })}
                                  </div>

                                   
                                    </Col>
                                  </Row>

                                </Form>
                              </TabPane>
                              <TabPane tabId={2} id="confirm-email">
                                <div>
                                  <Form>
                                    <Row>
                                      <Col lg="12">
                                     
                                        <FormGroup>
                                          <Label for="kycemail-input">
                                            Please select a selfie to upload
                                          </Label>
                                        </FormGroup>

                                      
                                    <Dropzone accept="image/*"
                                    onDrop={acceptedFiles =>
                                      handleSelfieFiles(acceptedFiles)
                                    }
                                    onDropRejected = {()=>{
                                      toastr.error("Please select an image file");
                                    }}
                                  >
                                   
                                    {({ getRootProps, getInputProps }) => (
                                      <LoadingOverlay active={flag}>
                                      <div className="dropzone">
                                        <div
                                          className="dz-message needsclick"
                                          {...getRootProps()}
                                        >
                                          <input {...getInputProps()} />
                                          <div className="mb-3">
                                            <i className="display-4 text-muted bx bxs-cloud-upload"></i>
                                          </div>
                                          {  flag ?
                                         <Spinner className="mr-2" color="primary" />
                                             :
                                           <h3>
                                            Drop files here or click to upload.
                                          </h3>
                                           }
                                        </div>
                                      </div>
                                      </LoadingOverlay>
                                    )}
                                  </Dropzone>
                                  <div
                                    className="dropzone-previews mt-3"
                                    id="file-previews"
                                  >
                                    {selfieFiles.map((f, i) => {
                                      return (
                                        <Card
                                          className="mt-1 mb-0 shadow-none border dz-processing dz-image-preview dz-success dz-complete"
                                          key={i + "-file"}
                                        >
                                          <div className="p-2">
                                            <Row className="align-items-center">
                                              <Col className="col-auto">
                                                <img
                                                  data-dz-thumbnail=""
                                                  height="80"
                                                  className="avatar-sm rounded bg-light"
                                                  alt={f.name}
                                                  src={f.preview}
                                                />
                                              </Col>
                                              <Col>
                                                <Link
                                                  to="#"
                                                  className="text-muted font-weight-bold"
                                                >
                                                  {f.name}
                                                </Link>
                                                <p className="mb-0">
                                                  <strong>
                                                    {f.formattedSize}
                                                  </strong>
                                                </p>
                                              </Col>
                                            </Row>
                                          </div>
                                        </Card>
                                      )
                                    })}
                                  </div>

                                   

                                      </Col>
                                    </Row>
                                  </Form>
                                </div>
                              </TabPane>
                              <TabPane tabId={3} id="doc-verification">
                                <h5 className="font-size-14 mb-3">
                                  confrim Details
                                </h5>
                                <div className="kyc-doc-verification mb-3">
                                  
                                  <div>
                                            <Row>
            <Col>
              <Card>
                <CardBody>
                  <CardTitle>Data from uploaded Document</CardTitle>
                  
                  <div className="form-group row">
                    <label
                      htmlFor="example-text-input"
                      className="col-md-2 col-form-label"
                    >
                      FullName
                    </label>
                    <div className="col-md-10">
                      <input
                        className="form-control"
                        type="text"
                        defaultValue="Artisanal kale"
                        value={fullName}
                      />
                    </div>
                  </div>
                 
                  <div className="form-group row">
                    <label
                      htmlFor="example-search-input"
                      className="col-md-2 col-form-label"
                    >
                      Age
                    </label>
                    <div className="col-md-10">
                      <input
                        className="form-control"
                        type="text"
                        defaultValue="How do I shoot web"
                        value={age}
                      />
                    </div>
                  </div>
                  <div className="form-group row">
                    <label
                      htmlFor="example-email-input"
                      className="col-md-2 col-form-label"
                    >
                      Document No
                    </label>
                    <div className="col-md-10">
                      <input
                        className="form-control"
                        type="email"
                        defaultValue="bootstrap@example.com"
                        value={documentNo}
                      />
                    </div>
                  </div>
                  <div className="form-group row">
                    <label
                      htmlFor="example-url-input"
                      className="col-md-2 col-form-label"
                    >
                      Country
                    </label>
                    <div className="col-md-10">
                      <input
                        className="form-control"
                        type="text"
                        defaultValue="country"
                        value={counrty}
                      />
                    </div>
                  </div>
                  <div className="form-group row">
                    <label
                      htmlFor="example-tel-input"
                      className="col-md-2 col-form-label"
                    >
                      Region
                    </label>
                    <div className="col-md-10">
                      <input
                        className="form-control"
                        type="text"
                        defaultValue="state"
                        value={region}
                      />
                    </div>
                  </div>
                  <div className="form-group row">
                    <label
                      htmlFor="example-password-input"
                      className="col-md-2 col-form-label"
                    >
                      Type
                    </label>
                    <div className="col-md-10">
                      <input
                        className="form-control"
                        type="text"
                        defaultValue="hunter2"
                        value={type}
                      />
                    </div>
                  </div>
                  <div className="form-group row">
                    <label
                      htmlFor="example-password-input"
                      className="col-md-2 col-form-label"
                    >
                      Date of Birth
                    </label>
                    <div className="col-md-10">
                      <input
                        className="form-control"
                        type="text"
                        defaultValue="hunter2"
                        value={dateofbirth}
                      />
                    </div>
                  </div>
                  
             </CardBody>
              </Card>
            </Col>
          </Row>
                                            </div>

                                  <div
                                    className="dropzone-previews mt-3"
                                    id="file-previews"
                                  >
                                    {selectedFiles.map((f, i) => {
                                      return (
                                        <Card
                                          className="mt-1 mb-0 shadow-none border dz-processing dz-image-preview dz-success dz-complete"
                                          key={i + "-file"}
                                        >
                                          <div className="p-2">
                                            <Row className="align-items-center">
                                              <Col className="col-auto">
                                                <img
                                                  data-dz-thumbnail=""
                                                  height="80"
                                                  className="avatar-sm rounded bg-light"
                                                  alt={f.name}
                                                  src={f.preview}
                                                />
                                              </Col>
                                              <Col>
                                                <Link
                                                  to="#"
                                                  className="text-muted font-weight-bold"
                                                >
                                                  {f.name}
                                                </Link>
                                                <p className="mb-0">
                                                  <strong>
                                                    {f.formattedSize}
                                                  </strong>
                                                </p>
                                              </Col>
                                            </Row>
                                          </div>
                                        </Card>
                                      )
                                    })}
                                  </div>
                                </div>
                              </TabPane>
                            </TabContent>
                            <ul className="pager wizard twitter-bs-wizard-pager-link">
                              <li
                                className={
                                  activeTab === 1
                                    ? "previous disabled"
                                    : "previous"
                                }
                              >
                                <Link
                                  to="#"
                                  onClick={() => {
                                    toggleTab(activeTab - 1)
                                  }}
                                >
                                  Previous
                                </Link>
                              </li>
                              <li
                                className={
                                  activeTab === 3
                                    ? "next disabled"
                                    : "next"
                                }
                              >
                                <Link
                                  to="#"
                                  onClick={() => {
                                    toggleTab(activeTab + 1)
                                  }}
                                >
                                  Next
                                </Link>
                              </li>
                            </ul>
                          </div>
                        </ModalBody>
                      </div>
                    </Modal>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </Container>
        </div>
     
      </React.Fragment>
    )
  }

export default DocumentVerification
