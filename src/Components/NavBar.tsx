import { Box, Menu, MenuItem, Alert, AlertTitle, Grid } from "@mui/material";
import { useState } from "react"
import styles from "../styles/navBar.module.css"
import digitalistLogo from "../assets/digitalistLogo.png"
import SearchIcon from '@mui/icons-material/Search';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { menuItems } from "../constants"
import { messageAlert } from "../Interfaces"
import { wide } from "../Interfaces"

function NavBar(props: wide) {

    const [anchorEl, setAnchorEl] = useState<any>(null) // mui event object brings a bit to much content for a interface :)
    const [openAlert, setOpenAlert] = useState<messageAlert>({ open: false, message: "" })
    const [openSearchBar, setOpenSearchBar] = useState<boolean>(false)
    const [menu, setMenu] = useState<boolean>(false)
    const wide: boolean = props.wide
    const open = Boolean(anchorEl);
    window.addEventListener('resize', () => setOpenSearchBar(false))

    const handleClick = (event: any) => { // mui event object brings a bit to much content for a interface :)
        setAnchorEl(event.currentTarget);
        setMenu(true)
    };
    const handleClose = () => {
        setAnchorEl(null);
        setMenu(false)
    }

    function pathAlert(path: string) {
        setAnchorEl(null);
        setOpenAlert({ open: true, message: path })
        setTimeout(function () {
            setOpenAlert({ open: false, message: "" })
        }, 3000);
    }

    function wideScreenInput(wide: boolean) {
        if (wide) {
            return openSearchBar ? styles.searchBarOut : styles.searchBarIn
        } else {
            return openSearchBar ? styles.searchBarOutLg : styles.searchBarInLg
        }
    }

    return (
        <Box >
            <section className={styles.NavBar}>

                <section className={styles.logo}>
                    <img className={styles.digitalistLogo} src={digitalistLogo} alt="digitalistLogo" />
                    <h4 className={wide ? styles.logoText : styles.logoTextLg}>Digitalist</h4>
                </section>

                <Grid className={styles.inputCont}>
                    <input
                        className={wideScreenInput(wide)}
                        placeholder="Search"
                    />
                </Grid>

                <article className={styles.searchAndMenu}>
                    {openSearchBar ? <CloseIcon className={styles.searchIcons} onClick={() => setOpenSearchBar(false)} /> : <SearchIcon className={styles.searchIcons} onClick={() => setOpenSearchBar(true)} />}
                    {wide ?
                        <MenuIcon onClick={handleClick} className={styles.menuIcon} />
                        :
                        <div className={styles.hamburger_wrapper}>
                            <div id={styles.hamburger} tabIndex={1} className={!menu ? styles.navMenu : styles.close} role="button" onClick={handleClick}>
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>
                        </div>}
                    <Menu className={styles.menu}
                        id="demo-positioned-menu"
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleClose}
                        anchorOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                        }}
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                        }}
                    >
                        {menuItems.map((item, idx) => (
                            <MenuItem key={idx} onClick={() => pathAlert(item.path)}>{item.title}</MenuItem>
                        ))}
                    </Menu>

                </article>
            </section>
            {openAlert.open && <Alert className={styles.alert} severity="success">
                <AlertTitle>Message :)</AlertTitle>
                <strong>{openAlert.message}</strong>
            </Alert>}
        </Box>
    );
}

export default NavBar;