import { Box } from "@mui/material";
import styles from "../styles/readMore.module.css"
import { readMore } from "../constants";
import MainButton from "../Components/MainButton";
import { wide } from "../Interfaces"

function ReadMore(props: wide) {
    const wide: boolean = props.wide

    return (
        <Box className={wide ? styles.readMore : styles.readMoreWide}>

            <h3>{readMore.title}</h3>

            <p>{readMore.text}</p>

            <MainButton />
        </Box>
    );
}

export default ReadMore;