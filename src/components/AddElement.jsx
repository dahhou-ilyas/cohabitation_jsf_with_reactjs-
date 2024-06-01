import React, { useEffect, useState } from "react";

const AddElement = ({ socket, setItemCount, setData }) => {
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [description, setDescription] = useState("");
  const [ws, setWs] = useState(null);

  useEffect(() => {
    if (socket) {
      setWs(socket);
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newItem = { name, date, description };

    setData((prev) => [...prev, newItem]);
    setItemCount((prevCount) => prevCount + 1);
    window.parent.postMessage(newItem, "*");

    if (ws) {
      ws.send(JSON.stringify(newItem));
    }

    setName("");
    setDate("");
    setDescription("");
  };

  return (
    <div className="w-[40vw] flex items-center p-10 justify-center">
      <div className="bg-slate-100 rounded border border-slate-900  p-4 flex flex-col justify-center ">
        <h1 className="title mb-4">Ajouter un nouvel élément</h1>
        <form
          className=" flex flex-col mt-6  gap-4 items-center"
          onSubmit={handleSubmit}
        >
          <div className="flex w-full">
            <div className="text-left w-32 text-2xl  font-mono  ">Nom:</div>
            <input
              type="text"
              className="input"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="flex w-full">
            <div className="text-left w-32 text-2xl  font-mono  ">Date:</div>
            <input
              type="date"
              className="input"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              required
            />
          </div>
          <div className="flex w-full">
            <div className="text-left w-32 text-2xl  font-mono  ">info:</div>
            <input
              type="text"
              className="input"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
            />
          </div>
          <button
            type="submit"
            className="h-12 text-center ml-2  mt-6 font-mono w-80 text-white bg-sky-700 hover:bg-sky-800 focus:ring-4 focus:ring-sky-300 font-medium rounded-lg  px-5 py-2.5 me-2 mb-2 dark:bg-sky-600 dark:hover:bg-sky-700 focus:outline-none dark:focus:ring-sky-800 "
          >
            Ajouter
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddElement;
