import {Form,FormControl,Button, Container} from 'react-bootstrap';

function Partie1() {
    return (
        <div className="part1">
        <div className="par1">
            <Container>
        <h1>Unlimited movies, TV shows, and more.</h1>
        <h3>Watch anywhere. Cancel anytime.</h3>
        <Form inline className="search">
         <FormControl type="text" placeholder="Search" className="mr-sm-2 srch" />
         <Button className="button" variant="outline-primary">Search</Button>
         </Form>
         </Container>
          </div>
      </div>
    );
  }

  export default Partie1;