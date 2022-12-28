import React from "react";
import { Link } from "react-router-dom";

const Article = () => {
  return (
    <article className="mt-90">
      <header className="text-center mb-40">
        <h3>
          {/* <a href="blog-single.html">New features will add to dashboard soon</a> */}
        </h3>
        <div className="link-color-default fs-12">
          <strong>
            New Year, <time>December 28, 2022</time>
          </strong>
        </div>
      </header>
      <a href="blog-single.html" />
      <div className="card-block">
        <p className="text-justify">
          As we enter the new year, it's natural to feel a sense of excitement
          and possibility. A new year brings with it the opportunity to set
          goals, make resolutions, and start fresh. It's a time to reflect on
          the past and look forward to the future. One of the most common
          resolutions people make for the new year is to improve their health.
          This can mean anything from eating healthier and exercising more to
          quitting a bad habit or taking up a new hobby. Whatever your goals may
          be, the new year is a great time to get started on making positive
          changes in your life. Another popular resolution is to focus on
          personal growth and development. This might involve learning a new
          skill, taking on a new challenge, or simply setting aside time for
          self-care. Whatever your personal goals may be, the new year is a
          great time to take charge of your own development and set yourself up
          for success. Of course, the new year is also a time to celebrate and
          have fun. Whether you're planning a big party or a quiet evening at
          home, it's important to take time to relax and enjoy the moment. After
          all, the new year is a time to look forward to all that the future has
          in store. So as we enter the new year, let's take a moment to reflect
          on all that we've accomplished and all that we have to look forward
          to. Here's to a happy and healthy new year!
        </p>
        {/* <p className="text-center mt-40">
          <Link
            className="btn btn-primary btn-round"
            to="/article/some-title-slug"
          >
            Read more
          </Link>
        </p> */}
      </div>
    </article>
  );
};

export default Article;
