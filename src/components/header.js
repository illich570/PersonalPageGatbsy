import React from "react"
import illustration from '../images/undraw_feeling_proud_qne1.svg';
import Form from './contact.form';
export default () => (

  <header className="bg-blue-400">
    <div className="container mx-auto p-12 max-w-4xl">
      <div className="flex justify-center items-center">
        <div className="flex-1">
          <h1 className="text-6xl  text-white font-bold">Hi, I'm Illich.</h1>
          <p className="text-xl font-light text-white">I'm learning every day how to make web applications.</p>
        </div>
        <img src={illustration} alt="Boy on top of a desktop computer with code" style={{height: "300px"}} ></img>
      </div>

      <div>
        <Form/>
      </div>
    </div>
  </header>
)