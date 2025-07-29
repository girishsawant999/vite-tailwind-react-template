import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/posts/")({
  component: RouteComponent,
});

function RouteComponent() {
  return <div className="text-3xl font-bold underline">Hello "/posts/"!</div>;
}
