
import { useNavigate } from "react-router-dom"
import { Card, CardImg } from "reactstrap"

export const ArtPiece = ({ artPiece }) => {

    const navigate = useNavigate()

    return (
        <Card
            key={artPiece.id}
            style={{
                width: '50%',
                height: '50%'
                    }}
            color="light"
            outline={false}
            className="border-0"
            
         >
                <CardImg
                    alt="Card"
                    src={artPiece.url}
                    width="50%"
                    onClick={() => {
                        navigate(`/all/${artPiece.id}`)
                    }}
                />
        </Card>              
    )

}

// {
//     "id": 2,
//     "name": "Water Lilies",
//     "artist": "Claude Monet",
//     "medium": "oil on canvas",
//     "dimensions": "200 x 1276 cm",
//     "dateCompleted": "1914-26",
//     "blurb": "In his later years, Monet focused on monumental works depicting the lily ponds of his Giverny gardens in France. By the late 19th century, he envisioned a series of grand compositions, or grandes décorations, surrounding viewers with water, flora, and sky. This vision materialized in about forty large panels, including Water Lilies, which Monet worked on from 1914 until his death in 1926. Water Lilies features a luminous pool of green and blue, reflecting lavender-tinged clouds. Darker strokes bleed into the left panel, while reddish-green vegetation dominates the right, blurring into near-abstraction without a horizon. After Monet’s death, twenty-two panels were gifted to France and installed at Paris/’ Musée de l/’Orangerie. The remaining canvases stayed in his studios until the late 1940s, when collectors and MoMA curators showed interest.",
//     "price": "$1,200",
//     "url": "https://www.moma.org/media/W1siZiIsIjI0Njc4NCJdLFsicCIsImNvbnZlcnQiLCItcXVhbGl0eSA5MCAtcmVzaXplIDIwMDB4MjAwMFx1MDAzZSJdXQ.jpg?sha=3a1ed95974c1c0be",
//     "userId": 1,
//     "dateSold": ""
//   },
//   {
//     "id": 13,
//     "name": "Fallen Sky",
//     "artist": "Sarah Sze",
//     "medium": "stainless steel",
//     "dimensions": "installation",
//     "dateCompleted": "2021",
//     "blurb": "Sarah Sze’s Fallen Sky comprises 132 mirrored stainless steel elements nestled into the hillside, merging visually with the landscape. This installation collapses the horizon line, blending earth and sky. Viewers experience the surroundings along with reflections of clouds, birds, light variations, weather, seasons, and time of day. Sze describes Fallen Sky as “filmic” due to its dynamic nature and ability to depict “how the landscape behaves.” The clay model for Fallen Sky was created through erosion, resulting in a piece that appears as a ruin in partial deterioration. The sculpture explores the tension between material permanence and ephemerality, conveying a sense of entropy and the Earth’s fragile, ever-changing state.",
//     "price": "$12,200",
//     "url": "https://collections.stormking.org/media/collectiveaccess/images/3/1/33884_ca_object_representations_media_3104_page.jpg",
//     "userId": 1,
//     "dateSold": ""
//   },