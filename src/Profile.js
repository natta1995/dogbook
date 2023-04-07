import { Link, useParams } from 'react-router-dom';
import { boolean } from 'yup';



const Profile = () => {
  const dogs = JSON.parse(localStorage.getItem("dogs"))
  const {id} = useParams()
  const thisDog = dogs.find(item => {
    return String(item.id) === id;
  })

  function myFunction() {
     
    if (hereornot.checked === true ){
  
        document.getElementById("profileInfo").style.color = 'green'
    
    }else if (hereornot.checked === false) {
        document.getElementById("profileInfo").style.color = 'red'
       
    }
  }

  
  return (
    <div id="profileInfo">
      <h1 id="ett">Profile {thisDog.name}</h1>
      <img id="profilePic"src={thisDog.pic} key={thisDog.pic}/>
      <label>Presence</label>
      <input type='checkbox' id="hereornot" onClick={myFunction}/>
      <p>{thisDog.nick}</p>
      <p>Age: {thisDog.ages}</p> 
      <p>Sex: {thisDog.sex}</p>
      <p>Friends:  {thisDog.friends.map((friend) =>(
      <Link to={`/profile/${friend.id}`}> @{friend.nick} </Link>
      )
        )}</p>
      <p>{thisDog.bio}</p>
      <Link to="/"> Go back </Link>
      <Link to={`/edit/${id}`}> Edit </Link>
  </div>
  )
  
}

export default Profile;
