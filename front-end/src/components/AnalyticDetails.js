import React from 'react'

export default ({match}) => (
    <div>
        <h1>Analytic Details Page</h1>
        <p>The analytic ID is: {match.params.id}</p>
    </div>
)