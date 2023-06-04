import React from 'react'

export default function Tasks({ task }) {
    return (
        <div style={{ border: 'solid black 1px', marginTop: '20px' }}>
            name:{task.name}<br />
            desc:{task.desc}
        </div>
    )
}
