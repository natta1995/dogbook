import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import uniqid from 'uniqid';


const Created = () => {
  const [dogImg, setDogImg] = useState("")
  const navigate = useNavigate()
  const dogs = JSON.parse(localStorage.getItem("dogs"))

  const addDog = (event) => {
    event.preventDefault()
    const id =  uniqid()
    const pic = dogImg
    const name = event.target.name.value
    const nick = event.target.nick.value
    const ages = event.target.ages.value
    const sex = event.target.sex.value
    const bio = event.target.bio.value
    const friends = []
    dogs.forEach(dog => {
      if(event.target[dog.nick].checked){
        friends.push(dog)
      }
    })
    
    localStorage.setItem("dogs", JSON.stringify([...dogs, {pic, id, name, nick, ages, sex, bio, friends}]))
    navigate("/")
  }
 
 
  useEffect(() => {
    const fetchDogImg = async () => {
      const resp = await fetch("https://dog.ceo/api/breeds/image/random")
      const data = await resp.json()
      setDogImg(data.message)
    }
    fetchDogImg()
  }, [])


  return (
    <div>
      <h1>Create</h1>
      <img src={dogImg} />
      <form id="formy" onSubmit={addDog}>
          <label>Name: </label>
          <input   type="text" id="name" placeholder="Name"/>
          <label>Nickname: </label>
          <input  type="text" id="nick" placeholder="Nickname"/>
          <label>Age: </label>
          <input  type="number" id="ages" placeholder="Age"/>
          <label>Sex: </label>
          <input  type="text" id="sex" placeholder="Sex"/>
          <label>Bio: </label>
          <input  type="text" id="bio" placeholder="Bio"/>
          
            {dogs.map((dog) => (
              <div>
                <input type="checkbox" id={dog.nick} value={dog.nick} />
                @{dog.nick}
              </div>
            ))}    
       

        <button type="submit">save</button>
      </form>
    </div>
  )
  }


export default Created;

