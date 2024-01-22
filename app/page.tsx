"use client";

import { getUserData } from "@/handlers/util";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    // If you plan to use images, definitely default to googling how to use NextJS's image component (it sucks kind of).
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
        This is an example NextJS application.
      </div>
      <Link href="/teams">This goes to the teams page</Link>
      <Link href="/admin-page">
        This goes to the admin page inside of a route group.
      </Link>
      <Link href="/protected">
        This goes to the admin page inside of a route group that is protected.
      </Link>
      <button
        onClick={() => {
          getUserData("testVal");
        }}
        // The practice you're referring to is known as "function binding" or "function invocation."
        // In the code snippet you provided, an arrow function is created inline and passed as the onClick handler. This is a way to wrap the getUserData
        // function call within an arrow function and then pass that function as the handler to onClick.
        // This approach is often used when you want to pass additional arguments to the function being invoked. In
        // this case, "testVal" is passed as an argument to getUserData when the onClick event occurs. It allows you to customize the function call based on the specific context or parameters you want to include.
        // In contrast, if you were to directly pass the getUserData function to onClick without wrapping it in an arrow
        // function, it would be invoked immediately when the component renders, rather than waiting for the onClick event.
      >
        Get user data
      </button>
    </main>
  );
}
