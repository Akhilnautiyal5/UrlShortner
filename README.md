# URL Shortener

This is a URL shortener project that allows users to shorten URLs, access the original URL via a shortened version, and track the total number of visits to the shortened URL.

## Overview

This project provides a simple service for shortening long URLs. It generates a unique short ID for each URL, which is then used to redirect users to the original URL. The application also tracks the number of clicks (visits) each short URL receives.

## Functionality

- **Generate Short URL:** Takes a valid URL and returns a shortened version.
- **Redirect:** When a user accesses the shortened URL, they are redirected to the original URL.
- **Analytics:** The number of visits (clicks) to the short URL are tracked.

## Routes

The following routes are available:

- **`POST /url`** - Generates a new shortened URL.
    - **Request Body:**
      - `url`: The original URL to shorten (required).
    - **Response:** Returns the shortened URL (e.g., `example.com/random-id`).

- **`GET /:shortId`** - Redirects the user to the original URL based on the short ID.
    - **URL Parameter:**
      - `shortId`: The short URL ID (e.g., `random-id`).
    - **Response:** Redirects to the original URL.

- **`GET /url/analytics/:id`** - Returns the number of clicks/visits for a specific short URL.
    - **URL Parameter:**
      - `id`: The short URL ID (e.g., `random-id`).
    - **Response:** Returns the number of visits in JSON format.

## Technologies Used

- **Node.js**: JavaScript runtime for server-side logic.
- **Express**: Web framework for Node.js to handle routing.
- **MongoDB**: NoSQL database to store URLs and track visits.
- **TailwindCSS**: For styling the front-end (optional, if used in the project).
- **shortid**: Generates short and unique URL IDs.

## Setup

To run this project locally, follow the steps below:

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/your-username/url-shortener.git
   cd url-shortener
   ```

2. **Install Dependencies:**
   Make sure you have `Node.js` and `npm` installed. Then run:
   ```bash
   npm install
   ```

3. **Set up MongoDB:**
   Ensure you have MongoDB installed and running, or use a cloud service like [MongoDB Atlas](https://www.mongodb.com/cloud/atlas).

4. **Environment Variables:**
   Set up a `.env` file with the following environment variables:
   ```bash
   MONGO_URI=your_mongodb_connection_string
   PORT=3000
   ```

5. **Run the Application:**
   ```bash
   npm start
   ```

6. **Access the Application:**
   Visit `http://localhost:3000` in your browser to access the URL Shortener.

## Usage

1. **Shorten a URL:**
   - Visit `http://localhost:3000` and enter a valid URL in the input box.
   - Click **"Shorten URL"**, and a shortened URL will be generated.

2. **Redirect Using Short URL:**
   - Click on the shortened URL to be redirected to the original URL.

3. **View Analytics:**
   - Use the `/url/analytics/:id` route to view the number of visits for any shortened URL by accessing `http://localhost:3000/url/analytics/:id`.

4. **Delete a Short URL:**
   - Implemented on the front-end, the delete functionality allows users to remove a short URL by clicking the **Delete** button next to the shortened URL.