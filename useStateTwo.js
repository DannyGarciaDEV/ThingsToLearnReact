import { useState } from 'react'
function App() {
    const [checked, setChecked] = useState(false);
  
    return (
      <div>
        <input
          type="checkbox"
          checked={checked}
          onChange={() => setChecked(prevChecked => !prevChecked)}
        />
        <p>{checked ? "checked" : "not checked"}</p>
      </div>
    );
  }