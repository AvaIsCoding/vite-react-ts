import { FC, useState, useEffect } from "react"

type InputProps = {
  type?: string
  name: string
  onChange?: (event: any) => void
}

const Input: FC<InputProps> = ({
  type,
  name,
  onChange
}) => {
  return <input
    type={type}
    name={name}
    onChange={onChange}
  ></input>
}

export default Input