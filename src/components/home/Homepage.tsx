import * as React from 'react';
import { useEffect, useState, ReactNode } from 'react';
type HomePageProps = {
    message?: string,
    children?: ReactNode
}
const HomePage = ({ message, children }: HomePageProps) => {
    const [updateMessage, setUpdateMessage] = useState(message)
    useEffect(() => {
        setUpdateMessage(`${updateMessage ? updateMessage : ''}-update`)
    }, [])

    return (
        <>
            <h1>{updateMessage}</h1>
            {children}
        </>
    )
}

export default HomePage;