import Description from "../../components/Description/Description";
import classes from "./AboutPage.module.css"

console.log(classes)
function AboutPage() {
    const AboutPageProps ={
        discrip:"discription 2 ",
        title:"Title 1"
    }
    return (
        <>
           <div className={classes.aboutpageee}>
              <Description info={AboutPageProps}/>
           </div>
        </>
    );
}

export default AboutPage;

