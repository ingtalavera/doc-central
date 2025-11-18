import { Button } from "@/components/ui/button";
import { requireAuth } from "@/lib/auth-utils";
import { caller } from "@/trpc/server";
import { LogoutButton } from "./logout";

export default async function Home() {
  await requireAuth();

  const data = await caller.getUsers();

  return (
    <div className="min-h-screen min-w-screen flex items-center justify-center flex-col gap-6">
      Protected server component
      <pre>{JSON.stringify(data, null, 2)}</pre>
      <LogoutButton />
    </div>
  );
}
