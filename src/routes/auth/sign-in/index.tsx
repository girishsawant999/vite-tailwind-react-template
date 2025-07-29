import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/auth/sign-in/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div>
      Hello "/auth/sign-in/"!
      <Link to="/auth/sign-up">Sign Up</Link>
    </div>
  );
}
