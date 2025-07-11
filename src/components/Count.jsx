import React, { useState } from "react";

const Count = () => {
  const [count, setCount] = useState(0);
  const [isDisplay, setIsDisplay] = useState(false);
  //   let count = 0;

  const add = (a, b) => {
    // count += 1;
    setCount((prev) => prev + 1);
    setCount((prev) => prev + 1);
    console.log(count);
  };

  return (
    <div className="flex flex-col justify-center items-center">
      <span>{count}</span>
      <button
        className="p-2 px-4 bg-green-600 rounded-md"
        onClick={() => add(12, 34)}
      >
        Add
      </button>
      <button
        onClick={() => setIsDisplay(true)}
        className="p-2 px-4 bg-green-600 rounded-md"
      >
        see more
      </button>
      {isDisplay && (
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt harum
          neque quidem impedit natus temporibus non eos aperiam, minus, ipsa at.
          Neque asperiores magni quidem amet dolores iure aliquid incidunt? Eum
          odit, molestiae placeat suscipit, necessitatibus illo dolor labore
          eligendi dicta quibusdam sed aut! Ipsum, quod incidunt? Odit,
          assumenda expedita?
        </p>
      )}
    </div>
  );
};

export default Count;
