import { ReactNode } from "react";

export interface PanelTableRowProps {
  first?: string;
  firstLabel?: string;
  second?: string;
  secondLabel?: string;
  third?: string;
  thirdLabel?: string;
  fourth?: ReactNode;
  isChecked?: boolean | false;
  hasChecks: boolean;
}