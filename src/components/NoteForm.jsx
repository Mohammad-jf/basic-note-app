import { useState } from "react";

const NoteForm = ({ notes, setNotes }) => {
  const [formData, setFormData] = useState({
    title: "",
    priority: "",
    category: "",
    description: "",
  });

  const [isFormVisible, setIsFormVisible] = useState(false);

  const changeHandler = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // validation
    if (!formData.title || !formData.description) {
      return;
    }

    // create note object
    const newNote = {
      id: Date.now(),
      ...formData,
    };

    setNotes([newNote, ...notes]);

    // reset the form
    setFormData({
      title: "",
      priority: "",
      category: "",
      description: "",
    });
  };

  return (
    <>
      {/* toggle button */}
      <button
        onClick={() => setIsFormVisible(!isFormVisible)}
        className="w-full bg-gray-100 border-gray-300 text-purple-800 py-2 rounded-lg cursor-pointer hover:bg-purple-200 hover:border-purple-300 transition mb-4"
      >
        {isFormVisible ? "Hide Form" : "Add Note"}
      </button>

      {isFormVisible && (
        <form className="mb-6">
          <div className="mb-4">
            <label htmlFor="" className="block font-semibold">
              Title
            </label>
            <input
              type="text"
              name="title"
              className="w-full p-2 border rounded-lg"
              value={formData.title}
              onChange={changeHandler}
            />
          </div>

          <div className="mb-4">
            <label htmlFor="" className="block font-semibold">
              Priority
            </label>
            <select
              type="text"
              name="priority"
              className="w-full p-2 border rounded-lg"
              value={formData.priority}
              onChange={changeHandler}
            >
              <option value="High">High</option>
              <option value="Medium">Medium</option>
              <option value="Low">Low</option>
            </select>
          </div>

          <div className="mb-4">
            <label htmlFor="" className="block font-semibold">
              Category
            </label>
            <select
              type="text"
              name="category"
              className="w-full p-2 border rounded-lg"
              value={formData.category}
              onChange={changeHandler}
            >
              <option value="Work">Work</option>
              <option value="Personal">Personal</option>
              <option value="Ideas">Ideas</option>
            </select>
          </div>

          <div className="mb-4">
            <label htmlFor="" className="block font-semibold">
              Description
            </label>
            <textarea
              type="text"
              name="description"
              className="w-full p-2 border rounded-lg"
              value={formData.description}
              onChange={changeHandler}
            ></textarea>
          </div>

          <button
            className="w-full bg-purple-500 text-white 
        py-2 rounded-lg cursor-pointer hover:bg-purple-600"
            onClick={handleSubmit}
          >
            Add Note
          </button>
        </form>
      )}
    </>
  );
};

export default NoteForm;
