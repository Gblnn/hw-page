import Banner from "../components/banner";
import Desc from "../components/desc";
import EventBanner from "../components/eventbanner";
import HeaderBar from "../components/headerbar";
import LocationBar from "../components/locationbar";
import TextCard from "../components/textcard";
import '../styles/style.css'
import '../styles/utils.css'


export default function HomeOnline(){
    return(
        <>
        <LocationBar online="location_active"/>
        <HeaderBar/>
        <Banner heading="Heriot-Watt Online courses" location="ONLINE" img="/Online-campus.jpg" desc="Be The One to earn while you learn with our career enhancing Business and STEM online degree programmes."/>
        
        <Desc heading="Digital and modern business degrees" description="Heriot-Watt University offers a unique online learning experience that enables you to study towards an MSc or MBA. All of our online programmes are academically equivalent to on-campus programmes and are designed for you to study at your own pace and your lifestyle commitments. Designed with the flexibility for you to study while in full time employment, the skills are instantly transferrable to your employer."/>
        <div className="feature_container">
            <TextCard heading="Why choose us?" description = "We were one of the first overseas university to set up in Dubai International academic City, offering quality British education to people in the Gulf area"/>
            <TextCard heading="Go Global" description = "As a global university, Heriot-Watt offers inter-campus transfers and the chance to experience our UK and Malaysia campuses."/>
            <TextCard heading="Smart Construction" description = "The Centre of Excellence in Smart Construction fosters creative collaborations between research teams, industry and UAE government within the construction sector."/>
            <TextCard heading="Edinburgh Business" description = "The Edinburgh Business School offers premium business management education at both, undergraduate and postgraduate level, with programs in Accountancy, Business Management, Marketing and Strategy."/>
        </div>
        <div class="empty"></div>
        <EventBanner heading="MBA Scholarship for Women in Zambia" desc="The Scottish Government and Edinburgh Business School at Heriot-Watt University have expanded their partnership by offering 30 fully funded scholarships for women in Zambia studying the online MBA." color="color_navy"/>
        <Desc heading="Why Choose Heriot Watt?" description="We offer a range of programmes at degree entry, undergraduate, postgraduate level and PhD courses in the best curriculum. Our instructors offer the best academic experience."/>
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