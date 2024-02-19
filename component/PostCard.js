import { useState } from 'react';
import Link from 'next/link';
import { Dialog } from '@headlessui/react';

export default function PostCard({ users, posts, comments }) {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedPostComments, setSelectedPostComments] = useState([]);
    const [selectedPostId, setSelectedPostId] = useState(null);

    const userMap = new Map(users.map(user => [user.id, user]));
    const commentMap = new Map();
    comments.forEach(comment => {
        if (!commentMap.has(comment.postId)) {
            commentMap.set(comment.postId, []);
        }
        commentMap.get(comment.postId).push(comment);
    });

    const openDialog = (postId) => {
        setSelectedPostComments(commentMap.get(postId) || []);
        setIsOpen(true);
    };

    return (
        <div>
            {posts && posts.map((post) => (
                <div key={post.id}>
                    {userMap.has(post.userId) && (
                        <div className="mb-4   md:mb-5 md:grid-cols-2 bg-white dark:bg-gray-800">
                            <figure className="flex border rounded-md   border-gray-200  flex-col items-start justify-start p-8 text-start bg-white      dark:bg-gray-800 dark:border-gray-700">
                                <figcaption className="flex items-start justify-start">
                                    <img
                                        className="rounded-full w-9 h-9"
                                        src="https://media.istockphoto.com/id/1397556857/vector/avatar-13.jpg?s=612x612&w=0&k=20&c=n4kOY_OEVVIMkiCNOnFbCxM0yQBiKVea-ylQG62JErI="
                                        alt="profile picture"
                                    />
                                    <div className="space-y-0.5 font-medium dark:text-white text-left rtl:text-right ms-3">
                                        <div>
                                            <Link className="hover:text-sky-500 text-sky-700" href={`/profile/${post.userId}`}>
                                                {userMap.get(post.userId).name}
                                            </Link>
                                        </div>
                                        <div className="text-xs text-gray-500 dark:text-gray-400">
                                            {post.title}
                                        </div>
                                        <br />
                                        <p className="text-black dark:text-gray-400">{post.body}</p>
                                        <br />
                                        <div className="flex justify-end">
                                            <button onClick={() => openDialog(post.id)} className="text-xs text-gray-500 cursor-pointer">Comments</button>
                                        </div>
                                    </div>
                                </figcaption>
                            </figure>
                        </div>
                    )}
                </div>
            ))}
            <div className='' >
                {isOpen && (
                    <div className="fixed z-10 inset-0 overflow-y-auto py-5">
                        <div className="flex items-center justify-center min-h-screen">
                            <div className="fixed inset-0 transition-opacity" aria-hidden="true">
                                <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
                            </div>
                            <div className="relative bg-white rounded-lg max-w-xl mx-auto p-8">
                                <div className='flex justify-between items-center mb-4'>
                                    <h2 className="text-lg font-bold">Comments</h2>
                                    <div className="flex items-center">
                                        <svg onClick={() => setIsOpen(false)} className="w-4 h-4 text-gray-500 cursor-pointer" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" /></svg>
                                    </div>
                                </div>
                                {selectedPostComments.map(comment => (
                                    <div className="mb-4     md:grid-cols-2 bg-white dark:bg-gray-800">
                                        <figure className="flex  border rounded-md   border-gray-200  flex-col items-start justify-start p-8 text-start bg-white  border-gray-200    dark:bg-gray-800 dark:border-gray-700">
                                            <figcaption className="flex items-start justify-start">
                                                <img
                                                    className="rounded-full w-9 h-9"
                                                    src="https://media.istockphoto.com/id/1397556857/vector/avatar-13.jpg?s=612x612&w=0&k=20&c=n4kOY_OEVVIMkiCNOnFbCxM0yQBiKVea-ylQG62JErI="
                                                    alt="profile picture"
                                                />
                                                <div className="space-y-0.5 font-medium dark:text-white text-left rtl:text-right ms-3">
                                                    <div key={comment.id} className="mb-4">
                                                        <div>
                                                            <div className="hover:text-sky-500 text-sky-700" >  {comment.name}</div>
                                                            <div className="text-xs text-gray-500 dark:text-gray-400">
                                                                {comment.email}
                                                            </div>
                                                            <p className="text-black dark:text-gray-400">{comment.body}</p>

                                                        </div>
                                                    </div>
                                                </div>
                                            </figcaption>
                                        </figure>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                )}

            </div>

        </div>
    );
}
