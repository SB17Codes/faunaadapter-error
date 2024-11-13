import Image from "next/image";
import { doSocialLogin } from "./(actions)";

export default function Home() {
  return (
    <div> 

        <form action={doSocialLogin} className="flex flex-col items-center space-y-4">
          <button
            type="submit"
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
          >
            Sign in with Google
          </button>
        </form>

    </div>
        );
}
