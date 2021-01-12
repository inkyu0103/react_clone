import React,{useEffect, useState} from 'react';

const Counter = () =>{
    const[value,setValue] = useState(0);


    const plus = () =>{
        //console.log(this); undefined 
        //console.log(this.value); error
        setValue(value+1);
    }

    const minus =() =>{
        setValue(value-1);
    }

    useEffect(()=>{
        //이건 처음에 렌더링이 될 떄 (componentDidMount)
        // 업데이트 되었을 때 (componentDidUpdate)둘 다 떠야한다.
        console.log('렌더링이 완료되었습니다.');
    });



    return(
        <div>
            <p>현재 카운터 값은 {value}입니다.</p>
            <button onClick={plus}>+</button>
            <button onClick={minus}>-</button>
        </div>
    )
}


export default Counter

