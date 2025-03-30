import { createContext, useContext, useState } from "react";

type Location = "home" | "signin";

type LocationProviderState = {
  location: Location;
  setLocation: (location: Location) => void;
};

const initialState: LocationProviderState = {
  location: "home",
  setLocation: () => null,
};

const LocationProviderContext =
  createContext<LocationProviderState>(initialState);

type LocationProviderProps = {
  children?: React.ReactNode;
  defaultLocation?: Location;
};

export function LocationProvider({
  children,
  defaultLocation = "home",
}: LocationProviderProps) {
  const [location, setLocation] = useState<Location>(defaultLocation);

  const value = {
    location,
    setLocation: (location: Location) => {
      console.log("value.setLocation()");
      setLocation(location);
    },
  };

  return (
    <LocationProviderContext.Provider value={value}>
      {children}
    </LocationProviderContext.Provider>
  );
}

export const useLocation = () => {
  const context = useContext(LocationProviderContext);

  if (context === undefined) {
    throw new Error("useLocation must be used within a LocationProvider");
  }

  return context;
};
