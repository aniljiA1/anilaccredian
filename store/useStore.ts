import { create } from "zustand";

export interface Lead {
  id?: string;
  name: string;
  email: string;
  phone?: string;
}

interface Store {
  leads: Lead[];
  setLeads: (leads: Lead[]) => void;
  addLead: (lead: Lead) => void;
  clearLeads: () => void;
}

export const useStore = create<Store>((set) => ({
  leads: [],

  setLeads: (leads) =>
    set(() => ({
      leads,
    })),

  addLead: (lead) =>
    set((state) => ({
      leads: [...state.leads, lead],
    })),

  clearLeads: () =>
    set(() => ({
      leads: [],
    })),
}));
