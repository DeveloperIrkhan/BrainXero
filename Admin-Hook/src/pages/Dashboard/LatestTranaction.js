import React from "react"
import { Card, CardBody, CardTitle, Badge, Button } from "reactstrap"
import { Link } from "react-router-dom"

const LatestTranaction = () => {
  const transactions = [
    {
      id: "08d601af-b367-474b-9d4e-263915da9cc4",
      documentType:"Passport",
      Date: "07 Oct, 2019",
      badgeClass: "success",
      status: "Verfied",
      link: "#",
    },
    {
      id: "baa9cd11-f8d2-4d8c-8927-f29108791b19",
      documentType:"Drivers License",
      Date: "07 Oct, 2019",
      badgeClass: "success",
      status: "Verfied",
      link: "#",
    },
    {
      id: "0073e7ee-9641-4f3b-bb67-04868c4b96a4",
      documentType:"Medicare",
      Date: "07 Oct, 2019",
      badgeClass: "success",
      status: "Pending",
      link: "#",
    },
    {
      id: "801f0503-de22-46fa-9c3f-41fbcae32bbb",
      documentType:"Passport",
      Date: "07 Oct, 2019",
      badgeClass: "success",
      status: "Failed Verification",
      link: "#",
    },
    {
      id: "424b8f19-f79d-4832-8684-4c8af564608f",
      documentType:"Passport",
      Date: "07 Oct, 2019",
      badgeClass: "success",
      status: "Verfied",
      link: "#",
    },

  ]

  return (
    <React.Fragment>
      <Card>
        <CardBody>
          <CardTitle className="mb-4">Latest Transactions</CardTitle>
          <div className="table-responsive">
            <table className="table table-centered table-nowrap mb-0">
              <thead className="thead-light">
                <tr>
                  <th>Transaction ID</th>
                  <th>Document Type</th>
                  <th>Date</th>
                  <th>Status</th>
                  <th>View Details</th>
                </tr>
              </thead>
              <tbody>
                {transactions.map((transaction, key) => (
                  <tr key={"_tr_" + key}>
                    <td>
                    {transaction.id}
                    </td>
                    <td>{transaction.documentType}</td>
                    <td>{transaction.Date}</td>
                    <td>{transaction.status}</td>
                    <td>
                      <Button
                        type="button"
                        color="primary"
                        size="sm"
                        className="btn-rounded waves-effect waves-light"
                      >
                        View Details
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardBody>
      </Card>
    </React.Fragment>
  )
}

export default LatestTranaction
