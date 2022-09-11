import { useDisclosure } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { createContext, useContext, useEffect } from 'react';
import { SidebarDrawerContextData, SidebarDrawerContextProps } from './types';

const SidebarDrawerContext = createContext({} as SidebarDrawerContextData);

export function SidebarDrawerProvider({children}: SidebarDrawerContextProps){
  const disclosure = useDisclosure();
  const router = useRouter();

  useEffect(() =>{
    disclosure.onClose()
  }, [router.asPath, disclosure]);

  return (
    <SidebarDrawerContext.Provider value={disclosure}>
      {children}
    </SidebarDrawerContext.Provider>
  )
}

export const useSidebarDrawer = () => useContext(SidebarDrawerContext);