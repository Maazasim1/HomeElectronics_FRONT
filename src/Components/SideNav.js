import './SideNav.css';

function SideNav(props) {
   
   return (

      <div className="sideNav" style={{ width: props.width, paddingTop: "30px" }}>
         <div className="bi bi-x-circle-fill closebtn" onClick={props.closeNav}></div>
         <a href="./Sales"><a>Sales</a></a>
         <a href="#Section">Admin</a>
         <a href="#Section">Warehouse</a>
         <a href="#Section">Supplier</a>

      </div>
   );
}
export default SideNav;