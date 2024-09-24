# Social Morph - AI Social Media Content Generator

Save time and money with **Social Morph**, the ultimate AI social media marketing tool. Grow your social media presence with on-brand messaging and creatives that get results. **Social Morph** leverages advanced AI and the Gemini API to automate content creation, helping you post engaging content consistently across all your social media platforms.

## Features

- **AI-Powered Content Generation**: Create engaging, on-brand posts automatically with the help of the Gemini API.
- **Post Across Platforms**: Social Morph generates and posts content across various social media platforms daily, saving you time and effort.
- **Consistent Branding**: Ensure consistent messaging and visuals that align with your brand's identity.
- **10x Your Social Media**: Increase your brand visibility and engagement with AI-generated posts.
- **Unlimited Post Generation**: Generate unlimited posts and never run out of fresh content.

## Tech Stack

- **Next.js**: Frontend framework for building the application.
- **Gemini API**: AI-powered content generation API used to create social media posts.
- **MongoDB**: Database used to store user data, generated posts, and scheduling information.
- **Docker**: Used to containerize and deploy the application.
  
## Getting Started

Follow these instructions to get a copy of the project up and running locally.

### Prerequisites

Ensure you have the following installed on your machine:

- Node.js (>=14.0.0)
- npm or yarn
- Docker (for containerization)

### Installation

1. **Clone the repository:**

    ```bash
    git clone [https://github.com/your-username/social-morph.git](https://github.com/himeshparashar/Social-Morph)
    cd social-morph
    ```

2. **Install dependencies:**

    Using npm:

    ```bash
    npm install
    ```

    Or using yarn:

    ```bash
    yarn install
    ```

3. **Environment Variables:**

    Create a `.env` file in the root directory and add the following environment variables:

    ```bash
    GEMINI_API_KEY=your_gemini_api_key
    MONGODB_URI=your_mongodb_connection_string
    ```

4. **Run the development server:**

    ```bash
    npm run dev
    ```

    The app will be running at `http://localhost:3000`.

### Docker Setup

To run the application using Docker:

1. **Build the Docker container:**

    ```bash
    docker-compose up --build
    ```

2. **Access the app:**

    Open your browser and go to `http://localhost:3000`.

## Usage

1. **Create an Account**: Sign up and connect your social media platforms.
2. **Generate Content**: Use the AI content generator powered by the Gemini API to create posts tailored to your brand.
3. **Schedule & Post**: Automate posting across all your social media platforms with the built-in scheduler.
4. **Analytics**: View engagement statistics and optimize your social media strategy.

## Project Structure

- `/pages`: Contains the main pages of the application (e.g., login, dashboard).
- `/components`: Reusable UI components.
- `/lib`: API integration and utility functions.
- `/api`: Next.js API routes for server-side logic.
- `/styles`: Global and component-specific styles.

## Contributing

Contributions are welcome! Please submit a pull request or open an issue to discuss improvements or report bugs.

## License

This project is licensed under the MIT License. See the `LICENSE` file for details.

## Contact

For any questions or inquiries, feel free to reach out:

- **Email**: himeshparashar424@gmail.com
- **Website**: [www.socialmorph.co](https://www.socialmorph.co)

---

Transform your marketing strategy today with **Social Morph**! 🚀
