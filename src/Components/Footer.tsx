import { Box } from "@mui/system";
import styles from "../styles/footer.module.css"
import cvBtn from "../assets/cvBtn.png"
import plBtn from "../assets/plBtn.png"
import cvpdf from "../assets/myCv.pdf"
import plpdf from "../assets/myPL.pdf"
import { wide } from "../Interfaces"

function Footer(props: wide) {
    const wide: boolean = props.wide
    return (
        <Box className={styles.footer}>
            <nav>
                <a target="_blank" href="https://alessandrogasperini.onrender.com" rel="noreferrer">My portfolio</a>
            </nav>

            <a href={cvpdf} download="CV"><img className={wide ? styles.bigImage : styles.smallImage} src={cvBtn} alt="" /> </a>
            <a href={plpdf} download="PL"><img className={wide ? styles.bigImage : styles.smallImage} src={plBtn} alt="" /></a>

        </Box>
    );
}

export default Footer;