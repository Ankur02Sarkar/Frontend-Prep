import React, { useState } from "react";
import "./styles.css";
import Folder from "./Folder";

export default function App() {
  const explorer = {
    id: "1",
    name: "root",
    isFolder: true,
    items: [
      {
        id: "2",
        name: "public",
        isFolder: true,
        items: [
          {
            id: "3",
            name: "public nested 1",
            isFolder: true,
            items: [
              {
                id: "4",
                name: "index.html",
                isFolder: false,
                items: [],
              },
              {
                id: "5",
                name: "hello.html",
                isFolder: false,
                items: [],
              },
            ],
          },
          {
            id: "6",
            name: "public_nested_file",
            isFolder: false,
            items: [],
          },
        ],
      },
      {
        id: "7",
        name: "src",
        isFolder: true,
        items: [
          {
            id: "8",
            name: "App.js",
            isFolder: false,
            items: [],
          },
          {
            id: "9",
            name: "Index.js",
            isFolder: false,
            items: [],
          },
          {
            id: "10",
            name: "styles.css",
            isFolder: false,
            items: [],
          },
        ],
      },
      {
        id: "11",
        name: "package.json",
        isFolder: false,
        items: [],
      },
    ],
  };

  const [data, setData] = useState(explorer);

  const addItem = (id, item) => {
    const addItemHelper = (data) => {
      if (data.id === id) {
        data.items.push(item);
        return true;
      }
      if (data.isFolder) {
        for (let i = 0; i < data.items.length; i++) {
          if (addItemHelper(data.items[i])) {
            return true;
          }
        }
      }
      return false;
    };
    const newData = { ...data };
    addItemHelper(newData);
    setData(newData);
  };

  return (
    <div className="App">
      <Folder data={data} addItem={addItem} />
    </div>
  );
}
