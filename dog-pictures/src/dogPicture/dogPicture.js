import { useState } from "react";
import { useEffect } from "react"

const getDogPic = async() => {
    const response = await fetch('https://dog.ceo/api/breeds/image/random');
    const dog = await response.json();
    return dog.message;


}
export const  DogPicture = () => {
    const [dogPic, setDogPic] = useState('');
    useEffect(() => {
        getDogPic().then(pic=>setDogPic(pic));
    },[])

    return (
        <div>
            <img src={dogPic} alt=""/>
            <button onClick={async e=> setDogPic(await getDogPic())}>Click</button>
        </div>
    )
} 