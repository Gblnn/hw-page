import Banner from "../components/banner";
import Desc from "../components/desc";
import EventBanner from "../components/eventbanner";
import HeaderBar from "../components/headerbar";
import LocationBar from "../components/locationbar";
import TextCard from "../components/textcard";
import '../styles/style.css'
import '../styles/utils.css'


export default function HomeUK(){
    return(
        <>
        <LocationBar uk="location_active"/>
        <HeaderBar/>
        <Banner heading="Future made for 200 years" location="UNITED KINGDOM" img="/Uk-campus.jpg" desc="Since 1821, our pioneering research and education has made a positive impact on the global stage. We continue to push new frontiers in the fields of Science, Technology, Engineering, Business and Design."/>
        <EventBanner heading="Charting a Course during COP28 UAE" desc="Find out more about our unique role as a beacon for transformation; catalysing discussion in to action at this critical time." color="color_green"/>
        <Desc heading="Why choose Heriot Watt?" description="Heriot-Watt University enjoys an established reputation for world-class teaching and practical, leading-edge research and sustainable educational practices modelled after real world applications."/>
        <div className="feature_container">
            <TextCard heading="Why choose us?" description = "We were one of the first overseas university to set up in Dubai International academic City, offering quality British education to people in the Gulf area"/>
            <TextCard heading="Go Global" description = "As a global university, Heriot-Watt offers inter-campus transfers and the chance to experience our UK and Malaysia campuses."/>
            <TextCard heading="Smart Construction" description = "The Centre of Excellence in Smart Construction fosters creative collaborations between research teams, industry and UAE government within the construction sector."/>
            <TextCard heading="Edinburgh Business" description = "The Edinburgh Business School offers premium business management education at both, undergraduate and postgraduate level, with programs in Accountancy, Business Management, Marketing and Strategy."/>
        </div>
        <div class="empty"></div>
        <Desc heading="Study at our UK Campus" description="We offer a range of programmes at degree entry, undergraduate, postgraduate level and PhD courses in the best curriculum. Our instructors offer the best academic experience."/>
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