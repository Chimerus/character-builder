import React, { useState } from 'react'

interface DropProps {
    items: string[]
    heading: string
    onChange: (value: string) => void;
}

const Dropdown: React.FC<DropProps> = ({items, heading, onChange}) => {
    const[value, setValue] = useState("");

    function handleChange(event: React.ChangeEvent<HTMLSelectElement>) {
        let item = event.target.value
        setValue(item)
        onChange(item)
    }

    return (
    <div>
        <label>{heading} |</label>
        <select value={value} onChange={handleChange} className='border border-black-600'>
            <option value={""} disabled>
                Select
            </option>
            {items.map((item)=>(
                <option key={item} value={item}>{item}</option>
            ))}
        </select>

    </div>
  )
}

export default Dropdown