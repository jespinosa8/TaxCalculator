import { Button, Grid, Label } from "@trussworks/react-uswds";
import CustomCard from "../home/Card";

interface FormsProps {
    onW2Click?: (event: any) => void
    on1099Click?: (event: any) => void
    onNextClick?: (event: any) => void
    onBackClick?: (event: any) => void
}

export default function FormSelection(props: FormsProps) {

    const containerStyle = {
        maxWidth: "1280px",
        margin: "0 auto",
        padding: "2rem",
        textAlign: "center",
        marginTop: "45px"
    }

    const formW2ColumnStyle = {
        display: "flex",
        justifyContent: "right"
    }

    const form1099ColumnStyle = {
        display: "flex",
        justifyContent: "left"
    }

    const buttonsContainer = {
        width: "600px",
        margin: "0 auto",
        padding: "2rem",
        textAlign: "center",
        marginTop: "285px",
        display: "flex",
    }

    return (
        <>
            <main id="main-content" style={containerStyle as React.CSSProperties}>
                <div className="bg-base-lightest" style={containerStyle as React.CSSProperties}>
                    <div className="bg-white padding-y-3 padding-x-5 border border-base-lighter">
                        <h1 style={{ fontSize: "38px", marginBottom: "-20px" }}>Step 2: Add Tax Forms</h1>
                        <Grid row style={containerStyle as React.CSSProperties}>
                            <Grid col={6} style={formW2ColumnStyle as React.CSSProperties}>
                                <CustomCard title={"Add a W2"} onClick={props.onW2Click} imageSrc={"/W2Image.jpg"} imageHoverSrc={"/W2Image - Dark.jpg"}></CustomCard>
                            </Grid>
                            <Grid col={6} style={form1099ColumnStyle as React.CSSProperties}>
                                <CustomCard title={"Add a 1099"} onClick={props.on1099Click} imageSrc={"/1099Image.webp"} imageHoverSrc={"/1099Image - Dark.webp"}></CustomCard>
                            </Grid>
                            <Grid row style={buttonsContainer as React.CSSProperties}>
                                <Grid col={12}>
                                    <Button type="button" onClick={props.onBackClick} style={{ marginRight: "10px" }}>Back</Button>
                                    <Button type="button" onClick={props.onNextClick} style={{ marginLeft: "10px" }}>Next</Button>
                                </Grid>
                            </Grid>
                        </Grid>
                    </div>
                </div>
            </main>
        </>
    )
}