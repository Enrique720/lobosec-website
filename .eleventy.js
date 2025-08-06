
const { DateTime } = require("luxon");
module.exports = function (eleventyConfig) {
  // Static assets
  eleventyConfig.addPassthroughCopy("images");
  eleventyConfig.addPassthroughCopy("styles");

  // News collection
  eleventyConfig.addCollection("news", function (collectionApi) {
    return collectionApi.getFilteredByTag("news");
  });

  // ✅ Add a date filter usable in Nunjucks
  eleventyConfig.addFilter("readableDate", (dateObj) => {
    return DateTime.fromJSDate(dateObj).toFormat("LLLL dd, yyyy");
  });

  return {
    dir: {
      input: ".",
      includes: "_includes",
      output: "_site",
    },
    htmlTemplateEngine: "njk",
    markdownTemplateEngine: "njk",
    templateFormats: ["html", "md"],
  };
};