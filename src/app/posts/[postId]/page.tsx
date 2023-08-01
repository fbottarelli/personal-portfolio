import React from 'react'

export default function Page({ params }: { params: { postId: string } }) {
  return <div>My Post: {params.postId}</div>
}

