import type { PlopTypes } from "@turbo/gen";

export default function generator(plop: PlopTypes.NodePlopAPI): void {
  plop.setGenerator("shared", {
    description: "Adds a new Typescript file",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "What is the name of the file?",
      },
    ],
    actions: [
      {
        type: "add",
        path: "src/{{name}}.ts",
      },
      {
        type: "append",
        path: "src/index.ts",
        template: 'export * from "./{{name}}";',
      },
    ],
  });
}
