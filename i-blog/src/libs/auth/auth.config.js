export const authConfig = {
  pages: {
    signIn: "/login",
  },
  providers: [],
  callbacks: {
    authorized({ auth, request }) {
      console.log(auth, "<-----diauthconfig");
      return true;
    },
  },
};
