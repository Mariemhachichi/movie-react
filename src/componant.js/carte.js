import React,{useEffect,useState} from 'react'
import {Card} from  'react-bootstrap'


function Movie() {
const [abc,setFilm]=useState([])
const getfilm= ()=>{
    
    fetch('data.json').then(
          response => response.json()).then 
                   (movies => setFilm(movies));
  }

  useEffect(()=> {getfilm()
  },[])

    return(
      <div className="cart">
        {abc.map(el=>
     <Card className="carte" style={{ width: '18rem' }}>
  <Card.Img className="img" variant="top" src={el.Images[1]} />
  <Card.Body>
    <Card.Title className="titr"> {el.Title} </Card.Title>
    <Card.Text className="txt" >{el.Awards}</Card.Text>
    <Card.Link className="link" href="#">View</Card.Link>
  </Card.Body>
</Card>
)}
        </div> 
        )
}

export default Movie