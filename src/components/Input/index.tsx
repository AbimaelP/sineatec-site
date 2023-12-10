
type InputProps = {
    value?: string | number | string[] | undefined,
    placeholder?: string,
    type?: 'text' | 'number' | 'password' | 'email' | 'radio' | 'checkbox',
    className?: string
}

export default function Input( props: InputProps ){
    const classNamePreMounted = `rounded p-2 placeholder:text-[--default-place-color] placeholder:italic ${props.className}`
    return (
        <input type={props.type} className={classNamePreMounted} value={props.value} placeholder={props.placeholder}/>
    )
}

