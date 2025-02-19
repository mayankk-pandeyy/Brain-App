type itemProps = {
    "text" : string
}

const SideBarItem = (props : itemProps) => {
    const text = props.text;
  return (
    <div className="w-[90%]">
        <div className="w-[100%] border-b-[1px] border-[#555555] py-3 text-center hover:text-xl transition-all duration-300 hover:bg-[#FF947D] text-[#555555] cursor-pointer h-[50px] flex items-center justify-center">
             {text}
        </div>
    </div>
  )
}

export default SideBarItem