import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="grid place-items-center min-h-dvh ">
      <nav className="flex items-center gap-5">
        <Link className="hover:underline" to="/auth">
          Auth
        </Link>
        <Link className="hover:underline" to="/posts">
          Posts
        </Link>
      </nav>
    </div>
  );
}
