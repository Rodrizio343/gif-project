import {useState, useEffect, useRef} from 'react'

function useNearScreen ({distance = "100px", externalRef, once = true} = {}) {
    const [isNearScreen, setShow] = useState(false)
    const fromRef = useRef()

    useEffect(() => {
        const element = externalRef ? externalRef.current : fromRef.current
        const onChange = (entries, observer) => {
            const el = entries[0]
            if(el.isIntersecting){
                setShow(true)
                once && observer.disconnect()
            } else {
                !once && setShow(false)
            }
        }
       const observer = new IntersectionObserver(onChange, {
           rootMargin: distance
       })
       if (element) observer.observe(element)

       return () => observer.disconnect()
    })
    return {isNearScreen, fromRef}
}

export default useNearScreen