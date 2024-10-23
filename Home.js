import React from "react";
import { VscStarHalf } from "react-icons/vsc";
import IMAGE from "./IMAGE/234.jpg"
import IMAGE1 from "./IMAGE/123.jpg";
import IMAGE2 from "./IMAGE/345.jpg";
import IMAGE3 from "./IMAGE/456.jpg";
import "./main.css";
function Home(){
return(
    <div className="Home" > 
        <div className="Home1"><h1>Tiruvannamalai</h1></div>
        <div className="pos-cen">
            <img className="img-jpg" src={IMAGE} alt="234.jpg"></img>  
            <p><VscStarHalf />Tiruvannamalai revolves around the Annamalaiyar Temple. The recorded history of the city dates back to the ninth century, as seen from a Chola inscriptions in the temple.</p><br></br>  
            <p><VscStarHalf />Further inscriptions made before ninth century indicate the rule of Pallava kings, whose capital was Kanchipuram</p><br></br>
            <p><VscStarHalf />The seventh century Nayanar saints Sambandar and Appar wrote of the temple in their poetic work, Tevaram. Sekkizhar, the author of the Periyapuranam records both Appar and Sambandar worshiped Annamalaiyar in the temple</p><br></br>
            <img className="img-jpg1" src={IMAGE1} alt="123.jpg"></img>
            <p><VscStarHalf />The Hoysala kings used Tiruvannamalai as their capital beginning in 1328 as their empire in Karnataka was annexed by the Delhi Sultanate and fought off the invasions from Madurai Sultans and Sultanate governors in the Deccan until 1346.</p><br></br>
            <p><VscStarHalf />There are 48 inscriptions from the Sangama Dynasty (1336–1485), two inscriptions from Saluva Dynasty (1485-1405), and 55 inscriptions from Tuluva Dynasty (1505–1571) of the Vijayanagara Empire, reflecting gifts to the temple from their rulers.</p><br></br>
            <p><VscStarHalf />There are also inscriptions from the rule of Krishnadeva Raya (1509–1529), the most powerful Vijayanagara emperor, indicating further patronage. Most of the Vijayanagara inscriptions were written in Tamil, with some in Kannada and Sanskrit.</p><br></br>
            <img className="img-jpg" src={IMAGE2} alt="345.jpg"></img>
            <p><VscStarHalf />The inscriptions in the temple from the Vijayanagara kings indicate emphasis on administrative matters and local concerns, which contrasts the inscriptions of the same rulers in other temples like Tirupathi. The majority of the gift related inscriptions are for land endowments, followed by goods, cash endowments, cows and oil for lighting lamps.  </p><br></br>
            <p><VscStarHalf />The city of Tiruvannamalai was at a strategic crossroads during the Vijayanagara Empire, connecting sacred centers of pilgrimage and military routes.</p><br></br>
            <p><VscStarHalf />There are inscriptions that show the area as an urban center before the precolonial period, with the city developing around the temple, similar to the Nayak ruled cities like Madurai.</p><br></br>
            <img className="img-jpg1" src={IMAGE3} alt="456.jpg"></img>
            <p><VscStarHalf />During the 18th century, Tiruvannamalai came under the dominion of the Nawab of the Carnatic. As the Mughal empire came to an end, the Nawab lost control of the city, with confusion and chaos ensuing after 1753. </p><br></br>
            <p><VscStarHalf />Subsequently, there were periods of both Hindu and Muslim stewardship of the temple, with Muraru Raya, Krishna Raya, Mrithis Ali Khan, and Burkat Ullakhan besieging the temple in succession. As European incursions progressed, Tiruvannamalai was attacked by French Soupries, Sambrinet, and the English Captain Stephen Smith. While some were repelled, others were victorious. The French occupied the city in 1757 and it came under the control of the British in 1760. </p><br></br>
            <p><VscStarHalf />In 1790, Tiruvannamalai city was captured by Tippu Sultan, who ruled from 1782 to 1799.During the first half of the 19th century, the city came under British rule.</p><br></br>
        </div>
        </div>
)
}
export default Home;