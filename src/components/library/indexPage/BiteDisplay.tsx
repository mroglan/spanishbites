import React, {useContext} from 'react'
import styles from '../../../styles/Library.module.css'
import {LibraryItemsContext} from './Main'
import {Box, Paper, Typography, Grid, Divider} from '@material-ui/core'
import TextDisplay from '../../mui-rte/TextDisplay'
import {BlueDenseButton} from '../../items/buttons'

interface Props {
    hideBite: () => void;
}

export default function BiteDisplay({hideBite}:Props) {

    const {bite} = useContext(LibraryItemsContext)

    return (
        <div className={styles['bite-display-root']}>
            <Box maxWidth={800}>
                <Paper className={styles['bite-display-paper']} elevation={3}>
                    <Box p={3}>
                        <Box mr={10}>
                            <Typography variant="h6">
                                <span data-testid="bite-citation">
                                    {bite.work && <span>From <i>{bite.work}</i></span>}
                                    {bite.author && <span> by {bite.author}</span>}
                                </span>
                            </Typography>
                        </Box>
                        <Box mt={3}>
                            <span data-testid="bite-text">
                                <TextDisplay text={bite.text} />
                            </span>
                        </Box>
                        <Box mt={3} />
                        <Divider />
                        <Box mt={3}>
                            <Typography variant="body1">
                                <span data-testid="bite-desc">
                                    {bite.desc}
                                </span>
                            </Typography>
                        </Box>
                    </Box>
                    <div className={`${styles['bite-display-circle']} ${styles['bite-display-c1']}`} />
                    <div className={`${styles['bite-display-circle']} ${styles['bite-display-c2']}`} />
                    <div className={`${styles['bite-display-circle']} ${styles['bite-display-c3']}`} />
                    <div className={`${styles['bite-display-circle']} ${styles['bite-display-c4']}`} />
                </Paper>
                <Box mt={3}>
                    <Grid container justify="center">
                        <BlueDenseButton data-testid="bite-display-return-home-btn" onClick={() => hideBite()}>
                            Return Home
                        </BlueDenseButton>
                    </Grid>
                </Box>
            </Box>
        </div>
    )
}