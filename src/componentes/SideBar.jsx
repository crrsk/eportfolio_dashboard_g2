import MenuAcordeon from "./Menu/MenuAcordeon"

function SideBar(props) {
 

  return (
   
     <div>
        <h1>ROLES</h1>
        <p>{props.menu}</p>
        <MenuAcordeon></MenuAcordeon>
     </div>
    
  )
}

export default SideBar