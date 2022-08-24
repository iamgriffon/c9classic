export interface CostumeCardProps {
  id: number;
  imageURL: string;
  C9Class: string;
  price: number;
  name: string;
}

export interface ClickHandler {
  onClick: (param: CostumeCardProps)=> void;
}