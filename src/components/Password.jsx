import React, { useState, useCallback, useEffect, useRef, use } from "react";

const Password = () => {
  const [length, setLength] = useState(8);
  const [num, setNum] = useState(false);
  const [char, setChar] = useState(false);
  const [password, setPassword] = useState("");

  const passwordRef = useRef(null);
    
  const generatePassword = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (num) str += "0123456789";
    if (char) str += "!@#$%^&*()_+`";

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }
    setPassword(pass);
  }, [length, num, char, setPassword]);

const copyPassword = useCallback(() => {
    passwordRef.current.select();
    window.navigator.clipboard.writeText(password);
}, [password]);

  useEffect(() => {
    generatePassword();
  }, [length, num, char, generatePassword]);
  return (
    <div>
      <div className="w-full mx-auto max-w-md shadow-md rounded-lg px-4 py-3 my-8 text-orange-500 bg-gray-700">
        <h1 className="text-white text-center">Password Generator</h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input
            type="text"
            value={password}
            className="outline-none w-full py-1 px-3"
            placeholder="Password"
            readOnly
            ref={passwordRef}
          />
          <button onClick={copyPassword} className="bg-blue-500 text-white px-4 py-1">copy</button>
        </div>
        <div className="flex text-sm gap-x-2">
          <div className="flex items-center gap-x-1">
            <input
              type="range"
              min="8"
              max="50"
              value={length}
              className="cursor-pointer"
              onChange={(e) => {
                setLength(e.target.value);
              }}
            />
            <label>Length:{length}</label>
          </div>

          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={num}
              onChange={(e) => {
                setNum((prev) => !prev);
              }}
            />
            <label>Numbers</label>
          </div>

          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={char}
              onChange={(e) => {
                setChar((prev) => !prev);
              }}
            />
            <label>Characters</label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Password;
