import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { username, email } from "../components/formslice";

const App = () => {
  const dispatch = useDispatch();

  const name = useSelector((state) => state.forms.name);     
  const Vemail = useSelector((state) => state.forms.email);  

  return (
    <div>
      <h1>User Information</h1>

      <input
        type="text"
        placeholder="Enter Name"
        value={name}
        onChange={(e) => dispatch(username(e.target.value))}  
      />

      <input
        type="email"
        placeholder="Enter Email"
        value={Vemail}
        onChange={(e) => dispatch(email(e.target.value))}     
      />

      <section className="output">
        <p>Name - {name}</p>
        <p>Email - {Vemail}</p>
      </section>
    </div>
  );
};

export default App;
