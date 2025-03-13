# Implementation Summary

## Approach and Technical Decisions

I chose to use shadcn's pre-built components to optimize development time and focus on the project's core logic. This decision allowed me to concentrate on architecture and functionality rather than building UI components from scratch.

## Planning and Data Structure

The first step was designing the data structure. I opted for a JSON model that includes:
- Basic user data (ID, name, profile picture)
- List of IDs referencing other users (friends)

## Development and Challenges

### API and Type Definitions
1. Started by developing the API and establishing TypeScript types
2. Faced an initial challenge with `fetch`:
   - Being accustomed to Axios, I forgot that `fetch` requires complete URLs
   - This obstacle led me to return to "traditional" development practices: Google searches and documentation reading

### Frontend Implementation
- Developed the main view with user information
- Implemented a responsive design
- The profile detail view presented an interesting challenge:
  - Next.js 15 introduced changes in URL parameter handling
  - Spent about an hour investigating this issue
  - After extensively reviewing the documentation, researching online, and being unable to quickly solve my problem, I acknowledge that I used AI specifically for this.
  - Interestingly, the error was in the client side, not the server as initially thought

## Final Result

The project is deployed and running at: [User Directory](https://user-directory-tawny.vercel.app/)

## Process Reflections

I recorded the entire development process, working mostly without AI assistance or autocompletion, which led to some interesting observations:

[Watch the full development process video (time-lapse)](https://www.youtube.com/watch?v=UzPBdEIl6Ks)

1. **AI's Impact on Development:**
   - Advantages: Enhances productivity and quality when used with solid knowledge
   - Disadvantages: Can create dependency on instant answers

2. **Learnings:**
   - Rediscovered the importance of fundamental problem-solving skills
   - Noticed how AI has transformed my usual workflow
   - Appreciated the importance of maintaining a balance between modern tools and traditional methods

3. **AI Productivity Comparison:**
   - As a contrast experiment, I later passed the same email instructions to v0 (Vercel's AI)
   - The AI completed the entire implementation in a single prompt
   - What took me nearly 3 hours was accomplished by AI in less than 30 seconds
   - Remarkably, the AI's implementation was arguably better than my manual version
   - Despite being familiar with AI-enhanced development, the dramatic productivity boost remains impressive

Although the exercise had a 2-hour limit, I decided to complete it fully to deliver a finished and functional product.