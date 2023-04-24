import { FC } from 'react'

type buttonProps = {
  label: string
  onClick?: () => void
}

const Button: FC<buttonProps> = ({
  label,
  onClick
}) => {
  return (
    <button onClick={onClick}>{label}</button>
  )
}

export default Button