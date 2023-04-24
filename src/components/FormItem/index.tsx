import { FC } from 'react'
import Dropdown from '../Select'

type FormItemProps = {
    label: string
    options: Array<{ value: string, label: string }>
    getOptionValue?: any
}

const FormItem: FC<FormItemProps> = ({
    label,
    options,
    getOptionValue
}) => {
    return (
        <>
            <p>{label}</p>
            <Dropdown
                options={options}
                getOptionValue={getOptionValue}
            ></Dropdown>
        </>
    )
}

export default FormItem