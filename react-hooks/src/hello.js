import React, {useEffect} from 'react'

export const Hello = () => {
    useEffect(()=> {
        console.log('rendered')
        return() => {
          console.log("unmount")
        }
      }, [])
    return <div>Hello</div>
}
