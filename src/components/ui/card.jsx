import "./styles.css";
export default function Card({ Name, Cover, NumberOfTracks }) {
  return (
    <>
      <div className="card">
        <img src={Cover} alt="Album Cover" className="scale-75 pt-2" />
        <p className="heading">{Name}</p>
        <p>Tracks- {NumberOfTracks}</p>
      </div>
    </>
  );
}
