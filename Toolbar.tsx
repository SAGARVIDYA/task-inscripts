export default function Toolbar() {
  return (
    <div className="flex gap-2 mb-4">
      <button
        onClick={() => console.log("New Row clicked")}
        className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        New Row
      </button>
      <button
        onClick={() => console.log("Delete Row clicked")}
        className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600"
      >
        Delete Row
      </button>
      <button
        onClick={() => console.log("Sort clicked")}
        className="px-3 py-1 bg-green-500 text-white rounded hover:bg-green-600"
      >
        Sort
      </button>
    </div>
  );
}
