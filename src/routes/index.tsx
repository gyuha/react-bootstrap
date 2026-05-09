import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/')({
  component: IndexPage,
});

function IndexPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-background text-foreground">
      <div className="rounded-lg border border-border bg-card p-6 text-card-foreground shadow-sm">
        <h1 className="text-2xl font-semibold tracking-tight">Tailwind v4 OK</h1>
        <p className="mt-2 text-sm text-muted-foreground">Inter Variable / oklch 토큰 동작</p>
      </div>
    </main>
  );
}
