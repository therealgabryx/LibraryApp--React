import React from 'react'
import './index.css'

import { useSelector } from 'react-redux'

// components
import HorizontalScroll from '../HorizontalScroll'
import LatestBooks from '../LatestBooks'

export default function Index() {
    const sliderBooks = useSelector(store => store.sliderBooks)
    const latestBooks = useSelector(store => store.latestBooks)

    return (
        <div className="Content">
            <HorizontalScroll books={ sliderBooks.books }/>
            <LatestBooks books={ latestBooks.books }/>
        </div> 
    )
}
