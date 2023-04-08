const Button = ({ children, className, onClick }) => {
    return (
        // Buton componenti oluşuturdum kişileştirebilmek için 'className' ve 'onClick' de ekledim
        // I created a Button component and added 'className' and 'onClick' to customize it.
        <button
            className={`p-2 rounded-md hover:ring-1 hover:ring-chamois-950 ${className}`}
            onClick={onClick}
            >{children}</button>
    )
}

export default Button