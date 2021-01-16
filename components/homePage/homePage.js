import React, {useContext} from 'react'

import styles from './index.module.css'
import StoreContext from '../../store'

import Head from "next/head";
import * as Icons from "../icons";
import Button from "../button";
import {THEME} from "../../constants";

function Home(props) {
    const store = useContext(StoreContext)

    return (
        <div className={styles.mainContainer} {...props}>
            <Head>
                <title>Home Page</title>
            </Head>

            <h1>Home page</h1>

            <br/>

            <Icons.Search style={{fontSize: 24}}/>

            <br/>
            <br/>

            <div>
                Change Theme{' '}
                <Button
                    onClick={() =>
                        store.changeTheme(
                            store.theme === THEME.LIGHT ? THEME.DARK : THEME.LIGHT
                        )
                    }
                >
                    {store.theme === THEME.LIGHT ? 'Dark' : 'Light'}
                </Button>
                <Button startIcon={<Icons.Apps/>} href='/'/>
            </div>

            <br/>
            <br/>

            <div>
                API url (env): <b>{process.env.API_URL}</b>
            </div>
        </div>
    )
}

export default Home
