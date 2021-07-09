import React, { useEffect } from 'react'

function Vote() {
    useEffect(() => {
        document.title = "Vote"
    })
    return (
        <main>
            <h1>Vote carefully</h1>
        </main>
    )
}

export default Vote