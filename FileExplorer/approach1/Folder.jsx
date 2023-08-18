import { useState } from "react";

function Folder({ data, handleInsertNode }) {
  const [show, setShow] = useState(false);
  const [showInput, setShowInput] = useState({
    visible: false,
    isFolder: null,
  });

  const handleNewFolder = (e, isFolder) => {
    e.stopPropagation();
    setShow(true);
    setShowInput({
      visible: true,
      isFolder: isFolder,
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
