"use client";

import React, {
  ReactNode,
  SetStateAction,
  useState,
  createContext,
} from "react";

interface ContextType {
  acctivebutton: "Workouts" | "My Plan";

  setacctivebutton: React.Dispatch<
    SetStateAction<"Workouts" | "My Plan">
  >;

  plan: Exercise[];

  setplan: React.Dispatch<
    SetStateAction<Exercise[]>
  >;

  save: Exercise[];

  setsave: React.Dispatch<
    SetStateAction<Exercise[]>
  >;

  short: "Duration" | "Calories" | "Rating";

  setshort: React.Dispatch<
    SetStateAction<"Duration" | "Calories" | "Rating">
  >;
  activeTab: "plan"| "saved";
  setActiveTab: React.Dispatch<SetStateAction<"plan"| "saved">>
  
}

export const AppContext = createContext<ContextType>({
  acctivebutton: "Workouts",

  setacctivebutton: () => {},

  plan: [],

  setplan: () => {},

  save: [],

  setsave: () => {},

  short: "Duration",

  setshort: () => {},
  activeTab : "saved",
  setActiveTab:()=>{}
});

const Provider = ({ children }: { children: ReactNode }) => {
  const [acctivebutton, setacctivebutton] = useState<
    "Workouts" | "My Plan"
  >("Workouts");

  const [plan, setplan] = useState<Exercise[]>([]);

  const [save, setsave] = useState<Exercise[]>([]);
  const [activeTab, setActiveTab] = useState<"plan" | "saved">("saved");

  const [short, setshort] = useState<
    "Duration" | "Calories" | "Rating"
  >("Duration");

  const sharedata: ContextType = {
    acctivebutton,
    setacctivebutton,
    plan,
    setplan,
    save,
    setsave,
    short,
    setshort,
    activeTab,
    setActiveTab
  };

  return (
    <AppContext.Provider value={sharedata}>
      {children}
    </AppContext.Provider>
  );
};

export default Provider;