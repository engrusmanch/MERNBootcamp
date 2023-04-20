import { Card } from "react-bootstrap";

export function MyCard(props){
    const {title,subtitle,heading}=props;
    return(
        <Card>
            <Card.Body>
                <Card.Text>${heading}</Card.Text>
                <Card.Title>${title}</Card.Title>
                <Card.Text>${subtitle}</Card.Text>
            </Card.Body>
        </Card>
    );
}