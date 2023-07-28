import { Card, CardBody, CardHeader, CardMedia } from "@trussworks/react-uswds";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

interface CardProps {
    title: string,
    link: string,
    imageSrc: string,
    imageHoverSrc: string,

    description?: string
}

export default function CustomCard(props: CardProps) {

    const [applyHoverStyle, setApplyHoverStyle] = useState(false);

    const navigate = useNavigate()

    function handleFileTaxesNow() {
        navigate(props.link)
    }

    function toggleHoverStyle() {
        setApplyHoverStyle(!applyHoverStyle)
    }

    return (
        <>
            <Card onClick={handleFileTaxesNow} onMouseEnter={toggleHoverStyle} onMouseLeave={toggleHoverStyle} style={{ listStyleType: "none", cursor: applyHoverStyle ? "pointer" : "" }} gridLayout={{ tablet: { col: 6 } }}>
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