import {Navbar,Nav, CardDeck,Card,Button} from 'react-bootstrap'
import Menu from '../menu'
function ClienteIndex() {
    return (
        <section>
            <Menu></Menu>
            <Button></Button>
            <CardDeck>
                <Card className="text-center">
                    <Card.Header>Featured</Card.Header>
                    <Card.Body>
                        <Card.Title>Special title treatment</Card.Title>
                        <Card.Text>
                        With supporting text below as a natural lead-in to additional content.
                        </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                    <Card.Footer className="text-muted">2 days ago</Card.Footer>
                </Card>
            </CardDeck>
        </section>
    );
  }
  
  export default ClienteIndex;
  