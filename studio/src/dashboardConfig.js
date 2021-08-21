export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId:
                    "6121687e78bb6c45b35e3db9",
                  title: "Sanity Studio",
                  name: "sanity-gatsby-blog-studio-zxgazwdf",
                  apiId: "ccd80935-0d0f-4984-bdd5-ff54cf661f1d",
                },
                {
                  buildHookId: "6121687e3aa06f858eae34d3",
                  title: "Blog Website",
                  name: "sanity-gatsby-blog-web-jtp3m51m",
                  apiId: "e3de5341-c229-4d9e-ba8c-8d2b6ebfc460",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/georgethedeveloper77/sanity-gatsby-blog",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://sanity-gatsby-blog-web-jtp3m51m.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent blog posts",
        order: "_createdAt desc",
        types: ["post"],
      },
      layout: { width: "medium" },
    },
  ],
};
