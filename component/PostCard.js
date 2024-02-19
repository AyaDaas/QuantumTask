import { useState } from 'react';
import Link from 'next/link';
import { Dialog } from '@headlessui/react';

export default function PostCard({ users, posts, comments }) {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedPostComments, setSelectedPostComments] = useState([]);

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
                                            <button onClick={() => openDialog(post.id)} className="text-xs text-gray-500 cursor-pointer flex  items-center">
                                                <svg width='15' fill='gray' className='text-sm mr-1 text-gray-500' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                                    <path d="M123.6 391.3c12.9-9.4 29.6-11.8 44.6-6.4c26.5 9.6 56.2 15.1 87.8 15.1c124.7 0 208-80.5 208-160s-83.3-160-208-160S48 160.5 48 240c0 32 12.4 62.8 35.7 89.2c8.6 9.7 12.8 22.5 11.8 35.5c-1.4 18.1-5.7 34.7-11.3 49.4c17-7.9 31.1-16.7 39.4-22.7zM21.2 431.9c1.8-2.7 3.5-5.4 5.1-8.1c10-16.6 19.5-38.4 21.4-62.9C17.7 326.8 0 285.1 0 240C0 125.1 114.6 32 256 32s256 93.1 256 208s-114.6 208-256 208c-37.1 0-72.3-6.4-104.1-17.9c-11.9 8.7-31.3 20.6-54.3 30.6c-15.1 6.6-32.3 12.6-50.1 16.1c-.8 .2-1.6 .3-2.4 .5c-4.4 .8-8.7 1.5-13.2 1.9c-.2 0-.5 .1-.7 .1c-5.1 .5-10.2 .8-15.3 .8c-6.5 0-12.3-3.9-14.8-9.9c-2.5-6-1.1-12.8 3.4-17.4c-2.5-6-5.1-11.8-7.9-17.4c-2.8-5.7-5.8-11.1-8.8-16.2c-2.7-4.6-6.8-10.6-12.4-17.6c-.3-.4-.5-.9-.8-1.3z" />
                                                </svg>
                                                <span>Comments</span>
                                            </button>

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
