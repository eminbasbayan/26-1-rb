import React, { useMemo } from 'react';

const MyList = ({ items }) => {
  const sortedItems = useMemo(() => {
    console.log('list çalıştı!');

    return items.sort((a, b) => b - a);
  }, [items]);

  return (
    <div>
      <h2>MyList</h2>
      <ul>
        {sortedItems.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default MyList;
