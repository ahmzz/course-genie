// // To run this code you need to install the following dependencies:
// // npm install @google/genai mime
// // npm install -D @types/node

import { GoogleGenAI } from "@google/genai";

export const ai = new GoogleGenAI({
  apiKey: process.env.NEXT_PUBLIC_GEMINI_API_KEY,
});
const config = {
  temprature: 1,
  topP: 0.95,
  topK: 64,
  maxOutputTokens: 8192,
  responseMimeType: "application/json",
};
const model = "gemini-1.5-flash-latest";
// const contents = [
//   {
//     role: "user",
//     parts: [
//       {
//         text: `generate a course tutorial on following detail with field as course name, ddescriptoin, along wiht chapter name, about , duration, categoriy: "Programming', topic: python, level: basic, duration: 1 hrs, no of chapters: 5, in JSON format
//   `,
//       },
//     ],
//   },
//   {
//     role: "model",
//     parts: [
//       {
//         text: `**Crafting Course Data**

//   I'm currently crafting the structure for the JSON object that will represent the course tutorial. I've decided on the key components: \`course_name\`, \`description\`, \`level\`, \`total_duration\`, \`category\`, and \`chapters\`. Next, I'll be filling in the specifics within those categories.

//   **Refining Chapter Details**

//   I'm now focusing on refining the \`chapters\` array, specifically the chapter details. I've populated the first chapter object with the \`chapter_name\`, \`about\`, and \`duration\` keys, and now I'm working on the description for the remaining chapters. I'm aiming for concise yet informative explanations for each chapter.

//   **Expanding Chapter Content**

//   I'm now diving into the finer details of the course. I've finished the main structure and chapter outlines. Now, I'm focusing on crafting the "about" sections for each of the remaining chapters. I'm aiming for concise yet informative descriptions that resonate with beginner learners. The specifics of Chapter 4 are taking shape!

//   **Defining Final Structure**

//   I've finished detailing the chapters and am now focusing on assembling the final JSON. I'm double-checking the formatting for validity, ensuring correct key-value pairs and proper JSON syntax. The course content is nearly complete. My next step will be to test the generated JSON object.

//   `,
//       },
//       {
//         text: `\`\`\`json
//   {
//     "course_name": "Python for Absolute Beginners",
//     "description": "A quick and practical introduction to the Python programming language. This course is designed for individuals with no prior programming experience, guiding you from setting up your environment to writing your first simple programs.",
//     "level": "Basic",
//     "total_duration": "1 hour",
//     "category": "Programming",
//     "topic": "Python",
//     "chapters": [
//       {
//         "chapter_name": "Chapter 1: Getting Started",
//         "about": "An introduction to what Python is, its common uses, and a step-by-step guide to installing Python and setting up a code editor on your computer.",
//         "duration": "10 minutes"
//       },
//       {
//         "chapter_name": "Chapter 2: Variables and Basic Data Types",
//         "about": "Learn the fundamental building blocks of programming. We'll cover how to store information in variables and understand basic data types like strings (text), integers (whole numbers), and floats (decimal numbers).",
//         "duration": "15 minutes"
//       },
//       {
//         "chapter_name": "Chapter 3: Basic Operations and Input",
//         "about": "Discover how to perform mathematical calculations with numbers and combine strings. You'll also learn how to make your programs interactive by accepting input from the user.",
//         "duration": "10 minutes"
//       },
//       {
//         "chapter_name": "Chapter 4: Introduction to Lists",
//         "about": "Explore your first data structure: the list. Learn how to store multiple items in a single variable, access specific elements, and modify them.",
//         "duration": "10 minutes"
//       },
//       {
//         "chapter_name": "Chapter 5: Control Flow with 'if' Statements",
//         "about": "Learn how to make decisions in your code. This chapter covers 'if', 'elif', and 'else' statements to control what your program does based on certain conditions.",
//         "duration": "15 minutes"
//       }
//     ]
//   }
//   \`\`\``,
//       },
//     ],
//   },
//   {
//     role: "user",
//     parts: [
//       {
//         text: `INSERT_INPUT_HERE`,
//       },
//     ],
//   },
// ];

