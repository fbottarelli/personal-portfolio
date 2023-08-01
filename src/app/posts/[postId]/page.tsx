import React from 'react'
import { useRouter } from 'next/router'

export default function Page({ params }: { params: { postId: string } }) {
  return <div>My Post: {params.postId}</div>
}

