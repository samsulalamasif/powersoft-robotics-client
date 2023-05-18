import { useEffect } from "react"

const useTitle = (title) => {
    useEffect(() => {
        document.title = `Powersoft Robotics - ${title}`

    }, [title])
}

export default useTitle