// // export const GenerateCourseLayout_AI = await ai.models.generateContentStream({
// //   model,
// //   config,
// //   contents,
// // });
// // let fileIndex = 0;
// // for await (const chunk of GenerateCourseLayout) {
// //   console.log(chunk.text);
// // }

// courseGenerator.ts

export async function GenerateCourseLayout_AI(input: any): Promise<string> {
  const {
    topic,
    level,
    duration,
    numberOfChapters,
    category = "Programming",
  } = input;

  // Construct the dynamic prompt based on the input parameters
  const prompt = `generate a course tutorial on following detail with field as course_name, description, along with chapter_name, about, duration, category: "${category}", topic: ${topic}, level: ${level}, duration: ${duration}, no of chapters: ${numberOfChapters}, in JSON format`;

  // The 'contents' array now needs to be generated dynamically
  const contents = [
    {
      role: "user",
      parts: [
        {
          text: prompt,
        },
      ],
    },
    {
      role: "model",
      parts: [
        {
          text: `**Crafting Course Data**

I'm currently crafting the structure for the JSON object that will represent the course tutorial. I've decided on the key components: \`course_name\`, \`description\`, \`level\`, \`total_duration\`, \`category\`, and \`chapters\`. Next, I'll be filling in the specifics within those categories.


**Refining Chapter Details**

I'm now focusing on refining the \`chapters\` array, specifically the chapter details. I've populated the first chapter object with the \`chapter_name\`, \`about\`, and \`duration\` keys, and now I'm working on the description for the remaining chapters. I'm aiming for concise yet informative explanations for each chapter.


**Expanding Chapter Content**

I'm now diving into the finer details of the course. I've finished the main structure and chapter outlines. Now, I'm focusing on crafting the "about" sections for each of the remaining chapters. I'm aiming for concise yet informative descriptions that resonate with beginner learners. The specifics of Chapter 4 are taking shape!


**Defining Final Structure**

I've finished detailing the chapters and am now focusing on assembling the final JSON. I'm double-checking the formatting for validity, ensuring correct key-value pairs and proper JSON syntax. The course content is nearly complete. My next step will be to test the generated JSON object.


`,
        },
        {
          text: `\`\`\`json
{
  "course_name": "Python for Absolute Beginners",
  "description": "A quick and practical introduction to the Python programming language. This course is designed for individuals with no prior programming experience, guiding you from setting up your environment to writing your first simple programs.",
  "level": "Basic",
  "total_duration": "1 hour",
  "category": "Programming",
  "topic": "Python",
  "chapters": [
    {
      "chapter_name": "Chapter 1: Getting Started",
      "about": "An introduction to what Python is, its common uses, and a step-by-step guide to installing Python and setting up a code editor on your computer.",
      "duration": "10 minutes"
    },
    {
      "chapter_name": "Chapter 2: Variables and Basic Data Types",
      "about": "Learn the fundamental building blocks of programming. We'll cover how to store information in variables and understand basic data types like strings (text), integers (whole numbers), and floats (decimal numbers).",
      "duration": "15 minutes"
    },
    {
      "chapter_name": "Chapter 3: Basic Operations and Input",
      "about": "Discover how to perform mathematical calculations with numbers and combine strings. You'll also learn how to make your programs interactive by accepting input from the user.",
      "duration": "10 minutes"
    },
    {
      "chapter_name": "Chapter 4: Introduction to Lists",
      "about": "Explore your first data structure: the list. Learn how to store multiple items in a single variable, access specific elements, and modify them.",
      "duration": "10 minutes"
    },
    {
      "chapter_name": "Chapter 5: Control Flow with 'if' Statements",
      "about": "Learn how to make decisions in your code. This chapter covers 'if', 'elif', and 'else' statements to control what your program does based on certain conditions.",
      "duration": "15 minutes"
    }
  ]
}
\`\`\``,
        },
      ],
    },
  ];

  const GenerateCourseLayout = await ai.models.generateContentStream({
    model,
    config,
    contents, // Use the dynamically created contents
  });

  let fullResponse = "";
  for await (const chunk of GenerateCourseLayout) {
    fullResponse += chunk.text;
  }
  return fullResponse;
}

// Example of how to use it with custom input:
