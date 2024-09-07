import Description from "../../components/Description/Description";
import classes from "./MainPage.module.css"

console.log(classes)
function MainPage() {
    const MainPageProps ={
        discrip:"discription ",
        title:"Title",
    }
    return (
        <>
            <div className={classes.mainpageee}>
                <Description info={MainPageProps}/>
            </div>
        </>

    );
}

export default MainPage;