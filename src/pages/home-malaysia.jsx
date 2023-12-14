import Banner from "../components/banner";
import Desc from "../components/desc";
import EventBanner from "../components/eventbanner";
import HeaderBar from "../components/headerbar";
import LocationBar from "../components/locationbar";
import TextCard from "../components/textcard";
import '../styles/style.css'
import '../styles/utils.css'


export default function HomeMalaysia(){
    return(
        <>
        <LocationBar malaysia="location_active"/>
        <HeaderBar/>
        <Banner heading="Future made since 1821" location="MALAYSIA" img="/Malaysia-campus.jpg" desc="Heriot-Watt University Malaysia offers high quality British education and global study opportunities at our modern campus in Putrajaya."/>
        <EventBanner heading="Malaysia's First Green Campus" desc="The 'green campus' stands out with Malaysia's first living grass roof. This is a fantastic green area, part of Putrajaya Lake’s ‘green continuum’, and the building design is a conscious reference." color="color_pink"/>
        <Desc heading="Why choose Heriot Watt?" description="Heriot-Watt University enjoys an established reputation for world-class teaching and practical, leading-edge research and sustainable educational practices modelled after real world applications."/>
        <div className="feature_container">
            <TextCard heading="Why choose us?" description = "We were one of the first overseas university to set up in Dubai International academic City, offering quality British education to people in the Gulf area"/>
            <TextCard heading="Go Global" description = "As a global university, Heriot-Watt offers inter-campus transfers and the chance to experience our UK and Malaysia campuses."/>
            <TextCard heading="Smart Construction" description = "The Centre of Excellence in Smart Construction fosters creative collaborations between research teams, industry and UAE government within the construction sector."/>
            <TextCard heading="Edinburgh Business" description = "The Edinburgh Business School offers premium business management education at both, undergraduate and postgraduate level, with programs in Accountancy, Business Management, Marketing and Strategy."/>
        </div>
        <div class="empty"></div>
        <Desc heading="Study at our Malaysia Campus" description="We offer a range of programmes at degree entry, undergraduate, postgraduate level and PhD courses in the best curriculum. Our instructors offer the best academic experience."/>
        <div className="feature_container">
            <TextCard heading="Global College" description = "Our one year Degree Entry (Foundation) Programmes are tailored to the Bachelor degrees that we teach, giving you a pathway into the first year of our degrees"/>
            <TextCard heading="Undergraduate" description = "Our portfolio of undergraduate programmes covers a range of management, engineering, built environment and fashion subjects."/>
            <TextCard heading="Postgraduate taught" description = "We offer an impressive range of postgraduate taught programmes."/>
            <TextCard heading="PhD study" description = "Research training in the form of PhD programmes is an important part of our offering at the Dubai campus."/>
        </div>
        <div class="empty"></div>
        </>
    )
}