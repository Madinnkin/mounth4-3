import classes from "./Description.module.css"
console.log(classes)
function Description({info}) {
    return (
      <>
        <div className={classes}>
            <h2>{info.title}</h2>
            <h2>{info.discrip}</h2>
        </div>
      </>
    );
}

export default Description;