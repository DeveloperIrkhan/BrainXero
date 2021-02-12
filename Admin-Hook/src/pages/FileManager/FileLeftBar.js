import React, { useState } from "react"
import { Link } from "react-router-dom"
import {
  Card,
  CardBody,
  Collapse,
  DropdownMenu,
  DropdownToggle,
  UncontrolledAlert,
  UncontrolledDropdown,
} from "reactstrap"

const FileRightBar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => setIsOpen(!isOpen)
  return (
    <React.Fragment>
      <Card className="filemanager-sidebar mr-md-2">
        <CardBody>
          <div className="d-flex flex-column h-100">
            <div className="mb-4">
              <div className="mb-3">
                <UncontrolledDropdown>
                  <DropdownToggle
                    className="btn btn-light btn-block"
                    color="#eff2f7"
                  >
                    <i className="mdi mdi-plus mr-1"></i> Create New
                  </DropdownToggle>
                  <DropdownMenu>
                    <Link className="dropdown-item" to="#">
                      <i className="bx bx-folder mr-1"></i> Folder
                    </Link>
                    <Link className="dropdown-item" to="#">
                      <i className="bx bx-file mr-1"></i> File
                    </Link>
                  </DropdownMenu>
                </UncontrolledDropdown>
              </div>
              <ul className="list-unstyled categories-list">
                <li>
                  <div className="custom-accordion">
                    <Link
                      className="text-body font-weight-medium py-1 d-flex align-items-center"
                      onClick={toggle}
                      to="#"
                    >
                      <i className="mdi mdi-folder font-size-16 text-warning mr-2"></i>{" "}
                      Files{" "}
                      {/* <i className="mdi mdi-chevron-up accor-down-icon ml-auto"></i> */}
                      <i
                        className={
                          isOpen
                            ? "mdi mdi-chevron-up accor-down-icon ml-auto"
                            : "mdi mdi-chevron-down accor-down-icon ml-auto"
                        }
                      />
                    </Link>
                    <Collapse isOpen={isOpen}>
                      <div className="card border-0 shadow-none pl-2 mb-0">
                        <ul className="list-unstyled mb-0">
                          <li>
                            <Link to="#" className="d-flex align-items-center">
                              <span className="mr-auto">Design</span>
                            </Link>
                          </li>
                          <li>
                            <Link to="#" className="d-flex align-items-center">
                              <span className="mr-auto">Development</span>{" "}
                              <i className="mdi mdi-pin ml-auto"></i>
                            </Link>
                          </li>
                          <li>
                            <Link to="#" className="d-flex align-items-center">
                              <span className="mr-auto">Project A</span>
                            </Link>
                          </li>
                          <li>
                            <Link to="#" className="d-flex align-items-center">
                              <span className="mr-auto">Admin</span>{" "}
                              <i className="mdi mdi-pin ml-auto"></i>
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </Collapse>
                  </div>
                </li>
                <li>
                  <Link to="#" className="text-body d-flex align-items-center">
                    <i className="mdi mdi-google-drive font-size-16 text-muted mr-2"></i>{" "}
                    <span className="mr-auto">Google Drive</span>
                  </Link>
                </li>
                <li>
                  <Link to="#" className="text-body d-flex align-items-center">
                    <i className="mdi mdi-dropbox font-size-16 mr-2 text-primary"></i>{" "}
                    <span className="mr-auto">Dropbox</span>
                  </Link>
                </li>
                <li>
                  <Link to="#" className="text-body d-flex align-items-center">
                    <i className="mdi mdi-share-variant font-size-16 mr-2"></i>{" "}
                    <span className="mr-auto">Shared</span>{" "}
                    <i className="mdi mdi-circle-medium text-danger ml-2"></i>
                  </Link>
                </li>
                <li>
                  <Link to="#" className="text-body d-flex align-items-center">
                    <i className="mdi mdi-star-outline text-muted font-size-16 mr-2"></i>{" "}
                    <span className="mr-auto">Starred</span>
                  </Link>
                </li>
                <li>
                  <Link to="#" className="text-body d-flex align-items-center">
                    <i className="mdi mdi-trash-can text-danger font-size-16 mr-2"></i>{" "}
                    <span className="mr-auto">Trash</span>
                  </Link>
                </li>
                <li>
                  <Link to="#" className="text-body d-flex align-items-center">
                    <i className="mdi mdi-cog text-muted font-size-16 mr-2"></i>{" "}
                    <span className="mr-auto">Setting</span>
                    <span className="badge badge-success badge-pill ml-2">
                      01
                    </span>
                  </Link>
                </li>
              </ul>
            </div>

            <div className="mt-auto">
              <UncontrolledAlert color="success" className="px-3 mb-0">
                <div className="mb-3">
                  <i className="bx bxs-folder-open h1 text-success"></i>
                </div>

                <div>
                  <h5 className="text-success">Upgrade Features</h5>
                  <p>Cum sociis natoque penatibus et</p>
                  <div className="text-center">
                    <button
                      type="button"
                      className="btn btn-link text-decoration-none text-success"
                    >
                      Upgrade <i className="mdi mdi-arrow-right"></i>
                    </button>
                  </div>
                </div>
              </UncontrolledAlert>
            </div>
          </div>
        </CardBody>
      </Card>
    </React.Fragment>
  )
}

export default FileRightBar
