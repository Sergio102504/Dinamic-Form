
import { Button, Col, Container, Row } from "react-bootstrap";
import "./Introduction.css";
export default function Introduction() {
    return (
        <div className="introduction p-3 p-lg-5 mt-5">
            <Container fluid>
                <Row className="justify-content-md-center">
                    <Col xs={ 12 } md={ 8 }>
                        <h1 className="pl-2 text-center">
                            Bienvenido a mi Dinamic form{ " " }
                            <span className="pt-2 pb-4">
                                that you will do everything that you want
                            </span>
                        </h1>
                        <h4 className="d-flex container-actions mt-5">
                           Hola, Me llamo Sergio Alejandro Quintero ,tengo 22 años y estoy aprendiendo a desarrollar
                            y a mejorar en el ambito de la programacion.Aqui te presento un Dinamic form
                        </h4>
                        <div className="d-flex container-actions mt-5">
                            <div className="container-buttons">
                                <Button
                                    className="p-3"
                                    onClick={ () => console.log("click button1") }
                                >
                                    Get in touch
                                </Button>
                                <Button className="p-3">Get in touch</Button>
                            </div>
                            <div className="btn-start-create">
                                <a href="#dynamic-form">Empezar a crear</a>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}
