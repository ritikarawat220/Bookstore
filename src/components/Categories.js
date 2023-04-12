import React, { useState } from 'react';

export default function Categories() {
  const [visible, setVisible] = useState(false);
  const handleClick = () => setVisible(!visible);
  return (
    <div className="categories">
      <div className="text">
        <button type="submit" onClick={handleClick}>Check Status</button>
      </div>
    </div>
  );
}
