type BtnType = "accent" | "blank";

interface ButtonInterface {
    btnType: BtnType;
    className?: string;
    svg?: string;
    text?: string;
}

const Button: React.FC<ButtonInterface> = ({ btnType, className, text, svg }) => {
    return (
        <button className={`btn ${className} ${btnType}`}>
            {svg && <span dangerouslySetInnerHTML={{ __html: svg }}></span>}
            {text && <p>{text}</p>}
        </button>
    );
};

export default Button;
