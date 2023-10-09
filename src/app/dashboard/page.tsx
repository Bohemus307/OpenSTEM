// `app/dashboard/page.tsx` is the UI for the `/dashboard` URL
"use client";
import { Amplify } from "aws-amplify";
import awsExports from "../../aws-exports";
import Authenticator from "./authenticator";
import "@aws-amplify/ui-react/styles.css";
import { useTheme, View } from "@aws-amplify/ui-react";
import SignInLogo from "src/ui/SignInLogo";

Amplify.configure({ ...awsExports, ssr: true });

const components = {
  Header() {
    const { tokens } = useTheme();

    return (
      <View textAlign="center" padding={tokens.space.large}>
        <SignInLogo />
      </View>
    );
  },
};

export default function Page() {
  return (
    <Authenticator hideSignUp components={components}>
      {({ signOut, user }) => (
        <main>
          <h1>Hello {user?.username}</h1>
          <button onClick={signOut}>Sign out</button>
        </main>
      )}
    </Authenticator>
  );
}
