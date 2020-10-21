import React from 'react'
import './index.css'

// components
import HorizontalScroll from '../HorizontalScroll'
import LatestBooks from '../LatestBooks'

export default function index() {
    return (
        <div className="Content">
            <HorizontalScroll/>
            <LatestBooks/>
        </div>
    )
}
