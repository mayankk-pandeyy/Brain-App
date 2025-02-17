

type Varients = "primary" | "secondary";
interface ButtonProps {
    varient : Varients;
    size : "sm" | "md" | "lg";
    text : string;
    preIcon? : any;
    postIcon? : any;
    onClick : () => void;
}


const Button = (props : ButtonProps) => {
    const varient = props.varient;
    const size = props.size;
    const text = props.text;
    const preIcon = props.preIcon;
    const postIcon = props.postIcon;
    const onClick = props.onClick;

    const buttonStyling : Record<Varients, string> = {
        primary: "bg-[#FF7801] text-white px-6 py-3 cursor-pointer rounded-full font-mont border border-[#000]",
        secondary : "text-[#fff] bg-[#3366CC] px-6 py-3 cursor-pointer rounded-full font-mont border border-[#4D2114]"
    }

    const defaultStyles = "flex gap-1"

    const iconStyles = "scale-75"

    
  return (
    <div>
        <button className={`${buttonStyling[varient]} ${defaultStyles}`}>
            <div className={iconStyles}>
                {preIcon}
            </div>
            <div>
                {text}
            </div>
            <div className={iconStyles}>
                {postIcon}
            </div>
        </button>
    </div>
  )
}

export default Button