import { createContext, useContext, useEffect, useMemo, useState } from 'react';
import { Location } from '@/types';

type LocationProviderState = {
  location: Location;
  setLocation: (location: Location) => void;
};

const initialState: LocationProviderState = {
  location: 'home',
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
  defaultLocation = 'home',
}: LocationProviderProps) {
  const [location, _setLocation] = useState<Location>(defaultLocation);
  const [newLocation, setNewLocation] = useState<Location>(defaultLocation);

  useEffect(() => {
    console.log('[LocationProvider] useEffect', newLocation);
    if (newLocation != location) _setLocation(newLocation);
  }, [newLocation]);

  function setLocation(inLocation: Location) {
    console.log('[LocationProvider] setNewLocation', inLocation);
    if (inLocation != location) {
      setNewLocation(inLocation);
    }
  }
  const value = useMemo(() => ({ location, setLocation }), [location]);
  // const value = {
  //   location,
  //   setLocation,
  // };

  return (
    <LocationProviderContext.Provider value={value}>
      {children}
    </LocationProviderContext.Provider>
  );
}

export const useLocation = () => {
  const context = useContext(LocationProviderContext);

  if (context === undefined) {
    throw new Error('useLocation must be used within a LocationProvider');
  }

  return context;
};
