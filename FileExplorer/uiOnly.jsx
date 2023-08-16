// Folder.jsx
import { useState } from "react";
function Folder({ data }) {
  const [show, setShow] = useState(false);
  if (data.isFolder) {
    return (
      <div
        className="folder"
        style={{ marginTop: "5px", cursor: "pointer" }}
        onClick={(e) => {
          e.stopPropagation();
          setShow(!show);
        }}
      >
        <div>
          <span>📁 {data.name}</span>
        </div>
        <div style={{ paddingLeft: "10px", display: show ? "block" : "none" }}>
          {data.items.map((val) => {
            return <Folder data={val} key={val.id} />;
          })}
        </div>
      </div>
    );
  } else {
    return (
      <span className="file" style={{ display: "flex" }}>
        📄{data.name}
      </span>
    );
  }
}
export default Folder;

// App.jsx
import "./styles.css";
import { useState } from "react";
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
                items: []
              },
              {
                id: "5",
                name: "hello.html",
                isFolder: false,
                items: []
              }
            ]
          },
          {
            id: "6",
            name: "public_nested_file",
            isFolder: false,
            items: []
          }
        ]
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
            items: []
          },
          {
            id: "9",
            name: "Index.js",
            isFolder: false,
            items: []
          },
          {
            id: "10",
            name: "styles.css",
            isFolder: false,
            items: []
          }
        ]
      },
      {
        id: "11",
        name: "package.json",
        isFolder: false,
        items: []
      }
    ]
  };
  const [data, setData] = useState(explorer);

  return (
    <div className="App">
      <Folder data={data} />
    </div>
  );
}

