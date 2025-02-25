const Button: React.FC<{ className?: string; svg?: string; text?: string }> = ({
    className,
    text,
    svg,
}) => {
    return (
        <button className={`btn ${className}`}>
            {svg && <span dangerouslySetInnerHTML={{ __html: svg }}></span>}
            {text && <p>{text}</p>}
        </button>
    );
};

export default Button;
