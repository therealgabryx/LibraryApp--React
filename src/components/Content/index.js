import React from 'react'
import './index.css'

// components
import HorizontalScroll from '../HorizontalScroll'
import Section from '../Section'

export default function index() {
    return (
        <div className="Content">
            <HorizontalScroll/>
            <Section/>
        </div>
    )
}
