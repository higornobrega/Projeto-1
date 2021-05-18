import { PostCard } from "../PostCard";

export const Post = ({posts}) => (
    <div className="posts">
          {posts.map(post => (
            <PostCard 
              id = {post.id}
              cover={post.cover}
              title={post.title}
              key={post.id}
              body={post.body}
            />
          )
          )}
        </div>
)