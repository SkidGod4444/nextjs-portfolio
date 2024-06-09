"use client";
import { useRouter } from 'next/navigation';

const Blog = () => {
    const router = useRouter();

    // Perform the redirect
    router.push('/blogs');
    return null;
}

export default Blog;
