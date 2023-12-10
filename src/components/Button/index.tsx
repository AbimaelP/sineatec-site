
type ButtonProps = {
    type: "button" | "submit" | "reset",
    children: React.ReactNode,
    className?: string
}



export default function Button({className, type, children}: ButtonProps ){
    return (
        <button className={className} type={type}>{children}</button>
    )
}