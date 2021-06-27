import React, {Suspense} from 'react'
import useNearScreen from 'hooks/useNearScreen'
import Spinner from 'components/Spinner/Spinner'

const TrendingSearches = React.lazy(
    () => import('./TrendingSearches')
)

const LazyTrendings = () => {
    const {isNearScreen, fromRef} = useNearScreen({distance:"100px"})

    return <div ref={fromRef}>
        <Suspense fallback={<Spinner />}>
            {isNearScreen ? <TrendingSearches /> : <Spinner />}
        </Suspense>
    </div>
}

export default LazyTrendings
