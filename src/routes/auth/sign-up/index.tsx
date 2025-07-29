import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/auth/sign-up/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div>
      Hello "/auth/sign-up/"!
      <Link to="/auth/sign-in">Sign In</Link>
    </div>
  );
}
