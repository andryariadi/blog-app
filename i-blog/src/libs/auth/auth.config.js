export const authConfig = {
  pages: {
    signIn: "/login",
  },
  providers: [],
  callbacks: {
    async jwt({ token, user }) {
      console.log({ token, user }, "<-----diauthconfig");
      if (user) {
        token.id = user.id;
        token.isAdmin = user.isAdmin;
      }
      return token;
    },
    async session({ session, token }) {
      console.log({ session, token }, "<-----diauthconfig");
      if (token) {
        session.user.id = token.id;
        session.user.isAdmin = token.isAdmin;
      }
      return session;
    },
    authorized({ auth, request }) {
      const user = auth?.user;

      const isOnLoginPage = request.nextUrl.pathname === "/login";
      const isOnAdminPage = request.nextUrl.pathname.startsWith("/admin");
      const isOnBlogsPage = request.nextUrl.pathname.startsWith("/blog");

      // ONLY ADMIN CAN REACH THE ADMIN DASHBOAR
      if (isOnAdminPage && !user?.isAdmin) {
        return false;
      }

      // ONLY AUTHENTICATED USERS CAN REACH THE BLOG PAGE
      if (isOnBlogsPage && !user) {
        return false;
      }

      // ONLY UNAUTHENTICATED USERS CAN REACH THE LOGIN PAGE
      if (isOnLoginPage && user) {
        return Response.redirect(new URL("/", request.nextUrl));
      }

      return true;
    },
  },
};
