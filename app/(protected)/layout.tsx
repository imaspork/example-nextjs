"use client";

import { RedirectToSignUp, SignedIn, SignedOut } from "@clerk/nextjs";
import React from "react";

export default function CreateLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section style={{ position: "relative", paddingTop: "64px" }}>
      {/* comment out children when you add auth to the application */}
      {children}
      {/* uncomment code below for when auth is installed */}
      {/* <SignedIn>{children}</SignedIn>
      <SignedOut>
        <RedirectToSignUp />
      </SignedOut> */}
    </section>
  );
}
// Clerk provides this as a way to handle user auth locations. If a user is signed in, they are provided with the children components. If they are not signed in, they are redirected to a sign in route.
// This works well for blocking off any route that you would like to be sign in only.
// Clerk documentation is not the best, and I have seen some SSO-callback errors in my implementation. This may be limited to me, but keep this in mind.

// A layout folder can be created in any route folder. It is a default component/scss/function that will wrap all children. For example when we do auth, we wrap the entire
// app in a provider component to ensure we have auth data/handling in all components/routes.

// Same approach for styling based on routes. If you have a bunch of routes you want to make under /user/,  we can use a layout file to style them all the same, or have the same component render for both routes.
