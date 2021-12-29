import * as React from "react";
// @ts-ignore
import * as flower from "../../public/Images/Bottom Flower.png"
// @ts-ignore
import * as event1 from "../../public/Images/event1.png"
import { MainComponentProps } from './Main.types';
import "./Main.css";
import Brodcast from "./Components/Brodcast/Brodcast";
import About from "./Components/About/About";
import Review from "./Components/Review/Review";
import Calendar from "./Components/Calendar/Calendar";
import News from "./Components/News/News";
import Maps from "./Components/Maps/Maps";
import Websites from "./Components/Website/Websites";
const main = {
    page3:{
        func_img:[
            {
                image: "/Images/event1.png",
                title: "Live Darshan"
            },
            {
                image:"/Images/event2.png",
                title:"Online Quiz"
            },
            {
                image:"/Images/event3.png",
                title:"Upcoming Mahotsav"
            }
        ],
    },
    page4:{
        brodcast_image:"/Images/brodimage.png",
        title:"live broadcast",
        sub_title:"Maninagar Evening Katha Maninagar Mandir",
        description:" Sun 28th Nov, 7.15pm IST Local: Sun 29th Nov, 7:15pm IST",
        quote:"/Images/quote.png",
        quote_text:"God Himself remains forever <br/> within His idol forms and Sants",
        quote_subtext:"Vachanamrut Gadhada <br/> First section chapter 68"
    },
    page5:{
        about_image:"/Images/Flower-top.png",
        about_heading:"About Us",
        about_subheading:"Maninagar <br/> Swaminarayan Gadi Sansthan",
        about_para1:"Acharya Shree Jitendriyadasji Swamiji Maharaj is the current\n" +
            "spiritual leader of Maninagar Shree Swaminarayan\n" +
            "Gadi Sansthan.He is the heir to Acharya Shree Purushottampriyadasji Swamishree Maharaj.\n" +
            "and sixth in the lineage of ascetic Acharyas, which descends directly from Lord Shree Swaminarayan.",
        about_para2:"His divine Holiness Acharya Swamishree is the Spiritual Leader\n" +
            "of Shree Swaminarayan Gadi Sansthan,a Worldwide Centre for Spiritual, Cultural\n" +
            "and Social Welfare.",
        about_values:[
            {
                image:"/Images/spiritual.png",
                title:"Who we are",
                text:"Maninagar Shree Swaminarayan Gadi Sansthan is the worldwide centre for siritual,cultural and social welfare.",
            },
            {
                image:"/Images/wisdom.png",
                title:"Who we do",
                text:"At the occasion when Lord Swaminarayan first announced His True Eternal and Divine Name Swaminarayan.",
            },
            {
                image:"/Images/namaste.png",
                title:"Who people say",
                text:"Maninagar Shree Swaminarayan Gadi Sansthan is the worldwide centre for spiritual",
            },
            {
                image:"/Images/prayer.png",
                title:"Activities",
                text:"When Lord Swaminarayan come onto this earth,He was given initiation as a saint by shree Ramanand Swami.",
            }
        ]
    },
    page6:{
        review:[
            {
                image:"/Images/review1.png",
                title:"President Of India",
                text:"A P J Abdul Kalam",
            },
            {
                image:"/Images/review2.png",
                title:"India's Prime Minister",
                text:"Shri Narendra Modi",
            },
            {
                image:"/Images/review3.png",
                title:"Governor of India",
                text:"Shree Naval Kishor Sharma",
            },
            {
                image:"/Images/review1.png",
                title:"President Of India",
                text:"A P J Abdul Kalam",
            },
            {
                image:"/Images/review2.png",
                title:"India's Prime Minister",
                text:"Shri Narendra Modi",
            },
            {
                image:"/Images/review3.png",
                title:"Governor of India",
                text:"Shree Naval Kishor Sharma",
            },
        ]
    },
    page7:{
        heading1:"Upcoming",
        heading2:"sadguru din/ekadashi",
        calendar:[
            {
                day:"Tomorrow",
                month:"Nov",
                date:"FRI 19",
                event_title:"Karthik Sud, 15",
                event_describe:"Lunar Eclipse",
                image:"/Images/Group 30.png"
            },
            {
                day:"Tomorrow",
                month:"Nov",
                date:"FRI 19",
                event_title:"Karthik Sud, 15",
                event_describe:"Dev Diwali & Bhaktimata Jayanti",
                image:"/Images/Group 30.png"
            },
            {
                day:"9 Days Left",
                month:"Nov",
                date:"MON 29",
                event_title:"Karthik Sud, 15",
                event_describe:"Soja Patotsav",
                image:"/Images/Group 30.png"
            },
            {
                day:"10 Days Left",
                month:"Nov",
                date:"TUE 30",
                event_title:"Karthik Sud, 15",
                event_describe:"Utpati Ekadashi",
                image:"/Images/Group 30.png"
            },
            {
                day:"30 Days Left",
                month:"Nov",
                date:"SAT 04",
                event_title:"Karthik Sud, 15",
                event_describe:"Shree Sadguru Din",
                image:"/Images/Group 30.png"
            },
            {
                day:"35 days Left",
                month:"Nov",
                date:"THRUS 09",
                event_title:"Karthik Sud, 15",
                event_describe:"Soja Patotsav",
                image:"/Images/Group 30.png"
            },
        ]
    },
    page8:{
        images:[
            {
                image:"/Images/review2.png",
                title:"Maninagar Nov 15,2021",
                text:"Jeevanpran shree apji-bapashree maninagardham"
            },
            {
                image:"/Images/review1.png",
                title:"Maninagar Nov 15,2021",
                text:"Jeevanpran shree apji-bapashree maninagardham"
            },
            {
                image:"/Images/review3.png",
                title:"Maninagar Nov 15,2021",
                text:"Jeevanpran shree apji-bapashree maninagardham"
            },
            {
                image:"/Images/review2.png",
                title:"Maninagar Nov 15,2021",
                text:"Jeevanpran shree apji-bapashree maninagardham"
            },
            {
                image:"/Images/review1.png",
                title:"Maninagar Nov 15,2021",
                text:"Jeevanpran shree apji-bapashree maninagardham"
            },
        ]
    },
    page9:{
        title:"Maninagar Swaminarayan Gadi Sansthan",
        heading:"Worldwide",
        maps_name:["India","Europe","USA","Africa","Far East"]
    },
    page10:{
        website:[
            {
                image:"/Images/review2.png",
                text:"Shree swaminarayan Mandir"
            },
            {
                image:"/Images/review1.png",
                text:"Shree swaminarayan Mandir"
            },
            {
                image:"/Images/review3.png",
                text:"Shree swaminarayan Mandir"
            },
            {
                image:"/Images/review2.png",
                text:"Shree swaminarayan Mandir"
            },
            {
                image:"/Images/review1.png",
                text:"Shree swaminarayan Mandir"
            },
            {
                image:"/Images/review3.png",
                text:"Shree swaminarayan Mandir"
            },
            {
                image:"/Images/review2.png",
                text:"Shree swaminarayan Mandir"
            },
            {
                image:"/Images/review3.png",
                text:"Shree swaminarayan Mandir"
            },
        ]
    }
}
// @ts-ignore
const Main: React.FC<MainComponentProps> = (props) => {

    let {deviceType} =props;
    return(
        <div>
            <Brodcast page3={main.page3} page4={main.page4}/>
            <About page5={main.page5}/>
            <Review page6={main.page6}/>
            <Calendar page7={main.page7}/>
            <News deviceType={deviceType} page8={main.page8}/>
            <Maps page9={main.page9}/>
            <Websites page10={main.page10}/>
        </div>
    )
};

export default Main;
