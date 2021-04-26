import React from 'react'
import Head from 'next/head'
import styles from '../../styles/Library.module.css'
import { GetStaticProps, GetServerSideProps, GetServerSidePropsContext } from 'next'
import {getAllUnpopulatedAuthors} from '../../utils/authors'
import {getAllUnpopulatedBooks} from '../../utils/books'
import {getAllTimePeriods} from '../../utils/timePeriods'
import {getAllGenres} from '../../utils/genres'
import {getAllPassages} from '../../utils/passages'
import {getTodayBite} from '../../utils/bites'
import {getInitialSettings} from '../../utils/library'
import {ClientUnpopulatedAuthor, ClientUnpopulatedBook, ClientGenre, ClientTimePeriod, ClientPassage, ClientSpanishBite} from '../../database/dbInterfaces'
import useSWR from 'swr'
import axios from 'axios'

import MainHeader from '../../components/nav/MainHeader'
import MainFooter from '../../components/nav/MainFooter'
import Main from '../../components/library/indexPage/Main'
import { ParsedUrlQuery } from 'querystring'

export interface LibraryItems {
    authors: ClientUnpopulatedAuthor[];
    books: ClientUnpopulatedBook[];
    timePeriods: ClientTimePeriod[];
    genres: ClientGenre[];
    passages: ClientPassage[];
    bite: ClientSpanishBite;
}

export interface Props {
    items: LibraryItems;
    query: ParsedUrlQuery;
}

export default function Library({items, query}:Props) {

    const {data:user} = useSWR('/api/auth/getuser', {shouldRetryOnError: false})

    return (
        <>
            <Head>
                <title>
                    Spanish Bites Library
                </title>
            </Head>
            <div className={styles.root}>
                <div style={{position: 'sticky', top: 0, zIndex: 2000}}>
                    <MainHeader bg="none" user={user} />
                </div>
                <div>
                    <Main items={items} query={query} />
                </div>
            </div>
            <div>
                <MainFooter />
            </div>
        </>
    )
}

// can't use getStaticProps because we need to access query params in case there are any filters
// api route /library uses cache control
export const getServerSideProps:GetServerSideProps = async (ctx:GetServerSidePropsContext) => {

    try {
        const {data: {authors, books, timePeriods, genres, passages, bite}} = await axios.get('/api/library')
        return {props: {
            items: {
                authors, books, timePeriods, genres, passages, bite
            },
            query: ctx.query
        }}
    } catch(e) {
        return {props: {
            items: {authors: [], books: [], timePeriods: [], genres: [], passages: [], bite: {}},
            query: ctx.query
        }}
    }
}