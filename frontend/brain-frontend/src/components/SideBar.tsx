import SideBarItem from "./SideBarItem"

const SideBar = () => {
  const items = ["Twitter", "Documents", "YouTube"]
  return (
    <div className="h-[100%] w-full flex items-center gap-1 border">
      <div className="h-[95%] w-full flex flex-col items-center">
        {
          items.map((item : string, index : number)=> {
            return <SideBarItem text={item} key={index}/>
          })
        }
      </div>
    </div>
  )
}

export default SideBar