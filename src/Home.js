import { Link } from 'react-router-dom';

const Dog = (props) => {
   
    const deleteDog = () => {
     
      const dogs = JSON.parse(localStorage.getItem("dogs")) 
      const dogswhitoutdog = dogs.filter(dog => dog.id !== props.dog.id)
      dogswhitoutdog.forEach(dog => {
        dog.friends = dog.friends.filter(dog => dog.id !== props.dog.id)
      });
      localStorage.setItem("dogs", JSON.stringify(dogswhitoutdog))
      props.rerender([])
  
    }
  
    return (
      <div id="profileInfo" key={props.dog.id}>
        <p id="profileFirst">Name: {props.dog.name} </p>
        <p>Age: {props.dog.ages}</p>
        <p>Sex: {props.dog.sex}</p>
        <p>Presence: </p>
        <button onClick={deleteDog}>X</button>
        <img id="profilePic"src={props.dog.pic}/>
        <Link to={`/profile/${props.dog.id}`}> To my profile </Link>
      </div>
    )
  } 

  const Dogplace = (props) => {
    const dogs = JSON.parse(localStorage.getItem("dogs")) 
    
    return (
      <div>
        {dogs.map(dog => <Dog dog={dog} rerender={props.rerender}/>)}
      </div>
    )
  }
  

  const Home = (props) => {

    return (
      <div className="App">
        <Dogplace rerender={props.rerender}/>
      </div>
    );
    
  }
  
  
  export default Home;