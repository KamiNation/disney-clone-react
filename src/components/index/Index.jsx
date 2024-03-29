import styles from "../css/Section.module.css"
import Navbar from "../navbar/Navbar";
import Hero from "../hero/Hero";
import MovieList from "../movielist/MovieList"
import News from "../news/News";
import Info from "../recommendation/RecommendationInfo";
import Character from "../character/CharacterIntroduction"
import Pixar from "../image/Pixar"



function Index() {
  // Movie collection
  const movie = [
    {
      productName: "Pixar Best",
      productDesc: "The Ultimate best album of Pixar music! CD release/digital distribution on March 20th",
      productImage: "https://lumiere-a.akamaihd.net/v1/images/pixar_best_1200_3eb5e766.jpeg?region=0,1,1200,675&wclassNameth=768"
    },

    {
      productName: "Held nationwclassNamee from May to June!",
      productDesc: "Disney on Classic ~ Gift of Dreams and Magic 2024 Orchestral performance of many popular works​",
      productImage: "https://lumiere-a.akamaihd.net/v1/images/doc24d_kv_1200x677_28f14638.jpeg?region=0,1,1200,675&wclassNameth=768"
    },

    {
      productName: "Focus on Minnie in March",
      productDesc: "Enjoy spring while being inspired by the fashionable, fun-loving, and always positive Minnie Mouse! ​​",
      productImage: "https://lumiere-a.akamaihd.net/v1/images/minnieday_1024-768_624af220.jpeg?region=0,0,1024,768&wclassNameth=768"
    },

    {
      productName: "disney palpalooza",
      productDesc: "Tokyo Disneyland “Disney Palpalooza” 2nd “Donald’s Quacky Duck City” held​​​",
      productImage: "https://www.tokyodisneyresort.jp/treasure/donaldsquackyduckcity/assets/img/atf_mv.jpg"
    }]


  // News collection
  const news = [
    {
      productDesc: "The Ultimate best album of Pixar music! CD release/digital distribution on March 20th",
      productImage: "https://lumiere-a.akamaihd.net/v1/images/cars3_tv_dc_special_movie_73c4b5bb.jpeg?region=0,27,1450,816&wclassNameth=320"
    },

    {
      productDesc: "Disney on Classic ~ Gift of Dreams and Magic 2024 Orchestral performance of many popular works​",
      productImage: "https://lumiere-a.akamaihd.net/v1/images/doc24d_kv_1200x677_28f14638.jpeg?region=0,1,1200,675&wclassNameth=768"
    },

    {

      productDesc: "Enjoy spring while being inspired by the fashionable, fun-loving, and always positive Minnie Mouse!",
      productImage: "https://lumiere-a.akamaihd.net/v1/images/minnieday_1024-768_624af220.jpeg?region=0,0,1024,768&wclassNameth=768"
    },

    {
      productDesc: "Tokyo Disneyland “Disney Palpalooza” 2nd “Donald’s Quacky Duck City” held​​​",
      productImage: "https://www.tokyodisneyresort.jp/treasure/donaldsquackyduckcity/assets/img/atf_mv.jpg"
    }]


  // Create a new Date object with the desired date

  const date = new Date();

  // Array of month names for formatting
  var monthNames = [
    "January", "February", "March",
    "April", "May", "June", "July",
    "August", "September", "October",
    "November", "December"
  ];

  // Get the month, day, and year

  const today = {
    month: monthNames[date.getMonth()],
    day: date.getDate(),
    year: date.getFullYear()
  }

  let { month, day, year } = today



  // Info collection
  const info = [
    {
      productName: "This month's recommended works",
      productDesc: "Introducing the distribution schedule of Disney Plus works. New movies and original works are appearing one after another!",
      productImage: "https://lumiere-a.akamaihd.net/v1/images/d_plus_logo_abc82120.png?region=0,0,558,304"
    },

    {
      productName: "final season",
      productDesc: "Star Wars: The Bad Batch” Season 3 is now available exclusively. The story is finally coming to an end!",
      productImage: "https://lumiere-a.akamaihd.net/v1/images/doc24d_kv_1200x677_28f14638.jpeg?region=0,1,1200,675&wclassNameth=768"
    },

    {
      productName: "original series",
      productDesc: "All 6 episodes of “Iwaju” are now available exclusively! A science fiction animation set in Lagos, Nigeria in the near future​​",
      productImage: "https://lumiere-a.akamaihd.net/v1/images/minnieday_1024-768_624af220.jpeg?region=0,0,1024,768&wclassNameth=768"
    },

    {
      productName: "disney plus",
      productDesc: "Disney's official vclassNameeo distribution service. In addition to masterpieces and popular works, you can also enjoy unlimited viewing of foreign dramas and Japanese content.",
      productImage: "https://www.tokyodisneyresort.jp/treasure/donaldsquackyduckcity/assets/img/atf_mv.jpg"
    }]


  // Character collection

  const character = [
    {
      productName: "chip and dale",
      productDesc: "Cute chipmunk character. Chip has a black nose and one tooth in the mclassNamedle, and Dale has a red nose and two teeth. ",
      productImage: "https://lumiere-a.akamaihd.net/v1/images/12461_12515_12521_thumb_12481_12483_12503_12487_12540_1_263f559f.jpeg?region=0,0,800,800&wclassNameth=320"
    },

    {
      productName: "rapunzel",
      productDesc: "Rapunzel, a vivacious girl with long blonde hair who lives in a high tower, is yearning for a world she has never seen before. Especially, on her birthday, she wanted to see the lights shining in the night sky up close, so with her overflowing inquisitive spirit, she and Eugene jumped out of the tower and went on an adventure. I'm going out to. She is conflicted between the dreams she wants to fulfill and her feelings for Gothel, who she believes to be her mother, but the decisions she makes are the ones that lead to her true family and her dreams. I took control of the future that existed.",
      productImage: "https://lumiere-a.akamaihd.net/v1/images/rapunzel_tn_f5e154a8.jpeg?region=0,0,767,767"
    },

    {
      productName: "ducky and bunny",
      productDesc: "A stuffed animal that was a prize for shooting at the mobile amusement park that Woody and his friends arrived at. I dream of having my child take it home someday. At first glance, they look fluffy and cute, but they actually have a poisonous tongue.",
      productImage: "https://lumiere-a.akamaihd.net/v1/images/12461_12515_12521_thumb_12479_12441_12483_12461_12540_6_4ff675b5.jpeg?region=0,0,800,800&wclassNameth=320"
    },

    {
      productName: "rabbit",
      productDesc: "A rabbit who lives in the 100 Acre Wood with Pooh and his friends. Although he has a bit of a stubborn and angry personality, he is a fun companion who appears in all of the Winnie the Pooh series. Rabbit is a very hard worker and takes great care of his carrot field. In ``Winnie the Pooh and Honey'' (1966), he can be weak-willed, as when Pooh asked him for honey and he couldn't refuse.",
      productImage: "https://lumiere-a.akamaihd.net/v1/images/12461_12515_12521_thumb_12521_12499_12483_12488_e8af1a9b.jpeg?region=0,0,800,800"
    },

    {
      productName: "Tonsuke",
      productDesc: "A curious rabbit who appears in ``Bambi'' (1942). Bambi's playmate. They have a habit of tapping their hind legs on the ground.",
      productImage: "https://lumiere-a.akamaihd.net/v1/images/12461_12515_12521_thumb_12392_12435_12377_12369_fade3800.jpeg?region=0,0,800,800&wclassNameth=320"
    }]


    const img = [
      { 
         productImage: "https://lumiere-a.akamaihd.net/v1/images/link_disney_dcd016c0.png?region=0,0,372,209",
      },
      { 
         productImage: "https://lumiere-a.akamaihd.net/v1/images/link_pixar_a0830b7f.png?region=0,0,372,209",
      },
      { 
         productImage: "https://lumiere-a.akamaihd.net/v1/images/link_marvel_779d97a0.png?region=0,0,372,209",
      },
      { 
         productImage: "https://lumiere-a.akamaihd.net/v1/images/link_sw_c0f3e438.png?region=0,0,372,209",
      }
  ]

  return (
    <>
      <Navbar />
      <Hero />


      <div className={styles.section} >
        {
          movie.map((element, index) => {
            return (

              <MovieList key={index} productImage={element.productImage} productName={element.productName} productDesc={element.productDesc}  ></MovieList>


            )
          })
        } 
        </div>

      <div className={styles.section} >
        {
          news.map((element, index) => {
            return (
             
                <News key={index} productImage={element.productImage} productName={element.productName} productDesc={element.productDesc}
                  month={month} day={day} year={year}
                ></News>
             

            )
          })
        }
      </div>

      
      <div className={styles.section} id={styles.info}>
      {
        info.map((element, index) => {
          return (
            <div className='card'>
              <Info key={index} productImage={element.productImage} productName={element.productName} productDesc={element.productDesc}
                month={month} day={day} year={year}
              ></Info>
            </div>

          )
        })
      }
      </div>


      <div className={styles.section}  >
      {
        character.map((element, index ) => {
          return (
           
              <Character key={index} productImage={element.productImage} productName={element.productName} productDesc={element.productDesc}
                month={month} day={day} year={year}
              ></Character>
         

          )
        })
      }</div>


      
<div className={styles.section}  >
      {
        img.map((element, index ) => {
          return (
           
              <Pixar key={index} productImage={element.productImage} 
              ></Pixar>
         

          )
        })
      } 

      </div>


    </>
  )
}

export default Index
