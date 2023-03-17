import { Link } from "react-router-dom"; 
import styles from "./Button.module.scss"; 
 
const Button = (props) => { 
  const { name, to, color, } = props; 
 
  const btnColor = color === "dark" ? styles.btn_dark : styles.btn_outline_primary; 
  return ( 
    <Link to={to} className={styles.btn + " " + btnColor + " " + styles.Link}> 
      {name} 
    </Link> 
  ); 
}; 
 
export default Button;