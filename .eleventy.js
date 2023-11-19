module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("images");
  eleventyConfig.addPassthroughCopy("css");
  eleventyConfig.addPassthroughCopy("js");
  eleventyConfig.addPassthroughCopy("/js/cursor.js");
  eleventyConfig.addPassthroughCopy("/js/gsap.min.js");
  eleventyConfig.addPassthroughCopy("/js/nav.js");


 

  eleventyConfig.addFilter("limit", function (arr, limit) {
    return arr.slice(0, limit);
  });
  

  return {
    templateFormats: ["njk", "html", "md", "liquid"],

    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    dataTemplateEngine: "njk",
  };
};
