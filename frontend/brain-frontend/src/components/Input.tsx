
interface InputTypes {
    inputHead : string,
    placeholder : string,
    reference : any
}

const Input = ({inputHead, placeholder, reference} : InputTypes) => {
  return (
    <div>
        <div>
            <label>{inputHead}</label>
            <br/>
            <input ref={reference} id="firstName" type="text" placeholder={placeholder} className="border-b-[1px] border-b-[#151520] w-full px-2 py-2 outline-none"/>
        </div>
    </div>
  )
}

export default Input