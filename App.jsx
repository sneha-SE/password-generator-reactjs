import { useCallback, useEffect, useState } from "react";

function App() {

  const [length, setLength] = useState(8);

  const [numberAllow, setNumberAllow] = useState(false);
  const [charAllow, setCharAllow] = useState(false);
  const [password, setPassword] = useState("");

  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if(numberAllow) str +='0123456789';
    if(charAllow) str += '!@#$%^&*?>|';

    for(let i = 0; i<=length; i++){
      let char = Math.floor(Math.random() * str.length + 1);

      pass += str.charAt(char);

      setPassword(pass);
    }


  }, [length, numberAllow, charAllow, password]);

  useEffect(() => {
    passwordGenerator()
  }, [length, numberAllow, charAllow])

  return (
    <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-700 h-36 ">
      <h1 className="text-white text-center">Password Generator</h1>

      <div className="flex shadow rounded-lg overflow-hidden mb-4 my-3">
        <input type="text" 
        value={password}
        className="outline-none w-full py-1 px-3"
        placeholder="Password"
        readOnly
        />
        <button className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0">copy</button>
      </div>
      <div className="flex text-sm gap-x-2 ">
        <div className="flex items-center gap-x-1">
          <input type="range" 
          min={6}
          max={100}
          value={length}
          className="cursor-pointer"
          onChange={(e) => {setLength(e.target.value)}}
          />
          <label >Length: {length}</label>
        </div>

        <div className="flex items-center gap-x-1">
          <input type="checkBox" 
          defaultChecked={numberAllow}
          className="cursor-pointer"
          onChange={( ) => {setNumberAllow((prev) => !prev)}}
          />
          <label >number</label>
        </div>

        <div className="flex items-center gap-x-1">
          <input type="checkbox" 
          className="cursor-pointer"
          onChange={( ) => {setCharAllow((prev) => !prev)}}
          />
          <label >char</label>
        </div>

      </div>
    </div>
  );
}

export default App
