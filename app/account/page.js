import { auth } from "../_lib/auth.js";

export const metadata = {
  title: "Account",
};

export default async function Page() {
  const session = await auth();
  const firstName = session?.user.name.split(" ")[0];

  return <h2 className="mb-7 text-2xl font-semibold text-accent-400">Welcome, {firstName}</h2>;
}
