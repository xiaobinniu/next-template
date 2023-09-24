
import { createContext } from 'react';

export interface IMyContextProps {
    user: number | null
}

export const CountContext = createContext<IMyContextProps | undefined>(undefined);


