# Medusa 2.0 chat widget plugin - Demo app

A demo Medusa 2.0 app with [@connectycube/chat-widget-medusa-plugin](https://github.com/ConnectyCube/chat-widget-medusa-plugin) integrated 

## How to run 

1. Create ConnectyCube account [https://connectycube.com/signup](https://connectycube.com/signup/) and application, obtain credentials:

<img width="800" alt="Screenshot 2025-05-07 at 15 19 59" src="https://github.com/user-attachments/assets/77995af3-eb65-4559-8939-e3cc36104862" />

and fill it in `core-app/.env` and `storefront/.env` (use `.env.template` files as for the basis)

Also, go to **Chat -> Custom Fields** and create a new custom field called `externalId`:

<img width="1512" alt="Screenshot 2025-07-02 at 12 24 35" src="https://github.com/user-attachments/assets/cf2182e5-7080-4a59-9973-d9c3697bebda" />

2. Run the dependant services via `docker compose up`
3. Run core medusa app

  ```
  cd core-app
  yarn

  cp .env.template .env
  # set VITE_CHAT_APP_ID and VITE_CHAT_AUTH_KEY envs in .env file
  npx medusa db:setup --db medusa-chat-widget-plugin
  npx medusa db:migrate

  # create test user
  npx medusa user --email user@test.com --password testtest

  yarn dev
  ```

  Now open http://localhost:9000/app and login with your test user. Navigate to `Extensions -> Chat` to open a chat page:

  <img width="800" alt="Screenshot 2025-05-08 at 12 49 18" src="https://github.com/user-attachments/assets/9b9bb61e-7ca2-447a-8ccc-fb8cf92933f2" />

  For a storefront to configure you will need your Store Id and Store name. You can access them via Developers Tools, Network tab:

<img width="1512" alt="Screenshot 2025-05-08 at 12 33 02" src="https://github.com/user-attachments/assets/abe629a9-20ca-475b-9358-c403f9558514" />

4. Create test data in Dashboard:

   - create Publishable API Key on `Settings -> Publishable API Keys` page and attach Default Sales Channel to it
   - create region on `Settings -> Regions` page
   - create some products

4. Run storefront

  ```
  cd storefront
  yarn

  cp .env.template .env.local
  # Set NEXT_PUBLIC_CHAT_APP_ID, NEXT_PUBLIC_CHAT_AUTH_KEY, NEXT_PUBLIC_STORE_ID, NEXT_PUBLIC_STORE_NAME envs.
  # Also, specify valid NEXT_PUBLIC_MEDUSA_PUBLISHABLE_KEY which you can get in Medusa Dashboard -> Settings -> Publishable API Keys

  yarn dev # or corepack yarn dev
  ```

  Now open http://localhost:8000, sign in, go to Stores page, select some product and open a Widget

## How can I use it?

On storefront, once logged in and opened product page, there will be a Chat toggle button bottom right:

<img width="1094" alt="Screenshot 2025-05-07 at 16 35 22" src="https://github.com/user-attachments/assets/af6acca9-6619-4d9f-b33a-ba9ccafcc03c" />

Once clicked, a chat with seller will be opened where you can ask any product's related questions:

<img width="1511" alt="Screenshot 2025-05-07 at 16 39 20" src="https://github.com/user-attachments/assets/17f613fc-0467-41f6-a333-c14d08d54f40" />

From Medusa dashboard there will be a new page called Chat, with the widget embedded, where all customers' chats are displayed, so you as a merchant can reply:

<img width="1509" alt="Screenshot 2025-05-07 at 16 38 13" src="https://github.com/user-attachments/assets/13cefe90-216b-46bb-94b3-ac754df4de74" />

## Have an issue?

Join our [Discord](https://discord.com/invite/zqbBWNCCFJ) community to get real-time help from our team

## Community

- [Blog](https://connectycube.com/blog)
- X (twitter)[@ConnectyCube](https://x.com/ConnectyCube)
- [Facebook](https://www.facebook.com/ConnectyCube)
- [Medium](https://medium.com/@connectycube)
- [Youtube](https://www.youtube.com/@ConnectyCube)

**Want to support our team**:<br>
<a href="https://www.buymeacoffee.com/connectycube" target="_blank"><img src="https://cdn.buymeacoffee.com/buttons/v2/default-blue.png" alt="Buy Me A Coffee" style="height: 60px !important;width: 217px !important;" ></a>

## License

MIT

