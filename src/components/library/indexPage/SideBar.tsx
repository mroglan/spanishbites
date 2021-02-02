import React from 'react'
import Link from 'next/link'
import styles from '../../../styles/Library.module.css'
import {SideBarBluePrimaryButton} from '../../items/buttons'
import {Typography} from '@material-ui/core'
import {Filters, initialFilters} from './FiltersPanel'

interface Props {
    setFilters: (filters:Filters) => void;
    closePopup?: () => void;
}

export default function SideBar({setFilters, closePopup}:Props) {

    const changeFilters = (libraryItem:string) => {
        if(Boolean(closePopup)) closePopup()
        setFilters({...initialFilters, bite: false, libraryItem})
    }

    const openBite = () => {
        if(Boolean(closePopup)) closePopup()
        setFilters({...initialFilters, bite: true})
    }

    return (
        <div>
            <ul>
                <li>
                    <SideBarBluePrimaryButton onClick={() => openBite()}>
                        <Typography variant="body1">
                            Today's Bite
                        </Typography>
                    </SideBarBluePrimaryButton>
                </li>
                {/* <li>
                    <SideBarBluePrimaryButton>
                        <Typography variant="body1">
                            Favorites
                        </Typography>
                    </SideBarBluePrimaryButton>
                </li> */}
                <li>
                    <SideBarBluePrimaryButton onClick={() => changeFilters('authors')}>
                        <Typography variant="body1">
                            Authors
                        </Typography>
                    </SideBarBluePrimaryButton>
                </li>
                <li>
                    <SideBarBluePrimaryButton onClick={() => changeFilters('books')}>
                        <Typography variant="body1">
                            Books
                        </Typography>
                    </SideBarBluePrimaryButton>
                </li>
                <li>
                    <SideBarBluePrimaryButton onClick={() => changeFilters('passages')}>
                        <Typography variant="body1">
                            Passages
                        </Typography>
                    </SideBarBluePrimaryButton>
                </li>
                <li>
                    <Link href="/library/timeperiods" >
                        <a>
                            <SideBarBluePrimaryButton>
                                <Typography variant="body1">
                                    Time Periods
                                </Typography>
                            </SideBarBluePrimaryButton>
                        </a>
                    </Link>
                </li>
            </ul>
        </div>
    )
}