// This approach uses Tree data Structure concept

// App.js :-
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

////////////////////////////////////////////////////////////////////////////////////////////////
// useTraverseTree.js (hook) :-
const useTraverseTree = () => {
  function insertNode(tree, folderId, item, isFolder) {
    if (tree.id === folderId && tree.isFolder) {
      tree.items.unshift({
        id: new Date().getTime(),
        name: item,
        isFolder,
        items: []
      });
      return tree;
    }
    let latestNode = [];
    latestNode = tree.items.map((obj) => {
      return insertNode(obj, folderId, item, isFolder);
    });
    return { ...tree, items: latestNode };
  }
  return { insertNode };
};
export default useTraverseTree;
////////////////////////////////////////////////////////////////////////////////////////////////

// Folder.js :-
import { useState } from "react";

function Folder({ data, handleInsertNode }) {
  const [show, setShow] = useState(false);
  const [showInput, setShowInput] = useState({
    visible: false,
    isFolder: null
  });

  const handleNewFolder = (e, isFolder) => {
    e.stopPropagation();
    setShow(true);
    setShowInput({
      visible: true,
      isFolder: isFolder
    });
  };

  const addFolder = (e) => {
    if (e.keyCode === 13 && e.target.value) {
      handleInsertNode(data.id, e.target.value, showInput.isFolder);
      setShowInput({ ...showInput, visible: false });
    }
  };

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
        <div style={{ display: "flex", gap: "10px" }}>
          <span>📁 {data.name}</span>
          <div>
            <button onClick={(e) => handleNewFolder(e, true)}>+Folder</button>
            <button onClick={(e) => handleNewFolder(e, false)}>+File</button>
          </div>
        </div>
        <div style={{ paddingLeft: "10px", display: show ? "block" : "none" }}>
          {showInput.visible && (
            <div className="inputContainer">
              <span>{showInput.isFolder ? "📁" : "📄"}</span>
              <input
                type="text"
                onKeyDown={addFolder}
                onBlur={() => setShowInput({ ...showInput, visible: false })}
                className="input"
                autoFocus
              />
            </div>
          )}

          {data.items.map((val) => {
            return (
              <Folder
                data={val}
                handleInsertNode={handleInsertNode}
                key={val.id}
              />
            );
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
