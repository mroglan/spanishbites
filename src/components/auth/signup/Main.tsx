import React from 'react'
import {Paper, Box, Typography} from '@material-ui/core'
import Signup from '../../forms/Signup'
import styles from '../../../styles/Forms.module.css'
import {Bite} from '../../items/bites'
import Link from 'next/link'
import {PrimaryLink} from '../../items/links'
import axios from 'axios'
import Router from 'next/router'

export default function Main() {

    const initialVals = {email: '', name: ''}

    const onSubmit = async (values, actions) => {
        try {
            await axios({
                method: 'POST',
                url: '/api/auth/signup',
                data: values
            })

            Router.push({
                pathname: '/auth/verifyemail'
            })

        } catch(e) {
            if(e.response.status === 409) {
                actions.setFieldError(e.response.data.field, e.response.data.msg)
            }
            actions.setSubmitting(false)
        }
    }

    return (
        <div>
            <Box mt={5} maxWidth={600} mx="auto">
                <Bite>
                    <Paper elevation={3}>
                        <Box p={3}>
                            <Box mr={9} textAlign="">
                                <Typography className={styles['catamaran']} variant="h3" gutterBottom>
                                    Sign up for free
                                </Typography>
                            </Box>
                            <Box my={3}>
                                <div data-testid="signup-form-container">
                                    <Signup vals={initialVals} onSubmit={onSubmit} />
                                </div>
                            </Box>
                            <Box>
                                <Typography component="span" variant="body1">
                                    Already have an account?{' '}
                                </Typography>
                                <Link href="/login">
                                    <a>
                                        <PrimaryLink>
                                            Login
                                        </PrimaryLink>
                                    </a>
                                </Link>
                            </Box>
                        </Box>
                    </Paper>
                </Bite>
            </Box>
        </div>
    )
}