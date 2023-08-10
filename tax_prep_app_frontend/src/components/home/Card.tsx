import { Card, CardBody, CardHeader, CardMedia } from "@trussworks/react-uswds";
import { useState } from "react";

interface CardProps {
    title: string
    imageOnly: boolean
    imageSrc?: string
    imageHoverSrc?: string
    description?: string
    marginTop?: string
    marginRight?: string
    marginLeft?: string

    onClick?: (event: any) => void
}

export default function CustomCard(props: CardProps) {

    const [applyHoverStyle, setApplyHoverStyle] = useState(false);

    function toggleHoverStyle() {
        setApplyHoverStyle(!applyHoverStyle)
    }

    return (
        <>
            <Card onClick={props.onClick} onMouseEnter={toggleHoverStyle} onMouseLeave={toggleHoverStyle} 
                style={!props.imageOnly ? {position: "absolute", width: "300px", listStyleType: "none", marginTop: props.marginTop, cursor: applyHoverStyle ? "pointer" : "" } :
                { color: "rgba(1,1,1,0)", width: "90px", listStyleType: "none", marginTop: props.marginTop, marginLeft: props.marginLeft, marginRight: props.marginRight, cursor: applyHoverStyle ? "pointer" : "" }}
                gridLayout={{ tablet: { col: 6 }}}
                >
                    {!props.imageOnly && (<CardHeader style={{ background: applyHoverStyle ? "#d4d4d4" : "" }}>
                        <h2 className="usa-card__heading">{props.title}</h2>
                    </CardHeader>)}
                    <CardMedia>
                        {!props.imageOnly && (<img src={applyHoverStyle ? props.imageHoverSrc : props.imageSrc} alt="A placeholder" />)}
                        {props.imageOnly && (<img src={props.imageSrc}/>)}
                    </CardMedia>
                    {!props.imageOnly && (<CardBody style={{ background: applyHoverStyle ? "#d4d4d4" : "" }}>
                        <p> {props.description} </p>
                    </CardBody>)}
            </Card>
        </>
    )
}