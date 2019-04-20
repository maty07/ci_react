import React, { useState } from 'react';
import { render } from 'react-dom';

import './index.css';

const Example = () => {

    const [languajes, setLanguajes] = useState(['php', 'javascript']);

    const [text, setText] = useState('');

    const addLanguaje = () => {
        setLanguajes([...languajes, text])
        setText('')
    }

    return (
        <div>
            <p><input type="text" onChange={(e) => setText(e.target.value)} value={text} /></p>
            <button onClick={addLanguaje}>Add</button>
            <br />
            {
                languajes && languajes.map((languaje, i) => {
                    return <li key={i}>{languaje}</li>
                })
            }
        </div>
    )
}
render(<Example />, document.getElementById('app'));
