import { Button, Card, Grid } from "@trussworks/react-uswds";
import CustomCard from "../home/Card";

interface FormsProps {
    onW2Click?: (event: any) => void
    on1099Click?: (event: any) => void
    onNextClick?: (event: any) => void
    onBackClick?: (event: any) => void
}

export default function FormSelection(props: FormsProps) {

    const cardStyle = {
        maxWidth: "1280px",
        margin: "0 auto",
        padding: "2rem",
        textAlign: "center",
        marginTop: "45px",
        listStyleType: "none"
    }

    const containerStyle = {
        maxWidth: "1280px",
        margin: "0 auto",
        padding: "2rem",
        textAlign: "center",
        marginTop: "45px"
    }

    const columnStyle = {
        display: "flex",
        justifyContent: "center"
    }

    return (
        <>
            {/* <Card style={cardStyle as React.CSSProperties}> */}
                <Grid row style={containerStyle as React.CSSProperties}>
                    <Grid col={6} style={columnStyle as React.CSSProperties}>
                        <CustomCard title={"Add a W2"} onClick={props.onW2Click} imageSrc={"/W2Image.jpg"} imageHoverSrc={"/W2Image - Dark.jpg"} ></CustomCard>
                    </Grid>
                    <Grid col={6} style={columnStyle as React.CSSProperties}>
                        <CustomCard title={"Add a 1099"} onClick={props.on1099Click} imageSrc={"/1099Image.webp"} imageHoverSrc={"/1099Image - Dark.webp"} ></CustomCard>
                    </Grid>
                    <Grid row style={containerStyle as React.CSSProperties}>
                        <Button type="button" onClick={props.onBackClick}>Back</Button>
                        <Button type="button" onClick={props.onNextClick}>Next</Button>
                    </Grid>
                </Grid>
            {/* </Card> */}
        </>
    )
}