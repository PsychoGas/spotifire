import "./cardstyle.css";
export default function Card({
  Name,
  Cover,
  NumberOfTracks,
  isSelected,
  onClick,
}) {
  return (
    <>
      <div
        className={`card ${isSelected ? "selected" : ""}`}
        onClick={onClick}
        style={{
          cursor: "pointer",
          border: isSelected ? "5px solid green" : "none",
          boxShadow: isSelected ? "0 0 10px green" : "none",
        }}
      >
        <img src={Cover} alt="Album Cover" className="scale-75 pt-2" />
        <p className="heading">{Name}</p>
        <p>Tracks- {NumberOfTracks}</p>
      </div>
    </>
  );
}
