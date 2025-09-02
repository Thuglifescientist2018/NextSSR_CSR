"use client"

import { useEffect, useState } from "react"

const page = () => {
    const [name, setName] = useState("Shashwat!!!");
    const getName = async () => {
        const res = await fetch('https://jsonplaceholder.typicode.com/users/2');
        const person = await res.json();
        return person.name;
    }
    useEffect(() => {
        getName().then(personName => setName(personName))
    },[])
  return (
    <div>{name} </div>
  )
}

export default page