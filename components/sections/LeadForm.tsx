"use client";

import { useState } from "react";
import { useStore } from "@/store/useStore";
import { validateLead } from "@/lib/validators";

export default function LeadForm() {
  const { addLead } = useStore();

  const [form, setForm] = useState({
    name: "",
    email: "",
  });

  const [msg, setMsg] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const error = validateLead(form);
    if (error) return setMsg(error);

    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (!res.ok) {
        setMsg(data.message || "Failed to submit lead");
        return;
      }

      // ✅ use backend response
      addLead(data);

      setMsg("✅ Lead submitted successfully!");
      setForm({ name: "", email: "" });
    } catch (err) {
      setMsg("❌ Something went wrong");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-md mx-auto space-y-4 bg-white p-6 rounded-xl shadow"
    >
      <input
        placeholder="Name"
        value={form.name}
        onChange={(e) => setForm({ ...form, name: e.target.value })}
        className="w-full border p-3 rounded-lg"
      />

      <input
        placeholder="Email"
        value={form.email}
        onChange={(e) => setForm({ ...form, email: e.target.value })}
        className="w-full border p-3 rounded-lg"
      />

      <button className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700">
        Submit
      </button>

      {msg && <p className="text-center">{msg}</p>}
    </form>
  );
}
