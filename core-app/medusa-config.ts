import { loadEnv, defineConfig } from "@medusajs/framework/utils";

loadEnv(process.env.NODE_ENV || "development", process.cwd());

module.exports = defineConfig({
  projectConfig: {
    databaseUrl: process.env.DATABASE_URL,
    http: {
      storeCors: process.env.STORE_CORS!,
      adminCors: process.env.ADMIN_CORS!,
      authCors: process.env.AUTH_CORS!,
      jwtSecret: process.env.JWT_SECRET || "supersecret",
      cookieSecret: process.env.COOKIE_SECRET || "supersecret",
    },
  },
  admin: {
    vite: (config) => {
      config.define["__VITE_CHAT_APP_ID__"] = JSON.stringify(
        process.env.VITE_CHAT_APP_ID
      );
      config.define["__VITE_CHAT_AUTH_KEY__"] = JSON.stringify(
        process.env.VITE_CHAT_AUTH_KEY
      );
      return {
        optimizeDeps: {
          include: [
            "qs",
            "eventemitter3",
            "@xmpp/iq/callee",
            "@xmpp/resolve",
            "@xmpp/session-establishment",
            "@xmpp/client-core",
            "@xmpp/sasl-plain",
            "@xmpp/stream-features",
            "@xmpp/resource-binding",
            "@xmpp/reconnect",
            "@xmpp/middleware",
            "@xmpp/sasl-anonymous",
            "@xmpp/websocket",
            "@xmpp/iq/caller",
            "@xmpp/sasl",
          ], // Will be merged with config that we use to run and build the dashboard.
        },
      };
    },
  },
  plugins: [
    {
      resolve: "@connectycube/chat-widget-medusa-plugin",
      options: {},
    },
  ],
});
