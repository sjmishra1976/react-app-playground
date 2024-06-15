import React, { useState, useEffect } from 'react'

function Counter() {

    const [count, setCount] = useState(0);

    const  addCount = () => {
        setCount(count + 1);
    };

    useEffect(() =>{
        document.title = `Count : ${count}`;
    },[count]); //as effect of title change depends on count state value in count 
    
    useEffect(() =>{
       // Define your async function
        const fetchData = async () => {
        // Perform async operations here, we are  jus setting a test 1000 value when compeonent did mount
            setCount(1000);
        };

        // Call the async function
        fetchData();
    },[]); //empty array means it does not depened on any state

    return (
        <div>
            <p> Count : {count} </p>
            <button onClick = {addCount}  > Add 1 To Count </button>
            <p> ------------------------------------------------------------</p>
        </div>
    );
}
export default Counter
