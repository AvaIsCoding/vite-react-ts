const options = [
    { value: '1', label: '1' },
    { value: '2', label: '2' }
]
const options1 = [
    { value: 'SG', label: 'sin' },
    { value: 'HK', label: 'Hong Kong' },
]
export const formConfig = {
    formItems: [
        {
            key: 'country',
            label: 'Country',
            isRequired: true,
            type: 'select',
            options: [
                { value: 'SG', label: 'Singapore' },
                { value: 'CN', label: 'China' },
            ]
        },
        {
            key: 'role',
            label: 'Role',
            isRequired: true
        },
        {
            key: 'percentage',
            label: 'Percentage',
            isRequired: true,
            type: 'numberInput',
            displayCondition: {
                country: 'SG'
            }
        },
        {
            key: 'other',
            label: 'Other',
            isRequired: true,
            type: 'multiSelect',
            options: [
                { value: 's1', label: 'S1' },
                { value: 's2', label: 'S2' },
            ]
        }
    ]
}