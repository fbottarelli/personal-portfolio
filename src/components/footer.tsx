import React from "react";

export default function Footer() {
    return (
        <footer className="mb-10 mt-8 text-center text-gray-500">
            <small className="mb-2 block text-xs">
                &copy; 2023 Federico Bottarelli. All rights reserved.
            </small>
            <p className="text-xs">
                <span className="font-semibold">built</span>  with
                React & Next.js, TypeScript, Tailwind CSS,
                Framer Motion.
            </p>
        </footer>
    );
}