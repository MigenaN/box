import React, { useState } from 'react';

const BoxGenerator = () => {
const [color, setColor] = useState('');
const [size, setSize] = useState(130); 
const [boxes, setBoxes] = useState([]);

const handleColorChange = (e) => {
    setColor(e.target.value);
};

const handleSizeChange = (e) => {
    setSize(parseInt(e.target.value, 10) || 0);
};

const handleBoxSubmit = (e) => {e.preventDefault();


    if (color) {
    setBoxes([...boxes, { color, size }]);
    setColor('');
    setSize(130); 
    }
};

return (
    <div>
    <form onSubmit={handleBoxSubmit}>
        <label>
        Color
        <input type="text" value={color} onChange={handleColorChange} />
        </label>
        <label>
        Size
        <input type="number" value={size} onChange={handleSizeChange} />
        </label>
        <button type="submit">Add</button>
    </form>

    <div>
        {boxes.map((box, index) => (
        <div
            key={index}
            style={{
            backgroundColor: box.color,
            width: `${box.size}px`,
            height: `${box.size}px`,
            display: 'inline-block',
            margin: '5px',
            }}
        ></div>
        ))}
    </div>
    </div>
);
};

export default BoxGenerator;
