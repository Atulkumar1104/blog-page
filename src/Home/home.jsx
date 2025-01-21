// Home.jsx
import React, { useState } from "react";
import { Search, Code, Smartphone, Box, Palette, User } from "lucide-react";
import { useNavigate } from "react-router-dom";

// NavBar Component
const NavBar = () => {
  const navItems = [
    "App Development",
    "Software Dev",
    "Blockchain",
    "Cloud",
    "Business Intelligence",
    "Data Analytics",
    "Artificial Intelligence",
  ];

  return (
    <nav className="max-w-[1800px] mx-auto bg-transparent shadow-sm p-4 mb-14">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex space-x-6">
          {navItems.map((item) => (
            <a
              key={item}
              href="#"
              className="text-gray-400 text-base font-bold hover:text-orange-500"
            >
              {item}
            </a>
          ))}
        </div>
        <div className="flex items-center">
          <Search className="w-5 h-5 text-gray-400" />
          <span className="ml-2 text-gray-300">Search</span>
        </div>
      </div>
    </nav>
  );
};

// Featured Post Component
const FeaturedPost = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    // Create a URL-friendly slug from the title
    const slug = "mobile-application-development-guide";
    navigate(`/blog/${slug}`);
  };
  return (
    <div
      className="bg-white rounded-lg shadow-md overflow-hidden max-w-7xl mb-16 mx-auto mt-8 cursor-pointer"
      onClick={handleClick}
    >
      <div className="flex">
        <div className="w-1/2 object-cover flex items-center">
          <div className="w-full h-80">
            <img
              src="https://i.pinimg.com/736x/c6/aa/11/c6aa1175531c6837bb14486d51660df7.jpg"
              alt="Developer illustration"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        <div className="w-1/2 p-8">
          <span className="text-blue-500">Guides</span>
          <h1 className="text-3xl font-bold mt-2">
            Mobile Application Development for Businesses – A Complete Guide
          </h1>
          <p className="mt-4 text-gray-600">
            In a digital age where the world is literally at our fingertips,
            mobile apps are revolutionizing the way businesses operate...
          </p>
          <div className="mt-4 text-gray-500">By Dev Team</div>
        </div>
      </div>
    </div>
  );
};

