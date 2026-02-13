// place files you want to import through the `$lib` alias in this folder.
import setupLocatorUI from "@locator/runtime";

if (process.env.NODE_ENV === "development") {
  setupLocatorUI({
    adapter: "svelte",
    projectPath: process.cwd(),
  });
}