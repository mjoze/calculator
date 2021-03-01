import buttons from './data';
import { useState } from 'react';



const Button = () =>
    buttons.map((button) => {
        const handleClick = () => console.log(button.value);

        return (
            <div
                key={button.name}
                value={button.value}
                onClick={handleClick}
            >
                {button.name}
            </div>
        )
    })

// const Btn = () => {
//     return (
//         <Button />
//     )
// }

export default Button;