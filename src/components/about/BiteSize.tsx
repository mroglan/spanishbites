import React from 'react'
import styles from '../../styles/About.module.css'
import {Box, Typography} from '@material-ui/core'
import Image from 'next/image'
import Link from 'next/link'
import {SecondaryLink} from '../items/links'

export default function BiteSize() {

    return (
        <Box py={6} px={6}>
            <div className={styles['c1-container']}>
                <div className={styles['c1-graphic-container']}>
                    <img src="/about/magnifyText.png" />
                </div>
                <div className={styles['c1-text-container']}>
                    <div>
                        <Typography variant="h3" gutterBottom className={`${styles['catamaran']} ${styles['title-text']}`}>
                            Making Literature Bite Size
                        </Typography>
                        <Typography display="inline" variant="body1" className={`${styles['catamaran']} ${styles['body-text']}`}>
                            Every day, you can visit the Spanish Bites library to see a new{' '}
                        </Typography>
                        <Link href="/library?bite=true">
                            <a>
                                <SecondaryLink display="inline" className={`${styles['catamaran']} ${styles['body-text']}`}>
                                    “bite”
                                </SecondaryLink>
                            </a>
                        </Link>
                        <Typography variant="body1" display="inline" className={`${styles['catamaran']} ${styles['body-text']}`}>
                            {' '}of Spanish literature, which briefly explain a figurative or syntactical device used
                            in literature with a short excerpt.
                        </Typography>
                    </div>
                </div>
            </div>
        </Box>
    )
}
