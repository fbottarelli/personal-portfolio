"use client"

import { FormEvent } from 'react'

export default function Page() {
    async function onSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault()

        const formData = new FormData(event.currentTarget)
        const response = await fetch('/api/submit', {
            method: 'POST',
            body: formData,
        })

        // Handle response if necessary
        const data = await response.json()
        // ...
    }

    return (
        <div className="central-column">
        <form onSubmit={onSubmit}>
            <div>
                <label>Name</label>
                <input type="text" name="name" />
            </div>
            <div>
                <label>Email</label>
                <input type="text" name="email" />
            </div>
            <div>
                <label>Message</label>
                <textarea name="message"></textarea>
            </div>
            <button type="submit">Submit</button>
        </form>
        </div >
    )
}