// Search.js

import React, { useEffect, useState } from "react";

const Search = ({ socket, dataFrom, setItemCount }) => {
  const [data, setData] = useState(dataFrom || []);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    if (!socket) {
      const ws = new WebSocket(
        "ws://localhost:8080/jsf2-1.0-SNAPSHOT/websocket"
      );
      ws.onopen = () => {
        console.log("WebSocket connected 11");
      };

      ws.onmessage = (event) => {
        if (event.data != "refreshPage") {
          const receivedData = JSON.parse(event.data);
          setData((prevData) => prevData.concat(receivedData));
        }
      };

      ws.onerror = (error) => {
        console.error("WebSocket error:", error);
      };

      ws.onclose = () => {
        console.log("WebSocket disconnected 11");
      };

      const handleMessage = (event) => {
        if (event.origin !== "http://localhost:8080") return;
        setSearchQuery(event.data);
      };

      //add event message
      window.addEventListener("message", handleMessage);

      return () => {
        window.removeEventListener("message", handleMessage);
        ws.close();
      };
    } else {
      socket.onmessage = (event) => {
        console.log("ilyas dddd");
        const receivedData = JSON.parse(event.data);
        setData((prevData) => {
          return prevData.concat(receivedData);
        });
        setItemCount((prev) => prev + 1);
        return () => {
          socket.close();
        };
      };
    }
  }, []);

  const filteredData = data.filter((item) => {
    const nameMatch = item.name
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    const descriptionMatch = item.description
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    return nameMatch || descriptionMatch;
  });

  return (
    <div className="w-[60vw]">
      <div className="text-4xl mb-8 mt-4">Visualisation des Données</div>
      <table className="border-2 rounded  border-slate-900 ">
        <thead>
          <tr className="text-2xl font bg-sky-600">
            <th className="font-extralight    text-white">
              Nom
            </th>
            <th className="font-extralight  text-white">
              Date
            </th>
            <th className="font-extralight  text-white">
              Description
            </th>
          </tr>
        </thead>
        {data && (
          <tbody>
            {filteredData.map((element, index) => (
              <tr className="text-xl " key={index}>
                <td className="bg-slate-100 border-2 border-slate-300">
                  {element?.name}
                </td>
                <td className="bg-slate-200 border-2 border-slate-300">
                  {element?.date}
                </td>
                <td className="bg-slate-100 border-2 border-slate-300">
                  {element?.description}
                </td>
              </tr>
            ))}
          </tbody>
        )}
      </table>
    </div>
  );
};

export default Search;
