const Button = ({ children, className, onClick }) => {
    return (
        <button
            className={`p-2 rounded-md hover:ring-8 hover:ring-chamois-950 ${className}`}
            onClick={onClick}
            >{children}</button>
    )
}

export default Button