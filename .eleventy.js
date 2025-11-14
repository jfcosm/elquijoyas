module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy({
    public: "."
  });

  eleventyConfig.addWatchTarget("./src/styles/tailwind.css");

  eleventyConfig.addShortcode("currentYear", () => new Date().getFullYear());

  return {
    dir: {
      input: "src",
      includes: "includes",
      layouts: "layouts",
      output: "_site"
    },
    templateFormats: ["njk", "md", "11ty.js", "html"],
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    dataTemplateEngine: "njk"
  };
};
