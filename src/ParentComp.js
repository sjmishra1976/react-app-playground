import React, { useState, useEffect } from 'react'
import ChildComponent from './ChildComp'

const ParentComponent = () => {

    const [pName, setPName] = useState('');
    const [compTitle, setCompTitle] = useState('');

    const [childName, setChildName] = useState('');

    const handleParentChangeName = (e) =>{
        setPName(e.target.value);
    }

    //This is a function to set value to parent state vriable obtained from child component , the function itself will be passed as prop object to child comp
    //child component will get the function as object parameter and will be invoked by child when setting value alog with other things
    const handleChildNameChange = (value) =>{
        setChildName(value);
    }
    

    useEffect(() =>{
        setCompTitle(pName);//useEffect can be used to set another state variable or some other activity based on some event change in this onChange of value or state variable value
    },[pName])//depends on PName state variable

// set the name to state variable and pass it to child element via prop
    return(
        <div>
            <label> Parent Name Input : <input name="nameInput" onChange={handleParentChangeName} /> </label>
            <p>Parent Component Title {compTitle}</p>
            <p>Child Name from parent variable  {childName}</p>
            <p>----------------------------------------------------------------------------------</p>
            <p>----------------------------------------------------------------------------------</p>
            <ChildComponent parName = {pName} onChildNameChange = {handleChildNameChange}></ChildComponent>
        </div>
    )
}

export default ParentComponent