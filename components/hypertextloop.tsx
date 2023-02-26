'use client'
import { useEffect } from "react"
import { useState } from "react"
import React from "react"

type Prototype = {
  texts:string[];
  delay?:number;
  repeat?:boolean;
}

const HypertextLoop:React.FC<Prototype> = (props) =>{
  const {texts,delay=3000,repeat=false} = props;
  const [letters,setLetter] = useState<string>("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+{}|:<>?")
  const [text,setText] = useState<string>(texts[0])

  useEffect(()=>{
    const timeout = setTimeout(()=>{
      active()
    },delay)
    return ()=>clearTimeout(timeout)

  })

  function active(){
    let indexes = 0;
    const interval = setInterval(()=>{
      changeTo(texts[indexes%texts.length])
      indexes+=1;
    },delay)
  }

  function randomLetter(){
    return letters[Math.floor(Math.random()*letters.length)]
  }

  function changeLetter(to:string,iteration:number){
    let result:string[] = [];
    to.split("").forEach((letter,index)=>{
      if(index<iteration){
        result.push(to[index])
        }
        else{
          result.push(randomLetter())
        }
    })
    return result.join("")
  }

  function changeTo(to:string){
    let iteration = 0;
    const interval = setInterval(()=>{
      setText(changeLetter(to,iteration))
      if(iteration>=to.length){
        clearInterval(interval)
      }
      iteration+=1/2;
    },30)
  }

  
  return (
    <div>{text}</div>
  )
}
