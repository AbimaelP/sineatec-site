
type TextProps = {
    className?: string,
    children: React.ReactNode
} 
export default function Text({className, children}: TextProps) {
    return (
        <div className={className}>
            {children}
        </div>
    )
}