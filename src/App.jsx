/* eslint no-eval:0 */
// importacion
import React, {useState} from 'react';
import words from 'lodash.words'
import Result from './components/Result';
import Functions from './components/Functions';
import Numbers from './components/Numbers'
import MathOperations from './components/MathOperations';
import './App.css';

// generacion de la funcion del componente
const App = () => {    
    //Array destructuring
    const [stack, setStack] = useState("");   

    const items = words(stack, /[^-^+^*^/]+/g)   

    const value = items.length > 0 ? items[items.length-1] : "0"

    const clickHandlerFunction = number => {//console.log(number)
        setStack( `${stack}${number}`) }

    return (<main className='react-calculator'>
       <Result value={value} />
       <Numbers onClickNumber={clickHandlerFunction }/>
       <Functions onContentClear={ (operation) => {
           //console.log('Content Clear :', operation)
           setStack('')
            }} 
        onDelete={(operation) => {           

            if(stack.length>0) {
                //console.log('Delete:', operation)
                 const newStack = stack.substring(0, stack.length-1)
                 setStack(newStack)
             }
            }} />
        <MathOperations onClickOperations = { operation => {
            //console.log('operation: ',operation )
            setStack(`${stack}${operation}`)        
            }}
            onClickEqual = { operation => {
                //console.log('Equal: ', operation )
                setStack(eval(stack).toString())    
                }} />
        </main>);
}

// exportación
export default App;