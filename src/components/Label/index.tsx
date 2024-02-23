

type LabelProps = {
    className?: string,
    children: React.ReactNode
}
export default function Label({className, children}: LabelProps){
    return (
        <label className={className}> {children} </label>
    )
}