# Browser Extension Learning Ladder - Starter Repo

This repository serves as the starting point for the "Browser Extension" learning ladder. It provides a basic setup using **Vite**, **React**, and **TypeScript** to help you focus on implementing the logic and features defined in the ladder steps.

## Features You Will Build

Throughout this learning ladder, you will implement the following features:

-   **Time Tracking**: Calculate and log time spent on specific domains.
-   **Data Persistence**: Store tracking data locally using `chrome.storage`.
-   **Dashboard**: Visualize browsing habits with charts and graphs.
-   **Configuration**: Allow users to set daily time limits for websites.
-   **Blocking Mechanism**: Enforce limits by blocking access to sites when time runs out.
-   **Backend Sync**: Synchronize data with a Node.js/Express server.
-   **Authentication**: Secure user data with JWT-based auth.
-   **Smart Bookmarks**: Use AI to summarize and organize bookmarked pages.
-   **Cross-Device Sync**: Keep tracking data consistent across multiple devices.

## Project Structure

-   **`frontend/`**: Contains the Chrome Extension source code (React + Vite).
    -   **`public/manifest.json`**: The entry point for the Chrome Extension.
    -   **`vite.config.ts`**: Build configuration.
    -   **`src/`**: Source code for `popup`, `background`, and `content`.
-   **`api/`**: Contains the backend code (Node.js + Express).
    -   **`src/`**: Server source code.

## Getting Started

### Frontend (Extension)

1.  **Install Dependencies**:
    ```bash
    cd frontend
    npm install
    ```

2.  **Build the Extension**:
    ```bash
    npm run build
    ```
    This will generate the `frontend/dist/` folder.

3.  **Load into Chrome**:
    -   Open Chrome and navigate to `chrome://extensions/`.
    -   Enable **Developer mode**.
    -   Click **Load unpacked**.
    -   Select the `frontend/dist/` folder.

4.  **Development**:
    -   **UI Development**: Run `npm run dev` to start the Vite development server. This allows you to view and design the Popup UI (`src/popup/index.html`) in a regular browser tab with Hot Module Replacement (HMR).
    -   **Extension Development**: Run `npm run watch` to automatically rebuild the extension whenever you make changes. You will need to reload the extension in `chrome://extensions/` to see changes in the background script or content script.

### Backend (API)

1.  **Install Dependencies**:
    ```bash
    cd api
    npm install
    ```

2.  **Build the Server**:
    ```bash
    npm run build
    ```

3.  **Start the Server**:
    ```bash
    npm run dev
    ```

## Next Steps

Follow the steps outlined in your Learning Ladder to implement these features one by one.
