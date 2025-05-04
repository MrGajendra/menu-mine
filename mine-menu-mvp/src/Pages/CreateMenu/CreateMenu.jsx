import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import MenuContext from "../../context/MenuContext";

const CreateMenu = () => {
  const { setMenu } = useContext(MenuContext);
  const navigate = useNavigate();
  const [food, setFood] = useState({ name: "", price: "", details: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!food.name || !food.price || !food.details) return;
    setMenu((prev) => [...prev, food]);
    setFood({ name: "", price: "", details: "" });
    navigate("/menu");
  };

  return (
    <div className="p-6 max-w-md mx-auto">
      <h2 className="text-2xl mb-4">Create Menu</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input type="text" placeholder="Food Name" className="w-full p-2 border" value={food.name} onChange={(e) => setFood({ ...food, name: e.target.value })} required />
        <input type="number" placeholder="Price" className="w-full p-2 border" value={food.price} onChange={(e) => setFood({ ...food, price: e.target.value })} required />
        <textarea placeholder="Details" className="w-full p-2 border" value={food.details} onChange={(e) => setFood({ ...food, details: e.target.value })} required></textarea>
        <button type="submit" className="bg-blue-500 text-white px-4 py-2">Add to Menu</button>
      </form>
    </div>
  );
};

export default CreateMenu;
