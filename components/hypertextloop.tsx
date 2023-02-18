'use client'
import { useEffect } from "react"
import { useState } from "react"

export function HypertextLoop({children,texts,delay=3000}:{children:string,texts:string[],delay:number}){
  const [letters,setLetter] = useState<string>("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+{}|:<>?")
  const [text,setText] = useState<string>(children)

  useEffect(()=>{
    let indexes = 0;
    const interval = setInterval(()=>{
      changeTo(texts[indexes%texts.length])
      indexes+=1;
    },delay)
  },[])

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
