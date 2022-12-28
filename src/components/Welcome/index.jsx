import React from "react";
import Banner from "./../Banner";
import Article from "./../Article";

const Welcome = () => {
  return (
    <div>
      <Banner
        backgroundImage="url(assets/img/bg-gift.jpg)"
        title="Latest Blog Posts"
        subtitle="Read and get updated on the latest posts"
      />

      <main className="main-content bg-gray">
        <div className="row">
          <div className="col-12 col-lg-6 offset-lg-3">
            <Article />
            <hr />
            <article className="mt-90">
              <header className="text-center mb-40">
                <h3>
                  {/* <a href="blog-single.html">New features will add to dashboard soon</a> */}
                </h3>
                <div className="link-color-default fs-12">
                  <strong>
                    Nepathya Band, <time>December 28, 2022</time>
                  </strong>
                </div>
              </header>
              <a href="blog-single.html" />
              <div className="card-block">
                <p className="text-justify">
                  Nepathya is a popular Nepali band that has been making waves
                  in the music industry for over two decades. Formed in 1992 by
                  three young musicians – Amrit Gurung, Dhruba Maskey, and
                  Pratap Singh Tamang – the band has come a long way since its
                  humble beginnings, and is now recognized as one of the leading
                  bands in Nepal. One of the things that sets Nepathya apart
                  from other bands is its unique blend of traditional Nepali
                  music and modern rock sounds. The band's music is influenced
                  by a wide range of styles, including folk, rock, blues, and
                  pop, and is characterized by catchy melodies, powerful vocals,
                  and energetic instrumentation. Over the years, Nepathya has
                  released numerous albums and singles, and has gained a huge
                  following both in Nepal and abroad. The band's music has been
                  featured in numerous movies, television shows, and
                  commercials, and has helped to popularize Nepali music on a
                  global scale. In addition to their music, Nepathya is known
                  for their energetic and entertaining live performances. The
                  band has toured extensively, both in Nepal and
                  internationally, and has played to sold-out crowds all over
                  the world. Despite their success, Nepathya remains humble and
                  dedicated to their craft. The band members are known for their
                  hard work, dedication, and commitment to making great music,
                  and it shows in every performance and every album they
                  release. If you're a fan of Nepali music, or if you just enjoy
                  great rock music with a unique twist, be sure to check out
                  Nepathya. You won't be disappointed!
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
            <hr />
            <article className="mt-90">
              <header className="text-center mb-40">
                <h3>
                  {/* <a href="blog-single.html">New features will add to dashboard soon</a> */}
                </h3>
                <div className="link-color-default fs-12">
                  <strong>
                    Nepathya Band, <time>December 28, 2022</time>
                  </strong>
                </div>
              </header>
              <a href="blog-single.html" />
              <div className="card-block">
                <p className="text-justify">
                  Cristiano Ronaldo is a professional soccer player who is
                  widely considered one of the greatest players of all time.
                  Born in Funchal, Madeira, Portugal, Ronaldo began his career
                  playing for local club Sporting Lisbon before moving to
                  Manchester United in 2003. At Manchester United, Ronaldo
                  quickly made a name for himself as a dynamic and skilled
                  player, scoring a staggering 118 goals in 292 appearances for
                  the club. In 2009, he made a high-profile move to Real Madrid,
                  where he continued to excel, winning numerous individual
                  awards and leading the team to numerous titles. Ronaldo's
                  success on the field is matched by his impressive off-field
                  achievements. In addition to being one of the highest-paid
                  athletes in the world, Ronaldo is also a successful
                  businessman and philanthropist. He has endorsement deals with
                  a number of major brands, and has used his wealth and
                  influence to make a positive impact on the world. In addition
                  to his club career, Ronaldo has also had great success with
                  the Portuguese national team. He has scored a record 118 goals
                  for his country, and has helped lead Portugal to the UEFA
                  European Championship and the UEFA Nations League titles.
                  Overall, Ronaldo is a true soccer icon, and his talent and
                  dedication have made him one of the most popular and respected
                  players in the world. Whether you're a fan of soccer or just
                  appreciate greatness, Ronaldo is definitely worth checking
                  out. Regenerate response
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
            {/* <Article/> */}
            <nav className="flexbox mt-50 mb-50">
              <a className="btn btn-white disabled">
                <i className="ti-arrow-left fs-9 mr-4" /> Newer
              </a>
              <a className="btn btn-white" href="#">
                Older
                <i className="ti-arrow-right fs-9 ml-4" />
              </a>
            </nav>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Welcome;
