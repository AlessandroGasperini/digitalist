import { Box } from "@mui/system";
import styles from "../styles/landingPageContainer.module.css"
import NavBar from "../Components/NavBar";
import ReadMore from "../Components/ReadMore";
import { frontend } from "../constants";
import { Grid, Divider } from "@mui/material";
import Footer from "../Components/Footer";
import MainButton from "../Components/MainButton";
import { fullscreenProps } from "../Interfaces"

function LandingPageOne(props: fullscreenProps) {
    const wide: boolean = props.wide
    const fullScreen: number = props.fullScreen

    return (
        <Box className={styles.container}>
            <section className={styles.heroImage}>

                <NavBar wide={props.wide} />

                <section className={styles.readMoreCont}>
                    <ReadMore wide={props.wide} />
                </section>

            </section>

            <section className={fullScreen === 2 ? styles.midScreen : !wide ? styles.subjectsLg : ""}>
                {
                    frontend.map((cont, idx) => (
                        <article key={idx} className={styles.frontend}>
                            <Grid className={styles.image}>
                                <img src={cont.img} alt="" />
                            </Grid>
                            <h2>{cont.title}</h2>
                            <p >{cont.text}</p>
                            <Grid className={styles.button}>
                                <MainButton />
                            </Grid>
                        </article>
                    ))
                }
            </section>

            <section className={styles.dividerCont}>
                <Divider className={styles.divider} />
            </section>

            <Footer wide={props.wide} />
        </Box>
    );
}

export default LandingPageOne;