type LeadData = {
  name: string;
  email: string;
  phone?: string;
};

export const submitLead = async (data: LeadData) => {
  const res = await fetch("/api/leads", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  if (!res.ok) throw new Error("Failed to submit lead");

  return res.json();
};
