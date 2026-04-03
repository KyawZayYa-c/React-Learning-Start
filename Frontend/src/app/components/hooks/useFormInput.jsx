import {useState} from "react";

export default function useFormInput(initialvalue) {

    const [value, setValue] = useState(initialvalue);

    const onChange = ((e) => setValue(e.target.value));
    return {
        value,
        onChange

    }
}