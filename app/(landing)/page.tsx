import { Button } from "@/components/ui/button";
import { UserButton } from "@clerk/nextjs";
import Link from "next/link";

export default function LandingPage() {
  return (
    <main>
      <p>lets get started</p>
      <Button asChild>
        <Link href="/sign-in">Sign In</Link>
      </Button>
      <Button asChild variant="outline">
        <Link href="/sign-up">Sign Up</Link>
      </Button>
    </main>
  );
}
