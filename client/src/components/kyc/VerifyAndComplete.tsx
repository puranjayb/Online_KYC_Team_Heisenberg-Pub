import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Player } from "@lottiefiles/react-lottie-player";

export default function VerifyAndComplete() {
  return (
    <div className="flex flex-col justify-center items-center my-20">
      <Player
        src="https://lottie.host/be80b83b-a760-406a-a878-5f3a4fc56d90/b8XPSjnqBM.json"
        className="player w-[200px] h-[200px]"
        loop
        autoplay
      />
      <h2 className="text-2xl font-bold mb-2">KYC Process Completed!</h2>
      <p className="text-md">Congrats your KYC Process has been completed.</p>
      <p className="text-md">
        Your KYC Status will be updated after inspection.
      </p>
      <Button asChild className="mt-6">
        <Link href="/dashboard">Return to Dashboard</Link>
      </Button>
    </div>
  );
}
