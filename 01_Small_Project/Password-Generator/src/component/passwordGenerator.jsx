import { useState, useCallback , useEffect  } from "react";


function PasswordGenerator(){
    const [length,setLength]=useState(0);
    const [numbers, setNumbers]=useState(false);
    const [Character,setCharacter]=useState(false);
    let [Password , setPassword]=useState("");

    const copyPassword = () => {
        navigator.clipboard.writeText(Password);
    };

    useEffect(()=>{
        console.log(length);
        console.log(numbers);
        console.log(Character);
        console.log(setPassword);
        setPassword();

        let str="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        const num="1234567890";
        const special="#$%^&*()_+-={}|\:<>?~";
        let pass="";

        if(numbers){
            str +=num;
        }

        if(Character){
            str +=special;
        }

        for(let i=1;i<=length;i++){
            let num= Math.floor(Math.random() * str.length)
            console.log(num);
            pass += str.charAt(num);
            
        }
        setPassword(pass);
        console.log(pass);

    },[length,numbers,Character,setPassword])

    

    return(
        <>
            <h2>Generating Password</h2>
            <div>
                <input type="text" value={Password} onChange={(e)=>setPassword(e.target.value)}/>
                <button id="1" onClick={copyPassword} >Copy</button>
                <br/>
                <input id="1"type="range" min="0" max="100" value={length} onChange={(e)=>setLength(e.target.value)} />{length}
                <br />
                <label>
                    <input type="checkbox" checked={numbers} onChange={(e) => setNumbers(e.target.checked)} />Numbers
                </label>
                <br />
                <label>
                <input type="checkbox" checked={Character} onChange={(e) => setCharacter(e.target.checked)} />Character
                </label>
                
                
            </div>
        </>
    );

};






export default PasswordGenerator;