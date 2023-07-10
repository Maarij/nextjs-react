import classes from './hero.module.css';
import Image from "next/image";

function Hero() {
  return <section className={classes.hero}>
    <div className={classes.image}>
      <Image src={"/images/site/maarij's_dog.png"}
             alt={"An image showing Maarij"}
             width={300}
             height={300} />
    </div>
    <h1>Hi, I'm Maarij</h1>
    <p>
      I am a software engineer, lifelong learner, and always looking for new ideas to get involved in!
    </p>
  </section>

}

export default Hero;