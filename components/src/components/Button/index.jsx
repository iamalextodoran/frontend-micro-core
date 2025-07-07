import { useState } from "react";

const Button = () => {
  const [state, setState] = useState(0);

  return (
    <div>
      <button
        className="rounded-md bg-pink-400 px-4 py-2 text-white hover:bg-pink-500 focus:outline-none focus:ring-2 focus:ring-pink-600 focus:ring-offset-2"
        onClick={() => setState((s) => s + 1)}
      >
        Click me: {state}
      </button>
    </div>
  );
};

export default Button;
