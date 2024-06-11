import "./selectedcountstyle.css";
export default function SelectedCount({ count }) {
  return (
    <div dir="rtl">
      <div className="py-6 px-3 absolute h-14 w-14 top-0 start-0 ...">
        <button className="selcount">
          <span className="text">{count} - Selected</span>
        </button>
      </div>
    </div>
  );
}
