import { ChangeEventHandler } from "react"

export interface SearchBarProps {
  handleSearch: ChangeEventHandler<HTMLInputElement>
  value: string
}