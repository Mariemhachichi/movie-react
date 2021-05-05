import {Col,Row,Container} from 'react-bootstrap';

function Footer() {
  return (
    <div className="footer">
   <Container>
  <Row>
    <Col xs><ul>
        <li><a href="#">FAQ</a></li>
        <li><a href="#">Relations Investisseurs</a></li>
        <li><a href="#">Confidentialité</a></li>
        <li><a href="#">Test de vitesse</a></li>
        </ul></Col>
    <Col xs><ul>
        <li><a href="#">Centre d'aide</a></li>
        <li><a href="#">Recrutement</a></li>
        <li><a href="#">Préférences de cookies</a></li>
        <li><a href="#">Informations légales</a></li>
        </ul></Col>
    <Col xs={{ order: 'first' }}><ul>
        <li><a href="#">Compte</a></li>
        <li><a href="#">Modes de lecture</a></li>
        <li><a href="#">Mentions légales</a></li>
        <li><a href="#">Programmes originaux Netflix</a></li>
        </ul></Col>
    <Col xs={{ order: 'last' }}><ul>
        <li><a href="#">Presse</a></li>
        <li><a href="#">Conditions d'utilisation</a></li>
        <li><a href="#">Nous contacter</a></li>
        </ul></Col>
  </Row>
  <p>&copy; 2021 Copyright.com</p>
</Container>
    </div>
  );
}

export default Footer;