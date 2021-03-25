import React from 'react'
import MainHeader from '../../components/nav/MainHeader'
import MainFooter from '../../components/nav/MainFooter'
import Main from '../../components/about/Main'
import styles from '../../styles/Basic.module.css'
import Head from 'next/head'

export default function About() {

    return (
        <>
            <Head>
                <title>About Spanish Bites</title>
            </Head>
            <div className={styles.root}>
                <div className={styles.header}>
                    <MainHeader bg="hsl(50, 100%, 80%)" />
                </div>
                <div className={styles.main}>
                    <Main />
                </div>
                <div className={styles.footer}>
                    <MainFooter />
                </div>
            </div>
        </>
    )
}