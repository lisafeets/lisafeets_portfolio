import PostTitle from '../components/post-title'

export default function PostHeader({ title }) {
  return (
    <div className="max-w-4xl mx-auto bg-white">
      <PostTitle>{title}</PostTitle>
    </div>
  )
}
