import { ArrowRightOnRectangleIcon } from "@heroicons/react/24/solid";
import { singOutAction } from "../_lib/actions.js";

function SignOutButton() {
  return (
    <form action={singOutAction}>
      <button className="flex w-full items-center gap-4 px-5 py-3 font-semibold text-primary-200 transition-colors hover:bg-primary-900 hover:text-primary-100">
        <ArrowRightOnRectangleIcon className="size-5 text-primary-600" />
        <span>Sign out</span>
      </button>
    </form>
  );
}

export default SignOutButton;
