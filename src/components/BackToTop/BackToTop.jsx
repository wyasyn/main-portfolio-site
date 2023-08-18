import './BackToTop.scss'
import { useState, useEffect } from 'react'
import { FaArrowCircleUp } from 'react-icons/fa'

function BackToTop() {
    const [top, setTop] = useState(false)

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 100) {
                setTop(true)
            } else {
                setTop(false)
            }
        })
    }, [])
    const scrollUp = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }


  return (
    <>
    {
        top && (
            <button className='btn-top' onClick={scrollUp} >
                <FaArrowCircleUp />
            </button>
        )
    }
    </>
  )
}

export default BackToTop