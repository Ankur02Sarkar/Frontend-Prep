import "./styles.css";
import { useState } from "react";
import Folder from "./Folder";
import useTraverseTree from "./hooks/useTraverseTree";

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
  const { insertNode } = useTraverseTree();
  const handleInsertNode = (folderId, item, isFolder) => {
    const finalTree = insertNode(data, folderId, item, isFolder);
    setData(finalTree);
  };

  return (
    <div className="App">
      <Folder data={data} handleInsertNode={handleInsertNode} />
    </div>
  );
}
