import { UseDisclosureReturn } from "@chakra-ui/react/dist/declarations/src";
import { ReactNode } from "react";

export interface SidebarDrawerContextProps {
  children: ReactNode;
}

export interface SidebarDrawerContextData extends UseDisclosureReturn{};