import { singInAction } from "../_lib/actions.js";

function SignInButton() {
  return (
    <form action={singInAction}>
      <button className="flex items-center gap-6 border border-primary-300 px-10 py-4 text-lg font-medium">
        <img src="https://authjs.dev/img/providers/google.svg" alt="Google logo" height="24" width="24" />
        <span>Continue with Google</span>
      </button>
    </form>
  );
}

export default SignInButton;
