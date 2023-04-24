import { FC } from "react"
import Select from 'react-select'

type optionProps = {
    value: string
    label: string
}

type DropdownProps = {
    options?: Array<optionProps>
    onChange?: (selected: any, state: any) => void
    getOptionValue?: any
    isMulti?: boolean
    name?: string
}

const Dropdown: FC<DropdownProps> = ({
    options,
    onChange,
    isMulti,
    getOptionValue,
    name
}) => {
    return (<>
        <Select
            options={options}
            isMulti={isMulti}
            name={name}
            onChange={onChange}
            getOptionValue={getOptionValue}
            hideSelectedOptions={false}
        ></Select>
    </>)
}

export default Dropdown