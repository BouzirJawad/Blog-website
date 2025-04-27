import React from 'react'
import ArtclDtlCrd from '../components/ArtclDtlCrd'
import { useParams } from 'react-router-dom'

function ArticleDetails() {
    const { articleId } = useParams()
  return (
    <div className='flex flex-col'>
        <ArtclDtlCrd articleId={articleId} />
    </div>
  )
}

export default ArticleDetails