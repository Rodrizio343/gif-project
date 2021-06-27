import React, { useEffect, useState } from 'react'
import getTrendings from 'services/getTrendings'
import Category from "components/Category/Category"

const TrendingSearches = () => {
    const [trends, setTrends] = useState([])
    useEffect(() => {
        getTrendings()
        .then(setTrends)
    }, [])
    return <Category name="Tendencias" options={trends}/>
}

export default TrendingSearches