// Article Grid Component
const ArticleGrid = () => {
  const navigate = useNavigate();
  const handleArticleClick = (title) => {
    // Create a URL-friendly slug from the title
    const slug = title
      .toLowerCase()
      .replace(/[^\w\s]/g, "")
      .replace(/\s+/g, "-");
    navigate(`/blog/${slug}`);
  };
  const articles = [
    {
      title: "How much does it cost to create an app in 2025?",
      excerpt:
        "Exploring the costs and considerations for modern app development",
      category: "App Development",
      image:
        "https://i.pinimg.com/736x/2c/e1/80/2ce180ff97a6d078bfc3da7eb849f56d.jpg",
    },
    {
      title: "How to Build an MVP and Raise Funding",
      excerpt:
        "A guide to minimum viable products and startup funding A guide to minimum viable products and startup funding A guide to minimum viable products and startup funding",
      category: "App Development",
      image:
        "https://i.pinimg.com/736x/09/23/65/09236563b80ae7f45392a9e2268b86bb.jpg",
    },
    {
      title: "How Long Does It Take to Develop a Mobile App?",
      excerpt:
        "Understanding the timeline of app development Understanding the timeline of app development Understanding the timeline of app development",
      category: "App Development",
      image:
        "https://i.pinimg.com/736x/5d/80/74/5d80749baf87f33c1a453ac17f5ef16f.jpg",
    },
  ];

  return (
    <div className="grid grid-cols-3 gap-6 max-w-7xl mx-auto mt-8">
      {articles.map((article, index) => (
        <div
          key={index}
          className="bg-white rounded-lg shadow-md overflow-hidden"
          onClick={() => handleArticleClick(article.title)}
        >
          <img
            src={article.image}
            alt={article.title}
            className="w-full h-48 object-cover"
          />
          <div className="p-6">
            <span className="text-blue-500">{article.category}</span>
            <h2 className="text-xl font-bold mt-2">{article.title}</h2>
            <p className="mt-2 text-gray-600">{article.excerpt}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

// Latest Section Component
const LatestSection = () => {
  const latestArticles = [
    {
      title: "How to build a Social Media app in the UK",
      excerpt:
        "According to IBIS World, 276 businesses on social media platforms in the United Kingdom...",
      category: "App Development",
      image:
        "https://i.pinimg.com/736x/e6/e9/5a/e6e95a96cae7aa93448d8aa4e99b66da.jpg",
      author: "Nayan Sharma",
      date: "21 Jan 2025",
    },
    {
      title:
        "Unlocking Efficiency in the Oil and Gas Industry With Advanced Asset Management Software Development",
      excerpt:
        "Keeping up with the daily grind of managing extensive assets and infrastructure can be...",
      category: "Software Development",
      image:
        "https://i.pinimg.com/736x/2c/cd/88/2ccd88fdf7e5c553498c042803094db1.jpg",
      author: "Nayan Sharma",
      date: "17 Jan 2025",
    },
  ];

  const categories = [
    "Healthcare & Fitness",
    "Restaurant App Development",
    "React Native Development",
    "Digital Transformation",
    "Data Science & Analytics",
    "Android Development",
    "Fintech",
    "IOT Development",
    "Education",
    "Cloud Computing",
  ];

  return (
    <div className="max-w-7xl mx-auto mt-12 mb-20">
      <h2 className="text-3xl text-white font-bold mb-8">Latest</h2>
      <div className="grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <div className="space-y-8">
            {latestArticles.map((article, index) => (
              <div key={index} className="flex gap-6">
                <div className="w-1/3">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-48 object-cover rounded-lg"
                  />
                </div>
                <div className="w-2/3">
                  <span className="text-blue-500">{article.category}</span>
                  <h3 className="text-xl text-gray-300 font-bold mt-2">
                    {article.title}
                  </h3>
                  <p className="mt-2 text-gray-600">{article.excerpt}</p>
                  <div className="mt-4 text-gray-500 text-sm">
                    <span>{article.author}</span>
                    <span className="mx-2">·</span>
                    <span>{article.date}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div>
          <h3 className="text-xl text-white font-bold mb-4">Categories</h3>
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <span
                key={category}
                className="px-4 py-2 bg-gray-100 rounded-full text-sm"
              >
                {category}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const Newsletter = () => {
  return (
    <div className="bg-blue-600 max-w-7xl rounded-2xl mx-auto h-72 p-8">
      <div className="max-w-full ml-32 flex flex-col md:flex-row justify-center items-center gap-8">
        <div className="flex-shrink-0">
          <img
            src="https://appinventiv.com/wp-content/themes/twentynineteen-child/images/newsletter-img.png"
            alt="Newsletter illustration"
            className="w-56 h-56"
          />
        </div>
        <div className="flex-grow space-y-4 max-w-2xl mx-auto">
          <div className="text-white">
            <h2 className="text-lg font-semibold mb-2">
              SUBSCRIBE OUR NEWSLETTER
            </h2>
            <p className="text-2xl font-bold">
              Get stories in your inbox twice a month.
            </p>
          </div>
          <div className="flex w-full max-w-md">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-grow px-4 py-2 rounded-l-md text-gray-800 focus:outline-none"
            />
            <button className="bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded-r-md transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const MobileDevelopmentTabs = () => {
  const tabs = [
    {
      id: "android",
      label: "Android",
      icon: <Smartphone className="w-5 h-5" />,
      content: {
        mainArticle: {
          image:
            "https://i.pinimg.com/736x/ae/53/d2/ae53d263151707b102489028e1e4d5ec.jpg",
          title:
            "Mobile Application Development for Businesses – A Complete Guide",
          description:
            "For businesses aiming to establish a mobile presence, the universal goal—regardless of industry or size—is to create an app that effectively serves its purpose while delivering an exceptional user experience.",
          category: "React Native Development",
          author: "Sudeep Srivastava",
        },
        articles: [
          {
            image:
              "https://i.pinimg.com/736x/2c/cd/88/2ccd88fdf7e5c553498c042803094db1.jpg",
            category: "React Native Development",
            title: "How Much Does React Native App Development Costs?",
            author: "Sudeep",
          },
          {
            image:
              "https://i.pinimg.com/736x/65/92/01/659201a9467e56bdf4697a6c001e4b69.jpg",
            category: "React Native Development",
            title: "How app development with react native can reduce cost?",
            author: "Prateek",
          },
          {
            image:
              "https://i.pinimg.com/736x/c8/04/8b/c8048b14a88a9bf1dd58ab816a0248a3.jpg",
            category: "React Native Development",
            title: "Is React Native the Right Choice for Your App?",
            author: "Maya",
          },
        ],
      },
    },
    {
      id: "ios",
      label: "Ios",
      icon: <Smartphone className="w-5 h-5" />,
      content: {
        mainArticle: {
          image:
            "https://i.pinimg.com/736x/ae/53/d2/ae53d263151707b102489028e1e4d5ec.jpg",
          title:
            "Mobile Application Development for Businesses – A Complete Guide",
          description:
            "For businesses aiming to establish a mobile presence, the universal goal—regardless of industry or size—is to create an app that effectively serves its purpose while delivering an exceptional user experience.",
          category: "React Native Development",
          author: "Sudeep Srivastava",
        },
        articles: [
          {
            image:
              "https://i.pinimg.com/736x/2c/e1/80/2ce180ff97a6d078bfc3da7eb849f56d.jpg",
            category: "React Native Development",
            title: "How Much Does React Native App Development Costs?",
            author: "Sudeep",
          },
          {
            image:
              "https://i.pinimg.com/736x/09/23/65/09236563b80ae7f45392a9e2268b86bb.jpg",
            category: "React Native Development",
            title: "How app development with react native can reduce cost?",
            author: "Prateek",
          },
          {
            image:
              "https://i.pinimg.com/736x/5d/80/74/5d80749baf87f33c1a453ac17f5ef16f.jpg",
            category: "React Native Development",
            title: "Is React Native the Right Choice for Your App?",
            author: "Maya",
          },
        ],
      },
    },
    {
      id: "react-native",
      label: "React Native",
      icon: <Smartphone className="w-5 h-5" />,
      content: {
        mainArticle: {
          image:
            "https://i.pinimg.com/736x/ae/53/d2/ae53d263151707b102489028e1e4d5ec.jpg",
          title:
            "Mobile Application Development for Businesses – A Complete Guide",
          description:
            "For businesses aiming to establish a mobile presence, the universal goal—regardless of industry or size—is to create an app that effectively serves its purpose while delivering an exceptional user experience.",
          category: "React Native Development",
          author: "Sudeep Srivastava",
        },
        articles: [
          {
            image:
              "https://i.pinimg.com/736x/2c/e1/80/2ce180ff97a6d078bfc3da7eb849f56d.jpg",
            category: "React Native Development",
            title: "How Much Does React Native App Development Costs?",
            author: "Sudeep",
          },
          {
            image:
              "https://i.pinimg.com/736x/09/23/65/09236563b80ae7f45392a9e2268b86bb.jpg",
            category: "React Native Development",
            title: "How app development with react native can reduce cost?",
            author: "Prateek",
          },
          {
            image:
              "https://i.pinimg.com/736x/5d/80/74/5d80749baf87f33c1a453ac17f5ef16f.jpg",
            category: "React Native Development",
            title: "Is React Native the Right Choice for Your App?",
            author: "Maya",
          },
        ],
      },
    },
    {
      id: "flutter",
      label: "Flutter",
      icon: <Smartphone className="w-5 h-5" />,
      content: {
        mainArticle: {
          image:
            "https://i.pinimg.com/736x/ae/53/d2/ae53d263151707b102489028e1e4d5ec.jpg",
          title:
            "Mobile Application Development for Businesses – A Complete Guide",
          description:
            "For businesses aiming to establish a mobile presence, the universal goal—regardless of industry or size—is to create an app that effectively serves its purpose while delivering an exceptional user experience.",
          category: "React Native Development",
          author: "Sudeep Srivastava",
        },
        articles: [
          {
            image:
              "https://i.pinimg.com/736x/2c/e1/80/2ce180ff97a6d078bfc3da7eb849f56d.jpg",
            category: "React Native Development",
            title: "How Much Does React Native App Development Costs?",
            author: "Sudeep",
          },
          {
            image:
              "https://i.pinimg.com/736x/09/23/65/09236563b80ae7f45392a9e2268b86bb.jpg",
            category: "React Native Development",
            title: "How app development with react native can reduce cost?",
            author: "Prateek",
          },
          {
            image:
              "https://i.pinimg.com/736x/5d/80/74/5d80749baf87f33c1a453ac17f5ef16f.jpg",
            category: "React Native Development",
            title: "Is React Native the Right Choice for Your App?",
            author: "Maya",
          },
        ],
      },
    },
    {
      id: "app-design",
      label: "App Design",
      icon: <Smartphone className="w-5 h-5" />,
      content: {
        mainArticle: {
          image:
            "https://i.pinimg.com/736x/ae/53/d2/ae53d263151707b102489028e1e4d5ec.jpg",
          title:
            "Mobile Application Development for Businesses – A Complete Guide",
          description:
            "For businesses aiming to establish a mobile presence, the universal goal—regardless of industry or size—is to create an app that effectively serves its purpose while delivering an exceptional user experience.",
          category: "React Native Development",
          author: "Sudeep Srivastava",
        },
        articles: [
          {
            image:
              "https://i.pinimg.com/736x/2c/e1/80/2ce180ff97a6d078bfc3da7eb849f56d.jpg",
            category: "React Native Development",
            title: "How Much Does React Native App Development Costs?",
            author: "Sudeep",
          },
          {
            image:
              "https://i.pinimg.com/736x/09/23/65/09236563b80ae7f45392a9e2268b86bb.jpg",
            category: "React Native Development",
            title: "How app development with react native can reduce cost?",
            author: "Prateek",
          },
          {
            image:
              "https://i.pinimg.com/736x/5d/80/74/5d80749baf87f33c1a453ac17f5ef16f.jpg",
            category: "React Native Development",
            title: "Is React Native the Right Choice for Your App?",
            author: "Maya",
          },
        ],
      },
    },
    // ... other tabs with similar structure
  ];

  const [activeTab, setActiveTab] = useState(tabs[0].id);

  return (
    <div className="max-w-7xl mx-auto mt-16 mb-20">
      {/* Main Heading Section */}
      <div className=" mb-12">
        <h2 className="text-4xl font-bold text-white  mb-4">
          Mobile App Development
        </h2>
      </div>
      {/* Tab Navigation */}
      <div className="flex flex-wrap gap-2 mb-6 border-b">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex items-center gap-2 px-4 py-2 rounded-t-lg transition-colors
              ${
                activeTab === tab.id
                  ? "text-orange-500 border-b-2 text-base border-red-500"
                  : "text-gray-300 hover:text-orange-700"
              }`}
          >
            {tab.icon}
            <span>{tab.label}</span>
          </button>
        ))}
      </div>

      {/* Tab Content */}
      {tabs.map((tab) => (
        <div
          key={tab.id}
          className={`transition-opacity duration-300 ${
            activeTab === tab.id ? "block" : "hidden"
          }`}
        >
          <div className="grid grid-cols-12 gap-8">
            {/* Featured Article - Left Side */}
            <div className="col-span-7">
              <div className="bg-gray-300 rounded-lg p-6">
                <img
                  src={tab.content.mainArticle.image}
                  alt={tab.content.mainArticle.title}
                  className="w-full h-64 object-cover mb-6"
                />
                <div className="text-blue-600 mb-2">
                  {tab.content.mainArticle.category}
                </div>
                <h2 className="text-2xl font-bold mb-4">
                  {tab.content.mainArticle.title}
                </h2>
                <p className="text-gray-600 mb-4">
                  {tab.content.mainArticle.description}
                </p>
                <div className="text-gray-500">
                  {tab.content.mainArticle.author}
                </div>
              </div>
            </div>

            {/* Right Side Articles */}
            <div className="col-span-5 space-y-6">
              {tab.content.articles.map((article, index) => (
                <div
                  key={index}
                  className="flex gap-4 bg-white rounded-lg shadow p-4"
                >
                  <div className="w-1/3">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-24 object-cover rounded"
                    />
                  </div>
                  <div className="w-2/3">
                    <div className="text-blue-600 text-sm mb-1">
                      {article.category}
                    </div>
                    <h3 className="font-bold mb-2">{article.title}</h3>
                    <div className="flex items-center text-gray-500 text-sm">
                      {article.author}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

const CTABanner = () => {
  return (
    <div className="max-w-7xl mx-auto my-20">
      <div className="bg-[#1e2b58] rounded-lg p-12 flex items-center justify-between">
        {/* Left side - Text Content */}
        <div className="max-w-2xl">
          <h2 className="text-white text-4xl font-bold leading-tight mb-6">
            We build digital products that help you unlock opportunities and
            embrace innovation.
          </h2>
          <button className="bg-[#ff5c35] text-white px-8 py-3 rounded-md hover:bg-[#ff4a1a] transition-colors">
            Let's discuss your project
          </button>
        </div>

        {/* Right side - Illustration */}
        <div className="flex-shrink-0">
          <img
            src="https://appinventiv.com/wp-content/themes/twentynineteen-child/images/nw-blog-cta.webp"
            alt="Innovation illustration"
            className="w-72"
          />
        </div>
      </div>
    </div>
  );
};
// Main App Component
const BlogLanding = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black p-[80px]">
      <NavBar />
      <FeaturedPost />
      <ArticleGrid />
      <LatestSection />
      <Newsletter />
      <MobileDevelopmentTabs />
      <CTABanner />
    </div>
  );
};

export default BlogLanding;
