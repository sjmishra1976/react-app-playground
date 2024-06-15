import React, { useState } from 'react'

const ChildComponent = ({parName, onChildNameChange}) => {


    const [cName, setCName] = useState('');

    const handleChangeName = (e) =>{
        setCName(e.target.value); //set state variable of child component
        onChildNameChange(e.target.value) //Also set state vriable of parent by calling passed function from parent, this is a way you pass state value from child to parent

    }

    //use the passed variable from Prop
    return(
        <div>
          <label> Child Name Input : <input name="nameInput" onChange={handleChangeName} /> </label>
          <p> Child Component: childName : {cName} </p>
          <p> Child Component: parentName : {parName} </p>
        </div>
    )
}

export default ChildComponent