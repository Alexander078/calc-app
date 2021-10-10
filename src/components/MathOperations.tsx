import React, {FC} from 'react'
import Button, {ButtonClickHandler} from './Button'

type Props = {
    onClickOperations: ButtonClickHandler ,
    onClickEqual: ButtonClickHandler
}

const MathOperations: FC<Props> = ({onClickOperations, onClickEqual}) => (
    <section className="math-operations">
        <Button text="+" clickHandler={onClickOperations}/>
        <Button text="-" clickHandler={onClickOperations}/>
        <Button text="*" clickHandler={onClickOperations}/>
        <Button text="/" clickHandler={onClickOperations}/>
        <Button text="=" clickHandler={onClickEqual}/>
    </section>
)

export default MathOperations