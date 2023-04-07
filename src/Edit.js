import { Routes, Route, Link, useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';


const Edit = () => {

  const navigate = useNavigate()
  const dogs = JSON.parse(localStorage.getItem("dogs"))

  const {id} = useParams()
  const thisIndex = dogs.findIndex(item => {
    return String(item.id) === id;
  })

  const thisDog = dogs[thisIndex]


  const changeDog = (event) => {
    event.preventDefault()
    const name = event.target.name.value
    const nick = event.target.nick.value
    const ages = event.target.ages.value
    const sex = event.target.sex.value
    const bio = event.target.bio.value
    const pic = thisDog.pic
    const id = thisDog.id
    const friends = [] 
    dogs.forEach(dog => {
      if(event.target[dog.nick].checked){
        friends.push(dog)
      
  }})
  
    dogs[thisIndex] = {id, pic, name, nick, ages, sex, bio, friends}

    localStorage.setItem("dogs", JSON.stringify(dogs))
    navigate("/")
    console.log(id)
  }

  const isFriend = (id) => {
  if( thisDog.friends.find(dogs => dogs.id === id)){
    return true
  } else {
    return false
  }
  }
  console.log(thisDog.friends)
    return (
      <div>
      <h1>Create</h1>
      <img src={thisDog.pic} />
      <form onSubmit={changeDog}>
          <label>Name: </label>
          <input   type="text" id="name" defaultValue={thisDog.name} />
          <label>Nickname: </label>
          <input  type="text" id="nick" defaultValue={thisDog.nick}/>
          <label>Age: </label>
          <input  type="number" id="ages" defaultValue={thisDog.ages}/>
          <label>Sex: </label>
          <input  type="text" id="sex" defaultValue={thisDog.sex}/>
          <label>Bio: </label>
          <input  type="text" id="bio" defaultValue ={thisDog.bio}/>
          {dogs.map((dog) => (
              <div>
                <input type="checkbox" id={dog.nick} value={dog.nick} defaultChecked={isFriend(dog.id)}/>
                @{dog.nick}
               
              </div>
            ))} 
        <button type="submit">save</button>
      </form>
    </div>
    
    )
  }

  export default Edit;