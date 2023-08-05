import { Card, CardBody, CardHeader, CardMedia } from "@trussworks/react-uswds";
import { useState } from "react";

interface CardProps {
    title: string,
    imageSrc: string,
    imageHoverSrc: string,
    description?: string
    marginTop?: string

    onClick?: (event: any) => void
}

export default function CustomCard(props: CardProps) {

    const [applyHoverStyle, setApplyHoverStyle] = useState(false);

    function toggleHoverStyle() {
        setApplyHoverStyle(!applyHoverStyle)
    }

    return (
        <>
            <Card onClick={props.onClick} onMouseEnter={toggleHoverStyle} onMouseLeave={toggleHoverStyle} style={{position: "absolute", width: "300px", listStyleType: "none", marginTop: props.marginTop, cursor: applyHoverStyle ? "pointer" : "" }} gridLayout={{ tablet: { col: 6 }}}>
                <CardHeader style={{ background: applyHoverStyle ? "#d4d4d4" : "" }}>
                    <h2 className="usa-card__heading">{props.title}</h2>
                </CardHeader>
                <CardMedia>
                    <img src={applyHoverStyle ? props.imageHoverSrc : props.imageSrc} alt="A placeholder" />
                </CardMedia>
                <CardBody style={{ background: applyHoverStyle ? "#d4d4d4" : "" }}>
                    <p> {props.description} </p>
                </CardBody>
            </Card>
        </>
    )
}