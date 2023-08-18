import React, { useState } from "react";

function Folder({ data, addItem }) {
  const [show, setShow] = useState(false);
  const [nameInput, setNameInput] = useState("");
  const [showInput, setShowInput] = useState(false);
  const [creatingFolder, setCreatingFolder] = useState(false);

  const handleAddClick = (isFolder) => {
    setShowInput(true);
    setCreatingFolder(isFolder);
  };

  const createItem = () => {
    const newItem = {
      id: Math.random().toString(),
      name: nameInput,
      isFolder: creatingFolder,
      items: creatingFolder ? [] : undefined,
    };
    addItem(data.id, newItem);
    setShowInput(false);
    setNameInput("");
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
            <button onClick={() => handleAddClick(true)}>+Folder</button>
            <button onClick={() => handleAddClick(false)}>+File</button>
            {showInput && (
              <div>
                <input
                  type="text"
                  placeholder="Enter name"
                  value={nameInput}
                  onChange={(e) => setNameInput(e.target.value)}
                />
                <button onClick={createItem}>Create</button>
              </div>
            )}
          </div>
        </div>
        <div style={{ paddingLeft: "10px", display: show ? "block" : "none" }}>
          {data.items.map((val) => {
            return <Folder data={val} addItem={addItem} key={val.id} />;
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
