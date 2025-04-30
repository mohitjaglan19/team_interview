import { ReactNode } from "react";
<<<<<<< HEAD
import { redirect } from "next/navigation";

import { isAuthenticated } from "@/lib/actions/auth.action";

const AuthLayout = async ({ children }: { children: ReactNode }) => {
  const isUserAuthenticated = await isAuthenticated();
  if (isUserAuthenticated) redirect("/");
=======
// import { redirect } from "next/navigation";

// import { isAuthenticated } from "@/lib/actions/auth.action";

const AuthLayout =  ({ children }: { children: ReactNode }) => {
//   const isUserAuthenticated = await isAuthenticated();
//   if (isUserAuthenticated) redirect("/");
>>>>>>> 39684c2 (setup app, file and folder structure, routing and auth page)

  return <div className="auth-layout">{children}</div>;
};

export default AuthLayout;
