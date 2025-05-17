import React, { useEffect, useState } from "react";
import axios from "axios";

export default function ProfileEdit() {
  const [profile, setProfile] = useState({});
  const token = localStorage.getItem("token");

  useEffect(() => {
    axios.get("/users/me", { headers: { Authorization: `Bearer ${token}` } }).then(res => setProfile(res.data));
  }, [token]);

  const handleChange = (e) => setProfile({ ...profile, [e.target.name]: e.target.value });

  const handleSave = () => {
    axios.put("/users/me", profile, { headers: { Authorization: `Bearer ${token}` } });
  };

  return (
    <div className="p-4 max-w-xl mx-auto">
      <h2 className="text-xl font-bold mb-4">Editar Perfil</h2>
      <input name="instagram" placeholder="Instagram" value={profile.instagram || ""} onChange={handleChange} className="block w-full mb-2" />
      <input name="whatsapp" placeholder="WhatsApp" value={profile.whatsapp || ""} onChange={handleChange} className="block w-full mb-2" />
      <input name="logo_url" placeholder="URL da Logo" value={profile.logo_url || ""} onChange={handleChange} className="block w-full mb-2" />
      <button onClick={handleSave} className="bg-green-600 text-white px-4 py-2 rounded">Salvar</button>
    </div>
  );
}
