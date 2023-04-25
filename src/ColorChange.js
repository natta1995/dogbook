import React, { useState } from 'react';

function ColorChange() {
  
    const [isChecked, setIsChecked] = useState(false);
    const [textColor, setTextColor] = useState('blue');
  
    const handleCheckboxChange = (event) => {
      setIsChecked(event.target.checked);
      setTextColor(event.target.checked ? 'green' : 'red');
    }

return (
    <div>
        <input type="checkbox" checked={isChecked} onChange={handleCheckboxChange}/>
        <h1 style={{ color: textColor }}>Precent</h1>
    </div>
)
}

export default ColorChange;