import React from "react";
import { Tab, Col, Row, Nav } from "react-bootstrap";
import Employee from "../employees/employees";
import Reviews from "../Review/review";
import "./container.scss";

const Container = () => {
  const logout = () => {
    localStorage.removeItem("user");
    window.location.reload(false);
  };
  return (
    <div
      style={{
        minHeight: "100vh",
      }}
    >
      {/* <div>
        <Tab.Container id="left-tabs-example" defaultActiveKey="Employees">
          <Row>
            <Col
              sm={3}
              className="tabs-admin"
              style={{
                backgroundColor: "rgb(249 249 253)",
                height: "100vh",
              }}
            >
              <div>
                <h1>Logo</h1>
              </div>
              <Nav variant="pills" className="flex-column">
                <Nav.Item>
                  <Nav.Link eventKey="Employees">Employees</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="Reviews">Reviews</Nav.Link>
                </Nav.Item>
              </Nav>
              <div
                className="btn btn-lg btn-dark"
                onClick={logout}
                style={{
                  width: "80%",
                  position: "absolute",
                  bottom: "30px",
                  left: "50%",
                  transform: "translateX(-50%)",
                }}
              >
                Logout
              </div>
            </Col>
            <Col
              sm={9}
              style={{
                position: "absolute",
                right: "0px",
                backgroundColor: "rgb(249 249 253)",
              }}
            >
              <Tab.Content>
                <Tab.Pane eventKey="Employees">
                  <div>
                    <Employee />
                  </div>
                </Tab.Pane>
                <Tab.Pane eventKey="Reviews">
                  <div>
                    <Reviews />
                  </div>
                </Tab.Pane>
              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>
      </div> */}
      <Tab.Container defaultActiveKey="Employees">
        <Row>
          <Col sm={3}>
            <Nav variant="pills" className=" tabs-admin">
              <Nav.Item>
                <Nav.Link eventKey="Employees">Employees</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="Reviews">Reviews</Nav.Link>
              </Nav.Item>
              <div
                className="btn btn-sm btn-dark admin-logout"
                onClick={logout}
                // style={{
                //   width: "80%",
                //   position: "absolute",
                //   bottom: "30px",
                //   left: "50%",
                //   transform: "translateX(-50%)",
                // }}
              >
                Logout
              </div>
            </Nav>
          </Col>
          <Col sm={9}>
            <Tab.Content>
              <Tab.Pane eventKey="Employees">
                <Employee />
              </Tab.Pane>
              <Tab.Pane eventKey="Reviews">
                <Reviews />
              </Tab.Pane>
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
    </div>
  );
};

export default Container;
