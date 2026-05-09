import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/')({
  component: IndexPage,
});

function IndexPage() {
  return (
    <main className="p-8">
      <h1 className="text-2xl font-semibold">Vite bootstrap online</h1>
    </main>
  );
}
