"use client";

const ActionButtons = () => {
  return (
    <div className="flex items-center gap-x-2.5 pb-2.5">
      <button className="border px-2.5 py-1 rounded-lg border-white hover:bg-red-800 text-white">
        Menu
      </button>
      <button className="border px-2.5 py-1 rounded-lg border-white hover:bg-red-800 hover:text-white">
        Entertainment
      </button>
      <button className="border px-2.5 py-1 rounded-lg border-white hover:bg-red-800 hover:text-white">
        Good Times
      </button>
    </div>
  );
};

export default ActionButtons;
