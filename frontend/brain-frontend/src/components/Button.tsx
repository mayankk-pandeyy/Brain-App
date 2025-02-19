

type Varients = "primary" | "secondary" | "primary-signup";
interface ButtonProps {
    varient : Varients;
    size : "sm" | "md" | "lg";
    text : string;
    preIcon? : any;
    postIcon? : any;
}


const Button = (props : ButtonProps) => {
    const varient = props.varient;
    const size = props.size;
    const text = props.text;
    const preIcon = props.preIcon;
    const postIcon = props.postIcon;

    const buttonStyling : Record<Varients, string> = {
        "primary-signup" : "w-full text-center text-[#F3C280] bg-[#1A1B26] px-6 py-3 cursor-pointer rounded-full font-mont hover:bg-[#ED7014] transition-all duration-400",
        primary: "bg-[#3A86FF] text-white px-6 py-3 cursor-pointer rounded-full font-mont hover:bg-[#ED7014] transition-all duration-400",
        secondary : "text-[#3A86FF] border-[1px] border-[#3A86FF] px-6 py-3 cursor-pointer rounded-full font-mont",
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