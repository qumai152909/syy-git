import React, { useState } from 'react';

function LinkButton() {
  const [linked, setLinked] = useState(false);
  
  const handleClick = () => {
    setLinked(pre => !pre);
  };

  return (
    <section aria-hidden onClick={ handleClick }>
      <p>
        {
          linked
            ? 'like'
            : 'dont like'
        }
      </p>
    </section>
  );
}

export default LinkButton;
