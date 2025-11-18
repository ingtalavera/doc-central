import { requireAuth } from "@/lib/auth-utils";

interface PageProps {
  params: Promise<{ docId: string }>;
}

const Page = async ({ params }: PageProps) => {
  await requireAuth();

  const { docId } = await params;

  return <div>DocsId: {docId}</div>;
};

export default Page;
