import {Navbar,Nav, CardDeck,Card,Button,Col,Row} from 'react-bootstrap'
import Menu from '../menu'
function ClienteIndex() {
    return (
        <section>
            <Menu></Menu>
            <Button className="mb-3">Agregar</Button>
            <Row>
                <Col md={3}>
                <Card  className="text-center mb-2">
                    <Card.Header>#ID</Card.Header>
                    <Card.Body>
                        <Card.Title>Oscar Cardenas</Card.Title>
                        <Card.Text>
                        <p>oscar@mail.com</p>
                        <p>3333333333</p>
                        </Card.Text>
                        <Button variant="warning">Editar</Button>
                        <Button variant="danger">Eliminar</Button>
                    </Card.Body>
                    <Card.Footer className="text-muted">Agregado hace 2 dias</Card.Footer>
                </Card>
                </Col>
                <Col md={3}>
                <Card  className="text-center mb-2">
                    <Card.Header>#ID</Card.Header>
                    <Card.Body>
                        <Card.Title>Oscar Cardenas</Card.Title>
                        <Card.Text>
                        <p>oscar@mail.com</p>
                        <p>3333333333</p>
                        </Card.Text>
                        <Button variant="warning">Editar</Button>
                        <Button variant="danger">Eliminar</Button>
                    </Card.Body>
                    <Card.Footer className="text-muted">Agregado hace 2 dias</Card.Footer>
                </Card>
                </Col><Col md={3}>
                <Card  className="text-center mb-2">
                    <Card.Header>#ID</Card.Header>
                    <Card.Body>
                        <Card.Title>Oscar Cardenas</Card.Title>
                        <Card.Text>
                        <p>oscar@mail.com</p>
                        <p>3333333333</p>
                        </Card.Text>
                        <Button variant="warning">Editar</Button>
                        <Button variant="danger">Eliminar</Button>
                    </Card.Body>
                    <Card.Footer className="text-muted">Agregado hace 2 dias</Card.Footer>
                </Card>
                </Col><Col md={3}>
                <Card  className="text-center mb-2">
                    <Card.Header>#ID</Card.Header>
                    <Card.Body>
                        <Card.Title>Pedro Loza </Card.Title>
                        <Card.Text>
                        <p>oscar@mail.com</p>
                        <p>3333333333</p>
                        </Card.Text>
                        <Button variant="warning">Editar</Button>
                        <Button variant="danger">Eliminar</Button>
                    </Card.Body>
                    <Card.Footer className="text-muted">Agregado hace 2 dias</Card.Footer>
                </Card>
                </Col><Col md={3}>
                <Card  className="text-center mb-2">
                    <Card.Header>#ID</Card.Header>
                    <Card.Body>
                        <Card.Title>Oscar Cardenas</Card.Title>
                        <Card.Text>
                        <p>oscar@mail.com</p>
                        <p>3333333333</p>
                        </Card.Text>
                        <Button variant="warning">Editar</Button>
                        <Button variant="danger">Eliminar</Button>
                    </Card.Body>
                    <Card.Footer className="text-muted">Agregado hace 2 dias</Card.Footer>
                </Card>
                <Card  className="text-center mb-2">
                    <Card.Header>#ID</Card.Header>
                    <Card.Body>
                        <Card.Title>Oscar Cardenas</Card.Title>
                        <Card.Text>
                        <p>oscar@mail.com</p>
                        <p>3333333333</p>
                        </Card.Text>
                        <Button variant="warning">Editar</Button>
                        <Button variant="danger">Eliminar</Button>
                    </Card.Body>
                    <Card.Footer className="text-muted">Agregado hace 2 dias</Card.Footer>
                </Card>
                </Col>
            </Row>
        </section>
    );
  }
  
  export default ClienteIndex;
  