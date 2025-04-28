import React from 'react'
import ArtclDtlCrd from '../components/ArtclDtlCrd'
import { useParams } from 'react-router-dom'
import CommentSection from "../components/CommentSection"

function ArticleDetails() {
    const { articleId } = useParams()
  return (
    <div className='flex flex-col gap-5'>
        <ArtclDtlCrd articleId={articleId} />
        <CommentSection />
    </div>
  )
}

export default ArticleDetails