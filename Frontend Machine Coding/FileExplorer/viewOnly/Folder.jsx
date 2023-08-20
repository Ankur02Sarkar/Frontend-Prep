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
