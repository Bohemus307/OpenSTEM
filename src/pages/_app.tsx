import { Amplify } from "aws-amplify";
import { Authenticator, Button, View, useAuthenticator, useTheme, Text } from "@aws-amplify/ui-react";
import type { AppProps } from "next/app";
import "../styles/globals.css";
import "@aws-amplify/ui-react/styles.css"; 

import Layout from "@components/Layout";

import SignInLogo from "@components/SignInLogo";
import awsExports from "../aws-exports";

Amplify.configure(awsExports);

const components = {
  Header() {
    const { tokens } = useTheme();

    return (
      <View textAlign="center" padding={tokens.space.xl}>
        <Text
          variation="primary"
          as="span"
          lineHeight="1em"
          fontWeight={700}
          fontSize="3em"
          fontStyle="normal"
          textDecoration="none"
          width="30vw"
        >
          Stem Hub
        </Text>
        <SignInLogo />
        <Text
          variation="primary"
          as="span"
          lineHeight="0.5em"
          fontWeight={700}
          fontSize="1em"
          fontStyle="italic"
          textDecoration="none"
          width="100vw"
        >
          Open Source Experimentation
        </Text>
      </View>
    );
  },

  Footer() {
    const { tokens } = useTheme();

    return (
      <View textAlign="center" padding={tokens.space.large}>
        <Text color={tokens.colors.neutral[80]}>
          &copy; All Rights Reserved
        </Text>
      </View>
    );
  },

  SignIn: {
    Footer() {
      const { toResetPassword } = useAuthenticator();

      return (
        <View textAlign="center">
          <Button
            fontWeight="normal"
            onClick={toResetPassword}
            size="small"
            variation="link"
          >
            Reset Password
          </Button>
        </View>
      );
    },
  },
};



const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <Authenticator hideSignUp components={components}>
      {() => (
        <Layout>
            <Component {...pageProps} />
        </Layout>
      )}
    </Authenticator>
  );
};

export default MyApp;
