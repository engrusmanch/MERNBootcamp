import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';

export function CustomCard(){
    return (
        // <Card style={{ width: '18rem' }}>
        //   <Card.Img variant="top" src="https://i.pravatar.cc/150?img=1" />
        //   <Card.Body>
        //     <Card.Title>Card Title</Card.Title>
        //     <Card.Text>
        //       Some quick example text to build on the card title and make up the
        //       bulk of the card's content.
        //     </Card.Text>
        //     <Button variant="primary">Go somewhere</Button>
        //   </Card.Body>
        // </Card>
        <>
      <div className="card mb-6">
        <img
          src="https://i.pravatar.cc/150?img=10"
          className=" rounded-md w-[100%] "
          alt="pic"
        />
        <hr />
        <h2>Card Title</h2>
        <p>Card Body</p>
      </div>
    </>
      );
}