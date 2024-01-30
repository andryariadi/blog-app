import { handleGithubLogin, login } from "@/libs/database/actions/action";

export default async function LoginPage() {
  return (
    <>
      <div>
        <form action={handleGithubLogin}>
          <button>Login with Github</button>
        </form>
        <form action={login}>
          <input type="text" placeholder="username" name="username" />
          <input type="password" placeholder="password" name="password" />
          <button>Login with Credentials</button>
        </form>
      </div>
    </>
  );
}
