import logo from './logo.svg';
// import './App.css';
import {Container,Row,Col,Card, Table} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { MdBalance, MdCarRental, MdCreditCard, MdCurrencyRupee, MdDashboard, MdFitnessCenter, MdHome, MdLogout, MdNoTransfer, MdNotifications, MdOutlineFavoriteBorder, MdPrivacyTip, MdSupport, MdSwipe, MdSwitchAccount, MdSwitchLeft, MdWallet, MdWaterDrop } from "react-icons/md";
import { sideBarItem } from './components/sidebar_item';
import { Nav } from 'react-bootstrap';
import {MyCard } from './components/custom_card';
import graph from './assets/graph.png';
import card from './assets/credit_card.png';
import pie from './assets/piechart.jpeg'




function App() {
  return (
    <Container fluid >
      <Row>
        <Col md={2} style={{backgroundColor:"#D3D3D3"}}>
          <div>
            <span><img src={logo} style={{ blockSize: "30px" }}></img><span>Sparkle</span></span>
            <Nav defaultActiveKey="/home" className="flex-column">
              <Nav.Link href="/home"><MdDashboard />Dashboard</Nav.Link>
              <Nav.Link eventKey="link-1"><MdCurrencyRupee />Transfer</Nav.Link>
              <Nav.Link eventKey="link-2"><MdCreditCard />Card Activities</Nav.Link>
              <Nav.Link eventKey="link-3"><MdWallet />My Wallet</Nav.Link>
              <Nav.Link eventKey="link-4"><MdNotifications />Notifications</Nav.Link>

            </Nav>
            <h5>Preferences</h5>

            <Nav>
              <Nav.Link>Dark Mode<MdSwipe /></Nav.Link>
              <Nav.Link eventKey={"link-5"}><MdPrivacyTip />Privacy</Nav.Link>
            </Nav>

            <Nav>
              <Nav.Link>
                <MdSupport />Support
              </Nav.Link>
              <Nav.Link>
                <MdLogout />Logout
              </Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link>
                <img src={""} /> <div>username</div>
              </Nav.Link>
            </Nav>
          </div>


        </Col>
        <Col md={6} style={{marginTop:"10px"}} >
          <div>
          <h3>Good Evening User.</h3>
          <hr/>
          <br/>
          <h4>Financial Record</h4>
          <Row>
            <Col sm={4}><MyCard title={"12000"} heading={"Total"} subtitle={"123455"}/></Col>
            <Col sm={4}><MyCard title={"12000"} heading={"Total"} subtitle={"123455"}/></Col>
            <Col sm={4}><MyCard title={"12000"} heading={"Total"} subtitle={"123455"}/></Col>
          </Row>
          <br/>
          <h4>Statistics</h4>
          <div style={{height:"300px",height:"300px",width:"600px"}}>
            <img src={graph} style={{objectFit:"contain",height:"300px",width:"600px" }}></img>
          </div>
          <br/>
          <Card>
            <Card.Body>
              <Card.Title>
              Transaction History
              </Card.Title>
              <hr/>
              <Table striped bordered hover variant="dark">
      <thead>
        <tr>
          <th>Name</th>
          <th>Date</th>
          <th>Transaction ID</th>
          <th>Quantity</th>
          <th>Status</th>

        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Usman</td>
          <td>02-Dec-2032</td>
          <td>MNBr12</td>
          <td>2300</td>
          <td>Pending</td>
        </tr>
        <tr>
          <td>Saad</td>
          <td>02-Dec-2032</td>
          <td>MNBr12</td>
          <td>1100</td>
          <td>Pending</td>
        </tr>
        <tr>
          <td>Bilal</td>
          <td>02-Dec-2032</td>
          <td>MNBr12</td>
          <td>400</td>
          <td>Confirmed</td>
        </tr>
      </tbody>
    </Table>
            </Card.Body>
          </Card>  
          </div>
          </Col>
        <Col md={4} style={{marginTop:"10px"}}>
          <div>
        <Card>
        <Card.Body>
          <Card.Title>
          <h4>My Wallet</h4>
          </Card.Title>
          <Card.Img src={card} style={{height:"199px",width:"347px",marginBottom:"20px"}}/>

          <Card.Title>
            <h4>Card Activity</h4>
          </Card.Title>
          <Card.Text>
            <span style={{marginRight:"12rem"}}><MdWaterDrop/>Water Bill</span>
            <span>30000</span>
          </Card.Text>
          <Card.Text>
            <span style={{marginRight:"9rem"}}><MdFitnessCenter/>Gym and Fitness</span>
            <span>1200</span>
          </Card.Text>
          <Card.Text>
            <span style={{marginRight:"11rem"}}><MdCarRental/>Car Purchase</span>
            <span>4566</span>
          </Card.Text>
          <Card.Text>
            <span style={{marginRight:"12rem"}}><MdHome/>Home Rent</span>
            <span>5000</span>
          </Card.Text>
          <Card.Text>
            <span style={{marginRight:"11rem"}}><MdBalance/>Bank Deposit</span>
            <span>1200</span>
          </Card.Text>
        </Card.Body>
        </Card>
        <br/>
        <Card>
          <Card.Body>
          <Card.Title>
            <h4>Account Revenue</h4>
          </Card.Title>
          <Card.Img src={pie}/>

          </Card.Body>
          
          
        </Card>

          </div>
          
          </Col>
      </Row>
    </Container>
  );
}

export default App;
