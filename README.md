
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

These rules maintain the essential requirements and structure while making them more concise.