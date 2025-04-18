# Ceavex - Front-end

This repository represents front-end code part for discord admin panel, which main goal is to make management of bots easy and flawless.
Website is aiemed to simplify communication between user and great functionality, making things easy.

### Component Hierarchy

1. **Component Folder**

   - **Main Rule:** Every component should have its own folder.
   - **Exception:** App router components (e.g., `loading.tsx`, `error.tsx`, `layout.tsx`) are placed in the same folder as `page.tsx`.

2. **Naming**

   - Component files must start with an uppercase letter.
   - If it's an app route directory (i.e., a folder for a page), its name can start with a lowercase letter.

3. **Main Export**

   - The main component export should be located in `index.tsx` or `page.tsx` (as well as other special app router files).

4. **Component Folder Structure**

   - Typical files in a component folder include: `index.tsx`, `server.tsx`, `client.tsx`, `UI.tsx`.
   - **index.tsx:** Contains the main default export. It should not directly contain any UI unless the component is purely UI without any logic.

5. **Separation of Logic and UI**

   - **server.tsx:** Contains components with logic that run on the server (without UI).
   - **client.tsx:** Contains components with logic that run on the client (without UI).
   - **UI.tsx:** Contains components that are purely UI (without any logic) and run on the server.

6. **Nested Components**
   - A component may contain other (derived) components within its folder.

---

# Authorization Process

The authorization flow is implemented using the Discord API and server-side endpoints in a Next.js application. The process consists of the following steps:

1. **User Authentication:**  
   The user is redirected to a static Discord URL (stored in the environment variable `NEXT_PUBLIC_DISCORD_AUTH_URL` and accessible via `process.env.NEXT_PUBLIC_DISCORD_AUTH_URL`) where they enter their credentials.

2. **Redirection with Code:**  
   After successful authentication, Discord redirects the user to the `/callback` page with a `code` query parameter.  
   **Example:**  
   `http://localhost:3000/callback?code=somecodegenerated`

3. **Access Token Retrieval:**  
   The Next.js server sends a request to the Discord API with the provided `code` to obtain an `access_token`.

4. **JWT Generation:**  
   The server then uses the `access_token` to request a JWT (JSON Web Token) from another server endpoint.

5. **Final Redirection:**  
   The user is redirected from `/callback` to `/main/dashboard` with the JWT set as a cookie (with a max age of 30 days).

---

## Server-Side Implementation Details

Steps 3–5 are handled on the server side using Next.js API routes. The following functions illustrate the process:

### `GET` Function

```typescript
function GET(req: NextRequest): NextResponse<unknown>;
```

- **Purpose:**  
  Processes the incoming request and performs the following:
  1. Passes the request to the `getCookies` function.
  2. If `getCookies` returns a JWT, redirects the user to `/main/dashboard` with the JWT set as a cookie.

### `getCookies` Function

```typescript
function getCookies(req: NextRequest): Promise<string>;
```

- **Purpose:**  
  Extracts the `code` parameter from the request:

  1. If no `code` is found, an exception is thrown.
  2. If the `code` exists, the function returns the result of:

     ```typescript
     return pipe(params.get('code') as string, generateBody, getToken, getJwt);
     ```

  This chain of functions processes the `code` sequentially:

  - **`generateBody`**
  - **`getToken`**
  - **`getJwt`**

### `getToken` Function

```typescript
async function getToken(body: string): Promise<string>;
```

- **Purpose:**  
  Calls the `getTokenQuery` function to send a request to the Discord API and retrieve the `access_token`.

### `getJwt` Function

```typescript
async function getJwt(token: Promise<string>): Promise<string>;
```

- **Purpose:**  
  Uses the `access_token` to call `getUserHeaders`, which sends a request to the server. The server responds with a `set-cookie` header containing the JWT token, and this token is then returned.

---

## Dashboard Page (`/main/dashboard`)

- **Guild Cards Display:**  
  On this page, users will see a list of guild cards representing Discord servers.

  - **Accessible Guilds:** If a guild is accessible for management (i.e., the user has admin rights), its card is displayed using its normal color.
  - **Inaccessible Guilds:** If the guild is not accessible, the card is styled differently to indicate its inaccessibility.

- **Guild Card Interaction:**  
  Clicking on any guild card will redirect the user to a dynamic route:
  ```
  /main/manage-server/[server]
  ```
  Here, `[server]` represents a dynamic segment that is used to construct the request URI.

---

## Manage Server Page (`/main/manage-server/[server]`)

- **Dynamic Content Loading:**  
  When a guild card is clicked, the application fetches server-specific settings using an API call. For example:

  ```
  http://localhost:4000/api/get-server-settings/server-name
  ```

  This call returns a deeply nested object that defines:

  - The components to be rendered.
  - Default texts and placeholders.
  - Other configuration details.

- **Rendering System:**  
   The page uses a complex rendering system inspired by React's reconciler algorithms. This system was designed to:

  - Allow the alignment and configuration of settings options without the need for rewriting or modifying frontend code.
  - Enable the addition or removal of settings options and the adjustment of component alignment easily.
  - **Change Monitoring:**  
    While changes are being made:
  - Navigation away from the page is disabled.
  - Users are required to save their changes before proceeding to another page.
  - **TypeScript and components description:**

- ```typescript
  type ElemSelectSchema = {
  	type: 'Select';
  	name: string;
  	name: string;
  	defaultOption: string;
  	options: string[];
  };

  type ElemCheckboxSchema = {
  	type: 'Checkbox';
  	isCheckedByDefault: boolean;
  	name: string;
  };     

  type ElemDefaultTextInputShema = {
  	type: 'DefTextInput';
  	name: string;
  	placeholder: string;
  	defaultText: string;
  };

  type ElemExtandableTextInputSchema = {
  	type: 'ExtandableTextInput';
  	name: string;
  	placeholder: string;
  	defaultText: string;
  };

  type ElemFileInputSchema = {
  	type: 'FileInput';
  	name: string;
  };

  type allElementsSchema =
  	| ElemSelectSchema
  	| ElemCheckboxSchema
  	| ElemDefaultTextInputShema
  	| ElemExtandableTextInputSchema
  	| ElemFileInputSchema;

  type ContainerCol2Schema = {
  	type: 'Container2';
  	children: allElementsSchema | allElementsSchema[];
  };

  type AnyContent = allElementsSchema | ContainerCol2Schema;

  type DefContainerSchema = {
  	type: 'DefaultContainer';
  	name: string;
  	isSwitchable: boolean;
  	children: AnyContent | AnyContent[];
  };

  type SectionSchema = {
  	name: string;
  	children: DefContainerSchema | DefContainerSchema[];
  };
  ```

## State Management and Form Interaction

- **Jotai Atoms:**
  The result of the API request is stored in Jotai atoms. These atoms serve as the source of truth for the settings object.
- The nested object remains constant on the frontend.
- Specific parts of this object are editable via form inputs, each bound to separate Jotai atoms.

---

```

```
